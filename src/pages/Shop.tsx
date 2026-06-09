// import React, { useState } from "react";
import ShopArrays from "../services/ShopArray.json";

const Shop = () => {
  //  const filterArray = [
  //   "Show All",
  //   "Beverage",
  //   "Blanco",
  //   "Liquir",
  //   "Nero",
  //   "Sparkling",
  //   "Wine",
  // ];
  return (
    <>
      <div className="w-full flex gap-4 text-[#FFAB5E] bg-zinc-900 font-light tracking-wide px-5 py-2">
        {/* {filterArray.map((f) => (
          <button>{f}</button>
        ))} */}
      </div>
      <div className="w-full flex flex-col md:flex-row ">
        <div className="bg-zinc-900 tracking-widest text-white lg:w-1/4 flex flex-col p-10 items-start lg:h-screen">
          <div className="w-full flex flex-wrap flex-row md:flex-col gap-4  justify-center items-center px-4">
            <h4 className="mb-5">Caterogy</h4>
            <p>BEVERAGE</p>
            <p>BIANCO</p>
            <p>LIQUEUR</p>
            <p>NERO</p>
            <p>SPARKLING</p>
            <p>WINE</p>
          </div>
          <div></div>
          <div className="mt-5">
            Tags
            <p className="tracking-normal">Lorem ipsum dolor sit amet.</p>
            <p className="tracking-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ea.
            </p>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-10  bg-zinc-900 p-10">
          {ShopArrays?.map((wine, index: number) => (
            <div
              key={index}
              className="w-[350px]  bordeer border-1 border-white bg-black flex flex-col justify-center items-center gap-2 rounded-xl overflow-hidden"
            >
              <div>
                <img
                  src={wine.image}
                  width="300px"
                  height="200px"
                  alt=""
                  className="h-[350px] md-[400px] lg:h-[500px] w-48 object-cover object-center mb-2"
                />
              </div>

              <div className="text-white text-center">
                {" "}
                <h4 className="p-1 lg:text-3xl bg-gradient-to-l from-white from-10% to-[#FFAB5E] to-60% bg-clip-text text-transparent uppercase">
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

export default Shop;
