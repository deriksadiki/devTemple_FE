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
                  <td>Projects</td>
                </tr>
                <tr>
                  <td className="leftRow">
                    <p>
                      <span className="barBtn">JavaScript</span>
                      <span className="myProgress">
                        <span className="myBar">20%</span>
                      </span>
                    </p>
                  </td>
                  <td>Projects</td>
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
