import React from "react";

import deleteImg from "../../assets/delete.png";

const SelectedCard = ({ player, removePlayer }) => {
  //   console.log(player);

  const handleRemove = () => {
    removePlayer(player);
  };

  return (
    <div className="border-1 border-gray-300 flex justify-between items-center rounded-xl p-5 mt-3">
      {/* left section */}
      <div className="flex items-center gap-4">
        <img
          className="w-15
             h-15 rounded-2xl"
          src={player.playerImg}
          alt=""
        />
        <div>
          <h1 className="font-semibold text-xl">{player.playerName}</h1>
          <p>{player.battingStyle}</p>
        </div>
      </div>

      {/* right section */}
      <div onClick={handleRemove}>
        <img src={deleteImg} alt="" />
      </div>
    </div>
  );
};

export default SelectedCard;
