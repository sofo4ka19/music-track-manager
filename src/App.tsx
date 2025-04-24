import MainScreen from "./components/MainScreen"
import { ThemeProvider } from "styled-components"
import { theme } from "./components/styles/theme"
import { PlayerProvider } from "./components/context/PlayerContext"
import { GenresProvider } from "./components/context/GenresContext"
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GenresProvider>
          <PlayerProvider>
            <MainScreen />
          </PlayerProvider>
        </GenresProvider>
      </ThemeProvider>
    </>
  )
}

export default App
