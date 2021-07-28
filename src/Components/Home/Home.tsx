import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="headerContainer">
        <div className="headerBodyContainer">
          <div className="headHeader3">
            <p>Find Developers by Stack</p>
            <p>
              <input
                className="homeInputs"
                placeholder="Type programming language or framework here..."
              />
              <input
                className="miniHomeInputs"
                placeholder="Experience in months"
              />
              <button className="homeBtn">Search</button>
            </p>
            <p style={{ fontSize: 13 }}>
              <span>
                <input type="checkbox" className="radioBtn" /> Create Dev Alert
              </span>
              <span className="homeRadio">
                <input type="radio" className="radioBtn" />
                Prioritise Over
              </span>
              <span style={{ marginLeft: 35 }}>
                <input
                  type="radio"
                  className="radioBtn"
                  id="css"
                  name="fav_language"
                  value="CSS"
                />
                Prioritise Under
              </span>
            </p>
            <div className="selectedItems">
              <div style={{ marginLeft: 20, paddingTop: 0.1 }}>
                <p style={{ fontSize: 13 }}>Languages/Frameworks</p>
                <button className="selectedBtn">
                  Nodejs <span style={{ opacity: 0.5 }}>&#x2715;</span>
                </button>
                <button className="selectedBtn">
                  Nodejs <span style={{ opacity: 0.5 }}>&#x2715;</span>
                </button>
                <button className="selectedBtn">
                  Nodejs <span style={{ opacity: 0.5 }}>&#x2715;</span>
                </button>
                <button className="selectedBtn">
                  Nodejs <span style={{ opacity: 0.5 }}>&#x2715;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
