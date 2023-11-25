import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Professors = () => {
  const professorList = [
    {
      image: "https://drive.google.com/thumbnail?authuser=0&sz=w320&id=1kmZ5VYr0a5j-DxWrVcIfvmIFjwgD16EM",
      name: "Joseph Tripura",
      subject: "Mechanics",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    {
      image: "https://drive.google.com/thumbnail?authuser=0&sz=w320&id=1YEEE-Os_nK78RxAJQWGm7G_AmLH_lfOz",
      name: "Satyajit Mondal",
      subject: "EAA",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    {
      image: "https://drive.google.com/thumbnail?authuser=0&sz=w320&id=1b0vOnW3wyc-qQk7ap5xZOnSkOv1uVva-",
      name: "Subrata Majumder",
      subject: "Physics",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    {
      image: "https://drive.google.com/thumbnail?authuser=0&sz=w320&id=11j7_vJET9V72HCUH9l7Tm8dv0XX-MK2G",
      name: "Mukesh Kumar",
      subject: "Computer",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  ];
  return (
    <>
      <div className="py-5  bg-orange-50">
        <section className="container mx-auto">
          <h3 className="text-3xl text-center mb-4">Our Professors</h3>
          <div className="flex flex-wrap -mx-4 -mb-12">
            {professorList.map((faculty, index) => (
              <div className="w-full md:w-1/2 xl:w-1/4 px-4 mb-12" key={index}>
                <div className="max-w-xs md:max-w-none mx-auto">
                  <div className="flex flex-col items-center">
                    <Image
                      src={faculty.image}
                      alt=""
                      width={120}
                      height={120}
                    />
                    <div className="inline-flex -mt-6 mb-5 items-center justify-center py-3 px-5 bg-white rounded-full">
                      <Link
                        className="inline-block mr-3 p-1 hover:bg-orange-100 rounded-md"
                        href="#"
                      >
                        <BsFacebook />
                      </Link>
                      <Link
                        className="inline-block mr-3 p-1 hover:bg-orange-100 rounded-md"
                        href="#"
                      >
                        <BsTwitter />
                      </Link>
                      <Link
                        className="inline-block mr-3 p-1 hover:bg-orange-100 rounded-md"
                        href="#"
                      >
                        <BsLinkedin />
                      </Link>
                      <Link
                        className="inline-block p-1 hover:bg-orange-100 rounded-md"
                        href="#"
                      >
                        <BsInstagram />
                      </Link>
                    </div>
                    <h5 className="text-2xl font-bold">{faculty.name}</h5>
                    <span className="text-sm  rounded-full text-white bg-orange-600 px-2">
                      {faculty.subject}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto text-center my-4">
            <Link href="#" className="p-2 rounded-md text-white bg-[#377dff]">
              View All
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};
export default Professors;
