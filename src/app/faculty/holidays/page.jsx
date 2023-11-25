"use client";
import AddHolidays from "@/components/faculty/AddHoliday";
import FacultyHolidays from "@/components/faculty/Holidays";
import { useState } from "react";

export default function FacultyHoliday() {
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
        <h2 className="mb-3 text-xl font-bold">Holidays</h2>
        <button
          className="p-1 bg-indigo-500 float-right rounded-md text-white"
          onClick={handleOk}
        >
          Add Holiday
        </button>
      </div>
      <AddHolidays handleOk={open} handleCancel={handleClose} />
      <FacultyHolidays />
    </>
  );
}
