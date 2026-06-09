// import React from "react";
import Img from "../../assets/homePage/Section2.jpg";
import Map from "../../assets/homePage/map.png";
import Loire from "../../assets/homePage/Loire.png";

const MiddleSection = () => {
  return (
    <>
      <div className="w-full overflow-hidden">
        {" "}
        {/* Hero section */}
        <div className="relative bg-black w-full h-[600px] overflow-hidden ">
          <img
            src={Img}
            alt=""
            className="absolute top-0 right-0 h-full w-2/3 object-cover"
          />

          {/* Dark overlay on text side */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/90  to-transparent" />

          <p className="absolute lg:left-20 top-20 text-white text-[5rem] lg:text-[6.25rem] font-bold leading-none z-10">
            Where can <br /> you taste our <br /> drinks?
          </p>

          <button className="absolute left-24 bottom-12 lg:bottom-20 z-10 bg-transparent text-white text-2xl lg:text-3xl border border-white px-6 py-2 rounded-2xl hover:bg-white hover:text-black transition-all duration-300">
            Shop Now
          </button>
        </div>
        {/* Map section */}
        <div className="pt-8 flex flex-col lg:flex-row w-full h-full justify-center items-center bg-black">
          <div className="lg:w-1/3 mb-4 md:mb-0 bg-[#7c440f]">
            <img src={Map} alt="Map" className="w-full h-full object-contain" />
          </div>
          <div className=" lg:w-2/3 flex flex-col items-center bg-white">
            <p className="text-right py-8 px-20 text-2xl lg:text-5xl font-light">
              NAPA VALLEY IS THE <br />
              MOST FAMOUS <br />
              WINEMAKING REGION IN <br />
              PIEMONTE REGION <br />
              <button
                onClick={() => console.log("clicked")}
                className="uppercase mt-2 text-lg text-right text-[#111111] font-light backdrop-blur-3xl border rounded-3xl px-2 py-1 cursor-pointer active:scale-95 
          transition-all duration-500 hover:text-black hover:border-[#FFAB5E] hover:bg-transparent"
              >
                Discover
              </button>
            </p>

            <img
              src={Loire}
              alt="Loire"
              className="w-64 lg:w-[500px] h-36 lg:h-full object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddleSection;
