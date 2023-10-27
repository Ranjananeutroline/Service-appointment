import React, { useState } from "react";
import "./bhourmodal.css";
import trash from "../images/trash.png";
import add from "../images/add.png";

function BhourModal({ setOpenModal }) {
  const [selectedFromWeek, setSelectedFromWeek] = useState("");
  const [selectedToWeek, setSelectedToWeek] = useState("");

  const handleSelectFrom = (event) => {
    setSelectedFromWeek(event.target.value);
  };
  const handleSelectTo = (event) => {
    setSelectedToWeek(event.target.value);
  };

  const [workHourOpen, setWorkHourOpen] = useState(false);
  const [breakOpen, setBreakOpen] = useState(false);

  const toggleWorkHour = () => {
    setWorkHourOpen(!workHourOpen);
  };

  const toggleBreak = () => {
    setBreakOpen(!breakOpen);
  };


  return (
  
      <div className="modalContainer">
        <div className="titleCloseBtn">
         
        </div>
        <div className="title">
          <h1>Business Hours</h1>
        </div>
        <div className="business_days">
          <h2>Business Days</h2>
          <div className="select_days">
            <select value={selectedFromWeek} onChange={handleSelectFrom}>
              <option value="">Select</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
            <p>to</p>
            <select value={selectedToWeek} onChange={handleSelectTo}>
              <option value="">Select</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
          </div>
          <div className="edit">
            <img src={add} />
            <img src={trash} />
          </div>

          {/* {selectedWeekday && <p>Selected weekday: {selectedWeekday}</p>} */}
        </div>
        <div className="days">
          <h2>Days</h2>
          <div>
            <div className="button_days">
              <button onClick={toggleWorkHour}>Mon</button>
              <button onClick={toggleWorkHour}>Tue</button>
              <button onClick={toggleWorkHour}>Wed</button>
              <button onClick={toggleWorkHour}>Thu</button>
              <button onClick={toggleWorkHour}>Fri</button>
              <button onClick={toggleWorkHour}>Sat</button>
              <button onClick={toggleWorkHour}>Sun</button>
            </div>

            <div className="days_edit">
              <div className="work_hours">
                <h2>Work Hours</h2>
                <div className="select_time">
                  <select value={selectedFromWeek} onChange={handleSelectFrom}>
                    <option value="">Select</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                  </select>
                  <p>to</p>
                  <select value={selectedToWeek} onChange={handleSelectTo}>
                    <option value="">Select</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                  </select>
                </div>

                {/* {selectedWeekday && <p>Selected weekday: {selectedWeekday}</p>} */}
              </div>

              <div className="work_hours">
                <h2>Break</h2>
                <div className="select_time">
                  <select value={selectedFromWeek} onChange={handleSelectFrom}>
                    <option value="">Select</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                  </select>
                  <p>to</p>
                  <select value={selectedToWeek} onChange={handleSelectTo}>
                    <option value="">Select</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                  </select>
                </div>

                {/* {selectedWeekday && <p>Selected weekday: {selectedWeekday}</p>} */}
              </div>
            </div>
          </div>
        </div>
        <div className="business_days">
          <h2>Holidays</h2>
          <div className="select_days">
            <select value={selectedFromWeek} onChange={handleSelectFrom}>
              <option value="">Select</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
            <p>to</p>
            <select value={selectedToWeek} onChange={handleSelectTo}>
              <option value="">Select</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
          </div>
          <div className="edit">
            <img src={add} />
            <img src={trash} />
          </div>

          {/* {selectedWeekday && <p>Selected weekday: {selectedWeekday}</p>} */}
        </div>
        <div className="footer">
          {/* <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel */}
          {/* </button> */}
          {/* <button>Continue</button> */}
        </div>
      </div>
    
  );
}

export default BhourModal;
