import MainScreen from "./components/MainScreen"
import { ThemeProvider } from "styled-components"
import { theme } from "./components/styles/theme"
import { PlayerProvider } from "./components/context/PlayerContext"
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <PlayerProvider>
          <MainScreen />
        </PlayerProvider>
      </ThemeProvider>
    </>
  )
}

export default App
