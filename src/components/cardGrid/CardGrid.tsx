import { Card, CardMedia, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

const CardGrid = (props: any) => {
  const baseUrlPoster = "https://image.tmdb.org/t/p/w185/";
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ margin: "50px" }}
    >
      {props.movies.map((movie: any) => (
        <Grid item sm={12} md={6} lg={2.4} key={movie.id}>
          <Link to={{ pathname: `/stream/${movie.id}` }}>
            <div style={{ margin: "10px" }}>
              <Card style={{ height: "300px", width: "200px" }}>
                <CardMedia
                  component="img"
                  image={`${baseUrlPoster}/${movie.poster_path}`}
                />
              </Card>
              <Typography>{movie.title}</Typography>
            </div>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardGrid;
