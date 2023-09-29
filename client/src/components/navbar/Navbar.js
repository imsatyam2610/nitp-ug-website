import DarkModeToggle from "@/components/common/DarkModeToggle";
import Image from "next/image";
import { RiMenu2Line } from "react-icons/ri";
import { HiX } from "react-icons/hi";
import UserProfile from "@/components/navbar/UserProfile";
import MainMenu from "./MainMenu";

const Navbar = () => {
  return (
    <>
      <header className="top-0 left-0 right-0 z-[80] sm:py-1 relative w-full mb-2">
        <div className="flex items-center justify-between sm:px-4 max-sm:pl-3">
          <div className="flex items-center">
            <Image
              src="/nitp-logo.png"
              alt="NIT Patna Logo"
              width={60}
              height={60}
            />
            <div className="block ml-2">
              <p className="text-xl font-bold">NIT Patna</p>
              <p className="font-semibold">First Year UG Website</p>
            </div>
          </div>
          <div
            className={`flex items-center max-lg:hidden
            `}
          >
            <MainMenu />
          </div>
          <div className="flex items-center justify-end lg:space-x-8">
            <DarkModeToggle />
            <UserProfile />
          </div>
        </div>
      </header>
    </>
  );
};
export default Navbar;
