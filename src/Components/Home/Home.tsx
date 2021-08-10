import React, { useEffect, useState } from "react";
import { getAllDevs } from "../../Providers/Functions";
import "./Home.css";

let skillsArray = ["JavaScript", "Java", "Php", "ruby", "css", "html", "React"];

function Home() {
  let tempArr = new Array();
  const [devs, setDevs] = useState([]);
  const [devSkills, setDevSkills] = useState(tempArr);
  const [selectedSkills, setSelectedSkills] = useState(tempArr);
  const [skill, setSkill] = useState("");
  useEffect(() => {
    getDevs();
  });
  const getDevs = () => {
    getAllDevs
      .then((devs: any) => {
        setDevs(devs);
      })
      .catch(() => {
        alert("network error");
      });
  };

  const searchSkill = (word: string) => {
    if (word === "") {
      setDevSkills(tempArr);
    } else {
      let tempArray = new Array();
      for (var x = 0; x < skillsArray?.length; x++) {
        let letter = skillsArray[x];
        if (letter.toLowerCase().indexOf(word.toLowerCase()) > -1) {
          tempArray.push(skillsArray[x]);
        }
      }
      setDevSkills(tempArray);
    }
  };

  const addSkill = (skill: any) => {
    var foundState = false;
    for (var x = 0; x < selectedSkills?.length; x++) {
      if (skill === selectedSkills[x]) {
        foundState = true;
        break;
      }
    }
    if (!foundState) {
      let tempArray = new Array();
      tempArray = selectedSkills;
      tempArray.push(skill);
      setSelectedSkills(tempArray);
    }
    setDevSkills(tempArr);
    setSkill("");
  };

  const removeSKill = (indx: any) => {
    let tempArray = new Array();
    tempArray = selectedSkills;
    tempArray.splice(indx, 1);
    setSelectedSkills(tempArr);
    setTimeout(() => {
      setSelectedSkills(tempArray);
    }, 100);
  };

  return (
    <div>
      <div className="headerContainer">
        <div className="headerBodyContainer">
          <div className="headHeader3">
            <p>Find Developers by Stack</p>
            <p>
              <input
                className="homeInputs"
                value={skill}
                onChange={(txt) => {
                  setSkill(txt.target.value);
                  searchSkill(txt.target.value);
                }}
                placeholder="Type programming language or framework here..."
              />
              {devSkills.map((val, indx) => {
                return (
                  <div className="devSkills" key={indx}>
                    <br></br>
                    <div
                      style={{ marginLeft: 10 }}
                      onClick={() => {
                        addSkill(val);
                      }}
                    >
                      {val}
                    </div>
                    <hr style={{ width: "97%" }} />
                  </div>
                );
              })}
              <input
                className="miniHomeInputs"
                placeholder="Experience in years"
              />
              <button className="homeBtn">Search</button>
            </p>
            <p style={{ fontSize: 13 }}>
              <span>
                <input type="checkbox" className="radioBtn" />
                Create Dev Alert
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
            {selectedSkills?.length > 0 ? (
              <div className="selectedItems">
                <div style={{ marginLeft: 20, paddingTop: 0.1 }}>
                  <p style={{ fontSize: 13 }}>Languages/Frameworks</p>
                  {selectedSkills.map((val, indx) => {
                    return (
                      <button
                        className="selectedBtn"
                        key={indx}
                        onClick={() => {
                          removeSKill(indx);
                        }}
                      >
                        {val}
                        <span style={{ opacity: 0.5 }}> &#x2715;</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
