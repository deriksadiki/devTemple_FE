import React from "react";
import "./Search.css";
let names = [25, 23, 15, 20];
let names2 = [25, 23];
let btns = ["Copy Email", "Send Inmail"];

function Search() {
  return (
    <div>
      <div className="searchContainer">
        <div className="searchBodyContainer">
          <div>
            <p className="searchTxt">Search Results</p>
            <div className="devList">
              {names.map((val, indx) => {
                return (
                  <div className="devBox" style={{ fontSize: 12 }} key={indx}>
                    <img
                      className="devImg"
                      src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9gqFKRn28xKHD1CAbEevdzsLmsv5yQkGnQ&usqp=CAU"
                      }
                    />
                    <div style={{ position: "absolute" }}>
                      <p>Jon Doe</p>
                      <p>
                        3 years experience <span> Intermediate</span>
                      </p>
                      <div>
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
                );
              })}
            </div>
            <div className="vLine" />
            <div className="devInfo">
              <p style={{ color: "#2d39a6", fontSize: 25, fontWeight: "bold" }}>
                Jon Doe
              </p>
              <table>
                <tr>
                  <td className="tableHeader">Stack</td>
                  <td className="skills" style={{ opacity: 0.5 }}>
                    Projects
                  </td>
                </tr>
                <tr>
                  {names.map((val, indx) => {
                    return (
                      <div>
                        <td className="leftRow">
                          <div className="barBtn">Javascript</div>
                          <div className="matrixparent">
                            <div
                              className="matrixchild"
                              style={{ width: parseInt("70") + "%" }}
                            >
                              <span className="matrixtext">60-80%</span>
                            </div>
                          </div>
                        </td>
                      </div>
                    );
                  })}
                  <td className="skills">
                    {names.map((val, indx) => {
                      return (
                        <div>
                          <td className="leftRow">
                            <div className="barBtn">Javascript</div>
                            <div className="matrixparent">
                              <span className="matrixtext">60-80%</span>
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
                    {names2.map((val, indx) => {
                      return (
                        <div>
                          <td className="leftRow">
                            <div className="barBtn">Javascript</div>
                            <div className="matrixparent">
                              <span className="matrixtext">60-80%</span>
                            </div>
                          </td>
                        </div>
                      );
                    })}
                  </td>
                  <td className="skills">
                    {btns.map((val, indx) => {
                      return (
                        <div>
                          <td className="leftRow">
                            <div className="barBtn2">{val}</div>
                            <div className="matrixparent">
                              <span className="matrixtext">60-80%</span>
                            </div>
                          </td>
                        </div>
                      );
                    })}
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
