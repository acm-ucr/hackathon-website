"use client";

import { useState } from "react";
import Title from "../Title";
import Filters from "../Filters.jsx";
import Input from "../Input";
import Textarea from "./Textarea";
import Button from "../Button";
import toast from "react-hot-toast";
import Upload from "./Upload";
import { FILTERS, STATUSES } from "@/data/dynamic/admin/Messenger";
import { CONFIG } from "@/data/Config";
import axios from "axios";

const Messenger = () => {
  const [email, setEmail] = useState({
    subject: `${CONFIG.name} Application Status Update`,
    text: `Hello! \n\nWe've got good news! Your application to participate in ${CONFIG.name} ${CONFIG.year} has been accepted!\n\nStay tuned for more updates from us via email.\n\nIn the meantime, join our discord, the main platform that we will use on the day of the hackathon. Please don't share this invite with anyone else who wasn't approved. Thank you!\n\nThe ${CONFIG.name} team`,
    files: [],
  });
  const [filters, setFilters] = useState(FILTERS);
  const [statuses, setStatuses] = useState(STATUSES);

  const readFileAsBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSend = async () => {
    if (email.subject === "") {
      toast("❌ Please add a subject!");
      return;
    }
    if (email.text === "") {
      toast("❌ Please add a body!");
      return;
    }

    const files = await Promise.all(
      email.files.map(async (file) => {
        const base64 = await readFileAsBase64(file);

        return {
          content: base64.split(",")[1],
          filename: file.name,
          type: file.type,
          disposition: "attachment",
        };
      })
    );

    const data = {
      filters,
      statuses,
      email: {
        ...email,
        attachments: files,
      },
    };

    axios
      .put("/api/messenger", data)
      .then(() => toast(`✅ Email sent successfully!`));
  };

  return (
    <div className="w-full font-poppins h-full flex flex-col justify-between">
      <div className="flex flex-col pb-3 pt-4 h-full items-stretch justify-between">
        <Title title="Messenger" />
        <div className="flex items-center my-1">
          <p className="text-lg font-extrabold mr-5 my-0">to:</p>
          <Filters filters={filters} setFilters={setFilters} />
        </div>
        <div className="flex items-center my-1">
          <p className="text-lg font-extrabold mr-5 my-0">status:</p>
          <Filters filters={statuses} setFilters={setStatuses} />
        </div>
        <Input
          setObject={setEmail}
          object={email}
          clear={true}
          label="subject"
          placeholder="subject"
          maxLength={100}
        />
        <div className="w-full h-full bg-white rounded-2xl my-2 flex flex-col p-4 pt-2">
          <p className="text-lg font-extrabold mb-1">body:</p>
          <Textarea
            setObject={setEmail}
            object={email}
            label="text"
            maxLength={1000}
          />
          <div className="flex w-full justify-between mt-3 items-end">
            <Upload
              setObjects={setEmail}
              objects={email}
              size={[1, "MB"]}
              types={["pdf", "jpg", "jpeg", "png"]}
            />
            <Button text="send" onClick={handleSend} color="green" size="md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
