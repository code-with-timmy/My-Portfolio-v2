import { FaPause, FaPlay, FaSpotify } from "react-icons/fa6";
import useAudioSound from "./hooks/useAudioSound";

function SpotifyButton() {
  const { play, pause, isPlaying } = useAudioSound();
  const playAudio = () => {
    play();
  };
  const pauseAudio = () => {
    pause();
  };
  return (
    <button className="btn cursor-pointer group">
      <FaSpotify className="text-[17px] text-[#1DB954]" />
      <div className="flex flex-col items-start">
        <span className="opacity-[0.95] text-[12px] font-semibold">
          Video Games
        </span>
        <span className="opacity-[0.6] text-[11px] font-medium">
          Lana Del Rey
        </span>
      </div>
      {isPlaying === "play" ? (
        <FaPlay
          onClick={playAudio}
          className="text-[12px] opacity-[0.6] group-hover:text-[#1DB954] group-hover:opacity-100"
        />
      ) : (
        <FaPause
          onClick={pauseAudio}
          className="text-[12px] opacity-[0.6] group-hover:text-[#1DB954] group-hover:opacity-100"
        />
      )}
    </button>
  );
}

export default SpotifyButton;
