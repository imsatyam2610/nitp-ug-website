"use client";
import { useState } from "react";
import { PiEyeSlashDuotone } from "react-icons/pi";

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
          <input
            className="border border-gray-300 rounded-lg px-3 py-2 w-full"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </form>
      </div>
    </>
  );
};
export default LoginForm;
