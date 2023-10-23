"use client";
import React, { useState } from "react";
import { Modal } from "antd";
import LoginForm from "../common/LoginForm";

const UserProfile = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="ml-4 bg-yellow-300 px-2.5 py-[1px] rounded">
        <button
          type="button"
          className="text-base text-black font-medium"
          onClick={() => setModalOpen(true)}
        >
          Login
        </button>
      </div>

      <Modal
        centered
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={null}
      >
        <LoginForm />
      </Modal>
    </>
  );
};

export default UserProfile;
