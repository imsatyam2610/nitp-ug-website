const MainMenu = () => {
  return (
    <>
      <ul className="flex items-center space-x-3 font-medium cursor-pointer text-black">
        <li className="bg-violet-300 p-1 rounded-md">TimeTable</li>
        <li className="bg-indigo-300 p-1 rounded-md">Events</li>
        <li className="bg-blue-300 p-1 rounded-md">Notice</li>
        <li className="bg-green-300 p-1 rounded-md">Holidays</li>
        <li className="bg-yellow-300 p-1 rounded-md">Gallery</li>
        <li className="bg-orange-300 p-1 rounded-md">Students</li>
        <li className="bg-red-300 p-1 rounded-md">Faculty</li>
      </ul>
    </>
  );
};
export default MainMenu;
