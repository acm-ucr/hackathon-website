/* eslint-disable no-throw-literal */
import { NextResponse } from "next/server";
import { db } from "../../../../utils/firebase";
import {
  doc,
  updateDoc,
  collection,
  getDocs,
  query,
  where,
  deleteField,
  Timestamp,
  writeBatch,
  addDoc,
} from "firebase/firestore";
import { authenticate } from "@/utils/auth";
import { AUTH } from "@/data/dynamic/admin/Admins";
import SG from "@/utils/sendgrid";
import { ATTRIBUTES } from "@/data/dynamic/admin/Attributes";

export async function POST(req, { params }) {
  const res = NextResponse;
  const { auth, message, user } = await authenticate(AUTH.POST);

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth }
    );
  }
  const data = await req.json();

  try {
    switch (params.type) {
      case "admins":
      case "committees":
      case "judges":
      case "mentors":
      case "volunteers":
      case "participants":
      case "interests":
      case "sponsors":
        const element = {};
        ATTRIBUTES[params.type].forEach((attribute) => {
          element[attribute] = data[attribute];
        });
        await updateDoc(doc(db, "users", user.id), {
          ...element,
          timestamp: Timestamp.now(),
          [`roles.${params.type}`]: 0,
        });
        break;
      case "feedback":
        await addDoc(collection(db, "feedback"), {
          rating: parseInt(rating),
          additionalComments,
          eventSource,
          improvements,
          notBeneficial,
          helpful,
          status: 0,
          timestamp: Timestamp.now(),
        });
        break;
      default:
        throw "page doesn't exist";
    }

    SG.send({
      to: user.email,
      template_id: process.env.SENDGRID_CONFIRMATION_TEMPLATE,
      dynamic_template_data: {
        name: user.name,
        position: params.type.slice(0, -1).toUpperCase(),
      },
    });

    return res.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
}

export async function GET(req, { params }) {
  const res = NextResponse;
  const { auth, message } = await authenticate({
    admins: [1],
  });

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth }
    );
  }

  const output = [];
  try {
    let snapshot;
    switch (params.type) {
      case "admins":
      case "committees":
      case "judges":
      case "mentors":
      case "volunteers":
      case "participants":
      case "interests":
      case "sponsors":
        snapshot = await getDocs(
          query(
            collection(db, "users"),
            where(`roles.${params.type}`, "in", [-1, 0, 1])
          )
        );
        snapshot.forEach((doc) => {
          const data = doc.data();
          const element = {};
          ATTRIBUTES[params.type].forEach((attribute) => {
            element[attribute] = data[attribute];
          });
          output.push({
            ...element,
            uid: doc.id,
            timestamp: data.timestamp,
            status: data.roles[params.type],
            selected: false,
            hidden: false,
          });
        });
        break;
      case "feedback":
        snapshot = await getDocs(collection(db, "feedback"));
        snapshot.forEach((doc) => {
          const data = doc.data();
          const element = {};
          ATTRIBUTES[params.type].forEach((attribute) => {
            element[attribute] = data[attribute];
          });
          output.push({
            ...element,
            uid: doc.id,
            timestamp: data.timestamp,
            selected: false,
            hidden: false,
          });
        });
        break;
      case "teams":
        snapshot = await getDocs(collection(db, "teams"));
        snapshot.forEach((doc) => {
          const { links, status, members, timestamp } = doc.data();

          const formattedNames = members.map((member) => member.name);
          const formattedDiscords = members.map((member) => member.discord);
          const formattedUids = members.map((member) => member.uid);
          const formattedLinks = Object.entries(links)
            .filter(([key, value]) => value !== "")
            .map(([key, value]) => {
              return { name: key, link: value };
            });

          output.push({
            links: formattedLinks,
            members: formattedNames,
            discords: formattedDiscords,
            uids: formattedUids,
            status,
            uid: doc.id,
            selected: false,
            hidden: false,
            timestamp: timestamp || new Date(),
          });
        });
        break;
      default:
        throw "page doesn't exist";
    }

    const sorted = output.sort((a, b) =>
      a.timestamp.seconds < b.timestamp.seconds ? 1 : -1
    );
    return res.json({ message: "OK", items: sorted }, { status: 200 });
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  const res = NextResponse;
  const { objects, status } = await req.json();
  const { auth, message } = await authenticate(AUTH.PUT);

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth }
    );
  }
  try {
    const batch = writeBatch(db);
    switch (params.type) {
      case "admins":
      case "committees":
      case "judges":
      case "mentors":
      case "volunteers":
      case "participants":
      case "interests":
      case "sponsors":
        objects.forEach((object) => {
          batch.update(doc(db, "users", object.uid), {
            [`roles.${params.type}`]: status,
          });
          SG.send({
            to: object.email,
            template_id:
              status === 1
                ? process.env.SENDGRID_ACCEPTANCE_TEMPLATE
                : process.env.SENDGRID_REJECTION_TEMPLATE,
            dynamic_template_data: {
              name: object.name,
              position: params.type.slice(0, -1).toUpperCase(),
            },
          });
        });
        break;
      case "feedback":
        objects.forEach((object) => {
          batch.update(doc(db, "feedback", object.uid), {
            status: status,
          });
        });
        break;
      case "teams":
        objects.forEach((object) => {
          batch.update(doc(db, "teams", object.uid), {
            status: status,
          });
        });
        break;
      default:
        throw "page doesn't exist";
    }
    await batch.commit();
    return res.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  const res = NextResponse;
  const { auth, message } = await authenticate(AUTH.DELETE);
  const objects = req.nextUrl.searchParams.get("remove").split(",");

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth }
    );
  }
  try {
    const batch = writeBatch(db);
    switch (params.type) {
      case "admins":
      case "committees":
      case "judges":
      case "mentors":
      case "volunteers":
      case "participants":
      case "interests":
      case "sponsors":
        objects.forEach((object) => {
          batch.update(doc(db, "users", object), {
            [`roles.${params.type}`]: deleteField(),
          });
        });
        break;
      case "feedback":
        objects.forEach((object) => {
          batch.delete(doc(db, "feedback", object));
        });
        break;
      case "teams":
        await Promise.all(
          objects.map(async (object) => {
            const members = await getDocs(
              query(collection(db, "users"), where("team", "==", object))
            );
            members.docs.forEach((member) => {
              batch.update(doc(db, "users", member.id), {
                team: deleteField(),
              });
            });
            batch.delete(doc(db, "teams", object));
          })
        );
        break;
      default:
        throw "page doesn't exist";
    }
    await batch.commit();
    return res.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 }
    );
  }
}
