import TrackItem from "./TrackItem";
import { TrackItemProps } from "./TrackItem";
import { useState } from "react";
import InfoModal from "./modals/InfoModal";

interface TrackListProps{
    tracks: TrackItemProps[]
}

const TrackList: React.FC<TrackListProps> = ({tracks}) => {
    const [editTrack, setEditTrack] = useState<TrackItemProps | null>(null);
    return(
        <>
        <div data-testid="track-list">
            {tracks.map((track) => (
                <TrackItem  key={track.id} {...track} 
                onEdit={() => setEditTrack(track)} />
            ))}
        </div>
        <InfoModal
            isOpen={!!editTrack}
            onClose={() => setEditTrack(null)}
            onSave={() => {
            // handleSave(editTrack)
            setEditTrack(null);
            }}
            initialData={editTrack || undefined}
        />
        </>
    )
}
export default TrackList