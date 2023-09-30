import PanelSidebar from "@/components/common/SideBar";
import AdminSideMenu from "@/components/admin/SideMenu";
import LoginHeader from "@/components/navbar/LoginHeader";

export default function AdminLayout({ children }) {
  return (
    <>
      <LoginHeader />
      <div className="flex relative">
        <aside className="hidden md:flex w-64 h-auto min-h-screen">
          <PanelSidebar>
            <AdminSideMenu />
          </PanelSidebar>
        </aside>
        <main className="flex-1 bg-gray-100 p-4">{children}</main>
      </div>
    </>
  );
}
