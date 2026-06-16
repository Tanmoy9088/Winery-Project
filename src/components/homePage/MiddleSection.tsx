// import React from "react";
import Img from "../../assets/homePage/Section2.jpg";
import Map from "../../assets/homePage/Tuscany.webp";
// import Loire from "../../assets/homePage/Loire.png";

const MiddleSection = () => {
  return (
    <>
      <div className="w-full overflow-hidden px-4 py-10 md:px-0 bg-[#171210] border border-[#33271F]">
        {" "}
        {/* Hero section */}
        <div className="relative w-full h-[600px] overflow-hidden ">
          <img
            src={Img}
            alt=""
            className="absolute top-0 right-0 h-full w-2/3 object-cover"
          />

          {/* Dark overlay on text side */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#171210] via-60% to-[#171210] to-20%" />

          <h1 className="absolute lg:left-20 top-20 text-[#EDE6E1] text-[5rem] lg:text-[6.25rem] font-bold leading-none z-10">
            Where can <br /> you <span className="text-[#D4A857]"> taste</span>{" "}
            our <br /> drinks?
          </h1>

          <button className="absolute left-24 bottom-12 lg:bottom-20 z-10 bg-[#7A1F2B] text-[#EDE6E1] text-2xl lg:text-3xl border border-[#D4A857] px-6 py-2 rounded-2xl hover:bg-[#D4A857] hover:text-[#3A2A0A] transition-all duration-300">
            Shop Now
          </button>
        </div>
        {/* Map section */}
        <div className="flex flex-col lg:flex-row gap-10 w-full h-full justify-between items-center text-[#EDE6E1] p-10">
          {/* <div className=" lg:w-full flex flex-row gap-10 justify-between items-center "> */}
          <div className="h-full px-16 py-8 mb-4 md:mb-0 border-4 rounded-xl border-[#33271F] bg-[#221A17]">
            <img
              src={Map}
              alt="Map"
              className="w-96 object-contain rounded-full"
            />
            {/* <img
              src={Loire}
              alt="Loire"
              className="w-64 lg:w-[500px] h-36 lg:h-full object-contain"
            /> */}
          </div>
          <div>
            <h3 className="text-right py-8 px-20 text-2xl lg:text-5xl font-light">
              TUSCANY VALLEY IS THE <br />
              MOST FAMOUS <br />
              WINEMAKING REGION IN <br />
              PIEMONTE REGION <br />
            </h3>
            <button
              onClick={() => console.log("clicked")}
              className="uppercase mt-2 text-lg text-right text-[#3A2A0A] bg-[#D4A857] font-light backdrop-blur-3xl border rounded-3xl absolute right-52 px-3 py-1 cursor-pointer active:scale-95 
          transition-all duration-500 hover:text-[#f7e09a] hover:border-[#d28901] hover:bg-transparent"
            >
              Discover
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default MiddleSection;
