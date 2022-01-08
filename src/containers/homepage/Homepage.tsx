import React, { useState, useEffect } from "react";
import Carousel from "../../components/carousel/Carousel";
import { getFeaturedMovies, getTrendingMovies } from "../../service/api";
import Footer from "../../components/footer/Footer";
import GridDisplay from "../../components/gridDisplay/GridDisplay";
import Header from "../../components/header/Header";
import CustomCarausel from "../../components/customCarousel/CustomCarausel";
import Loader from "../../components/loader/Loader";

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
      {featuredMovies.length > 0 || trendingMovies.length > 0 ? (
        <>
          <div className="movie-items">
            <Carousel title={"Featured"} movies={featuredMovies} />
          </div>

          {/* trending movies */}
          <GridDisplay
            title={"pop movies"}
            movies={trendingMovies}
            source={"movie"}
          />
        </>
      ) : (
        <Loader />
      )}

      <Footer />
    </div>
  );
};
