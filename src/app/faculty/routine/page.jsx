"use client";
import AddRoutine from "@/components/faculty/AddRoutine";
import FacultyClassRoutine from "@/components/faculty/ClassRoutine";
import { useState } from "react";

export default function FacultyRoutine() {
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
        <h2 className="mb-3 text-xl font-bold">Routine</h2>
        <button
          className="p-1 bg-indigo-500 float-right rounded-md text-white"
          onClick={handleOk}
        >
          Add Routine
        </button>
      </div>
      <AddRoutine handleOk={open} handleCancel={handleClose} />
      <FacultyClassRoutine />
    </>
  );
}
