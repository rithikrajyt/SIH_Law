import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Nav } from "../components/Nav";
import { useState } from "react";
import { signUp } from "../service/api";
import { toast } from "react-toastify";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await signUp(email, password);
      if (response.success) {
        // handle success response
        toast.success("User Created Successfully!");
        document.cookie = `token=${response.token}`;
        navigate("/dashboard");
      } else {
        console.log(response);
        toast.error("Duplicate User!")
      }
      console.log(response);
    } catch (error) {
      // handle error
      toast.error("Duplicate User!")
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-100">
      <Nav />
      <div className="flex h-screen">
        <div className="hidden lg:flex items-center justify-center flex-1 bg-gray-100 text-black">
          <div className="max-w-md text-center">
            <img
              src="https://images.unsplash.com/photo-1590099543482-3b3d3083a474?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxhd3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Law Login Image"
            />
          </div>
        </div>
        <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
          <div className="max-w-md w-full p-6">
            <h1 className="text-3xl font-semibold mb-6 text-brown-800 text-center">
              Sign Up
            </h1>
            <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">
              Join to get your Legal Documents Simplified and Drafted in few
              clicks!{" "}
            </h1>
            <form
              action=""
              method="POST"
              onSubmit={handleSignup}
              className="space-y-4"
            >
              <div>
                <label
                  for="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-brown-800 text-white p-2 rounded-md hover:bg-brown-600 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="mt-4 text-sm text-gray-600 text-center">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-black hover:underline">
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
