import React, { useState } from "react";
import edit from "../images/editicon.svg";
import { Link } from "react-router-dom";
import BhourModal from "./BhourModal";
import icon_edit from "../images/icon-edit.svg";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const Bhours = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const onCloseModal = () => setModalOpen(false);

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>
      {/* {modalOpen && <BhourModal setOpenModal={setModalOpen}  />} */}
      <Modal open={modalOpen} onClose={onCloseModal} center className="">
        <BhourModal />
      </Modal>
      <div className="pb-[20px]">
        <div
          className=" bg-[#eef0f6] rounded-[8px] sm:p-5 p-2 shadow-md w-full xl:w-[1030px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex justify-between ">
            <h1 className="text-[22px] text-[#0C1A97]">Business Hours</h1>

            {isHovering && (
              <button onClick={openModal}>
                <img src={edit} className="h-[20px] w-[28px]" />
              </button>
            )}
          </div>
          <div className="flex gap-5 sm:gap-11 pt-3">
            <h3 className="w-[90px] sm:w-[110px] text-[14px] sm:font-medium">
              Business Days
            </h3>
            <div className="flex gap-2 md:gap-8">
              <h2 className="sm:w-[60px]  text-[14px] sm:font-medium">Monday</h2>
              <p>-</p>
              <h2 className="sm:w-[60px]  text-[14px] sm:font-medium">Monday</h2>
            </div>
          </div>
          <div className="flex gap-5 sm:gap-11 pt-3">
            <h3 className="w-[90px] sm:w-[110px] text-[14px] sm:font-medium">Work Hours</h3>
            <div className="flex gap-2 md:gap-8">
              <h2 className="sm:w-[60px] text-[14px] sm:font-medium ">9:00</h2>
              <p>-</p>
              <h2 className="sm:w-[100px] text-[14px] sm:font-medium">15:00</h2>
            </div>
          </div>
          <div className="flex gap-5 sm:gap-11 pt-3">
            <h3 className="w-[90px] sm:w-[110px] text-[14px] sm:font-medium">Holidays</h3>
            <div className="flex gap-2 md:gap-8">
              <h2 className="sm:w-[60px] text-[14px] sm:font-medium ">Saturday</h2>
              <p>-</p>
              <h2 className="sm:w-[60px] text-[14px] sm:font-medium ">Sunday</h2>
            </div>
          </div>
          <div className="flex gap-5 sm:gap-11 pt-3">
            <h3 className="w-[90px] sm:w-[110px] text-[14px] sm:font-medium">Break</h3>
            <div className="flex gap-2 md:gap-8">
              <h2 className="sm:w-[60px] text-[14px] sm:font-medium ">12:45</h2>
              <p>-</p>
              <h2 className="sm:w-[60px] text-[14px] sm:font-medium  "> 13:25</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bhours;
