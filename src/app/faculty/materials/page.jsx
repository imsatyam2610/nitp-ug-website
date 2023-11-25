"use client";
import MaterialUpload from "@/components/faculty/MaterialUpload";
import FacultyStudyMaterials from "@/components/faculty/StudyMaterials";
import { useState } from "react";

export default function MaterialPage() {
  const [open, setOpen] = useState(false);
  const handleOk = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="flex justify-between align-middle items-center">
        <h2 className="mb-3 text-xl font-bold">Materials</h2>
        <button
          className="p-1 bg-indigo-500 float-right rounded-md text-white"
          onClick={handleOk}
        >
          Upload Material
        </button>
      </div>
      <FacultyStudyMaterials />
      <MaterialUpload handleOk={open} handleCancel={handleClose} />
    </>
  );
}
