import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Player from '../../components/player/Player';
import { getMovieInterface } from '../../interface/getMovieInterface';
import { getMovie } from '../../service/api';

export const StreamPage = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState({} as getMovieInterface);

  const getMovieData = async () => {
    try {
      const res = await getMovie(id as number | string);
      setMovieData(res);
      console.log(res, 'movieData');
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
      <Player streamUrl={movieData?.url} />
      <h2>{movieData?.title}</h2>
    </div>
  );
};
