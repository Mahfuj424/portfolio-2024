/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
import { FC } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaTelegram } from "react-icons/fa";

const BannerPage: FC = () => {
  return (
    <div className="max-w-full h-[calc(100vh-130px)] mx-auto relative">
      {/* Center Section */}
      <div className="max-w-7xl mx-auto flex flex-col space-y-3 items-start py-10 px-6">
        <p className="text-gray-400 text-2xl">Hi There👋</p>
        <h1 className="text-6xl font-bold text-white">
          I'm <span className="text-primary">Mahfuj Alam</span>
        </h1>
        <p className="text-2xl text-gray-300">I am a Web Developer</p>
        <div className="flex justify-center gap-6 mt-6">
          <button className="bg-primary px-6 py-2 rounded-full text-white hover:bg-pink-600">
            Resume
          </button>
          <button className="bg-gray-700 px-6 py-2 rounded-full text-white hover:bg-gray-600">
            Contact Me
          </button>
        </div>
      </div>

      {/* Left Side */}
      <div className="absolute left-0 bottom-0 flex flex-col items-center gap-6 pb-10">
        <div className="flex flex-col gap-4">
          <SocialIcon href="https://github.com" Icon={FaGithub} />
          <SocialIcon href="https://linkedin.com" Icon={FaLinkedin} />
          <SocialIcon href="https://twitter.com" Icon={FaTwitter} />
          <SocialIcon href="https://telegram.org" Icon={FaTelegram} />
        </div>
        <div className="w-[2px] h-24 dark:bg-white bg-gray-400"></div>
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
