import Link from "next/link";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-1 bg-dlmode text-center">
        <div className="bg-dlmode pb-1 shadow-2xl">
          <div className="container mx-auto mt-4 flex justify-between items-center">
            <h2 className="text-3xl text-[#898989]">NIT Patna</h2>
            <div className="flex space-x-4">
              <span>Follow Us On:</span>
              <Link
                prefetch={false}
                href="http://www.facebook.com/nitpatnaofficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook className="text-blue-900" size={25} />
              </Link>
              <Link
                prefetch={false}
                href="https://twitter.com/NITPatna1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTwitter className="text-sky-600" size={25} />
              </Link>
              <Link
                prefetch={false}
                href="https://www.linkedin.com/school/national-institute-of-technology-patna/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin className="text-blue-800" size={25} />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex  py-2 items-center space-x-4 justify-evenly">
          <Link prefetch={false} href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link prefetch={false} href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link
            prefetch={false}
            href="/contact"
            className="hover:text-blue-600"
          >
            Contact
          </Link>
        </div>

        <div className="container text-sm py-2 mx-auto flex justify-between border-t border-blue-600">
          <div className="flex space-x-4">
            <p>
              Made by: Satyam Prakash (2303069), Aditya Kumar (2303073), Prabhat
              Kumar (2303075), Priyanshu Goshwami (2303105), Md. Kaif Ali
              (2351004). All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
