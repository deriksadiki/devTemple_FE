import React, { useEffect, useState } from "react";
import "./Register.css";
import RegisterPart2 from "./RegisterPart2";

function Register() {
  const [regState, setRegState] = useState(false);

  const register = () => {
    setRegState(true);
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
                      />
                    </td>
                    <td>
                      <div className="regTxtHeaders">Surname</div>
                      <input
                        className="regInputs"
                        placeholder="jon@doe.co.za"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="regTxtHeaders">Email Address</div>
                      <input
                        className="regInputs"
                        placeholder="jon@doe.co.za"
                      />
                    </td>
                    <td>
                      <div className="regTxtHeaders">New Password</div>
                      <input
                        className="regInputs"
                        placeholder="jon@doe.co.za"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="regTxtHeaders">Contact Number</div>
                      <input
                        className="regInputs"
                        placeholder="jon@doe.co.za"
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
                      <p className="loginTxt">Alread signed Up?</p>
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
