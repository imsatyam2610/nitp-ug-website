"use client";
import CreateNotice from "@/components/faculty/CreateNotice";
import FacultyNoticeboard from "@/components/faculty/Noticeboard";
import { useState } from "react";

export default function Notice() {
  const [open, setOpen] = useState(false);
  const handleOk = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="flex justify-between align-middle items-center">
        <h2 className="mb-3 text-xl font-bold">Noticeboard</h2>
        <button
          className="p-1 bg-indigo-500 float-right rounded-md text-white"
          onClick={handleOk}
        >
          Add Notice
        </button>
      </div>
      <CreateNotice handleOk={open} handleCancel={handleClose}/>
      <FacultyNoticeboard />
    </div>
  );
}
