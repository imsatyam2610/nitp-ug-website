import Link from "next/link";

const MainMenu = () => {
  return (
    <>
      <ul className="flex items-center space-x-3 font-medium cursor-pointer text-black">
        <li className="bg-violet-300 p-1 rounded-md">
          <Link href="/timetable">TimeTable</Link>
        </li>
        <li className="bg-indigo-300 p-1 rounded-md">
          <Link href="/events">Events</Link>
        </li>
        <li className="bg-blue-300 p-1 rounded-md">
          <Link href="/notice">Notice</Link>
        </li>
        <li className="bg-green-300 p-1 rounded-md">
          <Link href="/holidays">Holidays</Link>
        </li>
        <li className="bg-yellow-300 p-1 rounded-md">
          <Link href="/gallery">Gallery</Link>
        </li>
        <li className="bg-orange-300 p-1 rounded-md">
          <Link href="/student">Students</Link>
        </li>
        <li className="bg-red-300 p-1 rounded-md">
          <Link href="/faculty">Faculty</Link>
        </li>
      </ul>
    </>
  );
};
export default MainMenu;
