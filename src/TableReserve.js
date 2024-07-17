import { useState } from "react";

function TableReserve() {
  const [person, setPerson] = useState(1);
  const [name, setName] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [date, setDate] = useState();
  const [hour, setHour] = useState();
  const [success, setSuccess] = useState(false);

  function handlePlusPerson(e) {
    e.preventDefault();
    if (person < 12) setPerson(person + 1);
  }

  function handleReducePerson(e) {
    e.preventDefault();
    if (person > 1) setPerson(person - 1);
  }

  function handleReserved(e) {
    e.preventDefault();
    const ControlHours = function () {
      if (
        today.getDate() === reserveDate.getDate() &&
        today.getMonth() === reserveDate.getMonth() &&
        today.getFullYear() === reserveDate.getFullYear()
      ) {
        const isValidHour = reserveDate.getHours() > today.getHours();
        return isValidHour;
      }
    };

    const today = new Date();
    const reserveDate = new Date(date);

    if (ControlHours()) {
      setInputValue("");
      setName("");
      setDate("");
      setSuccess(true);
    }
    if (
      inputValue.trim().length !== 0 &&
      name.trim().length !== 0 &&
      /^[A-Za-z\s]+$/.test(name) &&
      reserveDate &&
      reserveDate.length !== 0 &&
      reserveDate.getFullYear() === 2024 &&
      reserveDate.getDate() >= today.getDate() &&
      reserveDate.getMonth() >= today.getMonth()
    ) {
      setInputValue("");
      setName("");
      setDate("");
      setSuccess(true);
    }
  }

  function handleEnterReserved(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleReserved(e);
    }
  }

  return success ? (
    <div className="Success-Reserve">
      <h2>
        Your reservation is complete!{" "}
        <span className="check-icon">
          <i class="fa-solid fa-check"></i>
        </span>
      </h2>
      <p className="success-p">{person} person for reserve complete</p>
      <p className="success-p">See you later ! </p>
    </div>
  ) : (
    <>
      <div className="form-container">
        <form className="reserve-form">
          <h2 className="reserve-title">Make a Reservation Now</h2>
          <input
            className="reserve-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="CustomerName"
          ></input>
          <input
            className="reserve-input"
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          ></input>
          <label className="time-label">
            Time
            <select
              className="time-select"
              type="time"
              placeholder="Time"
              value={hour}
              onChange={(e) => setHour(e.target.value)}
            >
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
            </select>
          </label>

          <div className="person-reserve">
            <label className="person-label">
              Person
              <div className="person-input-section">
                {" "}
                <button className="person-btn" onClick={handleReducePerson}>
                  -
                </button>
                <input
                  className="reserve-input"
                  id="person-input"
                  type="text"
                  name="guests"
                  value={person}
                ></input>
                <button className="person-btn" onClick={handlePlusPerson}>
                  +
                </button>{" "}
              </div>
            </label>
          </div>
          <label className="specialday-label">
            Specialday
            <select className="specialday-input">
              <option>Birthday</option>
              <option>Business Night</option>
              <option>Anniversary</option>
            </select>
          </label>

          <textarea
            placeholder="Requests"
            id="request-text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleEnterReserved}
          ></textarea>
          <button
            type="submit"
            className="reserve-btn"
            onClick={handleReserved}
          >
            Reserve
          </button>
        </form>
      </div>
    </>
  );
}
export default TableReserve;
