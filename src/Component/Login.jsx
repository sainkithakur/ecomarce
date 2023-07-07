import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    function done(event) {
      event.preventDefault();
      console.log(email, password);
      localStorage.setItem("token", "Token");
      navigate("/");
    }
  return (
    <div>
      <div class="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md ">
        <div class="px-6 py-4">
          <div class="flex justify-center mx-auto">
            <img
              class="w-auto h-7 sm:h-8"
              src="https://merakiui.com/images/logo.svg"
              alt=""
            />
          </div>

          <h3 class="mt-3 text-xl font-medium text-center text-gray-600 ">
            Welcome Back
          </h3>

          <p class="mt-1 text-center text-gray-500 ">Login or create account</p>

          <form onSubmit={done}>
            <div class="w-full mt-4">
              <input
                class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email Address"
                aria-label="Email Address"
              />
            </div>

            <div class="w-full mt-4">
              <input
                class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg    focus:border-blue-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
                aria-label="Password"
              />
            </div>

            <div class="flex items-center justify-between mt-4">
              <a href="#" class="text-sm text-gray-600  hover:text-gray-500">
                Forget Password?
              </a>

              <button type="submit" class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign In
              </button>
            </div>
          </form>
        </div>

        <div class="flex items-center justify-center py-4 text-center bg-gray-50 ">
          <span class="text-sm text-gray-600 ">Don't have an account? </span>

          <a
            href="#"
            class="mx-2 text-sm font-bold text-blue-500  hover:underline"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
