import React, { useState } from "react";

import userImg from "../../assets/user.png";
import flagImg from "../../assets/country.png";

const PlayerCard = ({
  player,
  setAvailableBalance,
  availableBalance,
  purchasedPlayers,
  setPurchasedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelected = (playerData) => {
    const playerPrice = parseInt(playerData.price.split(",").join(""));

    if (availableBalance < playerPrice) {
      alert("Not enough coins!!!");
      return;
    }
    setIsSelected(true);
    setAvailableBalance(availableBalance - playerPrice);

    setPurchasedPlayers([...purchasedPlayers, playerData]);
  };

  return (
    <div className="card bg-base-100  shadow-sm p-4">
      <figure>
        <img
          className="w-[300px] h-[240px] rounded-md"
          src={player.playerImg}
          alt="Shoes"
        />
      </figure>
      <div className="mt-4">
        <div className="flex">
          <img className="" src={userImg} alt="" />
          <h2 className="card-title ml-2 font-semibold text-xl">
            {player.playerName}
          </h2>
        </div>

        <div className="flex justify-between mt-3 border-b-1 border-gray-300 pb-4 ">
          <div className="flex items-center">
            <img className="w-[20px] h-[20px]" src={flagImg} alt="" />
            <span className="ml-2">{player.playerCountry}</span>
          </div>
          <button className="btn">{player.playerRole}</button>
        </div>

        <div className="flex justify-between mt-3 font-bold">
          <span>Rating</span>
          <span>{player.rating}</span>
        </div>

        <div className="flex justify-between mt-3">
          <span className="font-bold">{player.battingStyle}</span>
          <span>{player.bowlingStyle}</span>
        </div>

        <div className="card-actions  mt-3 flex justify-between items-center">
          <p className="font-bold">Price: ${player.price}</p>
          <button
            disabled={isSelected}
            onClick={() => {
              handleSelected(player);
            }}
            className="btn "
          >
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
