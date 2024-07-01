import Fault from "@/utils/error";
import { api } from "@/utils/api";
import toaster from "@/utils/toaster";

export async function fetchTeamData(id) {
  if (id) {
    const response = await api({
      method: "GET",
      url: "/api/team?teamid=${id}",
    });
    console.log("did it work????:", response.items);

    if (response.message === "OK") {
      console.log("Response items:", response.items);
      return response.items;
    } else if (response.message === "Invalid Team ID") {
      throw new Fault(404, "Invalid Team ID", "Please get a new team invite");
    } else {
      throw new Fault(
        500,
        "Internal Server Error",
        "Please contact the software engineering team for assistance"
      );
    }
  }
}

export async function fetchHandleJoin(id) {
  // const router = useRouter();
  // const { update: sessionUpdate} = useSession();
  api({
    method: "PUT",
    url: "/api/members",
    body: { team: id },
  }).then((response) => {
    if (response.message !== "OK") {
      toaster(`${response.message}`, "error");
      return;
    }
    toaster("Successfully joined team!", "success");
    // sessionUpdate({
    //   team: id,
    // });
    // router.push("/user");
  });
}
