import Footer from "@/components/common/Footer";
import Navbar from "@/components/navbar/Navbar";
import Books from "@/components/pages/home/Books";
import ClassRoutine from "@/components/pages/home/ClassRoutine";
import Events from "@/components/pages/home/Events";
import FacultyMaterial from "@/components/pages/home/FacultyMaterial";
import PYQs from "@/components/pages/home/PYQSection";
import Posts from "@/components/pages/home/Posts";
import Professors from "@/components/pages/home/Professors";
import Researchs from "@/components/pages/home/Research";
import Scholarships from "@/components/pages/home/Scholarship";
import SeniorsAssisgnment from "@/components/pages/home/SeniorsAssignments";
import StudyMaterial from "@/components/pages/home/StudyMaterial";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="bg-gray-50 py-3">
        <div className="grid max-sm:px-3 sm:grid-cols-2 gap-5 container mx-auto">
          <div className="border rounded-lg shadow-md p-2 overflow-x-hidden overflow-y-auto max-h-[484px]">
            <ClassRoutine />
          </div>
          <div className="border rounded-lg shadow-md p-2 overflow-x-hidden overflow-y-auto max-h-[484px]">
            <FacultyMaterial />
            <Books />
            <PYQs />
            <StudyMaterial />
            <SeniorsAssisgnment />
            <Researchs />
          </div>
        </div>
      </section>
      <div className="block">
        <section className="container mx-auto my-3">
          <Posts />
          <Scholarships />
        </section>
        <Professors />
        <Events />
      </div>

      <Footer />
    </main>
  );
}
