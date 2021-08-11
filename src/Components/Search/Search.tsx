import React, { useEffect, useState } from "react";
import { getAllDevs } from "../../Providers/Functions";
import "./Search.css";
let names = [25, 23, 15, 20];
let names2 = [25, 23];
let btns = ["Copy Email", "Send Inmail"];

interface NamesProps {
  peopleNames: any[];
  getPerson: (arg: any[]) => void;
}

function Search() {
  let tempArr = new Array();
  const [foundDevs, setDevs] = useState(tempArr);
  const [selectedCard, setCard] = useState(0);
  const [selectedDev, setDevdetails] = useState(tempArr);
  const [loading, setLoding] = useState(true);
  const [devName, setdevName] = useState("");
  const [stack, setStack] = useState(tempArr);
  const [projects, setProjects] = useState(tempArr);
  const [actions, setActions] = useState(tempArr);
  const [otherLinks, setLinks] = useState(tempArr);

  useEffect(() => {
    getAllDevsDetails();
  });
  const getAllDevsDetails = () => {
    getAllDevs
      .then((devsList: any) => {
        if (stack?.length === 0) {
          setDevs(devsList);
          setdevName(devsList[0].fname + " " + devsList[0].sname);
          setDevdetails(devsList[0]);
          setStack(devsList[0].stack);
          setProjects(devsList[0].projects);
          setLoding(false);
          setLinks(devsList[0].links);
          let obj = [
            {
              text: devsList[0].email,
              heading: "Copy Email",
            },
            {
              text: "Send an email to this developer",
              heading: "Send Inmail",
            },
          ];
          setActions(obj);
        }
      })
      .catch(() => {
        alert("network error");
      });
  };

  const selectCard = (data: any, indx: any) => {
    setDevdetails(data);
    setdevName(data.fname + " " + data.sname);
    setCard(indx);
    setStack(data.stack);
    setProjects(data.projects);
    setLinks(data.links);
    let obj = [
      {
        text: data.email,
      },
      {
        text: "Send an email to this developer",
      },
    ];
    setActions(obj);
  };

  return (
    <div>
      <div className="searchContainer">
        <div className="searchBodyContainer">
          <div>
            <p className="searchTxt">Search Results</p>
            <div className="devList">
              {foundDevs?.map((val, indx) => {
                return (
                  <div
                    className={
                      selectedCard === indx ? "SelectedDevBox" : "devBox"
                    }
                    style={{ fontSize: 12 }}
                    key={indx}
                    onClick={() => {
                      selectCard(val, indx);
                    }}
                  >
                    <div className="part2">
                      <img
                        className="devImg"
                        src={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9gqFKRn28xKHD1CAbEevdzsLmsv5yQkGnQ&usqp=CAU"
                        }
                      />
                      <div>
                        <div
                          style={{
                            color: "#2d39a6",
                            fontSize: 17,
                            fontWeight: "bold",
                            marginTop: 10,
                            marginBottom: 10,
                          }}
                        >
                          {val.fname} {val.sname}
                        </div>
                        <div style={{ marginBottom: 10 }}>
                          3 years experience <span> Intermediate</span>
                        </div>
                        <div>
                          {val?.stack.map((stack: any, indxKey: any) => {
                            if (indxKey <= 2) {
                              return (
                                <button className="selectedBtn" key={indxKey}>
                                  <span style={{ fontSize: 11 }}>
                                    {stack.lang}
                                  </span>
                                  <span style={{ opacity: 0.5 }}>
                                    {" "}
                                    &#x2715;
                                  </span>
                                </button>
                              );
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <br></br>
            </div>
            <div className="vLine" />
            {loading ? null : (
              <div className="devInfo">
                <p
                  style={{ color: "#2d39a6", fontSize: 25, fontWeight: "bold" }}
                >
                  {devName}
                </p>
                <table>
                  <tr>
                    <td className="tableHeader">Stack</td>
                    <td className="skills" style={{ opacity: 0.5 }}>
                      Projects
                    </td>
                  </tr>
                  <tr>
                    {stack?.map((val, indx) => {
                      return (
                        <div key={indx}>
                          <td className="leftRow">
                            <div className="barBtn">{val.lang}</div>
                            <div className="matrixparent">
                              <div
                                className="matrixchild"
                                style={{
                                  width: parseInt(val.matrix.split(" - ")[1]),
                                }}
                              >
                                <span className="matrixtext">
                                  {val.matrix.split(" - ")[1]}
                                </span>
                              </div>
                            </div>
                          </td>
                        </div>
                      );
                    })}
                    <td className="skills">
                      {projects?.map((val, indx) => {
                        return (
                          <div key={indx}>
                            <td className="leftRow">
                              <div className="barBtn">{val.title}</div>
                              <div className="matrixparent2">
                                <span className="matrixtext">{val.link}</span>
                              </div>
                            </td>
                          </div>
                        );
                      })}
                    </td>
                  </tr>
                  <br></br>
                  <tr>
                    <td className="tableHeader">Other Links</td>
                    <td className="skills" style={{ opacity: 0.5 }}>
                      Actions
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {otherLinks?.map((val, indx) => {
                        return (
                          <div key={indx}>
                            <td className="leftRow">
                              <div className="barBtn">{val.title}</div>
                              <div className="matrixparent2">
                                <span className="matrixtext">{val.link}</span>
                              </div>
                            </td>
                          </div>
                        );
                      })}
                    </td>
                    <td className="skills">
                      {actions?.map((val, indx) => {
                        return (
                          <div key={indx}>
                            <td className="leftRow">
                              <div className="barBtn2">{btns[indx]}</div>
                              <div className="matrixparent2">
                                <span
                                  className="matrixtext"
                                  style={{
                                    fontSize: 11,
                                    textAlign: "center",
                                    alignSelf: "center",
                                  }}
                                >
                                  {val.text}
                                </span>
                              </div>
                            </td>
                          </div>
                        );
                      })}
                    </td>
                  </tr>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
