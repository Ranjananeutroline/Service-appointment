import React from "react";
// import Header from "../components/Header";
import {Header} from "../../components/Header/Header"
// import Sidebar from "../components/Sidebar";
// import Header from "../../components/Header/Header"
// import Bhours from "../components/Bhours";
import Bhours from "../../components/Settings/Bhours"
// import Service from "../components/Service";
// import {Service} from "../../components/Settings/Service"
import Service from "../../components/Settings/Service"
// import BhoursC from "../components/BHoursC";
import BhoursC from "../../components/Settings/BHoursC"
import { AppProvider } from "../../AppContext";

const Settings = () => {
  return (
    <AppProvider>
    <div>
      <Header />
      <div className="flex relative">
        {/* <Sidebar /> */}
        <div className="px-[80px] py-5 overflow-y-hidden 
       
         ">
          <h1 className="text-[27px] text-[#3F26A5] ">Settings</h1>
        <BhoursC />
        <Service/>
        </div>
        
      </div>
    </div>
    </AppProvider>
  );
};

export default Settings;
