import { useEffect, useRef } from "react";
import { BiSolidFilePdf } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import Button from "./Button";
import { LuChevronsUp } from "react-icons/lu";
import useClickSound from "./hooks/UseClickSound";

function Contact() {
  const play = useClickSound();

  function scrollToTop() {
    play();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <section className="border-b border-border-btn z-10 ">
      <div className="w-[70%] max-sm:w-[90%] mx-auto py-20 ">
        <h2 className="text-center font-semibold text-[20px] flex items-center justify-center gap-1.5">
          <span class="blink"></span>
          <span>Let's Connect</span>
        </h2>
        <div className="text-center flex flex-col gap-8 mt-8">
          <p className="text-center text-[14px] opacity-[0.8]">
            Appreciate you stopping by. If a project sparked something or you
            just want to jam on builds, drop me a line.
          </p>
          <p className="font-semibold text-[12px]">
            Always keen to collaborate, learn, and ship new ideas.
          </p>
          <div className="flex max-sm:flex-col items-center gap-3.5 justify-center">
            <Button>
              <MdEmail className="text-[17px]" />

              <a href="mailto:ojotimothy04@gmail.com">Email me</a>
            </Button>
            <Button>
              <BiSolidFilePdf className="text-[17px]" />

              <span>Resume</span>
            </Button>
          </div>
        </div>
        <div className="flex justify-center my-20">
          <button
            onClick={scrollToTop}
            className="text-text border flex flex-col group  w-fit items-center px-8 py-6 gap-1.5  rounded-3xl border-border-btn font-medium btn3"
          >
            <div>
              <LuChevronsUp className="opacity-[0.7] group-hover:opacity-[1]" />
            </div>
            <span className="text-[12px] opacity-[0.7]">back to top</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
