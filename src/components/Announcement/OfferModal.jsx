import React from "react";
import "./offermodal.css";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { useState } from "react";
import {
  deleteOfferByIdHere,
  editOfferByIdHere,
} from "../../redux/actions/offerAction";
const OfferModal = ({ onCloseModal, offer }) => {
  console.log(offer);
  const dispatch = useDispatch();
  const handleCancelClick = () => {
    onCloseModal();
  };
  const [data, setData] = useState(offer);

  // Function to handle changes in the input fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
    console.log(data);
  };
  // console.log(data);

  const handleOfferUpdate = async () => {
    try {
      dispatch(editOfferByIdHere(data));

      onCloseModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full sm:w-[450px]  bg-[#E4F0FC] rounded-[10px]">
      <div className="w-full sm:w-[450px] sm:h-[60px] bg-[#84aedd]  rounded-t-[10px] flex items-center justify-center">
        <h1 className="text-[20px] text-white p-4">OFFER</h1>
      </div>
      <div className="w-full sm:w-[450px] flex flex-col gap-2 px-4">
        <div className="w-full">
          <div className="text-[16px] py-2 flex flex-col">
            <label>Offer title : </label>
            <input
              className=""
              type="text"
              name="title"
              value={data.title}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <div className=" py-2 flex flex-col w-full">
            Offer Validity :
            <input
              type="text"
              name="validity"
              value={data.validity}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="sm:h-[120px]  flex items-center justify-center ">
          <div className="text-[16px] py-2 flex w-full flex-col">
            Description :
            <input
              type="text"
              name="description"
              value={data.description}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className="flex  sm:h-[45px] pb-5 sm:pb-0 mt-5 gap-3 justify-end px-4 ">
        <button
          type="submit"
          className="bg-[#0AA1DD] text-[white] font-[600] font-inter p-4 rounded-[5px] flex justify-center  items-center text-[14px] h-[39px] "
          style={{ boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.25)" }}
          onClick={handleOfferUpdate}
        >
          Update
        </button>
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
