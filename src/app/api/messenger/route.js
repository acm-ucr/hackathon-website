import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { db } from "../../../../firebase";
import { collection, getDocs, query, where, or } from "firebase/firestore";

export async function PUT(req) {
  const res = NextResponse;
  const { filters, statuses, email } = await req.json();
  const session = await getServerSession(authOptions);

  if (session) {
    if (session.user.role.includes("admins")) {
      try {
        const formattedUsers = Object.keys(filters).filter(
          (filter) => filters[filter] === true
        );

        const formattedStatuses = Object.keys(statuses).filter(
          (status) => statuses[status] === true
        );

        const queryConstraints = [];

        if (formattedUsers.includes("participants"))
          queryConstraints.push(
            or(
              where("roles", "array-contains", "participants"),
              where("status.participants", "in", formattedStatuses)
            )
          );

        if (formattedUsers.includes("volunteers"))
          queryConstraints.push(
            or(
              where("roles", "array-contains", "volunteers"),
              where("status.volunteers", "in", formattedStatuses)
            )
          );

        if (formattedUsers.includes("mentors"))
          queryConstraints.push(
            or(
              where("roles", "array-contains", "mentors"),
              where("status.mentors", "in", formattedStatuses)
            )
          );

        if (formattedUsers.includes("judges"))
          queryConstraints.push(
            or(
              where("roles", "array-contains", "judges"),
              where("status.judges", "in", formattedStatuses)
            )
          );

        if (formattedUsers.includes("admins"))
          queryConstraints.push(
            or(
              where("roles", "array-contains", "admins"),
              where("status.admins", "in", formattedStatuses)
            )
          );

        if (formattedUsers.includes("committees"))
          queryConstraints.push(
            or(
              where("roles", "array-contains", "committees"),
              where("status.committees", "in", formattedStatuses)
            )
          );

        const snapshot = await getDocs(
          query(collection(db, "users"), or(...queryConstraints))
        );

        const sendto = [];
        snapshot.forEach((doc) => {
          const { email } = doc.data();
          sendto.push(email);
        });

        const formattedEmail = {
          ...email,
          sendto,
        };

        console.log(formattedEmail);

        return res.json({ message: "OK" }, { status: 200 });
      } catch (err) {
        console.log(err);
        return res.json(
          { message: `Internal Server Error: ${err}` },
          { status: 500 }
        );
      }
    } else {
      return res.json({ message: `Forbidden Access` }, { status: 403 });
    }
  } else {
    return res.json(
      { error: "Invalid Authentication Credentials" },
      { status: 401 }
    );
  }
}
