import Image from "next/image";
import UserProfile from "./UserProfile";
import Link from "next/link";

const LoginHeader = () => {
  return (
    <>
      <div className="w-full flex text-white items-center py-1 px-5 bg-[#313a46]">
        <div className="flex items-center space-x-6">
          <Image
            src="/nitp-logo.png"
            alt="NIT Patna Logo"
            width={50}
            height={50}
          />
          <h1>NIT Patna ERP</h1>
          <Link href="/" className="p-1 rounded-md border">
            Visit Website
          </Link>
        </div>
        <div className="ml-auto">
          <UserProfile />
        </div>
      </div>
    </>
  );
};
export default LoginHeader;
