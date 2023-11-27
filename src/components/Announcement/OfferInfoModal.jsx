import React from "react";
import "./offermodal.css";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { useState } from "react";
import {
  deleteOfferByIdHere,
  editOfferByIdHere,
} from "../../redux/actions/offerAction";
const OfferModal = ({ closeInfoModal, offer }) => {
  console.log(offer);
  const dispatch = useDispatch();
  const handleCancelClick = () => {
    closeInfoModal();
  };
  const [data, setData] = useState(offer);

  // Function to handle changes in the input fields
 
  // console.log(data);


  return (
    <div className="w-full sm:w-[450px]  bg-[#E4F0FC] rounded-[10px]">
      <div className="w-full sm:w-[450px] sm:h-[60px] bg-[#84aedd]  rounded-t-[10px] flex items-center justify-center">
        <h1 className="text-[20px] text-white p-4">OFFER</h1>
      </div>
      <div className="w-full sm:w-[450px] flex flex-col gap-2 px-4">
        <div className="w-full">
          <div className="text-[16px] py-2 flex flex-col">
            <label>Offer title : {data.title}</label>
           
          </div>
        </div>
        <div>
          <div className=" flex flex-col w-full">
            Offer Validity : {data.validity}
           
          </div>
        </div>
        <div className="  flex items-center justify-center ">
          <div className="text-[16px] py-2 flex w-full flex-col">
            Description :{data.description}
           
          </div>
        </div>
      </div>

      <div className="flex  sm:h-[45px] pb-5 sm:pb-0 mt-5 gap-3 justify-end px-4 ">
        <button
          type="submit"
          className="bg-[#f1f1f1] text-[black] font-[600] font-inter p-4 rounded-[5px] flex justify-center  items-center text-[14px] h-[39px] "
          style={{ boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.25)" }}
          onClick={handleCancelClick}
        >
          Cancel
        </button>{" "}
      </div>
    </div>
  );
};

export default OfferModal;
