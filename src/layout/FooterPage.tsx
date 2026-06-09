// import React from "react";
import LionImg from "../assets/Footer/Lion.png";
// import { LogsIcon } from "lucide-react";

const FooterPage = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-black px-4  w-full  overflow-hidden">
        <div className="mt-32 mb-20">
          <img src={LionImg} width="108px" height="126px" alt="" />
        </div>
        <div className="w-full flex justify-around mx-10 mt-5">
          <div className="text-white flex flex-col text-left font-inter  ">
            <p className="uppercase font-semibold tracking-[15%] text-lg p-1 mb-1 text-[#FFAB5E]">
              orders
            </p>
            <p className="p-1">Learn more about our winery.</p>
            <p className="p-1">Feel free to contact us anytime.</p>
            <p className="p-1">See all our pricing offers.</p>
          </div>
          <div className="text-white flex flex-col text-right font-inter  ">
            <p className="uppercase p-1 font-semibold tracking-[15%] text-lg mb-1 text-[#FFAB5E]">
              contact
            </p>
            <p className="p-1">6th street, London, United Kingdom.</p>
            <p className="p-1">+9088143007 +4321000012 +0000543210 </p>
            <p className="p-1">shopby@winery.com</p>
          </div>
        </div>
        {/* <hr className="mt-10 w-full" /> */}
        <div className=" mt-24 w-full h-16 bg-gradient-to-r from-black to-[#FFAB5E]">
          <div className="border h-16 mt-[1px] flex justify-around lg:justify-between lg:px-24 items-center border-black font-semibold text-xs text-center bg-black text-white">
            <p>Privacy Policy</p>
            <p>Copyright@Tanmoy Interactive {year}</p>
            <p>Impresun</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterPage;
