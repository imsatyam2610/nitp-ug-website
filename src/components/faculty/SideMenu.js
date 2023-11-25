import { CiUser } from "react-icons/ci";
import Link from "next/link";

export const FacultyMenuItems = [
  {
    text: "Dashboard",
    icon: <CiUser size={16} />,
    path: "/faculty/dashboard",
  },
  {
    text: "Attendance",
    icon: <CiUser size={16} />,
    path: "/faculty/attendance",
  },
  {
    text: "Study Materials",
    icon: <CiUser size={16} />,
    path: "/faculty/materials",
  },
  {
    text: "Students",
    icon: <CiUser size={16} />,
    path: "/faculty/students",
  },
  {
    text: "Class Routine",
    icon: <CiUser size={16} />,
    path: "/faculty/routine",
  },
  {
    text: "Syllabus",
    icon: <CiUser size={16} />,
    path: "/faculty/syllabus",
  },
  {
    text: "Noticeboard",
    icon: <CiUser size={16} />,
    path: "/faculty/noticeboard",
  },
  {
    text: "Events",
    icon: <CiUser size={16} />,
    path: "/faculty/events",
  },
  {
    text: "Holidays",
    icon: <CiUser size={16} />,
    path: "/faculty/holidays",
  },
];

const FacultySideMenu = () => {
  return (
    <>
      {FacultyMenuItems.map((item, index) => (
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
export default FacultySideMenu;
