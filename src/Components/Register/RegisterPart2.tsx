import React, { useState } from "react";
import "./Register.css";

function RegisterPart2() {
  const [companyName, setCompanyName] = useState("");
  const [companyAdrress, setCompanyAdrress] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [website, setWebsite] = useState("");
  const [linkdin, setLinkin] = useState("");

  const finishReg = () => {
    if (
      companyName != "" &&
      companyAdrress != "" &&
      regNumber != "" &&
      website != "" &&
      linkdin != ""
    ) {
    } else {
      alert("Please enter all the details");
    }
  };

  return (
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
                  <p>2/2</p>
                </td>
              </tr>
            </table>
            <table className="regTable">
              <tr>
                <td>
                  <div className="regTxtHeaders">Company Name</div>
                  <input
                    className="regInputs"
                    placeholder="jon@doe.co.za"
                    onChange={(txt) => {
                      setCompanyName(txt.target.value);
                    }}
                    value={companyName}
                  />
                </td>
                <td>
                  <div className="regTxtHeaders">Company Address</div>
                  <input
                    className="regInputs"
                    placeholder="jon@doe.co.za"
                    onChange={(txt) => {
                      setCompanyAdrress(txt.target.value);
                    }}
                    value={companyAdrress}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="regTxtHeaders">Company Reg Number</div>
                  <input
                    className="regInputs"
                    placeholder="jon@doe.co.za"
                    onChange={(txt) => {
                      setRegNumber(txt.target.value);
                    }}
                    value={regNumber}
                  />
                </td>
                <td>
                  <div className="regTxtHeaders">Company Website</div>
                  <input
                    className="regInputs"
                    placeholder="jon@doe.co.za"
                    onChange={(txt) => {
                      setWebsite(txt.target.value);
                    }}
                    value={website}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="regTxtHeaders">Company LinkedIn</div>
                  <input
                    className="regInputs"
                    placeholder="jon@doe.co.za"
                    onChange={(txt) => {
                      setLinkin(txt.target.value);
                    }}
                    value={linkdin}
                  />
                </td>
                <td>
                  <div className="regTxtHeaders"></div>
                  <button
                    className="regBtn"
                    onClick={() => {
                      finishReg();
                    }}
                  >
                    Finish
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <br></br>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPart2;
