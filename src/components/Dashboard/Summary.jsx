import React from 'react'
import cross from "../images/dash_cross.png";
import checked from "../images/icons-checked.svg";

const Summary = () => {
  return (
    <div><div className=" px-2 md:px-5 mt-10 w-full xl:max-w-[1600px]  border rounded-[20px] bg-[#ebe9e9] ">
    <div>
      <h1 className=" text-[18px] md:text-[22px] my-2.5">Summary</h1>
      <div className=" flex flex-col gap-3">
        <div className="bg-white w-full rounded-[5px] gap-2 mb-5 flex items-center justify-between p-2 md:p-5 md:px-8 shadow-sm">
          <div>
            <h2 className="text-[#346AFF] text-[12px] md:text-[20px] font-[500] ">
              Yesterday
            </h2>
          </div>

          <div className="flex items-center gap-1 md:gap-3 ">
            <img
              src={checked}
              className="w-[16px] h-[16px] md:w-[27px] md:h-[27px]"
            />
            <p className="text-[10px] md:text-[20px]">
              You have{" "}
              <span className="text-[#1C19CC] text-[10px] md:text-[20px]">
                7 appointments
              </span>{" "}
              to review.
            </p>
          </div>

          <div className="flex gap-1 md:gap-4 items-center">
            <p className="text-[#0A0879] text-[9px] md:text-[20px]">
              Review
            </p>
            <img src={cross} className="h-[27px] w-[27px]" />
          </div>
        </div>
        <div className="bg-white w-full rounded-[5px] gap-2 mb-5 flex items-center justify-between p-2 md:p-5 md:px-8 shadow-sm">
          <div>
            <h2 className="text-[#346AFF] text-[12px] md:text-[20px] font-[500] ">
              Today
            </h2>
          </div>

          <div className="flex items-center gap-1 md:gap-3 ">
            <img
              src={checked}
              className="w-[16px] h-[16px] md:w-[27px] md:h-[27px]"
            />
            <p className="text-[10px] md:text-[20px]">
              You have{" "}
              <span className="text-[#1C19CC] text-[10px] md:text-[20px]">
                7 appointments
              </span>{" "}
              to review.
            </p>
          </div>

          <div className="flex gap-1 md:gap-4 items-center">
            <p className="text-[#0A0879] text-[9px] md:text-[20px]">
              Review
            </p>
            <img src={cross} className="h-[27px] w-[27px]" />
          </div>
        </div>
        <div className="bg-white w-full rounded-[5px] gap-2 mb-5 flex items-center justify-between p-2 md:p-5 md:px-8 shadow-sm">
          <div>
            <h2 className="text-[#346AFF] text-[12px] md:text-[20px] font-[500] ">
              Tomorrow
            </h2>
          </div>

          <div className="flex items-center gap-1 md:gap-3 ">
            <img
              src={checked}
              className="w-[16px] h-[16px] md:w-[27px] md:h-[27px]"
            />
            <p className="text-[10px] md:text-[20px]">
              You have{" "}
              <span className="text-[#1C19CC] text-[10px] md:text-[20px]">
                7 appointments
              </span>{" "}
              to review.
            </p>
          </div>

          <div className="flex gap-1 md:gap-4 items-center">
            <p className="text-[#0A0879] text-[9px] md:text-[20px]">
              Review
            </p>
            <img src={cross} className="h-[27px] w-[27px]" />
          </div>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default Summary
