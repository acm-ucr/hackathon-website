"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import toaster from "@/utils/toaster";
import Link from "next/link";
import { api } from "@/utils/api";

const NewTeam = () => {
  const [team, setTeam] = useState({
    id: "",
    name: "",
  });

  const [id, setId] = useState("");

  const handleJoin = async () => {
    if (team.id === "") {
      toaster("Enter a Valid Team ID", "error");
      return;
    }

    const response = await api({
      method: "PUT",
      url: "/api/members",
      body: { team: team.id },
    });

    if (response.message === "OK") {
      toaster("Successfully joined team!", "success");
      setId(team.id);
      return;
    }

    toaster(`${response.message}`, "error");
  };

  const handleCreate = async () => {
    if (team.name === "") {
      toaster("Enter a Valid Team Name", "error");
      return;
    }

    const { id } = await api({
      method: "POST",
      url: "/api/team",
      body: { team: team },
    });

    setId(id);

    toaster("Successfully created a new team!", "success");
  };

  return (
    <>
      <AlertDialog open={id !== ""}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Welcome to your new team!</AlertDialogTitle>
            <AlertDialogDescription>
              Using the team dashboard, you can add team members, upload
              submission links and view critical information for judging!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Link href={`/user/team`}>
              <AlertDialogAction>Visit New Team</AlertDialogAction>
            </Link>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Tabs defaultValue="join" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="join">Join a Team</TabsTrigger>
          <TabsTrigger value="create">Create a Team</TabsTrigger>
        </TabsList>
        <TabsContent value="join">
          <Card>
            <CardHeader>
              <CardTitle>Join a Team</CardTitle>
              <CardDescription>
                Ask your teammates for a team id to join their team.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Label htmlFor="team">Team ID</Label>
              <Input
                id="team"
                placeholder="ie. abc123"
                onChange={(e) => setTeam({ id: e.target.value, name: "" })}
              />
            </CardContent>
            <CardFooter>
              <Button onClick={handleJoin}>Join Team</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="create">
          <Card>
            <CardHeader>
              <CardTitle>Create a Team</CardTitle>
              <CardDescription>
                Enter a unique and fun team name! You can change this name
                later.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Label htmlFor="name">Team Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="ie. Cool Coders"
                onChange={(e) => setTeam({ name: e.target.value, id: "" })}
              />
            </CardContent>
            <CardFooter>
              <Button onClick={handleCreate}>Create Team</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default NewTeam;
