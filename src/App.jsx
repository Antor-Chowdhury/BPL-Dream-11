import "./App.css";

import AvailablePlayers from "./components/AvaiablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

function App() {
  return (
    <>
      {/* Navbar Component */}
      <Navbar></Navbar>

      {/* Available Players Component */}
      <AvailablePlayers></AvailablePlayers>

      {/* Selected Players Component */}
      {/* <SelectedPlayers></SelectedPlayers> */}
    </>
  );
}

export default App;
