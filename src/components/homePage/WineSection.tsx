import React, { useState } from "react";
import type { WineHome } from "../../types/WIneArray";
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
  const [activeFilter, setActiveFilter] = useState("");
  return (
    <>
      <div className="w-full flex flex-col pt-4 overflow-hidden">
        <div className="flex gap-4  flex-wrap text-[#D4A857] bg-[#171210] font-light tracking-wide px-10">
          {filterArray.map((f, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm transition-colors       ${
                activeFilter === f
                  ? "bg-[#D4A857] text-[#3A2A0A] font-medium"
                  : "bg-[#221A17] text-[#A89A92] hover:text-[#D4A857] border border-[#33271F]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-10  bg-[#171210] p-10">
          {WineArray.map((wine: WineHome, index: number) => (
            <div
              key={index}
              className="w-[350px] bordeer border-1 border-[#33271F] bg-[#221A17] flex flex-col justify-center items-center gap-2 rounded-xl overflow-hidden hover:border-[#D4A857] hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              <div>
                <img
                  src={wine.image}
                  alt={wine.name}
                  className="h-[400px] w-full object-contain object-center mb-2"
                />
              </div>

              <div className="text-[#C1D9D1] text-center">
                {" "}
                <h4 className="p-1 text-3xl bg-gradient-to-l from-white from-10% to-[#FFAB5E] to-60% bg-clip-text text-transparent uppercase">
                  {wine.name}
                </h4>
                <p className="p-1">{wine.description}</p>
                <p className="p-1 mb-2">Rs. {wine.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WineSection;
