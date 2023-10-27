import React, { useState } from "react";
import menu from "../images/menu.png";
import dashboard from "../images/dashboard.png";
import appointment from "../images/appointment.png";
import announcement from "../images/announcement.png";
import settings from "../images/settings.png";
import profile from "../images/admin-photo.png";
import logout from "../images/logout-icon.png";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const handleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="flex h-[500px] hidden lg:block sticky top-20 ">
      <div
        className={`h-screen border-r p-5
         ${open ? "w-[289]" : "w-[100px]"} relative duration-100`}
      >
        <div
          className={`h-screen   ${
            open ? "w-[289] " : "w-[70px]  pl-0"
          } relative duration-300`}
        >
          <div
            className={`flex w-[200px] h-[40px]  items-center
            rounded-md p-[20px]
             ${
               open ? "w-[289]" : "w-[60px] p-[5px] ml-0"
             } relative duration-300 `}
          >
            <div className="flex ml-3 justify-center items-center cursor-pointer">
              <img src={menu} className="h-[16px] " onClick={handleMenu} />
            </div>
          </div>

          <div
            className={`flex w-[200px] h-[47px] bg-[#78C1F3] items-center mt-[15px] 
            rounded-md p-[20px]
             ${
               open ? "w-[289]" : "w-[60px] p-[5px] ml-0"
             } relative duration-300 `}
          >
            <Link to="/dashboard">
              <div className="flex ml-3 justify-center gap-3 items-center">
                <img src={dashboard} className="w-[20px] h-[20px]" />
                <h3 className={`${!open && "hidden"}`}>Dashboard</h3>
              </div>
            </Link>
          </div>
          <div
            className={`flex w-[200px] h-[47px] bg-[#78C1F3] items-center  
            mt-[18px] rounded-md gap-5 p-[20px] border
            ${
              open ? "w-[289]" : "w-[60px] p-[5px] ml-0"
            }  relative duration-300`}
          >
            <Link to="/appointment">
              <div className="flex ml-3 justify-center gap-3 items-center ">
                <img src={appointment} className="w-[20px] h-[20px]" />
                <h3 className={`${!open && "hidden"}`}>Appointment</h3>{" "}
              </div>
            </Link>
          </div>
          <div
            className={`flex  w-[200px] h-[47px] bg-[#78C1F3] items-center 
             mt-[18px] rounded-md gap-5 p-[20px] border 
             ${
               open ? "w-[289]" : "w-[60px] p-[5px] ml-0"
             }  relative duration-300`}
          >
            <Link to="/announcement">
              <div className="flex ml-3 justify-center gap-3 items-center ">
                <img src={announcement} className="w-[20px] h-[20px]" />
                <h3 className={`${!open && "hidden"}`}>Announcement</h3>{" "}
              </div>
            </Link>
          </div>
          <div
            className={`flex  w-[200px] h-[47px] bg-[#78C1F3] items-center
              mt-[18px] rounded-md   gap-5 p-[20px] border
              ${
                open ? "w-[289]" : "w-[60px] p-[5px] ml-0"
              }  relative duration-300`}
          >
            <Link to="/settings">
              <div className="flex ml-3 justify-center gap-3 items-center ">
                <img src={settings} className="w-[20px] h-[20px]" />
                <h3 className={`${!open && "hidden"}`}>Settings</h3>{" "}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
