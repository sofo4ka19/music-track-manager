import TrackItem from "./TrackItem";
import { TrackItemProps } from "./TrackItem";
import { useState, useEffect } from "react";
import InfoModal from "./modals/InfoModal";
import ConfimModal from "./modals/ConfirmModal";
import { getTracks, deleteTrack } from "../api/tracks";

const TrackList = () => {
    const [editTrack, setEditTrack] = useState<TrackItemProps | null>(null);
    const [deletedTrack, setDeleteTrack] = useState<TrackItemProps | null>(null);
    const [tracks, setTracks] = useState<TrackItemProps[]>([]);
    const [loading, setLoading] = useState(true);
  
    const handleDelete = async () => {
        if (!deletedTrack) return;
        try {
            await deleteTrack(deletedTrack.id);
            await fetchTracks(); 
        } catch (err) {
            console.error("Error deleting track:", err);
        } finally {
            setDeleteTrack(null);
        }
    }
    const fetchTracks = async () => {
      try {
        setLoading(true);
        const res = await getTracks();
        setTracks(res.data.data);
      } catch (err) {
        console.error("Failed to fetch tracks:", err);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchTracks();
    }, []);
    return(
        <>
        {loading && <div>Loading...</div>}
        {!loading && <>
        <div data-testid="track-list">
            {tracks.map((track) => (
                <TrackItem  key={track.id} {...track} 
                onEdit={() => setEditTrack(track)} onDelete={() => setDeleteTrack(track)} />
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
        <ConfimModal 
            isOpen={!!deletedTrack}
            onClose={() => setDeleteTrack(null)}
            onSave={handleDelete}
            action="delete"
            />
            </>
        }
        </>
    )
}
export default TrackList