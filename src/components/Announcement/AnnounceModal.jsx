import React from "react";
import { useState } from "react";
import { editAnnouncementByIdHere } from "../../redux/actions/announcementAction";
import { useDispatch } from "react-redux";
import axios from "axios";
import { deleteOfferByIdHere } from "../../redux/actions/offerAction";
const AnnounceModal = ({ onCloseModal, announcement }) => {
  const dispatch = useDispatch();
  const handleCancelClick = () => {
    onCloseModal();
  };
  const [data, setData] = useState(announcement);
  const handleAnnouncementUpdate = async () => {
    try {
      dispatch(editAnnouncementByIdHere(data));
      // const response = await axios.patch(`http://www.localhost:8000/api/announcement/announcement/${data._id}`,data)
      // console.log(response);
      onCloseModal();
    } catch (error) {
      console.log(error);
    }
  };
  const handleAnnouncementDelete = async ()=>{
    try{
      dispatch(deleteOfferByIdHere(data._id))
      onCloseModal()
    }
    catch(error){
      console.log(error);
    }
  }
  // Function to handle changes in the input fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
    console.log(data);
  };
  return (
    <div className="w-full pb-5 sm:pb-0 sm:w-[450px] bg-[#E4F0FC] rounded-[10px]">
      <div className="w-full sm:w-[450px] py-4 sm:py-0 sm:h-[60px] bg-[#AAC6E5] rounded-t-[10px] flex items-center justify-center">
        <h1 className="text-[18px] sm:text-[25px] text-white">ANNOUNCEMENT</h1>
      </div>
      <div className="w-full sm:w-[450px] flex flex-col py-2 px-4 justify-between">
        <label>Title : </label>
        <input
          className=""
          type="text"
          name="title"
          value={data.title}
          onChange={handleInputChange}
        />
        {/* <p className="text-[#3A4DF8] font-[500]">Title : {announcement.title}</p> */}
      </div>
      <div className="w-full sm:w-[450px] flex flex-col py-2 px-4 justify-between">
        <label>Validity : </label>
        <input
          className=""
          type="text"
          name="title"
          value={announcement.validity}
          onChange={handleInputChange}
        />
        {/* <p className="text-[#3A4DF8] font-[500]">Validity : {announcement.validity}</p> */}
      </div>
      {/* <div className="sm:h-[120px] py-5 sm:py-0 mx-4 rounded-[9px] flex flex-col  px-5 shadow-md">
        <label>Description : </label>
        <input
          className=""
          type="text"
          name="title"
          value={data.description}
          onChange={handleInputChange}
        />
       
      </div> */}
      <div className="sm:h-[120px] py-5 sm:py-0 mx-4 rounded-[9px] flex items-center justify-center ">
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
      <div className="flex  sm:h-[45px] mt-5 gap-3 justify-end px-4 ">
        
        <button
          type="submit"
          className="bg-[#0AA1DD] text-[white] font-[600] font-inter p-4 rounded-[5px] flex justify-center  items-center text-[14px] h-[39px] "
          style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
          onClick={handleAnnouncementUpdate}
        >
          Update
        </button>
        <button
          type="submit"
          className="bg-[#f1f1f1] text-[black] font-[600] font-inter p-4 rounded-[5px] flex justify-center  items-center text-[14px] h-[39px] "
          style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
          onClick={handleCancelClick}
        >
          Cancel
        </button>{" "}
      </div>
    </div>
  );
};

export default AnnounceModal;
