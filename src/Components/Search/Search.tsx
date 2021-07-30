import React from "react";
import "./Search.css";
let names = [25, 23, 15, 20, 24];

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
                  <div className="devBox">
                    <p>developer</p>
                  </div>
                );
              })}
            </div>
            <div className="vLine" />
            <div className="devInfo">
              <p>Jon Doe</p>
              <table>
                <tr>
                  <td>Stack</td>
                  <td className="skills">Projects</td>
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
                    })}{" "}
                  </td>
                </tr>
                <tr>
                  <td>Other Links</td>
                  <td>Actions</td>
                </tr>
                <tr>
                  <td>Stack</td>
                  <td>Projects</td>
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
