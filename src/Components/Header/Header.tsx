import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="headerBody">
      <div className="headHeader">
        <p>
          DevTemple <span style={{ opacity: 0.1 }}>|</span>
          <span style={{ fontWeight: 200 }}>Hiring Dashboard</span>
        </p>
        <hr style={{ opacity: 0.3 }}></hr>
      </div>
      <div className="headHeader2">
        <p>
          <span style={{ fontWeight: "bold", fontSize: 30 }}>Search</span>
          <span className="headerAccountText">John Doe</span>
          <br></br>
          <span className="headerAccountText2">Microsoft ltd</span>
        </p>
      </div>
    </div>
  );
}

export default Header;
