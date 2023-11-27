import React from "react";
// import "./announcementmodal.css";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import { deleteAnnouncementByIDHere, editannouncementByIdHere } from "../../redux/actions/announcementAction";
const announcementDeleteModal = ({ onCloseDeleteModal, announcement }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState(announcement);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch()
  console.log('yeha aayo ni');
  console.log(announcement);
  const handleCancelClick = () => {
    onCloseDeleteModal();
  };


  const handleannouncementDelete = async ()=>{
    try{
      console.log(data);
      dispatch(deleteAnnouncementByIDHere(data._id))
      onCloseDeleteModal()
    }
    catch(error){
      console.log(error);
    }
  }
  return (
    <div className="w-full sm:w-[450px]  bg-[#E4F0FC] rounded-[10px]">
      <div className="w-full sm:w-[450px] sm:h-[60px] bg-[#84aedd]  rounded-t-[10px] flex items-center justify-center">
        <h1 className="text-[20px] text-white p-4">Are You sure want to Delete?</h1>
      </div>
  
      <div className="flex  sm:h-[45px] pb-5 sm:pb-0 mt-5 gap-3 justify-end px-4 ">
        <button
          type="submit"
          className="bg-[#d50606] text-[white] font-[600] font-inter p-4 rounded-[5px] flex justify-center  items-center text-[14px] h-[39px] "
          style={{ boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.25)" }}
          onClick={handleannouncementDelete}
        >
          Delete
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

export default announcementDeleteModal;
