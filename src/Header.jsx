import { FaGithub, FaLinkedin } from "react-icons/fa";
import ToggleDarkMode from "./ToggleDarkMode";
import { useEffect, useState } from "react";

function Header() {
  return (
    <header className="px-10 max-sm:px-4 py-4.5 border-b border-border-color flex justify-between items-center text-white">
      <CurrentTime />
      <NavButtion />
    </header>
  );
}

function CurrentTime() {
  const [time, setTime] = useState("");
  const [tzCity, setTzCity] = useState("");

  useEffect(() => {
    function updateTime() {
      const now = new Date();

      // Format time like "07:49:21 PM"
      const timeString = now.toLocaleTimeString("en-US", {
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Africa/Lagos",
      });

      // Get timezone offset text
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Africa/Lagos",
        timeZoneName: "shortOffset",
      });
      const parts = formatter.formatToParts(now);
      const offset = parts.find((p) => p.type === "timeZoneName")?.value;

      setTime(timeString);
      setTzCity(`${offset} • Lagos, Nigeria`);
    }

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="text-text whitespace-pre-line">
      <h1 className="text-[16px] font-normal max-sm:text-[14px]">{time}</h1>
      <p className="opacity-[0.6] text-[11px] max-sm:text-[9px] font-normal">
        {tzCity}
      </p>
    </div>
  );
}

function NavButtion() {
  return (
    <nav className="flex items-center text-text gap-2">
      <ToggleDarkMode />
      <a href="https://github.com/code-with-timmy" className="btn">
        <FaGithub className="text-[16px]" />
        <span className="max-sm:hidden">Github</span>
      </a>
      <a
        href="https://www.linkedin.com/in/ojo-timmy-ab61aa249/"
        className="btn"
      >
        <FaLinkedin className="text-[16px]" />
        <span className="max-sm:hidden">Linkedin</span>
      </a>
    </nav>
  );
}

export default Header;
