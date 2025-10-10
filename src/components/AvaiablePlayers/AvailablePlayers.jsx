import React, { use } from "react";

import userImg from "../../assets/user.png";
import flagImg from "../../assets/country.png";

const AvailablePlayers = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  console.log(playersData);

  return (
    <div className="max-w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
      {playersData.map((player) => (
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
              <button className="btn ">Choose Player</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;
