import { useState } from "react";
import logo from "./assets/Logo.png";
function TableReserve() {
  const [person, setPerson] = useState(1);
  const [name, setName] = useState("");
  const [requestValue, setRequestValue] = useState("");
  const [date, setDate] = useState();
  const [hour, setHour] = useState("19");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState({
    nameError: "",
    personError: "",
    requestError: "",
    dateError: "",
    hourError: "",
    EmptyError: "",
  });

  function handlePlusPerson(e) {
    e.preventDefault();
    if (person < 12) setPerson(person + 1);
  }

  function handleReducePerson(e) {
    e.preventDefault();
    if (person > 1) setPerson(person - 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setPerson(1);
    setName("");
    setRequestValue("");
    setDate("");
    setHour("19:00");
    setSuccess(false); // Reset success state
    setError({
      nameError: "",
      personError: "",
      requestError: "",
      dateError: "",
      hourError: "",
    }); // Reset error state
  }

  function handleReserved(e) {
    e.preventDefault();

    const today = new Date();
    const reserveDate = new Date(date);
    const sameDay =
      reserveDate.getDate() === today.getDate() &&
      reserveDate.getMonth() === today.getMonth();

    const isPastDate = reserveDate < today && !sameDay;

    console.log(sameDay);
    console.log(reserveDate.getDate());
    const newErrors = {
      nameError: "",
      personError: "",
      requestError: "",
      dateError: "",
      hourError: "",
    };

    let isValid = true;

    if (name.trim().length === 0) {
      newErrors.nameError = "Name is required.";
      isValid = false;
    }
    if (!/^[A-Za-z\s]+$/.test(name)) {
      newErrors.nameError = "Invalid name format.";
      isValid = false;
    }

    // Date and time validation

    function controlForm() {
      if (isNaN(reserveDate.getTime())) {
        newErrors.dateError = "please fill date field";
        isValid = false;
      } else {
        return false;
      }
    }
    if (isPastDate) {
      newErrors.dateError = "Invalid date: Please select a future date.";
      isValid = false;
    }
    if (sameDay && parseInt(hour) < today.getHours()) {
      newErrors.hourError = "Invalid time: Please select a future time.";
      isValid = false;
    }

    if (reserveDate.getFullYear() !== 2024) {
      newErrors.dateError = "Please select correct year";
      isValid = false;
      // Person validation
      if (person < 1 || person > 12) {
        newErrors.personError = "Number of persons must be between 1 and 12.";
        isValid = false;
      }

      // Request validation
      if (requestValue.trim().length === 0) {
        newErrors.requestError = "Request is required.";
        isValid = false;
      }
    }
    controlForm();

    if (isValid) {
      setSuccess(true);
    } else {
      setError(newErrors);
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
      <img src={logo}></img>
      <h2 className="success-description">
        Your reservation is complete!{" "}
        <span className="check-icon">
          <i class="fa-solid fa-check"></i>
        </span>
      </h2>{" "}
      <h2 className="succes-customername">Hi! {name}</h2>
      <p className="success-p">{person} person for reserve complete</p>
      <p className="success-p">See you later ! </p>
    </div>
  ) : (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="reserve-form">
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
          ></input>{" "}
          {error.dateError && <p>{error.dateError}</p>}
          <label className="time-label">
            Time
            <select
              className="time-select"
              type="time"
              placeholder="Time"
              value={hour}
              onChange={(e) => setHour(e.target.value)}
            >
              <option value="19">19:00 </option>
              <option value="20">20:00</option>
              <option value="21">21:00</option>
              <option value="22">22:00</option>
            </select>
          </label>{" "}
          {error.hourError && <p>{error.hourError}</p>}
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
                  data-testid="personNumber"
                  readOnly
                ></input>
                {error.personError && <p>{error.personError}</p>}
                <button
                  className="person-btn"
                  onClick={handlePlusPerson}
                  data-testid="addOne"
                >
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
            value={requestValue}
            onChange={(e) => setRequestValue(e.target.value)}
            onKeyDown={handleEnterReserved}
          ></textarea>
          {error.requestError && <p>{error.requestError}</p>}
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
