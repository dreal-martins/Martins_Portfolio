import Head from "next/head";
import Layout from "@/component/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/component/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/component/Icon";
import HireMe from "@/component/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/component/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Martins Portfolio❤| Home Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Martins"
                className="w-full h-auto lg:hidden md:inline-block md:w-full "
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            <div className="w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-5xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled front-end developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects, showcasing my expertise in React.js and web
                development.
              </p>
              <div className="flex lg:justify-center items-center mt-2">
                <Link
                  href="/myResume.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark  border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1 sm:w-4 md:w-5"} />
                </Link>
                <Link
                  href="mailto:alexandermartins123@icloud.com"
                  target="_blank"
                  className="ml-4 text-lg font-meduim font-bold capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image
            src={lightBulb}
            alt="martins"
            className="w-full h-auto md:hidden"
          />
        </div>
      </main>
    </>
  );
}
