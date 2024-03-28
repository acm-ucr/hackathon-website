import { redirect } from "next/navigation";

export default async function RedirectComponent() {
  redirect("/engineering/blog");
}
