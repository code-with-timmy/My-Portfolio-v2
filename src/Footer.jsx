import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiCode } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { BiSolidFilePdf } from "react-icons/bi";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-b border-border-btn z-10 ">
      <div className="w-[70%] max-sm:w-[90%] mx-auto py-10 ">
        <div className="flex gap-10 justify-center pb-6 items-center border-b border-border-btn">
          <a
            href="https://x.com/eth_timmy"
            className="flex items-center gap-1 ft-1 group"
          >
            <FaXTwitter className="text-[18px] opacity-[0.6] group-hover:opacity-100" />
            <span className="text-[14px] opacity-[0.7] group-hover:opacity-100 max-sm:hidden">
              Twitter
            </span>
          </a>
          <button
            onClick={() => {
              window.location.href =
                "mailto:ojotimothy04@gmail.com?subject=Hello%20Timmy&body=Hi%20Timmy,%20I%20saw%20your%20portfolio!";
            }}
            className="flex items-center gap-1 ft-1 group"
          >
            <MdEmail className="text-[18px] opacity-[0.6] group-hover:opacity-100" />
            <span className="text-[14px] opacity-[0.7] group-hover:opacity-100 max-sm:hidden">
              Mail
            </span>
          </button>
          <a
            href="https://github.com/code-with-timmy"
            className="flex items-center gap-1 ft-1 group"
          >
            <FaGithub className="text-[18px] opacity-[0.6] group-hover:opacity-100" />
            <span className="text-[14px] opacity-[0.7] group-hover:opacity-100 max-sm:hidden">
              Github
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/ojo-timmy-ab61aa249/"
            className="flex items-center gap-1 ft-1 group"
          >
            <FaLinkedin className="text-[18px] opacity-[0.6] group-hover:opacity-100" />
            <span className="text-[14px] opacity-[0.7] group-hover:opacity-100 max-sm:hidden">
              Linkedin
            </span>
          </a>
          <a
            href="https://docs.google.com/document/d/1n-zyA7X5YKxzTaQEQL0nAu8R_tDHukcGHH4ULE3qspE/edit?tab=t.0"
            className="flex items-center gap-1 ft-1 group "
          >
            <BiSolidFilePdf className="text-[18px] opacity-[0.6] group-hover:opacity-100" />
            <span className="text-[14px] opacity-[0.7]  group-hover:opacity-100 max-sm:hidden">
              Resume
            </span>
          </a>
        </div>
        <div className="text-center pt-5 text-[13px] opacity-[0.4]">
          <p> © {currentYear} oxTimmy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
