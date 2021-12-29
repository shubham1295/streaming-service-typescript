import React, { useState, useEffect } from "react";
import Carousel from "../../components/carousel/Carousel";
import { getFeaturedMovies, getTrendingMovies } from "../../service/api";
import Footer from "../../components/footer/Footer";
import GridDisplay from "../../components/gridDisplay/GridDisplay";
import Header from "../../components/header/Header";

export const HomePage = () => {
  // const [searchKeyword, setSearchKeyword] = useState("");
  const [trendingMovies, setTrendingMovies] = useState([] as any);
  const [featuredMovies, setFeaturedMovies] = useState([] as any);

  const fetchTrendingMovies = async () => {
    const response = await getTrendingMovies();
    setTrendingMovies(response?.results);
    const res = await getFeaturedMovies();
    setFeaturedMovies(res);
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);
  return (
    <div>
      <Header />
      <div className="movie-items" style={{ paddingTop: "5%" }}>
        <Carousel title={"Featured"} movies={featuredMovies} />
      </div>

      {/* <CustomCarausel movies={featuredMovies} /> */}

      <GridDisplay title={"pop movies"} movies={trendingMovies} />
      <Footer />

      {/* <Carousel title={"Featured"} movies={featuredMovies} />
      <hr />
      <h1>Trending</h1>
      <CardGrid movies={trendingMovies} /> */}
    </div>
  );
};
