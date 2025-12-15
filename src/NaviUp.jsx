import { LuChevronsUp } from "react-icons/lu";
import useClickSound from "./hooks/UseClickSound";

function NaviUp() {
  const play = useClickSound();

  function scrollToTop() {
    play();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      onClick={scrollToTop}
      className="text-text border flex flex-col group  w-fit items-center px-8 py-6 gap-1.5  rounded-3xl border-border-btn font-medium btn3"
    >
      <div>
        <LuChevronsUp className="opacity-[0.7] group-hover:opacity-[1]" />
      </div>
      <span className="text-[12px] opacity-[0.7]">back to top</span>
    </button>
  );
}

export default NaviUp;
