import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const [state, setState] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <form className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 text-center">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </h2>
        <p className="text-sm text-gray-500 text-center mt-2">
          {state === "Sign Up"
            ? "Sign up to book your appointment"
            : "Login to continue"}
        </p>

        {state === "Sign Up" && (
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
              <FaUser className="text-gray-400" />
              <input
                type="text"
                className="w-full outline-none px-2 text-gray-900"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
          </div>
        )}

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
            <FaEnvelope className="text-gray-400" />
            <input
              type="email"
              className="w-full outline-none px-2 text-gray-900"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
            <FaLock className="text-gray-400" />
            <input
              type="password"
              className="w-full outline-none px-2 text-gray-900"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
        </div>

        <button
          className="w-full bg-blue-600 text-white py-2 rounded-lg mt-6 hover:bg-blue-700 transition"
          onClick={onSubmitHandler}
        >
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <p className="text-sm text-center mt-4">
          {state === "Sign Up" ? "Already have an account?" : "New user?"}{" "}
          <span
            onClick={() => setState(state === "Sign Up" ? "login" : "Sign Up")}
            className="text-blue-600 font-medium cursor-pointer"
          >
            {state === "Sign Up" ? "Login here" : "Sign up here"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
