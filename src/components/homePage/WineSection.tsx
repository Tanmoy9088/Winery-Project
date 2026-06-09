// import React from "react";
import type { WineHome } from "../../typescript/WIneArray";
import WineArray from "../../services/HomeArray.json";

const WineSection = () => {
  const filterArray = [
    "Show All",
    "Beverage",
    "Blanco",
    "Liquir",
    "Nero",
    "Sparkling",
    "Wine",
  ];
  return (
    <>
      <div className="w-full flex flex-col  overflow-hidden">
        <div className="flex gap-4  flex-wrap text-[#FFAB5E] bg-black/90 font-light tracking-wide">
          {filterArray.map((f, index) => (
            <button key={index}>{f}</button>
          ))}
        </div>
        <div className="w-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-10 bg-black/90 p-10">
          {WineArray.map((wine: WineHome, index: number) => (
            <div
              key={index}
              className="w-[350px] bordeer border-1 border-white bg-black flex flex-col justify-center items-center gap-2 rounded-xl overflow-hidden"
            >
              <div>
                <img
                  src={wine.image}
                  width="300px"
                  height="200px"
                  alt=""
                  className="h-[550px] w-48 object-cover object-center mb-2"
                />
              </div>

              <div className="text-white text-center">
                {" "}
                <h4 className="p-1 text-3xl bg-gradient-to-l from-white from-10% to-[#FFAB5E] to-60% bg-clip-text text-transparent uppercase">
                  {wine.name}
                </h4>
                <p className="p-1">{wine.description}</p>
                <p className="p-1 mb-2">RS.{wine.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WineSection;
