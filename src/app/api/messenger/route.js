import { NextResponse } from "next/server";
import { db } from "../../../utils/firebase";
import { collection, getDocs, query, where, or } from "firebase/firestore";
import sgMail from "@sendgrid/mail";
import { CONFIG } from "@/data/Config";
import { authenticate } from "@/utils/auth";

export async function PUT(req) {
  const res = NextResponse;
  // TODO: AUTH NEEDS TO MATCH PROTECTED PAGES
  const { auth, message } = await authenticate({
    admins: 1,
  });

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth }
    );
  }

  const { filters, statuses, email } = await req.json();

  try {
    const formattedUsers = Object.keys(filters).filter(
      (key) => filters[key].state
    );

    const formattedStatuses = Object.values(statuses)
      .filter((value) => value.state)
      .map((value) => value.value);

    const queryConstraints = [];

    if (formattedUsers.includes("participants"))
      queryConstraints.push(
        where("roles.participants", "in", formattedStatuses)
      );

    if (formattedUsers.includes("volunteers"))
      queryConstraints.push(where("roles.volunteers", "in", formattedStatuses));

    if (formattedUsers.includes("mentors"))
      queryConstraints.push(where("roles.mentors", "in", formattedStatuses));

    if (formattedUsers.includes("judges"))
      queryConstraints.push(where("roles.judges", "in", formattedStatuses));

    if (formattedUsers.includes("admins"))
      queryConstraints.push(where("roles.admins", "in", formattedStatuses));

    if (formattedUsers.includes("committees"))
      queryConstraints.push(where("roles.committees", "in", formattedStatuses));

    if (formattedUsers.includes("sponsors"))
      queryConstraints.push(where("roles.sponsors", "in", formattedStatuses));

    const snapshot = await getDocs(
      query(collection(db, "users"), or(...queryConstraints))
    );

    const to = [];
    snapshot.forEach((doc) => {
      const { email } = doc.data();
      to.push(email);
    });

    const formattedEmail = {
      ...email,
      to,
      from: `${CONFIG.email}`,
    };

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    try {
      sgMail.send(formattedEmail);
      return res.json({ message: "OK" }, { status: 200 });
    } catch (err) {
      return res.json(
        { message: `Sendgrid Error: ${err.response.body}` },
        { status: 500 }
      );
    }
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
}
