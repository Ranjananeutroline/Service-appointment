import React, { useState } from "react";
import header_avatar from "../images/header_avatar.png";
import { useNavigate } from "react-router-dom";
import menu from "../images/menu.png";
import dashboard from "../images/dashboard.png";
import appointment from "../images/appointment.png";
import announcement from "../images/announcement.png";
import settings from "../images/settings.png";
import profile from "../images/admin-photo.png";
import logout from "../images/logout-icon.png";
import { Link } from "react-router-dom";

const SidebarForMobile = () => {
  const [profileDropDown, setProfileDropDown] = useState(false);
  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setProfileDropDown(!profileDropDown);
  };
  const handleProfileNavigation = () => {
    handleDropdownToggle();
    navigate("/profile");
  };
  const [open, setOpen] = useState(true);

  const handleMenu = () => {
    setOpen(!open);
  };

  
  return (
    <div className="">
      <div
        className="absolute top-[15%] block lg:hidden cursor-pointer h-[30px] w-[30px] md:h-[40px] z-20 md:w-[40px]"
        onClick={handleDropdownToggle}
      >
        {/* <svg
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
            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
          />
        </svg> */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>

      </div>

      {profileDropDown && (
        <div className="absolute top-[11.2%] z-50 dropdown-content flex flex-col bg-[#F6F8FC] px-2 py-1  shadow-lg  transition duration-200">
          <div
            className={` ${
              open ? "w-[60px] " : "w-[70px]  pl-0"
            } relative duration-300`}
          >
            <div
              className={`flex h-[30px]  items-center
            rounded-md
             ${
               open ? "w-[60]" : "w-[60px] ml-0"
             } relative duration-300 `}
            >
              <div className="flex absolute top-0 right-0 justify-center items-center cursor-pointer">
                {/* <img src={menu} className="h-[16px] " onClick={handleMenu} /> */}
                <div className="h-[16px]" onClick={handleDropdownToggle}>
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div
              className={`flex h-[47px] bg-[#78C1F3] items-center 
            rounded-md justify-center
             ${
               open ? "w-[60px]" : "w-[60px] p-[2px] ml-0"
             } relative duration-300 `}
            >
              <Link to="/dashboard">
                <div className="flex justify-center gap-3 items-center">
                  <img src={dashboard} className="w-[20px] h-[20px]" />
                  {/* <h3 className={`${!open && "hidden"}`}>Dashboard</h3> */}
                </div>
              </Link>
            </div>
            <div
              className={`flex  h-[47px] bg-[#78C1F3] items-center  
            mt-2 rounded-md justify-center
            ${
              open ? "w-[60px]" : "w-[60px] p-[2px] ml-0"
            }  relative duration-300`}
            >
              <Link to="appointment">
                <div className="flex justify-center gap-3 items-center ">
                  <img src={appointment} className="w-[20px] h-[20px]" />
                  {/* <h3 className={`${!open && "hidden"}`}>Appointment</h3>{" "} */}
                </div>
              </Link>
            </div>
            <div
              className={`flex justify-center  h-[47px] bg-[#78C1F3] items-center 
             mt-[2px] rounded-md border 
             ${
               open ? "w-[60px]" : "w-[60px] p-[5px] ml-0"
             }  relative duration-300`}
            >
              <Link to="/announcement">
                <div className="flex justify-center gap-3 items-center ">
                  <img src={announcement} className="w-[20px] h-[20px]" />
                  {/* <h3 className={`${!open && "hidden"}`}>Announcement</h3>{" "} */}
                </div>
              </Link>
            </div>
            <div
              className={`flex justify-center h-[47px] bg-[#78C1F3] items-center
              mt-[2px] rounded-md border
              ${
                open ? "w-[60px]" : "w-[60px] p-[5px] ml-0"
              }  relative duration-300`}
            >
              <Link to="/settings">
                <div className="flex  justify-center gap-3 items-center ">
                  <img src={settings} className="w-[20px] h-[20px]" />
                  {/* <h3 className={`${!open && "hidden"}`}>Settings</h3>{" "} */}
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarForMobile;
