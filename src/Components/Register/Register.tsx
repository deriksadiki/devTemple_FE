import React, { useState } from "react";
import "./Register.css";
import RegisterPart2 from "./RegisterPart2";

function Register() {
  const [regState, setRegState] = useState(true);
  const [firstname, setfirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");

  const register = () => {
    if (
      firstname != "" &&
      surname != "" &&
      email != "" &&
      password != "" &&
      contact != ""
    ) {
      setRegState(true);
    } else {
      alert("Please enter all the details");
    }
  };

  return (
    <div>
      {regState ? (
        <RegisterPart2 />
      ) : (
        <div className="mainBody">
          <div className="mainHeader">
            <p>
              DevTemple <span style={{ opacity: 0.1 }}>|</span>{" "}
              <span style={{ fontWeight: 200 }}>Hiring Dashboard</span>
              <span className="accountText">Sign In</span>
            </p>
          </div>
          <div className="regContainer">
            <div className="regBody">
              <div className="alignLogin">
                <table>
                  <tr>
                    <td>
                      <p style={{ fontSize: 30 }}>Sign Up</p>
                    </td>
                    <td className="numText">
                      <p>1/2</p>
                    </td>
                  </tr>
                </table>

                <table className="regTable">
                  <tr>
                    <td>
                      <div className="regTxtHeaders">First Name</div>
                      <input
                        className="regInputs"
                        placeholder="jon@doe.co.za"
                        onChange={(txt) => {
                          setfirstname(txt.target.value);
                        }}
                        value={firstname}
                      />
                    </td>
                    <td>
                      <div className="regTxtHeaders">Surname</div>
                      <input
                        className="regInputs"
                        placeholder="jon@doe.co.za"
                        onChange={(txt) => {
                          setSurname(txt.target.value);
                        }}
                        value={surname}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="regTxtHeaders">Email Address</div>
                      <input
                        className="regInputs"
                        placeholder="jon@doe.co.za"
                        onChange={(txt) => {
                          setEmail(txt.target.value);
                        }}
                        value={email}
                      />
                    </td>
                    <td>
                      <div className="regTxtHeaders">New Password</div>
                      <input
                        className="regInputs"
                        placeholder="jon@doe.co.za"
                        onChange={(txt) => {
                          setPassword(txt.target.value);
                        }}
                        value={password}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="regTxtHeaders">Contact Number</div>
                      <input
                        className="regInputs"
                        placeholder="jon@doe.co.za"
                        onChange={(txt) => {
                          setContact(txt.target.value);
                        }}
                        value={contact}
                      />
                    </td>
                    <td>
                      <div className="regTxtHeaders"></div>
                      <button className="regBtn" onClick={() => register()}>
                        Continue
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <br></br>
                      <p
                        className="loginTxt"
                        onClick={() => {
                          window.history.back();
                        }}
                      >
                        Alread signed Up?
                      </p>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;
