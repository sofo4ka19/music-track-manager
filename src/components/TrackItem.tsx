import { TrackCard, TrackImg, NameText, AuthorText, Icon, Button, FlexBetween } from "./styles/styles"
import { Play, Pencil, Trash2 } from "lucide-react"

export interface TrackItemProps{
    id: string,
    title: string,
    artist: string,
    coverImage: string,
    audioFile?: string
}

const TrackItem: React.FC<TrackItemProps> = ({
    id, title, artist, coverImage, audioFile,
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
                <Icon data-testid={`edit-track-${id}`}><Pencil /></Icon>
                <Icon data-testid={`delete-track-${id}`}><Trash2 /></Icon>
            </div>
        </TrackCard>
    )
}
export default TrackItem