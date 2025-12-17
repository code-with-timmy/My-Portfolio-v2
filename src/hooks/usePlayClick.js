import { useEffect, useRef } from "react";

export default function usePlayClick() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio("/mouse-click.mp3");
    audio.volume = 0.1;
    audio.preload = "auto";
    audioRef.current = audio;
  }, []);

  const play = () => {
    if (!audioRef.current) return;

    // Clone to allow rapid clicks
    const sound = audioRef.current.cloneNode(true);
    sound.volume = 0.1;
    sound.play().catch(() => {});
  };

  return { play };
}
