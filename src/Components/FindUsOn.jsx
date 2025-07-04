import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";


const FindUsOn = () => {
  return (
    <div>
      <h2 className="mt-4 font-bold">Find Us On</h2>
      <div>
        <div className="w-full join join-vertical mt-4 mb-4">
          <button className="btn bg-base-100 justify-start join-item"><span className="mr-2"><FaFacebook size={20}></FaFacebook></span> Facebook</button>
          <button className="btn bg-base-100 justify-start join-item"><span className="mr-2"><FaTwitter size={20}></FaTwitter></span> Twitter</button>
          <button className="btn bg-base-100 justify-start join-item"><FaInstagram className="mr-2" size={20}></FaInstagram> Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUsOn;
