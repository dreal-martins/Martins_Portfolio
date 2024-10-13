import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Liicon from "./Liicon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <Liicon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-28">
      <h2 className="font-bold text-8xl mb-3 w-full text-center  md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4  xs:ml-2">
          <Details
            type="Associate degree in Software Development."
            place="ALX Nigeria"
            time="Early 2024"
            info="Relevant courses included Data Structures and Algorithms, Object-Oriented Programming (OOP), Software Engineering Principles and Operating Systems"
          />
          <Details
            type="Associate degree in Web and App Development."
            place="Freecodecamp (Bootcamp)"
            time="Mid 2023"
            info="Relevant courses included ReactJs, React Native, NodeJs and ExpressJs"
          />
          <Details
            type="Associate degree in computer science. (CS50)"
            place="Edx (Harvard Online University)"
            time="Early 2023"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Programming courses."
          />
          <Details
            type=" Associate degree in web design and development."
            place="Bafuto Institute Of Management And Informaton Techology."
            time="Early 2022"
            info="Relevant courses included HTML, CSS, JavaScript and other programming courses."
          />
          <Details
            type="High School Diploma."
            place="Kinsol College"
            time="2019"
            info="Relevant courses included basic high school science courses."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
