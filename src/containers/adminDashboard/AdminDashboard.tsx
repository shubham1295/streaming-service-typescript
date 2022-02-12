import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MuiAppBar from "../../components/mui-Appbar/MuiAppBar";
import BasicTable from "../../components/table/Table";
import { authUser } from "../../constant/auth";
import { useForm } from "react-hook-form";
import {
  featuredHeaders,
  movieListStreamDBHeaders,
} from "../../constant/constant";
import {
  addFeaturedList,
  deleteFeaturedList,
  getFeaturedData,
  getMovieListStreamDB,
} from "../../service/api";

const AdminDashboard = () => {
  const [featuredData, setFeaturedData] = useState([{}]);
  const [movieListStream, setMovieListStream] = useState([{}]);

  const fetchFeaturedData = async () => {
    const res1 = await getMovieListStreamDB();
    const res = await getFeaturedData();
    setMovieListStream(res1.data.results);
    setFeaturedData(res.data);
  };

  useEffect(() => {
    fetchFeaturedData();
  }, []);

  const handleFeatureDelete = async (data: any) => {
    const { id, type } = data;
    const res = await deleteFeaturedList({ id, type });
    console.log(res);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    console.log(data);
    console.log(errors, "ee");
    const res = await addFeaturedList(data);
    console.log(res);
  };

  return (
    <div>
      <MuiAppBar />
      <BasicTable
        handleChange={handleFeatureDelete}
        buttonName="Delete"
        rows={featuredData}
        headers={featuredHeaders}
        title={"Featured Data"}
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="imdbId"
          {...register("imdbId", { required: true })}
        />
        <input
          {...register("type", { required: true })}
          type="radio"
          value="tv"
        />
        TV
        <input
          {...register("type", { required: true })}
          type="radio"
          value="movie"
        />
        Movie
        <input type="submit" />
      </form>

      <BasicTable
        rows={movieListStream}
        headers={movieListStreamDBHeaders}
        title={"Movies from Stream SB"}
      />
    </div>
  );
};

export default AdminDashboard;
