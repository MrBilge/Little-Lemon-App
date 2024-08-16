import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    address: "",
    mobilePhone: "",
    email: "",
    suiteNo: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { mobilePhone, email } = formData;

    if (mobilePhone.length !== 10) {
      alert("Mobile phone number must be exactly 10 digits long.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setSuccessMessage("Success! Your form has been submitted.");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      {successMessage && (
        <div style={{ color: "green", marginBottom: "4rem" }}>
          {successMessage}
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "20%",
        }}
      >
        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          rows="4"
          cols="50"
          style={{ width: "90%", height: "2rem", resize: "none" }}
        />

        <label htmlFor="mobilePhone">Mobile Phone:</label>
        <input
          type="text"
          id="mobilePhone"
          name="mobilePhone"
          value={formData.mobilePhone}
          onChange={handleChange}
          required
          style={{
            height: "2rem",
            padding: "5px",
            borderRadius: "5px",
            backgroundColor: "#f4c142",
          }}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            height: "2rem",
            padding: "5px",
            borderRadius: "5px",
            backgroundColor: "#f4c142",
          }}
        />

        <label htmlFor="suiteNo">Suite No:</label>
        <input
          type="text"
          id="suiteNo"
          name="suiteNo"
          value={formData.suiteNo}
          onChange={handleChange}
          style={{
            height: "2rem",
            padding: "5px",
            borderRadius: "5px",
            backgroundColor: "#f4c142",
          }}
        />

        <div>
          <button
            style={{
              borderRadius: "5px",
              backgroundColor: "teal",
              color: "white",
              width: "5rem",
              padding: "5px",
            }}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
