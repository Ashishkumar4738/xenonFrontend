"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {motion} from "framer-motion";
const url = "https://ashishkumar-senonapi.onrender.com/"
const Login = () => {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const formData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(`${url}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData.jwtToken)
        localStorage.setItem("auth-token", responseData.jwtToken);
        router.back();
      } else {
        localStorage.setItem("auth-token","");
        const errorData = await response.json();
        setError(errorData.message || "Login failed");
      }
    } catch (error) {
      setError("An unexpected error occurred");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const quote = {
    initial: {
      opacity: 0,
      y:50
    },
    animate: {
      opacity: 1,
      y:0,
      transition: {
        delay: 0.2,
        
      },
    },
  };

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center flex-col border-2 px-20 m-auto bg-[url('/background.png')] bg-cover "
      
      >
        <motion.form onSubmit={handleForm} className="flex flex-col justify-center backdrop-blur-md shadow-2xl  px-8 py-10 rounded-2xl border-2 "
        variants={quote}
        initial="initial"
        animate="animate"
        >
        <h1 className="text-3xl font-bold mb-8 text-center  " >Login Here</h1>

          <label htmlFor="email " className=" ml-1 text-black font-semibold flex items-center  " >  
            email:
            <input
              type="email"
              name="email"
              className="border-none  rounded-xl px-2 py-1 text-white outline-none bg-transparent "
              value={data.email}
              autoComplete="off"
              onChange={formData}
              />
              

              </label>
              <hr className="border-black border mb-8 " />
          <label htmlFor="password" className="ml-1 text-black font-semibold flex items-center  " >
            Password:
            <input
              type="password"
              name="password"
              className="border-none  rounded-xl px-2 py-1 text-white outline-none bg-transparent "
              value={data.password}
              autoComplete="off"
              onChange={formData}
              />
              
              </label>
              <hr className="border-black border " />
            <p className="text-xs text-right py-3 " >Forget password? <span className="underline underline-offset-1 cursor-pointer text-red-700 font-semibold " > <i>Click here</i></span> </p>
          <button type="submit" disabled={loading} className="border w-[90%] m-auto py-1 rounded-2xl bg-white hover:bg-cyan-400 text-black text-xl font-semibold mt-4 " >
            {loading ? "Logging in..." : "Log In"}
          </button>
          {error && <p className="text-red-800 bg-transparent  ">{error}</p>}
        </motion.form>
      </div>
    </>
  );
};

export default Login;
