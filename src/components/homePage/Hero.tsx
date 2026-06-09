// import React from "react";
import HeroWine from "../../assets/homePage/herowine.png";
import grapes from "../../assets/homePage/grapes.png";
import design from "../../assets/homePage/Design.png";
// import design1 from "../../assets/homePage/design1.png";
import design2 from "../../assets/homePage/design2.png";
const Hero = () => {
  return (
    <>
      <div className="relative h-[500px] md:h-[650px] lg:h-[800px] overflow-hidden bg-black w-full">
        <img
          src={grapes}
          alt=""
          className="absolute bottom-16 w-[40%] max-w-[415px] opacity-40 right-[22%] "
        />
        <img
          src={HeroWine}
          alt=""
          className="absolute top-3  h-[90%] max-h-[785px] opacity-100 right-[27%]"
        />
        <img
          src={design2}
          alt=""
          className="absolute bottom-0 w-[90%] max-w-[400px] opacity-20 left-[-15%]"
        />
        <img
          src={design}
          alt=""
          className="absolute top-[-35%] right-2 w-[30%] max-w-[440px] opacity-30"
        />

        <div className="absolute left-2 lg:left-20 top-36 text-white">
          <p className="text-2xl lg:text-4xl tracking-widest mb-0 text-red-200">
            Taste Like Heaven
          </p>
          <h2 className="bg-gradient-to-l from-white from-20% to-[#FFAB5E] to-60% bg-clip-text text-transparent  font-medium text-[75px] lg:text-[150px] tracking-wide uppercase leading-none -mt-4">
            Discover
          </h2>
          <h3 className="bg-gradient-to-l from-white to-[#FFAB5E] bg-clip-text text-transparent text-6xl lg:text-8xl font-light uppercase leading-none -mt-2">
            Plenty of <br />{" "}
            <span className="font-thin text-[90px]text-yellow-200">
              wineries
            </span>
          </h3>
          <button
            onClick={() => console.log("clicked")}
            className="uppercase mt-5 text-2xl lg:text-5xl text-[#FFAB5E] font-light backdrop-blur-3xl border rounded-3xl w-fit px-8 py-4 cursor-pointer active:scale-95 
          transition-all duration-500 bg-white/10 hover:text-white hover:border-[#FFAB5E] hover:bg-transparent"
          >
            Discover
          </button>
        </div>

        {/* <img
          src={design2}
          alt=""
          className="absolute top-[-55%]  h-[70%] max-h-[785px] opacity-20 left-[1%]"
        /> */}
      </div>
    </>
  );
};

export default Hero;
