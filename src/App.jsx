import { Suspense, useState } from "react";
import "./App.css";

import AvailablePlayers from "./components/AvaiablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

// importing Toast
import { ToastContainer } from "react-toastify";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

const playersPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);

  const [availableBalance, setAvailableBalance] = useState(1000000);

  const [purchasedPlayers, setPurchasedPlayers] = useState([]);
  // console.log(purchasedPlayers);

  const removePlayer = (p) => {
    const filteredData = purchasedPlayers.filter(
      (ply) => ply.playerName !== p.playerName
    );
    setPurchasedPlayers(filteredData);
    setAvailableBalance(
      availableBalance + parseInt(p.price.split(",").join(""))
    );
  };

  return (
    <>
      {/* Navbar Component */}
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className=" max-w-11/12 mx-auto flex justify-between items-center">
        <h1
          className="font-bold
         text-2xl"
        >
          {toggle === true
            ? "Available Players"
            : `Selected Player (${purchasedPlayers.length}/6)`}
        </h1>

        <div className="font-bold">
          <button
            onClick={() => setToggle(true)}
            className={`py-2 px-4 border-1 border-gray-300 rounded-l-xl border-r-0 ${
              toggle === true ? "bg-[#E7FE29]" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`py-2 px-4 border-1 border-gray-300 rounded-r-xl border-l-0 ${
              toggle === false ? "bg-[#E7FE29]" : ""
            }`}
          >
            Selected <span>({purchasedPlayers.length})</span>
          </button>
        </div>
      </div>
      {toggle === true ? (
        // Available Players Component
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <AvailablePlayers
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playersPromise={playersPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        // Selected Players Component
        <SelectedPlayers
          removePlayer={removePlayer}
          purchasedPlayers={purchasedPlayers}
        ></SelectedPlayers>
      )}

      {/* Calling the Toast Container */}
      <ToastContainer />
    </>
  );
}

export default App;
