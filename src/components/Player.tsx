import { useEffect, useRef, useState } from "react";
import { usePlayer } from "./context/PlayerContext";
import { Play, Pause } from "lucide-react";
import { PlayerContainer, Title, Controls, Progress } from "./styles/styles";


const Player = () => {
  const { currentTrack } = usePlayer();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", () => {
        setProgress(audioRef.current!.currentTime);
      });
    }
  }, []);

  if (!currentTrack) return null;

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <PlayerContainer data-testid={`audio-player-${currentTrack.id}`}>
      <Title>
        {currentTrack.title} — {currentTrack.artist}
      </Title>
      <Controls>
        <button
          onClick={togglePlay}
          data-testid={isPlaying ? `pause-button-${currentTrack.id}` : `play-button-${currentTrack.id}`}
        >
          {isPlaying ? <Pause /> : <Play />}
        </button>
        <Progress
          type="range"
          min={0}
          max={audioRef.current?.duration || 0}
          value={progress}
          onChange={e => {
            if (audioRef.current) {
              audioRef.current.currentTime = Number(e.target.value);
              setProgress(Number(e.target.value));
            }
          }}
          data-testid={`audio-progress-${currentTrack.id}`}
        />
      </Controls>
      <audio ref={audioRef} src={currentTrack.audioFile} preload="metadata" />
    </PlayerContainer>
  );
}

export default Player;
