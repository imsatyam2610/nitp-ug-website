import Image from "next/image";

const FacultyDashboard = () => {
  return (
    <>
      <div className="block">
        <h2 className="mb-3 text-xl font-bold">Dashboard</h2>
        <div className="shadow-md rounded-md p-2 bg-white my-3">
          <p>Name</p>
          <p>Welcome to NIT Patna</p>
          <p>Your Email id:</p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="rounded-md shadow-lg bg-white p-2">
            <h5 className="border-b py-1">Students</h5>
            <div className="flex">
              <div>
                <div>20</div>
                <div>Total Students</div>
              </div>
              <div className="ml-auto mt-2">
                <Image
                  src="/Student_icon.png"
                  alt="Students"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
          <div className="rounded-md shadow-lg bg-white p-2">
            <h5 className="border-b py-1">Teachers</h5>
            <div className="flex">
              <div>
                <div>20</div>
                <div>Total Teachers</div>
              </div>
              <div className="ml-auto mt-2">
                <Image
                  src="/Teacher_icon.png"
                  alt="Students"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-3">
          <div className="p-2 rounded-md bg-[#f3416c] text-white">
            Upcoming Holidays
          </div>
          <div className="p-2 rounded-md bg-blue-800 text-white">
            Upcoming Events
          </div>
        </div>
      </div>
    </>
  );
};
export default FacultyDashboard;
