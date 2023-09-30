import Footer from "@/components/common/Footer";
import Navbar from "@/components/navbar/Navbar";
import Books from "@/components/pages/home/Books";
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
      <div className="container mx-auto">
        <div className="grid max-sm:px-3 sm:grid-cols-2 gap-5">
          <FacultyMaterial />
          <Books />
          <PYQs />
          <StudyMaterial />
          <SeniorsAssisgnment />
          <Posts />
          <Researchs />
          <Scholarships />
        </div>
        <div className="block">
          <Professors />
          <Events />
        </div>
      </div>
      <Footer />
    </main>
  );
}
