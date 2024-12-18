import React from "react";
import "./BusinessStats-section.css";
import "./number-counting.js";

const BusinessStats_section = () => {
  return (
    <>
      <div className="home-number-count-area">
        <div className="home-number-count-area-inner">
          <div className="counter-div">
            <div className="counter-div-inner">
              <h2 className="counter" data-target="23">
                0
              </h2>
              <h3>Years Helping Business</h3>
            </div>
          </div>
          <div className="counter-div">
            <div className="counter-div-inner">
              <h2 className="counter" data-target="250">
                0
              </h2>
              <h3>Working Employees</h3>
            </div>
          </div>
          <div className="counter-div">
            <div className="counter-div-inner">
              <h2 className="counter" data-target="4500">
                0
              </h2>
              <h3>Complete Projects</h3>
            </div>
          </div>
          <div className="counter-div">
            <div className="counter-div-inner">
              <h2 className="counter" data-target="3000">
                0
              </h2>
              <h3>Happy Customers</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessStats_section;
