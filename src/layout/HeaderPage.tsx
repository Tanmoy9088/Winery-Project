// import React from "react";
import { NavLink } from "react-router-dom";
import LionImg from "../assets/Footer/Lion.png";
import Frame_4 from "../assets/Header/Frame_4.png";
import { ShoppingCart } from "lucide-react";
const HeaderPage = () => {
  return (
    <>
      <nav className="bg-black flex flex-wrap justify-between items-center border border-b-[#FFAB5E] border-black w-full  overflow-hidden">
        <div className="flex items-center gap-2 text-base lg:text-lg font-light text-white mx-2 lg:mx-4">
          <img
            className="mt-4 mb-4 ml-2 md:ml-6 lg:ml-8 mr-2  lg:mr-8"
            src={LionImg}
            width="40px"
            height="46px"
            alt=""
          />
          <NavLink
            to="/home"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                  ? "active underline underline-offset-8 decoration-[#FFAB5E]"
                  : "text-zinc-300"
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/pages"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                  ? "active underline underline-offset-8 decoration-[#FFAB5E]"
                  : "text-zinc-300"
            }
          >
            PAGES
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                  ? "active  underline underline-offset-8 decoration-[#FFAB5E]"
                  : "text-zinc-300"
            }
          >
            SHOP
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                  ? "active underline underline-offset-8 decoration-[#FFAB5E]"
                  : "text-zinc-300"
            }
          >
            BLOG
          </NavLink>
        </div>
        <div className="flex items-center px-10 gap-10">
          <NavLink
            to="/footer"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                  ? "active underline underline-offset-8 decoration-[#FFAB5E] text-white "
                  : "text-white"
            }
          >
            <ShoppingCart />
          </NavLink>
          <NavLink
            to="/footer"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                  ? "active underline underline-offset-8 decoration-[#FFAB5E]"
                  : "text-zinc-300"
            }
          >
            <img src={Frame_4} width="36px" height="14px" alt="" />
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default HeaderPage;
