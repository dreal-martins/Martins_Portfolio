import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Liicon from "./Liicon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt:0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <Liicon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-28">
      <h2 className="font-bold text-8xl mb-3 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Front-end developer"
            company="All Round Care (A.R.C)"
            time="late 2022 - Present"
            address="Lagos, NG"
            work="Worked on a team responsible for developing new features for A.R.C's
            e-commerce web-app, company landing page, including improving the accuracy and relevance of the admin dashboard and 
            developing new tools for data analysis and visualization."
            companyLink="https://allroundcare.net/"
          />

          <Details
            position="Teaching Assistant"
            company="Bafuto institute of management and information technology"
            time="Summer 2022"
            address="Lagos, NG."
            work="Assisted in teaching a course on computer programming, held office hours to help students with assignments, 
            and assist the senior."
            companyLink="#"
          />
          <Details
            position="Web and App Developer (Freelancer)"
            company="Upwork and Fiverr"
            time="early 2022 - till now"
            address="Lagos, NG."
            work="Worked on people and clients projects, including implementing a new user interface for their Web-app and optimizing the performance of a core Web-apps component."
            companyLink="#"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
