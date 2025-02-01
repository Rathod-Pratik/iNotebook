import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUp = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showcPassword, setcShowPassword] = useState(false);
  let history = useNavigate();
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
    name: "",
    cpassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { setProgress, showAlert } = props;
    setProgress(10);

    const { name, email, password } = credentials;

    try {
      const response = await fetch(
        `https://inotebookbackend-ten.vercel.app/api/auth/createuser`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );
      setProgress(50);
      const json = await response.json();

      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        localStorage.setItem("name", json.name);
        history("/login");
        setProgress(100);
        showAlert(
          "Account created successfully",
          "text-green-800",
          "bg-green-50"
        );
      } else {
        setProgress(100);
        showAlert("Invalid credentials", "text-red-800", "bg-red-50");
      }
    } catch (error) {
      setProgress(100);
      console.error("Error creating account:", error); // Logs the error details
      showAlert("Error creating account", "text-red-800", "bg-red-50");
    }
  };

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    // <div className="pt-[120px] md:pt-[80px]">
    //   <div
    //     className="w-[90%] max-w-md mx-auto bg-black p-6 rounded-lg shadow-sm shadow-white mt-10 md:mt-[5vh] py-[50px] px-[28px] md:px-[40px]"
    //     style={{ boxShadow: "0 4px 15px 4px rgba(255, 255, 255, 0.5)" }}
    //   >
    //     <h2 className="text-white text-[28px] md:text-3xl text-center pb-4">
    //       Sign Up Now
    //     </h2>

    //     <form onSubmit={handleSubmit}>
    //       <div className="relative z-0 w-full mb-5 group">
    //         <input
    //           type="text"
    //           name="name"
    //           id="name"
    //           className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //           placeholder=" "
    //           required
    //           onChange={onChange}
    //         />
    //         <label
    //           htmlFor="name"
    //           className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //         >
    //           Name
    //         </label>
    //       </div>

    //       <div className="relative z-0 w-full mb-5 group">
    //         <input
    //           onChange={onChange}
    //           type="email"
    //           name="email"
    //           id="email"
    //           className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //           placeholder=" "
    //           required
    //         />
    //         <label
    //           htmlFor="email"
    //           className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //         >
    //           Email address
    //         </label>
    //       </div>

    //       <div className="relative z-0 w-full mb-5 group">
    //         <input
    //           onChange={onChange}
    //           autoComplete="password"
    //           type="password"
    //           name="password"
    //           minLength={5}
    //           id="password"
    //           className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //           placeholder=" "
    //           required
    //         />
    //         <label
    //           htmlFor="password"
    //           className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //         >
    //           Password
    //         </label>
    //       </div>

    //       <div className="relative z-0 w-full mb-5 group">
    //         <input
    //           onChange={onChange}
    //           autoComplete="password"
    //           type="password"
    //           name="cpassword"
    //           minLength={5}
    //           id="cpassword"
    //           className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //           placeholder=" "
    //           required
    //         />
    //         <label
    //           htmlFor="cpassword"
    //           className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //         >
    //           Confirm password
    //         </label>
    //       </div>

    //       <button
    //         type="submit"
    //         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //       >
    //         Sign Up
    //       </button>
    //       <p className="text-white my-2 text-center">
    //         already have account{" "}
    //         <Link className="text-blue-700" to={"/login"}>
    //           Login
    //         </Link>{" "}
    //         now
    //       </p>
    //     </form>
    //   </div>
    // </div>
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg shadow-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Get started today
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Welcome back! Sign in and let’s set the stage for a productive day
          ahead.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium text-black">
            Sign in to your account
          </p>

{/* name */}
          <div>
            <label htmlFor="email" className="sr-only">
              Name
            </label>

            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                required
                onChange={onChange}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Name"
              />
            </div>
          </div>
          {/* email */}
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                onChange={onChange}
                required
                name="email"
                id="email"
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
              />
            </div>
          </div>

{/* password */}
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                onChange={onChange}
                autoComplete="password"
                name="password"
                minLength={5}
                id="password"
                required
                type={showPassword ? 'text' : 'password'}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4" onClick={() => setShowPassword(!showPassword)}>
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
          <div>
            <label htmlFor="cpassword" className="sr-only">
            Confirm password
            </label>

            <div className="relative">
              <input
                onChange={onChange}
                autoComplete="password"
                name="cpassword"
                minLength={5}
                id="cpassword"
                required
                type={showcPassword ? 'text' : 'password'}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Confirm password"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4" onClick={() => setcShowPassword(!showcPassword)}>
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
          already have account?
            <Link className="underline" to={"/login"}>
             {" "} Login Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
