import { useRef, useEffect } from "react";

export default function useClickSound() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio("/mouse-click.mp3");
    audio.volume = 0.2;
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

  return play;
}
