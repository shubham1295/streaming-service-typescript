import axios from 'axios';
import { featureMoviesInterface } from '../interface/featureMoviesInterface';
import { getMovieInterface } from '../interface/getMovieInterface';
import { getSearchInterface } from '../interface/getSearchInterface';
import { getTrendigMoviesInterface } from '../interface/getTrendingMoviesInterface';
import { BaseUrl, tokenName } from '../constant/constant';

const token = localStorage.getItem(tokenName);

//search api
export const getSearch = (keyword: string, page?: string | number): Promise<getSearchInterface> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(
        `${BaseUrl}search?name=${keyword}&page=${page || 1}`
      );
      resolve(res.data);
    } catch (err) {
      reject(err);
    }
  });
};

//get movie api
export const getMovie = (id: string | number): Promise<getMovieInterface> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`${BaseUrl}movie/getMovie/${id}`);
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
      const res = await axios.get(`${BaseUrl}movie/trendingMovies?page=${page || 1}`);
      resolve(res.data);
    } catch (err) {
      reject(err);
    }
  });
}

// featured api
export const getFeaturedMovies = (): Promise<featureMoviesInterface> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`${BaseUrl}featured`);
      resolve(res.data);
    } catch (err) {
      reject(err);
    }
  });
}

//get TV series 
export const getTvSeries = (id: string | number): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`${BaseUrl}tv/getSeason/${id}`);
      resolve(res.data);
    } catch (err) {
      reject(err);
    }
  });
}

// TV series get episode by season
export const getEpisodeBySeason = (id: string | number, season?: string | number) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`${BaseUrl}tv/getEpisodes/${id}?season=${season|| 1}`);
      resolve(res.data);
    } catch (err) {
      reject(err);
    }
  });
}

// Trending TV series
export const getTrendingTvSeries = (
  page?: number
): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`${BaseUrl}tv/trendingTv?page=${page || 1}`);
      resolve(res.data);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
}

//similar Movies
export const getSimilarMovies = (id: string | number): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`${BaseUrl}movie/similarMovies/${id}}`);
      resolve(res.data);
    } catch (err) {
      reject(err);
    }
  });
}

//similar TV series
export const getSimilarTvSeries = (id: string | number): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`${BaseUrl}tv/similarTv/${id}`);
      resolve(res.data);
    } catch (err) {
      reject(err);
    }
  });
}

export const signIn = (username: string| null | FormDataEntryValue , password: string| null | FormDataEntryValue ): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(`${BaseUrl}admin/authenticate`, {
        username,
        password
      });
      resolve(res.data.jwt);
    } catch (err) {
      reject(err);
    }
  });
}

export const getFeaturedData = (): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`${BaseUrl}admin/getFeatured`,  {
        headers: { Authorization: `Bearer ${token}` }
    });
      resolve(res);
    } catch (err) {
      reject(err);
    }
  });
}

export const getMovieListStreamDB = (): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`${BaseUrl}admin/getMoviesList`,  {
        headers: { Authorization: `Bearer ${token}` }
    });
      resolve(res);
    } catch (err) {
      reject(err);
    }
  });
}

//update Feature List (ADD) 
export const addFeaturedList = (data: any): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(`${BaseUrl}admin/updateFeatured`, data, {
        headers: { Authorization: `Bearer ${token}` }
    });
      resolve(res);
    } catch (err) {
      reject(err);
    }
  });
}

//update Feature List (DELETE)
export const deleteFeaturedList = (data: any): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.delete(`${BaseUrl}admin/updateFeatured`, {
        headers: { Authorization: `Bearer ${token}` }, data
    } );
      resolve(res);
    } catch (err) {
      reject(err);
    }
  });
}