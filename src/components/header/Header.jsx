// import {
//  fa-buildings,
//   fa-list-check,
//   faCar,
//   faPerson,
//   faPlane,
//   faTaxi,
// } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [courses, setCourses] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    PYTHON: 1,
    MERNSTACK: 0,
    DATASCIENCE: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/courses", { state: { courses, date } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon="fa-solid fa-buildings" />
            <span>WEEKDAY BATCH</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon="fa-solid fa-list-check" />
            <span>WEEKEND BATCH</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon="fa-solid fa-people-roof" />
            <span>INTERNSHIP</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">XYZ Technologies,Chennai</h1>
            <p className="headerDesc">
   THe Best work place to work 
            </p>
            <button className="headerButtton">LOG IN/REGISTER</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon="fa-solid fa-buildings" />
                <input
                  type="text"
                  placeholder="Wanna know more details?"
                  className="headerSearchInput"
                  onChange={(e) => setCourses(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon="fa-solid fa-list-check" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon="fa-solid fa-people-roof" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.PYTHON} PYTHON · ${options.MERNSTACK} MERNSTACK · ${options.DATASCIENCE} DATASCIENCE`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">PYTHON</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.PYTHON <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("PYTHON", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.PYTHON}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("PYTHON", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">MERNSTACK</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.MERNSTACK <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("MERNSTACK", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.MERNSTACK}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("MERNSTACK", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">DATASCIENCE</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.DATASCIENCE <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("DATASCIENCE", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.DATASCIENCE}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("DATASCIENCE", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
