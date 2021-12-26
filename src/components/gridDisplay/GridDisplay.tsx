import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Link } from "react-router-dom";
import "./style.css";

const GridDisplay = (props: any) => {
  const baseUrlPoster = "https://image.tmdb.org/t/p/w185/";
  return (
    <div className="page-single">
      <div className="container">
        <div className="row ipad-width">
          <div className="col-md-8 col-sm-12 col-xs-12">
            <h4 className="sb-title">{props.title}</h4>

            <div className="flex-wrap-movielist">
              {/* Iterrate this  */}
              {props.movies.map((movie: any) => (
                <Link
                  key={movie.id}
                  to={{
                    pathname: `/stream/${movie.id}`,
                  }}
                >
                  <div className="movie-item-style-2 movie-item-style-1">
                    <img
                      src={`${baseUrlPoster}/${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <div className="hvr-inner">
                      {/* Change this to Play button  */}
                      <PlayCircleIcon fontSize="large" />{" "}
                    </div>
                    <div className="mv-item-infor">
                      <h6>
                        <a href="#">{movie.title}</a>
                      </h6>
                      <p className="rate">
                        <i className="ion-android-star"></i>
                        <span>8.1</span> /10
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridDisplay;
