import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useEffect, useState } from "react";
import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "./Icon";
import Logo from "./Logo";
import { motion } from "framer-motion";
import Instagram from "../../public/assets/Instagram.png";
import Whatsapp from "../../public/assets/Whatsapp.png";
import Image from "next/image";
import useThemeSwicher from "./hooks/useThemeSwicher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"}
        dark:bg-light
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
    >
      {title}
      <span
        className={`h-[2px] inline-block bg-light  absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"}
        dark:bg-dark
        `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwicher();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const buttonRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target) &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggleModal = () => {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex item-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        ref={buttonRef}
        className=" flex-col justify-center items-center hidden lg:flex"
        onClick={handleToggleModal}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isModalOpen ? "rotate-45 translate-y-2.5" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isModalOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${
            isModalOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      {/* Desktop Nav */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
        </nav>

        <nav className="flex item-center justify-center flex-wrap">
          <motion.a
            href="https://github.com/dreal-martins/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mx-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://ng.linkedin.com/in/martins-aguegbodo-45446124b"
            target={"_blank"}
            className="w-8 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://twitter.com/dreal_martins"
            target={"_blank"}
            className="w-8 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://wa.me/2348080356793?text=+my+name+is+______'"
            target={"_blank"}
            className="w-8 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              src={Whatsapp}
              alt="Whatsapp"
              priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
            />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/dreal.martins/"
            target={"_blank"}
            className="w-9"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              src={Instagram}
              alt="Instagram"
              priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
            />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-5 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <MoonIcon className={"fill-dark w-6 h-7"} />
            ) : (
              <SunIcon className={"fill-dark w-6 h-7"} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Nav */}
      {isModalOpen && (
        <motion.div
          ref={modalRef}
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[85vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-28 px-5"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleToggleModal}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleToggleModal}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleToggleModal}
            />
          </nav>

          <nav className="flex item-center justify-center flex-wrap mt-5 ">
            <motion.a
              href="https://github.com/dreal-martins/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 mr-3 sm:mx-1  bg-light rounded-full dark:bg-dark"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://ng.linkedin.com/in/martins-aguegbodo-45446124b"
              target={"_blank"}
              className="w-9 mx-3 sm:mx-1 "
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://twitter.com/dreal_martins"
              target={"_blank"}
              className="w-9 mx-3 sm:mx-1 "
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://wa.me/2348080356793?text=+my+name+is+______'"
              target={"_blank"}
              className="w-9 mx-3 sm:mx-1 "
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image src={Whatsapp} alt="Whatsapp" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/dreal.martins/"
              target={"_blank"}
              className="w-9 ml-2 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image src={Instagram} alt="Instagram" />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1  ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <MoonIcon className={"fill-dark"} />
              ) : (
                <SunIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      )}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
