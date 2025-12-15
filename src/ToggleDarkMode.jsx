import { useEffect, useRef, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useDarkMode } from "./context/DarkModeContext";
import useClickSound from "./hooks/UseClickSound";

function ToggleDarkMode() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const play = useClickSound();

  function handleClick() {
    play();

    toggleDarkMode();
  }

  return (
    <div
      onClick={handleClick}
      className="relative bg-toggle-btn w-12 h-7 rounded-4xl cursor-pointer flex justify-between items-center p-1"
    >
      <MdOutlineDarkMode
        className={`text-[12px] ${isDarkMode && "text-white"}`}
      />
      <MdOutlineLightMode
        className={`text-[12px] ${!isDarkMode && "text-white"}`}
      />
      <div
        className={`absolute bg-bg h-5 w-5 rounded-full top-1 bottom-1 left-1 transform  ${
          isDarkMode ? "translate-x-5" : "translate-x-0"
        } transition-transform duration-100 ease-in-out`}
      ></div>
    </div>
  );
}

export default ToggleDarkMode;
