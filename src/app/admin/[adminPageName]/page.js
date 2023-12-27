import ProtectedPage from "@/components/dynamic/ProtectedPage";
import AdminPagesSpecs from "@/data/dynamic/admin/AdminPagesSpecs";
import NotFoundError from "@/app/not-found";

const convertToAdminPage = (specs) => {
  return (
    <ProtectedPage
      title={`Admin | ${specs.pageName}`}
      restrictions={specs.protectedPageRestrictions}
    >
      {specs.component}
    </ProtectedPage>
  );
};
export default function Page({ params }) {
  const currentPageName = params.adminPageName;
  return AdminPagesSpecs[currentPageName] != undefined ? (
    convertToAdminPage(AdminPagesSpecs[currentPageName])
  ) : (
    <NotFoundError />
  );
}
