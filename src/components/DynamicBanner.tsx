// import React from "react";
import { useLocation } from "react-router-dom";
import ShopBanner from "../assets/Banner/Shop_banner.jpg";
import HomeBanner from "../assets/Banner/HomeBanner.jpg";
const DynamicBanner = () => {
  const location = useLocation();
  console.log(location);

  const banners: Record<string, string> = {
    "/pages": ShopBanner,
    "/shop": HomeBanner,
  };

  return (
    <div
      className={`flex items-center pl-10 w-full h-[200px]`}
      style={{
        backgroundImage: `url(${banners[location.pathname] ?? ShopBanner})`,
      }}
    >
      <h4 className="text-white text-6xl font-bold tracking-widest">
        {location.pathname === "/pages"
          ? "Pages"
          : location.pathname === "/shop"
            ? "Shop"
            : location.pathname === "/blog"
              ? "Blog"
              : location.pathname === "/about"
                ? "About"
                :  location.pathname === "/pages/contactus"?"Pages-Contact Us": location.pathname === "/pages/aboutus"?"Pages-AboutUs":""}
      </h4>
    </div>
  );
};

export default DynamicBanner;
