/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FC } from "react";
import { MdOutlineDownload, MdSlowMotionVideo } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter, FaTelegram } from "react-icons/fa";
import TypewriterComponent from "../Typewriter";

const BannerPage: FC = () => {
  return (
    <div className="max-w-full h-full md:h-[calc(100vh-130px)] mx-auto md:relative">
      {/* Center Section */}
      <div className="max-w-7xl mx-auto flex flex-col space-y-3 items-start px-6">
        <div className="md:flex items-center justify-between w-full">
          <div>
            <p className="dark:text-gray-400 text-gray-700 text-2xl">
              Hi There👋
            </p>
            <h1 className="md:text-6xl text-2xl font-bold text-gray-700 dark:text-white">
              I'm <span className="text-primary">Mahfuj Alam</span>
            </h1>
            <div className="text-2xl text-gray-300 mt-5">
              <TypewriterComponent />
            </div>
            <div>
              <p className="dark:text-gray-400 w-full text-secondary md:w-[500px] mt-5">
                Mahfuj Alam is a creative problem solver with a keen eye for
                detail, dedicated to building intuitive and user-friendly web
                experiences. He enjoys turning ideas into engaging digital
                solutions through thoughtful design and functionality.
              </p>
            </div>
            <div className="flex justify-start gap-6 mt-6">
              <button className="bg-primary duration-300 transition-all px-6 flex items-center gap-1 py-2 rounded-full text-white hover:bg-gray-700">
                <MdOutlineDownload /> Resume
              </button>
              <button className="text-primary text-5xl">
                <MdSlowMotionVideo />
              </button>
            </div>
          </div>
          <div className="animate-pulse">
            <Image
              alt="profile"
              src="https://i.ibb.co.com/xJk3Y5p/coder.webp"
              height={700}
              width={700}
            />
          </div>
        </div>
      </div>

      {/* Left Side */}
      <div className="hidden md:block">
        <div className="md:absolute left-0 bottom-0 flex flex-col items-center gap-6 pb-10 lg:flex">
          <div className="flex flex-col gap-4">
            <SocialIcon href="https://github.com" Icon={FaGithub} />
            <SocialIcon href="https://linkedin.com" Icon={FaLinkedin} />
            <SocialIcon href="https://twitter.com" Icon={FaTwitter} />
            <SocialIcon href="https://telegram.org" Icon={FaTelegram} />
          </div>
          <div className="w-[2px] h-24 dark:bg-white bg-gray-400"></div>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;

// SocialIcon Component
interface SocialIconProps {
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const SocialIcon: FC<SocialIconProps> = ({ href, Icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Icon className="dark:text-white text-black hover:text-gray-300 text-2xl" />
  </a>
);
