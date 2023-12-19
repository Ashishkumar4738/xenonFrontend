"use client";
import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useRouter } from "next/navigation";

const AnimatedNumber = ({ value }) => {
  const router = useRouter();
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    if(!localStorage.getItem("auth-token")){
      router.push("/login");
    }
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, []);

  // return <span ref={ref} className=" md:text-4xl " ></span>;
  return (
    <span ref={ref} className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl   "></span>
  );
  
};

const about = () => {
  return (
    <>
      <Head>
        <title>About me</title>
        <meta
          name="description"
          content="personal portfolio using next.js tailwindcss css react animations"
        />
      </Head>
      <main className="" >
        <div className="relative mb-8">
          <div className="shadow-md dark:shadow-light   ">
            <h1  className="dark:text-light lg:!text-7xl sm:!text-4xl md:!text-5xl xm:!text-3xl !text-2xl m-auto w-full text-center font-bold ">Ashish Kumar</h1>
          </div>
          <div className="grid grid-cols-8  h-max gap-8 mt-8 w-[90%] m-auto relative lg:gap-16  ">
            <div className="col-span-8 lg:col-span-3 font-medium align-baseline leading-1 p-2 relative order-2 lg:order-1  ">
              <div className="!m-auto  ">
                <h1
                
                  className="!text-2xl font-medium !text-center lg:!text-left text-slate-500 "
                >Biography</h1>
              </div>
              <div className="font-medium text-lg mr-8 !text-center w-full  lg:!text-left leading-5 lg:leading-9 ">
                <p  >
                Hello! I am Ashish Kumar, a fourth-year IT student pursuing my Bachelor's degree in Information Technology at Babu Banarasi Das Northern India Institute of Technology.
                </p>
                <p className="py-2">
                Throughout my academic journey, I have excelled in courses such as Data Structure, Design and Analysis of Algorithms, Computer Networks, etc.
                </p>
                <p>
                I have a keen interest in Web Development and I've had the opportunity to develop my skills in Java, Javascript, and VScode. Additionally, my strong analytical and problem-solving skills have been honed through Tutorials and coding Competitions.
                </p>
              </div>
            </div>
            
            <div className="relative  bg-dark  dark:bg-light h-max  m-auto md:w-max flex justify-center  pr-4 pb-4 -pt-0 rounded-[2.5rem] order-1 lg:order-2 col-span-8 lg:col-span-3   ">
              <div className=" bg-light rounded-[2rem] p-8 border-2 border-solid border-dark dark:bg-dark dark:border-light -mt-1 -ml-1  ">
                <Image
                  src={"/my_image.jpg"}
                  width={3000}
                  height={4000}
                  alt="my picture"
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>

            <div className="flex flex-row lg:flex-col justify-between items-center w-full h-auto relative order-3 col-span-8  lg:col-span-2  ">
              <div className="flex flex-col justify-center items-center  ">
                <span className=" font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ">
                  <AnimatedNumber value={1} />+
                </span>
                <span className="text-lg   ">Satisfied Client</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className=" font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ">
                  <AnimatedNumber value={8} />+
                </span>
                <span className="text-lg   ">Projects</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className=" font-bold  text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl  ">
                  <AnimatedNumber value={0.5} /> +
                </span>
                <span className="text-lg   ">Experience</span>
              </div>
            </div>
          </div>
        </div>
       {/* <Experience /> */}
      </main>
    </>
  );
};
export default about;
