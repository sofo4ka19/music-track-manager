import { Header, Container } from "./styles/styles"
import TrackList from "./TrackList"
import Player from "./Player"
import { TrackItemProps } from "./TrackItem"
const MainScreen = () => {
    const tracks: TrackItemProps[] = [{id: '1', title: 'Yound and Beautful', artist: 'Lana del Rey', coverImage: 'https://upload.wikimedia.org/wikipedia/ru/7/7c/Young_and_Beautiful_%28%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0%29.jpeg', genres: ['pop'], album: ""},{id: '2', title: 'Summertime Sadness', artist: 'Lana del Rey', coverImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/be/e0/a7/bee0a717-cfa6-317a-ac78-48c277eb223b/12UMGIM51209.rgb.jpg/600x600bf-60.jpg', genres: ['pop'], album: ""}];
    return(
        <Container>
            <Header>Music Track Manager</Header>
            <TrackList></TrackList>
            <Player></Player>
        </Container>
    )
}
export default MainScreen