import React, { useState, useContext } from "react";
import userImg from "../../assets/user.svg";
import phone from "../../assets/phone.svg";
import mail from "../../assets/mail.svg";
import calender from "../../assets/calender.svg";
import time from "../../assets/time.svg";
import axios from "axios";
import { AppContext } from "../../pages/AppContext";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import sucessGreen from "../../assets/sucess-green.svg";
import { Formik, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import "./CalenderModal.css";
import Simple from "../../shared/Calender/Sample";
import Detail from "../../shared/AppointmentDetail/Detail";
import { appointmentSchema } from "../../schemas/appointmentSchema";
import { createNewAppointment } from "../../redux/actions/appointmentAction";
import { duration } from "moment";
const closeIcon = (
  <svg
    width="26"
    height="26"
    viewBox="2 9 20 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.3331 21.3331L15.9999 15.9999M15.9999 15.9999L10.6665 10.6665M15.9999 15.9999L21.3332 10.6665M15.9999 15.9999L10.6665 21.3332"
      stroke="black"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const closeIcon2 = (
  <svg
    width="11"
    height="11"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.6666 11.6666L6.33335 6.33335M6.33335 6.33335L1 1M6.33335 6.33335L11.6667 1M6.33335 6.33335L1 11.6667"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
function AddAppointment(props) {
 

  const onSubmit = async (values, actions) => {
    console.log("here");
    console.log(values);
    const fullname = values.fullname;
    const phonenumber = values.phonenumber;
    // console.log(user);
    // const email = user.data.details.email;
    const email = values.email;
    // console.log(email);
    const service = values.service;
    const date = values.date;
    const time = values.time;
    // console.log(fullname, phonenumber, email, service, date, time);
    const success = await dispatch(
      createNewAppointment({ fullname: fullname, email:email, phonenumber:phonenumber, service:service, date:date,time:time})
    );
console.log(success);
    // console.log('success bho',success);
    actions.resetForm();
    setOpen(false)
    // closeEditPopup()
    // notify();
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      phonenumber: "",
      service: "",
      date: "",
      duration: "",
      time: "",
      // dateofbirth: "",
    },
    validationSchema: appointmentSchema,
    onSubmit,
  });
  console.log(values);
  const dispatch = useDispatch()
  const { setShowModal, ShowModal } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [openSucess, setOpenSucess] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const user = useSelector((state) => state.auth.user);

  // const onOpenSucess = () => {
  //   if (validateForm()) {
  //     setOpenSucess(true);
  //   }
  // };
  const onCloseSucess = () => setOpenSucess(false);


  const handleSelectedDate = (selectedDate) => {
    setOpen(false);
    setSelectedDate(selectedDate);
    console.log("selected date is here", selectedDate);
    setFieldValue("date", selectedDate);
  };
  //   setOpen(false);
  // };
  // const generateTimeOptions = () => {
  //   const startTime = 6; // 6 am
  //   const endTime = 18; // 6 pm

  //   const options = [];
  //   for (let hour = startTime; hour <= endTime; hour++) {
  //     const timeLabel = hour <= 12 ? `${hour}:00 AM` : `${hour - 12}:00 PM`;
  //     options.push(
  //       <option key={timeLabel} value={timeLabel}>
  //         {timeLabel}
  //       </option>
  //     );
  //   }
  //   return options;
  // };
  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit}
          className=" flex  w-[full] md:w-[400px] md:h-[auto] pt-4  flex-col bg-[#F5F5FA]"
        >
          <p className="mb-[15px] text-center text-[18px]  tracking-wide font-[500] font-serif md:mb-[10px] md:text-[22px] ">
            Appointment
          </p>
          <div className="flex items-center relative md:mx-3">
            <img className="w-3.5  absolute left-4" src={userImg} alt="user"></img>
            <input
              className={`w-full border-none rounded-[5px]  text-[14px] h-[39px] m-2 pl-[32px] border-[0.5px]   focus:bg-white focus:outline-none  focus:ring-1 focus:ring-slate-500 placeholder:text-[#8B8989] bg-[#dceaff4d] shadow-shado2  placeholder:text-[13px]  md:w-[400px] md:h-[45px] md:placeholder:text-[15px] md:pl-[35px] ${
                errors.fullname && touched.fullname ? "input-error" : ""
              }`}
              type="text"
              name="fullname"
              value={values.fullname}
              onChange={handleChange}
              placeholder="Full Name"
            />
            {/* {formErrors.name && (
              <p className="text-red-500  absolute right-2 text-[20px] mx-3 ">
              </p>
            )} */}
          </div>
          <div className="flex  items-center relative md:mx-3">
            <img className="w-4 absolute left-4" src={mail} alt="mail"></img>
            <input
              className={`w-full border-none rounded-[5px]  text-[14px] h-[39px] m-2 pl-[32px] border-[0.5px]   focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-500  placeholder:text-[#8B8989] bg-[#dceaff4d] shadow-shado2  placeholder:text-[13px]  md:w-[400px] md:h-[45px] md:placeholder:text-[15px] md:pl-[35px] ${
                errors.email && touched.email ? "input-error" : ""
              }`}
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div className="flex items-center relative md:mx-3">
            <img
              className="w-4 h-4 absolute left-4"
              src={phone}
              alt="phone"
            ></img>
            <input
              className={`w-[100%] border-none rounded-[5px]  text-[14px] h-[39px] m-2  pl-[32px] border-[0.5px]   focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-500  placeholder:text-[#8B8989] bg-[#dceaff4d] shadow-shado2  placeholder:text-[13px]  md:w-[400px] md:h-[45px] md:placeholder:text-[15px] md:pl-[35px] ${
                errors.phonenumber && touched.phonenumber ? "input-error" : ""
              }`}
              type="phone"
              name="phonenumber"
              placeholder="Phone No"
              value={values.phonenumber}
              onChange={handleChange}
            />
          </div>
          {/* SERVICE */}
          <div className="flex flex-col md:flex-row md:gap-2.5">
            <div className="md:ml-3 relative">
              <select
                onChange={handleChange}
                name="service"
                className={`rounded-[8px] border-none w-[95%] m-2 mr-11 text-[14px] text-[#8B8989] h-[39px] md:m-2 pl-[14px] border-[0.5px]  focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-500  bg-[#dceaff4d] shadow-shado2   md:w-[260px] md:h-[45px] md:pl-[15px]  md:text-[15px] ${
                  errors.service && touched.service ? "input-error" : ""
                }`}
                // type="service"
                value={values.service}
              >
                <option value="">Select a Service</option>
                <option value="Legal Consultant">Legal Consultant</option>
                <option value="Banana">Banana</option>
                <option value="Orange">Orange</option>
              </select>
            </div>
            {/* {values.service && (
              <div className=" my-1 md:my-0 pl-2 md:pl-0">
                <button
                  type="button"
                  className="text-[14px] h-[39px] border-none  text-[#ad80d8] w-[80px] rounded-[5px]  md:mt-2  border-[0.5px] outline-none active:outline-none  focus:outline-none   bg-[#dceaff4d] shadow-shado2   md:w-[80px] md:h-[45px]  md:text-[15px] "
                >
                  {values.duration}
                </button>
              </div>
            )} */}
          </div>
          <div className="  md:mx-3 flex  flex-col md:justify-start md:items-center md:gap-5 md:flex-row ">
            <div className=" relative w-[95%]  md:w-auto ">
              <img
                className="  z-10 w-4  absolute top-[1.20rem] left-4 md:top-[1.40rem]"
                src={calender}
                alt="calender"
              ></img>
              <button
                onClick={onOpenModal}
                type="button"
                className={`  relative text-[14px] text-left pl-[33px] md:pl-0 border-none h-[39px]  w-full rounded-[5px]  text-[#8B8989]  m-2  border-[0.5px]  focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-500  bg-[#dceaff4d] shadow-shado2   md:text-center   md:w-[140px] md:h-[45px]  md:text-[15px] ${
                  errors.date && touched.date ? "input-error" : ""
                }`}
              >
                {values.date === "" ? (
                  <p>Select Date</p>
                ) : (
                  <p className="md:pl-3">{values.date}</p>
                )}
              </button>
            </div>
            {/* <div className=" relative w-[100px] md:w-auto ">
             

              <button
                type="button"
                className="  text-[14px] h-[39px]  w-full rounded-[5px]  text-[#8B8989]  m-2  border-[0.5px]  focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-500  bg-[#dceaff4d] shadow-shado2   md:w-[140px] md:h-[45px] md:text-[15px]   "
              >
                Select Time
              </button>
            </div> */}
            <div className=" relative  w-[95%] md:w-[100px]  ">
              <img
                className="  z-10 w-4  absolute top-[1.20rem] left-4 md:top-[1.40rem]"
                src={time}
                alt="time"
              ></img>
              <select
                onChange={handleChange}
                name="time" // Updated from "services" to "time"
                className={`rounded-[5px] w-full relative border-none m-2 mr-11 text-[14px]  text-[#8B8989] h-[39px] md:m-2 pl-[33px] border-[0.5px] focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-500 bg-[#dceaff4d] shadow-shado2 md:w-[150px] md:h-[45px] md:pl-[30px] md:text-[15px] ${
                  errors.time && touched.time ? "input-error" : ""
                }`}
                value={values.time}
              >
                <option value="">Select Time</option>
                {/* {generateTimeOptions} */}

                <option value="9:00 AM">9:00 AM</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="9:00 AM">9:00 AM</option>
              </select>
            </div>
          </div>
          <div
            className={`text-center mb-4 mt-2 text-[14px] md:text-[16px] md:mt-3 md:mb-0 ${
              values.time && values.date ? "" : "invisible"
            }`}
          >
            <p className="h-[20px] ">
              Appointment is set to{" "}
              <span className="text-[#114978] font-[600]">
                {values.time}, {values.date}
              </span>
            </p>
          </div>
          <div className="flex justify-center items-center mt-5 mb-5">
            {/* <button
              type="button"
              onClick={onOpenSucess}
              className="  bg-[#0AA1DDF7]  border  hover:bg-[#0199d5]   text-[#ffffff] tracking-wide rounded-[10px]  text-[17px] font-sans font-[600] focus:outline-none px-5 py-2 "
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              Submit
            </button> */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#7895CB] hover:bg-[#6ea1d8] text-[16px] text-[#ffffff] rounded font-[600] focus:outline-none px-4 py-2"
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                fontFamily:
                  "Canva Sans,Noto Sans Variable,Noto Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif",
              }}
            >
              Submit
            </button>
          </div>

          {/* <Modal
            classNames={{
              modal: "customModalSucess",
            }}
            open={openSucess}
            onClose={onCloseSucess}
            center
            closeIcon={closeIcon2}
          >
            <div className="h-[60px] flex flex-col justify-center   bg-[#68bc44db]">
              <p className="font-[600] font-sans text-[white] w-full text-center mb-1 text-[22px] tracking-wide">
                Success
              </p>
              <div className=" w-full relative">
                <img
                  src={sucessGreen}
                  className="w-[30px] h-[30px] absolute bottom-[-30px]  left-1/2 transform -translate-x-1/2"
                  alt=""
                />
              </div>
            </div>

            <Detail data={formData} />
            <div className=" font-roboto mb-6 mt-4   gap-3 flex justify-end mr-7 ">
              <button
                type="button"
                onClick={onCloseSucess}
                className="bg-[#F5F5FA] border-[1px] border-[#68bc44] text-[#1f3b43] text-[16px] font-[600] rounded hover:bg-[#b8d1f84d]   focus:outline-none px-6 py-2"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                  fontFamily:
                    "Canva Sans,Noto Sans Variable,Noto Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif",
                }}
              >
                Edit
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-[#68BC44] border-none  text-[#ffffff] text-[16px] rounded  hover:bg-[#50b725]  font-[600]    focus:outline-none px-4 py-1"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                  fontFamily:
                    "Canva Sans,Noto Sans Variable,Noto Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif",
                }}
              >
                Submit
              </button>
            </div>
          </Modal> */}
        </form>
        {/* Calendar */}
        <Modal
          classNames={{
            modal: "customModalCalender",
          }}
          open={open}
          onClose={onCloseModal}
          center
          closeIcon={closeIcon}
        >
          <Simple onSelectDate={handleSelectedDate} />
          {/* <Simple /> */}
          {/* <Calendar onSelectDate={handleSelectedDate} /> */}
        </Modal>
      </div>
    </>
  );
}

export default AddAppointment;
