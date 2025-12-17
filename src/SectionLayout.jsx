import {
  FaGithub,
  FaPause,
  FaPlay,
  FaSpotify,
  FaXTwitter,
} from "react-icons/fa6";
import Footer from "./Footer";
import Header from "./Header";

import { HiCode } from "react-icons/hi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { SparklesCore } from "./Sparkles";
import MyProject from "./MyProject";
import MyExperience from "./MyExperience";
import Stacks from "./Stacks";
import Contact from "./Contact";
import TextType from "./TextType";
import SpotifyButton from "./SpotifyButton";

function SectionLayout() {
  return (
    <div className="relative h-auto  w-[920px] border-x border-border-color max-sm:border-0 text-text z-100">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <SparklesCore
          particleDensity={25}
          minSize={0.1}
          maxSize={0.6}
          speed={0.2}
          className="h-full w-full"
        />
      </div>
      <Header />
      <main className="flex flex-col gap-20 items-center justify-center border-b py-20 border-border-color">
        <section className="border border-border-btn  w-[70%] max-sm:w-[90%] p-10 rounded-md flex flex-col gap-8">
          <div className="flex items-center justify-end max-sm:justify-center gap-2">
            <nav className="flex flex-row gap-2 items-center">
              <button className="btn-2">
                <a href="https://x.com/eth_timmy">
                  <FaXTwitter />
                </a>
              </button>
              <button className="btn-2">
                <a href="https://leetcode.com/u/Timmy_py/">
                  <HiCode />
                </a>
              </button>
            </nav>
          </div>
          <div className="flex max-sm:flex-col max-sm:text-center flex-row gap-5 items-center">
            <div className="h-[120px] w-[120px] rounded-md">
              <img src="/pfp.JPG" alt="MY-profile-pic" className="rounded-md" />
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="flex items-center gap-0.5">
                <span className="text-[36px] font-semibold">oxTimmy</span>
                <RiVerifiedBadgeFill className="text-[#1DB954]" />
              </h1>
              <TextType
                text={["Frontend engineer", "Web and Mobile Developer"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="_"
                className="opacity-[0.7] text-[14px]"
              />
              <p className="opacity-[0.9] text-[14px] flex items-center gap-0.5">
                <MdEmail />
                <span>ojotimothy04@gmail.com</span>
              </p>
            </div>
          </div>
          <h3 className="opacity-[0.7] text-[14px] min-w-[70%]  mx-auto text-center">
            I'm a frontend engineer who weaves elegant interfaces and breathes
            life into pixels with a passion for crafting and coding the web’s
            wonders.
          </h3>
        </section>
        <section className="flex gap-4 max-sm:flex-col">
          <button disabled className="btn cursor-pointer">
            <FaGithub className="text-[17px]" />
            <div className="flex flex-col">
              <span className="opacity-[0.95] text-[12px] font-semibold">
                Currently buiilding
              </span>
              <span className="opacity-[0.6] text-[11px]  text-left font-medium">
                Onlearn
              </span>
            </div>
          </button>
          <SpotifyButton />
        </section>
      </main>
      <MyProject />
      {/* <MyExperience /> */}
      <Stacks />
      <Contact />
      <Footer />
    </div>
  );
}

export default SectionLayout;
