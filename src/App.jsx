import { Suspense, useState } from "react";
import "./App.css";

import AvailablePlayers from "./components/AvaiablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

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

  return (
    <>
      {/* Navbar Component */}
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className="border-2 border-red-500 max-w-11/12 mx-auto flex justify-between items-center">
        <h1
          className="font-bold
         text-2xl"
        >
          Available Players
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
            Selected <span>(0)</span>
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
        <SelectedPlayers purchasedPlayers={purchasedPlayers}></SelectedPlayers>
      )}
    </>
  );
}

export default App;
