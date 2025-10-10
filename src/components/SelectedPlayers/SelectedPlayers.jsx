import React from "react";

import deleteImg from "../../assets/delete.png";

const SelectedPlayers = ({ purchasedPlayers }) => {
  // console.log(purchasedPlayers);
  return (
    <div className="max-w-11/12 mx-auto">
      <div className="border-1 border-gray-300 flex justify-between items-center rounded-xl p-5">
        {/* left section */}
        <div className="flex items-center gap-4">
          <img
            className="w-15
             h-15 rounded-2xl"
            src="https://i.ibb.co.com/PbSwZ6M/sakib.jpg"
            alt=""
          />
          <div>
            <h1 className="font-semibold text-xl">Sakib Al-Hasan</h1>
            <p>Left-Hand-Bat</p>
          </div>
        </div>

        {/* right section */}
        <div>
          <img src={deleteImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SelectedPlayers;
