import AnimatedText from "@/component/AnimatedText";
import { GithubIcon } from "@/component/Icon";
import Layout from "@/component/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/martins-store.png";
import project2 from "../../public/images/projects/hulu-clone.png";
import project3 from "../../public/images/projects/exercise.png";
import project4 from "../../public/images/projects/vegeel.png";
import project5 from "../../public/images/projects/Screenshot 2024-04-21 073358.png";
import TransitionEffect from "@/component/TransitionEffect";
import { FeaturedProject } from "@/component/FeaturedProject";

// const Project = ({ title, type, img, link, github }) => {
//   return (
//     <article className="w-full flex flex-col items-center justify-center rounded-2xl border boder-solid border-dark bg-light dark:bg-dark dark:border-light  p-6 relative xs:p-4">
//       <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
//       <Link
//         href={link}
//         target="_blank"
//         className="w-full cursor-pointer overflow-hidden rounded-lg"
//       >
//         <FramerImage
//           src={img}
//           alt={title}
//           className="w-full h-auto"
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.2 }}
//         />
//       </Link>
//       <div className="w-full flex flex-col items-start justify-between mt-4">
//         <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
//           {type}
//         </span>
//         <Link
//           href={link}
//           target="_blank"
//           className="hover:underline underline-offset-2"
//         >
//           <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
//             {title}
//           </h2>
//         </Link>

//         <div className="w-full mt-2 flex items-center justify-between">
//           <Link
//             href={link}
//             target="_blank"
//             className="text-lg font-semibold underline md:text-base"
//           >
//             Visit
//           </Link>
//           <Link href={github} target="_blank" className="w-8 md:w-6">
//             <GithubIcon />
//           </Link>
//         </div>
//       </div>
//     </article>
//   );
// };

const projects = () => {
  return (
    <>
      <Head>
        <title>Martins Portfolio❤| Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />

      <main className="w-full mb-8 flex flex-col items-center justify-center dark:text-light">
        <Layout>
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-5 lg:!text-5xl sm:mb-4 sm:!text-4xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Vegeel"
                summary="Experience a high-performance website powered by Next.js and styled with Tailwind CSS. Enjoy fast page loads, seamless navigation, and visually stunning designs for an exceptional user experience across devices."
                link="https://vegeel.com/"
                type="Project"
                img={project4}
                // github="https://github.com/dreal-martins/hulu-clone"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Hulu Clone Project"
                summary="Experience a high-performance web application powered by Next.js and styled with Tailwind CSS. Enjoy fast page loads, seamless navigation, and visually stunning designs for an exceptional user experience across devices."
                link="https://martins-hulu-clone.vercel.app/"
                type="Project"
                img={project2}
                github="https://github.com/dreal-martins/hulu-clone"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="GOLDS-GYM"
                summary="This is a web-based gym website built with ReactJS and styled with MUI. Experience a user-friendly gym website built with ReactJS and styled with MUI. Achieve your fitness goals with our expert trainers, top-notch facilities, and personalized workout plans. Join us today and make fitness a lifestyle!."
                link="https://martinsgoldsgym.vercel.app/"
                type="Project"
                img={project3}
                github="https://github.com/dreal-martins/golds_gym"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="MARTINS-STORE"
                summary="This project is built with HTML, JavaScript, and styled with CSS. this website offer a good and responsive UI for an e-commerce clothing website, With its user-friendly design and reliable technology, it's a one-stop-shop for all your online shopping needs."
                link="https://martinsstore.vercel.app/"
                type="Project"
                img={project1}
                github="https://github.com/dreal-martins/MartinsStore"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="DREAL-HOUSE"
                summary="I built a real estate website using Next.js and Chakra UI in this project. The website offers a seamless user experience for all real estate needs. It showcases my ability to combine technology and design to create functional and visually appealing web solutions. Proud to present this project as an example of my skills."
                link="https://drealhouse.netlify.app/"
                type="Project"
                img={project5}
                github="https://github.com/dreal-martins/drealhouse"
              />
            </div>
          </div>
          {/* <AnimatedText
            text="Backend Projects"
            className="my-9 lg:!text-5xl sm:mb-8 sm:!text-4xl xs:!text-4xl"
          /> */}
        </Layout>
      </main>
    </>
  );
};

export default projects;
