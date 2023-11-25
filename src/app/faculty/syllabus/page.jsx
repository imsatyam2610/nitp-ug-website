"use client";
import AddSyllabus from "@/components/faculty/AddSyllabus";
import FacultySyllabus from "@/components/faculty/Syllabus";
import { useState } from "react";

export default function FacultySyll() {
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
        <h2 className="mb-3 text-xl font-bold">Syllabus</h2>
        <button
          className="p-1 bg-indigo-500 float-right rounded-md text-white"
          onClick={handleOk}
        >
          Add Syllabus
        </button>
      </div>
      <AddSyllabus handleOk={open} handleCancel={handleClose} />
      <FacultySyllabus />
    </>
  );
}
