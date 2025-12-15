import { useRef, useEffect, useState } from "react";

export default function useAudioSound() {
  const [isPlaying, setIsPlaying] = useState("play");
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio("/sound.mp3");
    audio.volume = 0.1;
    audio.preload = "auto";
    audio.load(); // force preload
    audioRef.current = audio;
  }, []);

  const play = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    setIsPlaying("pause");
    audio.play();
  };

  const pause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setIsPlaying("play");
    audio.pause();
  };

  return { play, pause, isPlaying };
}
