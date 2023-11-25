"use client";
import AddEvent from "@/components/faculty/AddEvent";
import FacultyEvents from "@/components/faculty/Events";
import { useState } from "react";

export default function FacultyEvent() {
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
        <h2 className="mb-3 text-xl font-bold">Events</h2>
        <button
          className="p-1 bg-indigo-500 float-right rounded-md text-white"
          onClick={handleOk}
        >
          Add Event
        </button>
      </div>
      <AddEvent handleOk={open} handleCancel={handleClose} />
      <FacultyEvents />
    </>
  );
}
