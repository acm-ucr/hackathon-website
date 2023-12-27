import ProtectedPage from "@/components/dynamic/ProtectedPage";
import AdminPagesSpecs from "@/data/dynamic/admin/AdminPagesSpecs";

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
    <div>404 error (TO DO: replace with actual 404 page)</div>
  );
}
