import Footer from "./Footer";
import React from "react";
import { useCustomerContext } from "./CustomerContext";
function CustomersSaySection() {
  const [data] = useCustomerContext();

  return (
    <>
      <h3 className="customer-title">Our Customers Say... </h3>
      <div className="customer-container">
        {data.map((customer) => (
          <div className="customer" key={customer.id}>
            <div className="ratings">
              {Array.from({ length: 5 })
                .fill("*")
                .map((star, index) => (
                  <span>{star}</span>
                ))}
            </div>
            <h3>{customer.name}</h3>
            <div className="person">
              <img className="person-img" src={customer.src}></img>
              <p className="person-comment">
                {" "}
                <span
                  style={{
                    fontSize: "86px",
                    color: "teal",
                    position: "absolute",
                    top: "-40px",
                    left: "-50px",
                  }}
                >
                  ``
                </span>
                {customer.comment}
                <span
                  style={{
                    fontSize: "86px",
                    color: "teal",
                    position: "absolute",
                    marginTop: "2px",
                    marginLeft: "5px",
                  }}
                >
                  ``
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CustomersSaySection;
