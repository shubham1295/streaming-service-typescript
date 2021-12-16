import axios from 'axios';
import { getMovieInterface } from '../interface/getMovieInterface';
import { getSearchInterface } from '../interface/getSearchInterface';
import { getTrendigMoviesInterface } from '../interface/getTrendingMoviesInterface';

const baseUrl = 'https://baba-streaming-service.herokuapp.com/';

//search api
export const getSearch = (keyword: string): Promise<getSearchInterface> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(
        `${baseUrl}movie/searchMovie?name=${keyword}`
      );
      resolve(res.data);
    } catch (err) {
      reject(err);
    }
  });
};

//
export const getMovie = (id: string | number): Promise<getMovieInterface> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`${baseUrl}/movie/getMovie/${id}`);
      resolve(res.data);
    } catch (err) {
      reject(err);
    }
  });
};

// trending api
export const getTrendingMovies = (
  page?: number
): Promise<getTrendigMoviesInterface> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`${baseUrl}movie/trendingMovies?page=${page || 1}`);
      resolve(res.data);
    } catch (err) {
      reject(err);
    }
  });
}