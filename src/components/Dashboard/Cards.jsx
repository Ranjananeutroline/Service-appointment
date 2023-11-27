import React from "react";
import user from "../images/card_user.png";
import appointment from "../images/card_appointment.png";
import request from "../images/card_request.png";
// import ok from "../images/card_ok.png";
import arrow from "../images/card_arrow.png";
import icon_ok from "../images/icons-ok.svg";

const Cards = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-between ">
      <div
        className="bg-gradient-to-b from-[#D5FEC7] to-[#F5F5F5]
         h-[130px] w-[230px] rounded-[10px] border p-3 flex flex-col gap-1  "
      >
        <div>
          {" "}
          <h3 className="text-[16px] mb-2 font-[400]">Users</h3>
        </div>
        <div className="flex justify-between">
          <p className="text-[22px] text-[#1C19CC]">250</p>
          <img src={user} className="mr-2 h-[28px] w-[28px] " />
        </div>

        <div className="flex items-center gap-1 justify-end mt-3">
          <p className="text-[9px] ">See all Users</p>
          <img src={arrow} className="h-[12px] w-[12px] " />
        </div>
      </div>

      <div
        className="bg-gradient-to-b from-[#C7F1FE]  to-[#F5F5F5]
              h-[130px] w-[230px] rounded-[10px] border p-3 flex flex-col gap-1  "
      >
        <div>
          {" "}
          <h3 className="text-[16px] mb-2 font-[400]">Total Appointments</h3>
        </div>
        <div className="flex justify-between">
          <p className="text-[22px] text-[#1C19CC]">250</p>
          <img src={appointment} className="mr-2  h-[28px] w-[28px] " />
        </div>

        <div className="flex items-center gap-1 justify-end mt-3">
          <p className="text-[9px]">See all Appointments</p>
          <img src={arrow} className="h-[12px] w-[12px]" />
        </div>
      </div>

      <div
        className="bg-gradient-to-b from-[#E6C7FE]  to-[#F5F5F5]
              h-[130px] w-[230px] rounded-[10px] border p-3 flex flex-col gap-1 "
      >
        <div>
          {" "}
          <h3 className="text-[16px] mb-2 font-[400]">Appointment Requests</h3>
        </div>
        <div className="flex justify-between">
          <p className="text-[22px] text-[#1C19CC]">250</p>
          <img src={request} className="mr-2  h-[28px] w-[28px] " />
        </div>

        <div className="flex items-center gap-1 justify-end mt-3">
          <p className="text-[9px]">See all Requests</p>
          <img src={arrow} className="h-[12px] w-[12px] " />
        </div>
      </div>

      <div
        className="bg-gradient-to-b from-[#FFCDCD]  to-[#F5F5F5]
              h-[130px] w-[230px] rounded-[10px] border p-3 flex flex-col gap-1 "
      >
        <div>
          {" "}
          <h3 className="text-[16px] mb-2 font-[400] ">
            Completed Appointments
          </h3>
        </div>
        <div className="flex justify-between">
          <p className="text-[22px] text-[#1C19CC]">250</p>
          <img src={icon_ok} className="mr-2  h-[28px] w-[28px]" />
        </div>

        <div className="flex items-center gap-1 justify-end mt-3">
          <p className="text-[9px]">See all</p>
          <img src={arrow} className="h-[10px] w-[15px] " />
        </div>
      </div>
    </div>
  );
};

export default Cards;
