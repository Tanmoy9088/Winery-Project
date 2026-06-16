// import React from "react";
import { NavLink } from "react-router-dom";
import LionImg from "../assets/Footer/Lion.png";
import Frame_4 from "../assets/Header/Frame_4.png";
import { ShoppingCart } from "lucide-react";
const HeaderPage = () => {
  return (
    <>
      <nav className="bg-black border border-b-[#FFAB5E] border-black w-full ">
        <div className="w-full flex flex-wrap items-center justify-between gap-2 text-base lg:text-lg font-light text-white px-2 lg:px-4">
          <div>
            <img
              className="mt-4 mb-4 ml-2 md:ml-6 lg:ml-8 mr-2  lg:mr-8"
              src={LionImg}
              width="40px"
              height="46px"
              alt=""
            />
          </div>
          <div className="flex gap-4">
            <div className="flex gap-4 text-[#EDE6E1]">
              <NavLink
                to="/home"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                      ? "active underline underline-offset-8 decoration-[#FFAB5E]"
                      : " text-[#A89A92]"
                }
              >
                HOME
              </NavLink>
              {/* <NavLink
                to="/pages"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                      ? "active underline underline-offset-8 decoration-[#FFAB5E]"
                      : "text-[#A89A92]"
                }
              >
                PAGES
                
              </NavLink> */}
              <div className="relative group">
                <NavLink
                  to="/pages"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                        ? "active underline underline-offset-8 decoration-[#FFAB5E]"
                        : "text-[#A89A92]"
                  }
                >
                  PAGES
                </NavLink>

                {/* Dropdown */}
                <div className="absolute left-0 top-full pt-3 hidden group-hover:block z-50">
                  <div className="bg-black border border-[#FFAB5E] rounded-md min-w-[160px] py-2 text-sm">
                    <NavLink
                      to="/pages/about"
                      className="block px-4 py-2 text-[#A89A92] hover:text-white"
                    >
                      About Us
                    </NavLink>
                    <NavLink
                      to="/pages/team"
                      className="block px-4 py-2 text-[#A89A92] hover:text-white"
                    >
                      Our Team
                    </NavLink>
                    <NavLink
                      to="/pages/contactus"
                      className="block px-4 py-2 text-[#A89A92] hover:text-white"
                    >
                      Contact Us
                    </NavLink>
                    <NavLink
                      to="/pages/faq"
                      className="block px-4 py-2 text-[#A89A92] hover:text-white"
                    >
                      FAQ
                    </NavLink>
                  </div>
                </div>
              </div>
              <NavLink
                to="/shop"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                      ? "active  underline underline-offset-8 decoration-[#FFAB5E]"
                      : "text-[#A89A92]"
                }
              >
                SHOP
              </NavLink>
              <div className="relative group">
                <NavLink
                  to="/blog"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                        ? "active underline underline-offset-8 decoration-[#FFAB5E]"
                        : "text-[#A89A92]"
                  }
                >
                  BLOG
                </NavLink>
                <div className="absolute hidden left-0 top-full pt-3 group-hover:block z-50">
                  <div className="w-40 h-32 flex flex-col justify-evenly bg-[#111111] text-sm border border-[#FFAB5E] tracking-wider rounded-md px-4 py-2">
                    <NavLink
                      to="/blog"
                      className="text-[#A89A92] hover:text-white"
                    >
                      Blog
                    </NavLink>
                    <NavLink
                      to="/blog"
                      className="text-[#A89A92] hover:text-white"
                    >
                      Blog
                    </NavLink>
                    <NavLink
                      to="/blog"
                      className="text-[#A89A92] hover:text-white"
                    >
                      Blog
                    </NavLink>
                  </div>
                </div>
              </div>
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
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderPage;
