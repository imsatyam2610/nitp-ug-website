"use client";
import { useState } from "react";
import AttendancePopUp from "@/components/faculty/AttendancePopUp";
import Attendance from "@/components/faculty/Attendance";

const FacultyAttendence = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <div className="block">
        <div className="flex justify-between align-middle items-center">
          <h2 className="mb-3 text-xl font-bold">Attendence</h2>
          <button
            className="p-1 bg-indigo-500 float-right rounded-md text-white"
            onClick={showModal}
          >
            Take Attendence
          </button>
        </div>
        <div className="shadow-md rounded-md p-2 bg-white my-3">
          <p>Name</p>
          <p>Welcome to NIT Patna</p>
          <p>Your Email id:</p>
        </div>
        <div className="shadow-[0px_1px_6px_1px_#c1c1c1] rounded-md min-h-screen p-2 bg-white">
          <Attendance />
        </div>
      </div>
      <AttendancePopUp
        visible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </>
  );
};
export default FacultyAttendence;
