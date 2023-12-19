
"use client"
import React,{ useEffect,useState } from 'react'
import { useRouter } from 'next/navigation';
import {motion} from "framer-motion";
const url = "https://ashishkumar-senonapi.onrender.com"
const Contect = () => {
    const router = useRouter();
  useEffect(()=>{
    if(!localStorage.getItem("auth-token")){
      router.push("/login");
    }
  },[]);

  const [data, setData] = useState({
    name: "",
    email:"",
    address:"",
    message: "",
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
      const response = await fetch(`${url}/contect`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          auth_token:localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({
          name: data.name,
          email:data.email,
          messgae:data.message,
          address:data.address
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        router.push("/")
        console.log(responseData)
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Sending failed");
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
      <div className="h-screen w-full flex justify-center items-center flex-col border-2  lg:px-20 m-auto bg-[url('/car.jpg')] bg-cover "
      
      >
        <motion.form onSubmit={handleForm} className="flex flex-col justify-center backdrop-blur-md shadow-2xl lg:px-8 py-10 rounded-2xl border-2 "
        variants={quote}
        initial="initial"
        animate="animate"
        >
        <h1 className="text-xl lg:text-3xl font-bold mb-8 text-center  " >Contect Here</h1>

          <label htmlFor="name " className=" ml-1 text-black font-semibold flex items-center  " >  
            name:
            <input
              type="text"
              name="name"
              className="border-none  rounded-xl px-2 py-1 text-white outline-none bg-transparent "
              value={data.name}
              autoComplete="off"
              onChange={formData}
              />
              

              </label>
              <hr className="border-black border mb-8 " />
          <label htmlFor="address " className=" ml-1 text-black font-semibold flex items-center  " >  
            address:
            <input
              type="text"
              name="address"
              className="border-none  rounded-xl px-2 py-1 text-white outline-none bg-transparent "
              value={data.address}
              autoComplete="off"
              onChange={formData}
              />
              

              </label>
              <hr className="border-black border mb-8 " />
          <label htmlFor="message" className=" ml-1 text-black font-semibold flex items-center  " >  
            message:
            <input
              type="text"
              name="message"
              className="border-none  rounded-xl px-2 py-1 text-white outline-none bg-transparent "
              value={data.message}
              autoComplete="off"
              onChange={formData}
              />
              

              </label>
              <hr className="border-black border mb-8 " />
          <label htmlFor="email" className="ml-1 text-black font-semibold flex items-center  " >
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
              <hr className="border-black border " />
            <p className="text-xs text-right py-3 " >Forget password? <span className="underline underline-offset-1 cursor-pointer text-red-700 font-semibold " > <i>Click here</i></span> </p>
          <button type="submit" disabled={loading} className="border w-[80%] lg:w-[90%] m-auto py-1 rounded-2xl bg-white hover:bg-cyan-400 text-black text-xl font-semibold mt-4 " >
            {loading ? "Sending..." : "Send query"}
          </button>
          {error && <p className="text-red-800 bg-transparent  ">{error}</p>}
        </motion.form>
      </div>
    </>
  )
}
export default Contect;
