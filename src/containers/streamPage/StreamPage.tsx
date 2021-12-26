import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Player from "../../components/player/Player";
import { getMovieInterface } from "../../interface/getMovieInterface";
import { getMovie } from "../../service/api";

export const StreamPage = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState({} as getMovieInterface);

  const getMovieData = async () => {
    try {
      const res = await getMovie(id as number | string);
      setMovieData(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovieData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <div className="movie-items" style={{ padding: "10%" }}>
        <Player streamUrl={movieData?.url} />
      </div>
      <Footer />
    </div>
  );
};
