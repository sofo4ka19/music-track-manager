import TrackItem from "./TrackItem";
import { TrackItemProps } from "./TrackItem";

interface TrackListProps{
    tracks: TrackItemProps[]
}

const TrackList: React.FC<TrackListProps> = ({tracks}) => {
    return(
        <div data-testid="track-list">
            {tracks.map((track) => (
                <TrackItem  key={track.id} {...track}  />
            ))}
        </div>
    )
}
export default TrackList