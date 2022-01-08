import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo1.png";
import "./style.css";

const Header = (props: any) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();
  const handleGotoSearch = (searchKeyword: string) => {
    searchKeyword.length > 0 && navigate(`/search/${searchKeyword}/page=1`);
  };
  return (
    <header className="ht-header">
      <div className="container">
        <nav className="navbar navbar-default navbar-custom">
          <div className="navbar-header logo">
            <Link
              to={{
                pathname: `/`,
              }}
            >
              <img className="logo" src={logo} alt="" width="119" height="58" />
            </Link>
          </div>
        </nav>

        <div className="top-search">
          <form style={{
                      width: "80%",
                      margin: "0 auto",
                      display: "flex",
                    }}>
            <input
              type="text"
              placeholder="Search for a movie or a TV Show. "
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <Button type="submit" size="large" onClick={() => handleGotoSearch(searchKeyword)}>
              Search
            </Button>
            {/* <Button onClick={handleGotoSearch}>Search</Button> */}
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
