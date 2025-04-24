import { createContext, useContext, useState, ReactNode } from "react";

interface TrackData {
  id: string;
  title: string;
  artist: string;
  audioFile: string;
}

interface PlayerContextProps {
  currentTrack: TrackData | null;
  setTrack: (track: TrackData) => void;
}

const PlayerContext = createContext<PlayerContextProps | undefined>(undefined);

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) throw new Error("usePlayer must be used within PlayerProvider");
  return context;
};

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const [currentTrack, setCurrentTrack] = useState<TrackData | null>(null);

  return (
    <PlayerContext.Provider value={{ currentTrack, setTrack: setCurrentTrack }}>
      {children}
    </PlayerContext.Provider>
  );
};
