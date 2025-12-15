import { BiSolidFilePdf } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import Button from "./Button";

import NaviUp from "./NaviUp";

function Contact() {
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
          <NaviUp />
        </div>
      </div>
    </section>
  );
}

export default Contact;
