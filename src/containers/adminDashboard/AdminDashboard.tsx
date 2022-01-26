import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MuiAppBar from "../../components/mui-Appbar/MuiAppBar";
import BasicTable from "../../components/table/Table";
import { authUser } from "../../constant/auth";
import {
  featuredHeaders,
  movieListStreamDBHeaders,
} from "../../constant/constant";
import { getFeaturedData, getMovieListStreamDB } from "../../service/api";

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
  return (
    <div>
      <MuiAppBar />
      <BasicTable
        rows={featuredData}
        headers={featuredHeaders}
        title={"Featured Data"}
      />
      <BasicTable
        rows={movieListStream}
        headers={movieListStreamDBHeaders}
        title={"Movies from Stream SB"}
      />
    </div>
  );
};

export default AdminDashboard;
