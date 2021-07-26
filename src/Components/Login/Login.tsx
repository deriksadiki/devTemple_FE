import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="mainBody">
      <div className="mainHeader">
        <p>
          DevTemple <span style={{ opacity: 0.1 }}>|</span>{" "}
          <span style={{ fontWeight: 200 }}>Hiring Dashboard</span>
          <span className="accountText">Create Account</span>
        </p>
        <p></p>
      </div>
      <div className="loginContainer">
        <div className="loginBody">
          <div className="alignLogin">
            <p style={{ fontSize: 20 }}>Sign In</p>
            <div className="loginTxtHeaders">Email</div>
            <input className="inputs" placeholder="jon@doe.co.za" />
            <div className="loginTxtHeaders">Password</div>
            <input className="inputs" placeholder="Your Password" /> <br></br>
            <button className="loginBtn">Sign In</button>
            <br></br>
            <p className="loginTxt">Forgot Password?</p>
            <p className="loginTxt">Don't have an Account?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
