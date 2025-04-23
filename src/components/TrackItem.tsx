import { TrackCard, TrackImg, NameText, AuthorText, Icon, Button } from "./styles/styles"
import { Play, Pencil, Trash2 } from "lucide-react"

interface TrackItemProps{
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
        <TrackCard>
            <div>
                <TrackImg src={coverImage} alt="cover image" />
                <div>
                    <NameText>{title}</NameText>
                    <AuthorText>{artist}</AuthorText>
                </div>
            </div>
            <div>
                {audioFile ? 
                <Icon><Play /></Icon> : <Button>upload file</Button>
                }
                <Icon><Pencil /></Icon>
                <Icon><Trash2 /></Icon>
            </div>
        </TrackCard>
    )
}
export default TrackItem