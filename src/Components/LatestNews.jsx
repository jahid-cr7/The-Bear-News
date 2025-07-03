import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center bg-base-300 rounded-2xl px-6 py-4 gap-5 mt-4">
      <p className="text-base-100 bg-[#D72050] px-3 py-1.5 ">Latest</p>
      <Marquee className="flex gap-5 text-[18px] " speed={60} pauseOnHover>
        <p className="mr-5">
          <span className="font-bold">UK Welfare Bill Passed:</span> Labour's welfare reform bill narrowly passed with major concessions, weakening PM Keir Starmer’s authority.
        </p>
        <p className="mr-5">
          
          <span className="font-bold">Qantas Cyberattack:</span> Millions of customers' data possibly exposed due to a third-party breach.
        </p>
        <p className="mr-5">
          <span className="font-bold">Senate Tie-Breaker: </span> US Trump's major tax bill passed 51‑50, with VP Vance casting the deciding vote.
        </p>
        <p className="mr-5">
        
          <span className="font-bold">India Fire Incident:</span>  A fire broke out at a pharmaceutical plant; other global tensions rise in Thailand and Poland.
        </p>
        <p className="mr-5">
          
          <span className="font-bold">U19 World Cup:</span> FIBA  Jasper Johnson impressed for Team USA with a strong performance off the bench.
        </p>


      </Marquee>
    </div>
  );
};

export default LatestNews;
