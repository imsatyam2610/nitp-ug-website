import { BiUserCircle } from "react-icons/bi";

const PanelSidebar = ({ children }) => {
  return (
    <>
      <div className="w-full bg-gray-800 text-white pt-0 p-3">
        <div className="flex justify-center items-center">
          <BiUserCircle size={60} />
        </div>
        <h1 className="text-base text-center cursor-pointer font-bold pb-4 w-full">
          Satyam Prakash
        </h1>
        {children}
      </div>
    </>
  );
};
export default PanelSidebar;
