import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footerTxt">
        <span style={{ marginRight: 30, marginLeft: 35 }}>Terms of Use</span>
        <span style={{ marginRight: 30 }}>Privacy Policy</span>
        <span style={{ marginRight: 30 }}>Cookie Policy</span>
      </div>
    </div>
  );
}

export default Footer;
