import { Suspense } from "react";
import "./App.css";

import AvailablePlayers from "./components/AvaiablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const playersPromise = fetchPlayers();

  return (
    <>
      {/* Navbar Component */}
      <Navbar></Navbar>

      {/* Available Players Component */}
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>

      {/* Selected Players Component */}
      {/* <SelectedPlayers></SelectedPlayers> */}
    </>
  );
}

export default App;
