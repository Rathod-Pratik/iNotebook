import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {
  let history = useNavigate();
  const [credentials, setcredentials] = useState({ email: "", password: "" });

  const handlesubmit = async (e) => {
    e.preventDefault();
    props.setProgress(10);
    const response = await fetch(
      `https://inotebookbackend-ten.vercel.app/api/auth/login`,
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );

    props.setProgress(50);
    const json = await response.json();

    if (json.success === true) {
      props.setProgress(100);
      //save th auth token and redirect
      props.showAlert("Login successfully", "text-green-800", "bg-green-50");
      localStorage.setItem("token", json.authtoken);
      localStorage.setItem("name", json.name);
      history("/");
    } else {
      props.setProgress(100);
      props.showAlert("Enter valid credentials", "text-red-800", "bg-red-50");
    }
  };
  const [showPassword, setShowPassword] = useState(false);
  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
      <div className="mx-auto max-w-lg shadow-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Get started today
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Hello again! We’re glad to have you back. Log in now and let’s make
          today productive and rewarding!
        </p>

        <form
          onSubmit={handlesubmit}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium text-black">
            Login to your account
          </p>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                value={credentials.email}
                onChange={onChange}
                name="email"
                id="email"
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
              />
            </div>
          </div>

          <div>
      <label htmlFor="password" className="sr-only">
        Password
      </label>

      <div className="relative">
        <input
        autoComplete="password"
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={credentials.password}
          onChange={onChange}
          id="password"
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Enter password"
        />

        <span
          className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </span>
      </div>
    </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Sign in
          </button>

          <p className="text-center text-sm text-gray-500">
            No account?
            <Link className="underline" to={"/signup"}>
              {" "}
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
