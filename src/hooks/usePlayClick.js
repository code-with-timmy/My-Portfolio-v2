import { useRef, useEffect } from "react";

export default function usePlayClick() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio("/music-click.mp3");
    audio.volume = 0.1;
    audio.preload = "auto";
    audio.load(); // force preload
    audioRef.current = audio;
  }, []);

  const play = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;

    audio.play();
  };

  const pause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
  };

  return { play, pause };
}
