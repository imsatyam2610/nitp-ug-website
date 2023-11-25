import { CiUser } from "react-icons/ci";
import Link from "next/link";

export const AdminMenuItems = [
  {
    text: "Dashboard",
    icon: <CiUser size={16} />,
    path: "/admin/dashboard",
  },
  {
    text: "Attendance",
    icon: <CiUser size={16} />,
    path: "/admin/attendance",
  },
  {
    text: "Study Materials",
    icon: <CiUser size={16} />,
    path: "/admin/materials",
  },
  {
    text: "Students",
    icon: <CiUser size={16} />,
    path: "/admin/students",
  },
  {
    text: "Faculty",
    icon: <CiUser size={16} />,
    path: "/admin/faculty",
  },
  {
    text: "Class Routine",
    icon: <CiUser size={16} />,
    path: "/admin/routine",
  },
  {
    text: "Syllabus",
    icon: <CiUser size={16} />,
    path: "/admin/syllabus",
  },
  {
    text: "Noticeboard",
    icon: <CiUser size={16} />,
    path: "/admin/notice",
  },
  {
    text: "Events",
    icon: <CiUser size={16} />,
    path: "/Admin/events",
  },
  {
    text: "Holidays",
    icon: <CiUser size={16} />,
    path: "/Admin/holidays",
  },
];

const AdminSideMenu = () => {
  return (
    <>
      {AdminMenuItems.map((item, index) => (
        <div key={index}>
          <nav aria-label="Side list items">
            <ul className="space-y-4">
              <li className="py-1">
                <Link href={item.path} className="flex items-center">
                  <span className="mr-2 rounded-full bg-gray-600 p-1">
                    {item.icon}
                  </span>
                  <span>{item.text}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      ))}
    </>
  );
};
export default AdminSideMenu;
