import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { NavLink, Link, useLocation } from "react-router-dom";
import "../assets/css/Docs.css";
import { AppBar, Typography } from "@mui/material";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "./Navbar";


function Search({ data }) {
  let location = useLocation()
  const { pathname } = location;

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="searchDiv">
      <form>
        <div className="search_link_box">
          <div className="searchInputs">
            <div className="searchIcon">
              {filteredData.length === 0 ? (
                <SearchIcon />
              ) : (
                <CloseIcon id="clearBtn" onClick={clearInput} />
              )}
            </div>
            <input
              type="search"
              placeholder="Search"
              value={wordEntered}
              onChange={handleFilter}
            />

          </div>
          {filteredData.length != 0 && (
            <div className="dataResult">
              {filteredData.slice(0, 15).map((value, key) => {
                return (
                  <Link
                    className={pathname === value.link ? "dataItem active" : "dataItem"}
                    component={NavLink}
                    to={value.link}
                    target="_self"
                    onClick={clearInput}
                  >
                    <Typography variant="body2" className="search-drop-text">
                      {value.title}
                    </Typography>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </form>
    </div>


  );
}

export default Search;
