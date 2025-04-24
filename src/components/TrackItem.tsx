import { TrackCard, TrackImg, NameText, AuthorText, Icon, Button, FlexBetween } from "./styles/styles"
import { Play, Pencil, Trash2 } from "lucide-react"

export interface TrackItemProps{
    id: string,
    title: string,
    artist: string,
    album: string,
    coverImage: string,
    audioFile?: string,
    genres: string[]
}
interface TrackItemProps2 extends TrackItemProps{
    onEdit: ()=>void;
    onDelete: ()=>void;
} 
const TrackItem: React.FC<TrackItemProps2> = ({
    id, title, artist, coverImage, audioFile, onEdit, onDelete
}) => {
    return(
        <TrackCard data-testid={`track-item-${id}`}>
            <FlexBetween width="auto">
                <TrackImg src={coverImage} alt="cover image" />
                <div>
                    <NameText data-testid={`track-item-${id}-title`}>{title}</NameText>
                    <AuthorText data-testid={`track-item-${id}-artist`}>{artist}</AuthorText>
                </div>
            </FlexBetween>
            <div style={{ display: "flex", alignItems: "center"}}>
                {audioFile ? 
                <Icon><Play /></Icon> : <Button data-testid={`upload-track-${id}`}>upload file</Button>
                }
                <Icon data-testid={`edit-track-${id}`} onClick={onEdit}><Pencil /></Icon>
                <Icon data-testid={`delete-track-${id}`} onClick={onDelete}><Trash2 /></Icon>
            </div>
        </TrackCard>
    )
}
export default TrackItem