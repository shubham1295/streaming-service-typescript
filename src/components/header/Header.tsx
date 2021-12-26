import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo1.png";
import "./style.css";

const Header = (props: any) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();
  const handleGotoSearch = (searchKeyword: string) => {
    navigate(`/search/${searchKeyword}`);
  };
  return (
    <header className="ht-header">
      <div className="container">
        <nav className="navbar navbar-default navbar-custom">
          <div className="navbar-header logo">
            <a href="index.html">
              <img className="logo" src={logo} alt="" width="119" height="58" />
            </a>
          </div>
        </nav>

        <div className="top-search">
          <select>
            <option value="movie">Movie</option>
            <option value="tv">Tv Show</option>
          </select>
          <input
            type="text"
            placeholder="Search for a movie or a TV Show. "
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <Button size="large" onClick={() => handleGotoSearch(searchKeyword)}>
            Search
          </Button>
          {/* <Button onClick={handleGotoSearch}>Search</Button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
