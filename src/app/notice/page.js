import Navbar from "@/components/navbar/Navbar";
import ClassRoutine from "@/components/pages/home/ClassRoutine";
import React from "react";

export default function page() {
  return (
    <>
      <Navbar />
      <div className="bg-dlmode container mx-auto">
        <ClassRoutine />
      </div>
    </>
  );
}
