import { MdEmail } from "react-icons/md";
import Button from "./Button";

import NaviUp from "./NaviUp";
import { RiArrowDropRightLine, RiArrowRightSLine } from "react-icons/ri";

function Contact() {
  return (
    <section className="border-b border-border-btn z-10 ">
      <div className="w-[70%] max-sm:w-[90%] mx-auto py-20 ">
        <h2 className="text-center font-semibold text-[20px] flex items-center justify-center gap-1.5">
          <span>Let's work together.</span>
        </h2>
        <div className="text-center flex flex-col gap-8 mt-8">
          <p className="text-center text-[14px] opacity-[0.8]">
            Have a project in mind? Let's create something amazing.
          </p>

          <div className="flex max-sm:flex-col items-center gap-3.5 justify-center">
            <div
              className="relative flex items-center w-fit px-4 max-sm:px-3 max-sm:py-2 py-3 cursor-pointer border gap-1.5 rounded-3xl border-border-btn overflow-hidden glow"
              onClick={() => {
                window.location.href =
                  "mailto:ojotimothy04@gmail.com?subject=Hello%20Timmy&body=Hi%20Timmy,%20I%20saw%20your%20portfolio!";
              }}
            >
              <MdEmail className="text-[15px]" />

              <a
                href="mailto:ojotimothy04@gmail.com"
                className="flex items-center gap-1"
              >
                <span className="text-[12px]">Get in touch</span>
                <RiArrowRightSLine className="text-[15px]" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-25">
          <p className="font-bold text-[13px] text-center text-text opacity-[0.5]">
            <span className="italic">
              “Let’s build something amazing together
            </span>{" "}
            <span>:)”</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
