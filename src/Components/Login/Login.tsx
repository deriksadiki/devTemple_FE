import React, { useState } from "react";
import { signInUser } from "../../Providers/Functions";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = () => {
    signInUser(email, password)
      .then((msg) => {
        alert("welcome back");
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
      });
  };

  const Register = () => {
    window.location.href = "/Register";
  };
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
            <input
              className="inputs"
              placeholder="jon@doe.co.za"
              onChange={(text) => {
                setEmail(text.target.value);
              }}
            />
            <div className="loginTxtHeaders">Password</div>
            <input
              className="inputs"
              type="password"
              placeholder="Your Password"
              onChange={(text) => {
                setPassword(text.target.value);
              }}
            />{" "}
            <br></br>
            <button
              className="loginBtn"
              onClick={() => {
                signIn();
              }}
            >
              Sign In
            </button>
            <br></br>
            <p className="loginTxt">Forgot Password?</p>
            <p
              className="loginTxt"
              onClick={() => {
                Register();
              }}
            >
              Don't have an Account?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
