import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import MuiAppBar from "../../components/mui-Appbar/MuiAppBar";
import BasicTable from "../../components/table/Table";
import { featuredHeaders } from "../../constant/constant";
import { getFeaturedData, getMovieListStreamDB } from "../../service/api";

const AdminDashboard = () => {
  const fetchFeaturedData = async () => {
    // const res = await getMovieListStreamDB();
    const res = await getFeaturedData();
    console.log(res);
  };

  useEffect(() => {
    fetchFeaturedData();
  }, []);
  return (
    <div>
      <MuiAppBar />
      <Typography variant="h2">Featured</Typography>
      <BasicTable
        rows={[
          {
            id: 3,
            imdbId: "tt0386676",
            type: "tv",
            operation: "del",
          },
          {
            id: 4,
            imdbId: "tt9531772",
            type: "movie",
            operation: "update",
          },
        ]}
        headers={featuredHeaders}
      />
    </div>
  );
};

export default AdminDashboard;
