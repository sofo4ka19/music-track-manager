import { Header, Container } from "./styles/styles"
import TrackList from "./TrackList"
import Player from "./Player"
const MainScreen = () => {
    const tracks = [{id: '1', title: 'Yound and Beautful', artist: 'Lana del Rey', coverImage: 'https://upload.wikimedia.org/wikipedia/ru/7/7c/Young_and_Beautiful_%28%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0%29.jpeg'}];
    return(
        <Container>
            <Header>Music Track Manager</Header>
            <TrackList tracks={tracks}></TrackList>
            <Player></Player>
        </Container>
    )
}
export default MainScreen