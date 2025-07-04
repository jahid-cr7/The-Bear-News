import React from 'react';
import swimming from "../assets/swimming.png"; // Adjust the path as necessary
import Class from "../assets/class.png"; // Adjust the path as necessary
import Playground from "../assets/playground.png"; // Adjust the path as necessary
const QZone = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg space-y-4 mt-4">
      <h2 className="font-bold ">Q-Zone</h2>

      <div className="flex flex-col items-center space-y-4">
        <img src={swimming} alt="" />
        <img src={Class} alt="" />
        <img src={Playground} alt="" />
      </div>
    </div>
  );
};

export default QZone;