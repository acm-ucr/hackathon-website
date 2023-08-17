import React from "react";
import ProtectedPage from "@/components/ProtectedPage";
import Admins from "@/components/Admin/Admins";

const AdminPage = () => {
  return (
    <ProtectedPage title="Admin" restrictions={["admin"]}>
      <div className="w-11/12">
        <Admins />
      </div>
    </ProtectedPage>
  );
};

export default AdminPage;
