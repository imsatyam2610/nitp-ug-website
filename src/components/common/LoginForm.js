"use client";
import { useState } from "react";
import { PiEyeSlashDuotone } from "react-icons/pi";
import { Input } from "antd";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="block">
        <form>
          <label className="block text-sm font-medium">Email</label>
          <input
            className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="block  text-sm font-medium">Password</label>
          <Input.Password placeholder="Enter Password" className="px-3 py-2" />

          <button
            type="submit"
            className="p-2 bg-blue-400 text-white rounded-lg mt-2"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};
export default LoginForm;
