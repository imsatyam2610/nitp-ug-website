import PanelSidebar from "@/components/common/SideBar";
import FacultySideMenu from "@/components/faculty/SideMenu";
import LoginHeader from "@/components/navbar/LoginHeader";

export default function FacultyLayout({ children }) {
  return (
    <>
      <LoginHeader />
      <div className="flex relative">
        <aside className="hidden md:flex w-64 h-auto min-h-screen">
          <PanelSidebar>
            <FacultySideMenu />
          </PanelSidebar>
        </aside>
        <main className="flex-1 bg-gray-100 p-4">{children}</main>
      </div>
    </>
  );
}
