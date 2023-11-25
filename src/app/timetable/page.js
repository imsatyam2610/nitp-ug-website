import FacultyClassRoutine from "@/components/faculty/ClassRoutine";
import Navbar from "@/components/navbar/Navbar";

export default function timetable() {
  return (
    <>
      <Navbar />
      <div className="bg-dlmode container mx-auto">
        <h1 className="sm:text-3xl text-2xl font-bold my-2">TimeTable for Civil Engineering</h1>
        <FacultyClassRoutine />
      </div>
    </>
  );
}
