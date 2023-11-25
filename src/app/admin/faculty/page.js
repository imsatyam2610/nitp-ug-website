"use client";
import FacultyList from "@/components/admin/Faculty";
import FacultyAdd from "@/components/admin/FacultyAdd";
import React, { useState } from "react";

export default function AdminFaculty() {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="flex justify-between align-middle items-center">
        <h2 className="mb-3 text-xl font-bold">Faculty</h2>
        <button
          className="p-1 bg-indigo-500 float-right rounded-md text-white"
          onClick={showModal}
        >
          Add Faculty
        </button>
      </div>
      <FacultyList />
      <FacultyAdd visible={open} hide={handleClose} />
    </>
  );
}
