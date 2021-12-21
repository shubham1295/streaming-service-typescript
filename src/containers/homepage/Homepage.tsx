import { Button, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardGrid from "../../components/cardGrid/CardGrid";
import Carousel from "../../components/carousel/Carousel";
import { getFeaturedMovies, getTrendingMovies } from "../../service/api";

export const HomePage = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [trendingMovies, setTrendingMovies] = useState([] as any);
  const [featuredMovies, setFeaturedMovies] = useState([] as any);
  const navigate = useNavigate();

  const handleGotoSearch = () => {
    navigate(`/search/${searchKeyword}`);
  };

  const fetchTrendingMovies = async () => {
    const response = await getTrendingMovies();
    setTrendingMovies(response?.results);
    const res = await getFeaturedMovies();
    setFeaturedMovies(res);
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);
  console.log(trendingMovies, "trending movies");
  return (
    <div>
      <h1>Homepage</h1>
      <TextField
        label="Search Movie"
        variant="outlined"
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <Button onClick={handleGotoSearch}>Search</Button>
      <Carousel title={"Featured"} movies={featuredMovies} />
      <hr />
      <h1>Trending</h1>
      <CardGrid movies={trendingMovies} />
    </div>
  );
};
