import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Neutroline_logo from "../images/Neutroline_logo.png";
import header_bell from "../images/header_bell.svg";
import header_avatar from "../images/header_avatar.png";
import header_down from "../images/header_down.png";
import menu from "../images/menu.png";
import dashboard from "../images/dashboard.png";
import appointment from "../images/appointment.png";
import announcement from "../images/announcement.png";
import { useNavigate } from "react-router-dom";
import settings from "../images/settings.png";
import profile from "../images/admin-photo.png";
import logout from "../images/logout-icon.png";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [profileDropDown, setProfileDropDown] = useState(false);
  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setProfileDropDown(!profileDropDown);
  };

  const handleProfileNavigation = () => {
    handleDropdownToggle();
    navigate("/profile");
  };
  const handleLogoutNavigation = () => {
    handleDropdownToggle();
    navigate("/");
  };
  return (
    <header className="border-b bg-#FFFFFF z-10 bg-white border-gray-300 py-2 sticky top-0">
      <div className="flex items-center justify-between lg:mr-4 mx-0 mx-auto flex-wrap">
        <Link to="/">
          <div className="flex items-center">
            <img
              src={Neutroline_logo}
              className=" w-[65px] h-[45px]  md:w-[90px] md:h-[60px]"
            />
            <h3 className=" text-[15px] text-dark md:text-[30px] ">
              Neutrosys Inc.
            </h3>
          </div>
        </Link>
        <div className="flex items-center lg:hidden block relative">
          <img
            src={header_avatar}
            className="relative cursor-pointer h-[30px] w-[30px] mr-[10px] md:h-[40px] md:w-[40px]"
            onClick={handleDropdownToggle}
          />
          {profileDropDown && (
            <div className="absolute top-10 right-1 dropdown-content flex flex-col gap-3 bg-[#d8dfdf] px-5 py-3  shadow-lg  transition duration-200">
              <div
                className="flex gap-3  text-[#000000] hover:text-[#2222a2] active:text-[#0b0b32] "
                onClick={handleProfileNavigation}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>

                <a href="#" className="">
                  Profile
                </a>
              </div>

              <div
                className="flex gap-3  text-[#000000] hover:text-[#2222a2] active:text-[#0b0b32]"
                onClick={handleLogoutNavigation}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>

                <a href="#">Logout</a>
              </div>
            </div>
          )}
          <FiMenu
            className="lg:hidden block h-6 w-6 cursor-pointer mr-2 sm:mr-5 md:mr-10"
            onClick={() => setOpen(!open)}
          />
        </div>

        <nav
          className={`${
            open ? "block" : "hidden"
          } w-full lg:flex lg:items-center lg:w-auto`}
        >
          <ul
            className={`${
              open ? "hidden" : "hidden"
            } text-base text-gray-700 lg:flex lg:justify-between lg:items-center`}
          >
            <li>
              <img
                src={header_bell}
                className=" h-[30px] w-[23px] md:h-[33px] md:w-[33px] mr-[14px]"
              />
            </li>
            <li>
              {/* <h3 className=" text-[13px]  md:mr-[8px] md:text-[17px]">
                Pooja Tiwari
              </h3> */}
            </li>
            <li>
              <img
                src={header_avatar}
                className="relative cursor-pointer h-[30px] w-[30px] mr-[10px] md:h-[40px] md:w-[40px]"
                onClick={handleDropdownToggle}
              />
              {profileDropDown && (
                <div className="absolute right-1 dropdown-content flex flex-col gap-3  bg-[#d8dfdf] px-5 py-3  shadow-lg  transition duration-200">
                  <div
                    className="flex gap-3  text-[#000000] hover:text-[#2222a2] active:text-[#0b0b32] "
                    onClick={handleProfileNavigation}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>

                    <a href="#" className="">
                      Profile
                    </a>
                  </div>

                  <div
                    className="flex gap-3  text-[#000000] hover:text-[#2222a2] active:text-[#0b0b32]"
                    onClick={handleLogoutNavigation}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                      />
                    </svg>

                    <a href="#">Logout</a>
                  </div>
                </div>
              )}
            </li>
          </ul>
          <ul
            className={`${
              open ? "block" : "hidden"
            } text-base text-gray-700 lg:flex lg:justify-between lg:hidden block mx-5`}
          >
            <li>
              <div
                className={`flex  h-[47px]  items-center justify-center mt-[15px] 
            rounded-md p-[20px] border
             ${
               open ? "w-[289]" : "w-[60px] p-[5px] ml-0"
             } relative duration-300 `}
                onClick={() => {
                  setOpen(!open);
                  navigate("/");
                }}
              >
                <div className="flex ml-3 justify-center gap-3 items-center">
                  <img src={dashboard} className="w-[20px] h-[20px]" />
                  <h3
                    className={`${
                      !open && "hidden"
                    } text-[14px] md:text-[20px]`}
                  >
                    Dashboard
                  </h3>
                </div>
              </div>
            </li>
            <li>
              <div
                className={`flex  h-[47px]  items-center justify-center mt-[15px] 
            mt-[18px] rounded-md gap-5 p-[20px] border
            ${
              open ? "w-[289]" : "w-[60px] p-[5px] ml-0"
            }  relative duration-300`}
              >
                <div className="flex ml-3 justify-center gap-3 items-center ">
                  <img src={appointment} className="w-[20px] h-[20px]" />
                  <h3
                    className={`${
                      !open && "hidden"
                    } text-[14px] md:text-[20px]`}
                  >
                    Appointment
                  </h3>{" "}
                </div>
              </div>
            </li>
            <li>
              <div
                className={`flex  h-[47px] items-center justify-center mt-[15px] 
             mt-[18px] rounded-md gap-5 p-[20px] border 
             ${
               open ? "w-[289]" : "w-[60px] p-[5px] ml-0"
             }  relative duration-300`}
              >
                <Link to="announcement">
                <div className="flex ml-3 justify-center gap-3 items-center ">
                  <img src={announcement} className="w-[20px] h-[20px]" />
                  <h3
                    className={`${
                      !open && "hidden"
                    } text-[14px] md:text-[20px]`}
                    >
                    Announcement
                  </h3>{" "}
                </div>
                    </Link>
              </div>
            </li>
            <li>
              <div
                className={`flex  h-[47px]  items-center justify-center mt-[15px] 
              mt-[18px] rounded-md   gap-5 p-[20px] border
              ${
                open ? "w-[289]" : "w-[60px] p-[5px] ml-0"
              }  relative duration-300`}
              >
                <div className="flex ml-3 justify-center gap-3 items-center ">
                  <img src={settings} className="w-[20px] h-[20px]" />
                  <h3
                    className={`${
                      !open && "hidden"
                    } text-[14px] md:text-[20px]`}
                  >
                    Settings
                  </h3>{" "}
                </div>
              </div>
            </li>
            {/* <li>
              {" "}
              <div
                className={`flex w-[200px] h-[47px]  items-center mt-[15px] 
            rounded-md p-[20px]
             ${
               open ? "w-[289]" : "w-[60px] p-[5px] ml-0"
             } relative duration-300 `}
                onClick={() => {
                  setOpen(!open);
                  navigate("/profile");
                }}
              >
                <div className="flex ml-3 justify-center gap-3 items-center">
                  <img src={profile} className="w-[20px] h-[20px]" />
                  <h3
                    className={`${
                      !open && "hidden"
                    } text-[14px] md:text-[20px]`}
                  >
                    Profile
                  </h3>
                </div>
              </div>
            </li> */}
            {/* <li>
              <div
                className={`flex w-[200px] h-[47px] items-center mt-[5px] 
            rounded-md p-[20px]
             ${
               open ? "w-[289]" : "w-[60px] p-[5px] ml-0"
             } relative duration-300 `}
              >
                <div className="flex ml-3 justify-center gap-3 items-center">
                  <img src={logout} className="w-[20px] h-[20px]" />
                  <h3
                    className={`${
                      !open && "hidden"
                    } text-[14px] md:text-[20px]`}
                  >
                    Logout
                  </h3>
                </div>
              </div>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};
