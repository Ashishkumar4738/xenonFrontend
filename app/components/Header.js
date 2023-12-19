"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import {
  TwitterIcon,
  LinkedInIcon,
  GithubIcon,
  InstagramIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import useThemeSwitcher from "./Hooks/useThemeSwitcher";
import { useState } from "react";

const CustomeLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group `}>
      {title}
      <span
        className={`h-[1px] bg-dark dark:bg-light inline-block  ${
          pathname === href ? "w-full" : "w-0"
        } group-hover:w-full absolute left-0 -bottom-0.5 transition-[width] ease duration-350 `}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustimeButton = ({ href, title, className = "" }) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group  text-xs border-2 border-dark dark:border-light hover:border-light px-2 m-auto py-1 rounded-xl font-bold  hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark  `}>
      {title}
    </Link>
  );
};

const CustomeMobileLink = ({ href, title, className = "", toggle }) => {
  const pathname = usePathname();
  const router = useRouter();
  function handleClick() {
    toggle();
    router.push(href);
  }
  return (
    <button
      href={href}
      className={`${className} relative group  text-light dark:text-dark `}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] bg-light dark:bg-dark  inline-block  ${
          pathname === href ? "w-full" : "w-0"
        } group-hover:w-full absolute left-0 -bottom-0.5 transition-[width] ease duration-350 `}
      >
        &nbsp;
      </span>
    </button>
  );
};
const CustomeMobileButton = ({ href, title, className = "", toggle }) => {
  const pathname = usePathname();
  const router = useRouter();
  function handleClick() {
    toggle();
    router.push(href);
  }
  return (
    <button
      href={href}
      className={`${className} relative group  text-light dark:text-dark  border-2 px-2 rounded-lg dark:border-dark border-light `}
      onClick={handleClick}
    >
      {title}
      
    </button>
  );
};

export default function Header() {
  const router = useRouter();
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };
const handleLogout=()=>{
  localStorage.removeItem("auth-token");
  router.push("/login");
}
  return (
    <>
      <header className="flex dark:bg-dark dark:text-light justify-between content-center items-center px-24 z-30 w-full h-14 mt-2 ">
        <button
          className="w-6 flex-col justify-center gap-1 flex lg:hidden px-6 py-3 items-center -ml-16 z-10 "
          onClick={handleClick}
        >
          <span
            className={`border px-2  border-dark dark:border-light transition-all ease-in w-full ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            } `}
          >
            {" "}
          </span>
          <span
            className={`border  px-2 border-dark dark:border-light transition-all ease-in w-full ${
              isOpen ? "hidden" : ""
            } `}
          ></span>
          <span
            className={`border  px-2 border-dark dark:border-light transition-all ease-in w-full ${
              isOpen ? "-rotate-45 translate-y-1" : "translate-y-0.5"
            } `}
          ></span>
        </button>

        <div className="hidden  justify-between items-center w-full lg:flex">
          <nav className="flex justify-between dark:text-light  font-medium ">
            <CustomeLink href="/" title="Home" className={`mr-4 `} />
            <CustomeLink href="/about" title="About" className={`mx-4 `} />
            <CustomeLink
              href="/contect"
              title="Contect Us"
              className={`mx-4 `}
            />
            
            <CustimeButton 
              href="/login"
              title="Log In"
              className="ml-6"
            />
           
            <h1 className=" ml-4 relative group  text-xs border-2 border-dark dark:border-light hover:border-light px-2 m-auto py-1 rounded-xl font-bold  hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark cursor-pointer " onClick={handleLogout} >Log Out</h1>

          </nav>

          <nav className="flex justify-between items-center dark:bg-dark ">
            <motion.a
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-2"
              href="https://x.com/av0074738?t=glRwvfS0SZBVOSCoa7vWsg&s=09"
              target="_blank"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-2"
              href="https://www.linkedin.com/in/ashish-kumar4738/"
              target="_blank"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-2 dark:fill-light "
              href="https://github.com/Ashishkumar4738"
              target="_blank"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 ml-2"
              href="https://instagram.com/me_ashishkumar_._?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
            >
              <InstagramIcon />
            </motion.a>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 p-2 flex justify-center items-center rounded-full ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }   `}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark  "} />
              ) : (
                <MoonIcon className={"fill-dark  "} />
              )}
            </button>
          </nav>
        </div>

        {isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1.05, opacity: 1 }}
            className="flex  lg:hidden flex-col justify-center  items-center min-w-[70vw] bg-dark/90 flex-wrap   dark:bg-light/75 backdrop-blur-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg py-32 z-30  "
          >
            <nav className="flex flex-col justify-center items-center dark:text-light text-dark h-full gap-3  font-medium w-full ">
              <CustomeMobileLink
                href="/"
                title="Home"
                className={` `}
                toggle={handleClick}
              />
              <CustomeMobileLink
                href="/about"
                title="About"
                className={` `}
                toggle={handleClick}
              />
              
              <CustomeMobileLink
                href="/contect"
                title="Contect Us"
                className={` `}
                toggle={handleClick}
              />
              <CustomeMobileButton
                href="/login"
                title="Log In"
                className={` `}
                toggle={handleClick}
              />
              <h1 className="dark:text-dark text-light border-2 px-2 rounded-lg border-light dark:border-dark " onClick={handleLogout} >Log Out</h1>
              
            </nav>

            <nav className="flex justify-between items-center mt-1 rounded-lg flex-wrap ">
              <motion.a
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mr-3"
                href="https://x.com/av0074738?t=glRwvfS0SZBVOSCoa7vWsg&s=09"
                target="_blank"
              >
                <TwitterIcon />
              </motion.a>
              <motion.a
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3"
                href="https://www.linkedin.com/in/ashish-kumar4738/"
                target="_blank"
              >
                <LinkedInIcon />
              </motion.a>
              <motion.a
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3 dark:fill-dark fill-light "
                href="https://github.com/Ashishkumar4738"
                target="_blank"
              >
                <GithubIcon />
              </motion.a>
              <motion.a
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 ml-3 fill-dark "
                href="https://instagram.com/me_ashishkumar_._?igshid=OGQ5ZDc2ODk2ZA=="
                target="_blank"
              >
                <InstagramIcon />
              </motion.a>
              <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className={`ml-3 p-2 flex justify-center items-center rounded-full ${
                  mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
                }   `}
              >
                {mode === "dark" ? (
                  <SunIcon className={"fill-dark  "} />
                ) : (
                  <MoonIcon className={"fill-dark  "} />
                )}
              </button>
            </nav>
          </motion.div>
        )}
      </header>
    </>
  );
}
