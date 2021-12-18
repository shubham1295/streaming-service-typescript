import Slider from "react-slick";
import { Card } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ResultsEntity } from "../../interface/getTrendingMoviesInterface";
import { Link } from "react-router-dom";
//create carousel component

type CarouselProps = {
  movies: ResultsEntity[];
};

const Carousel = ({ movies }: CarouselProps) => {
  const baseUrlPoster = "https://image.tmdb.org/t/p/original/";
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h2> Trending </h2>
      <Slider {...settings}>
        {movies.map((movie: ResultsEntity) => (
          <Link
            to={{
              pathname: `/stream/${movie.id}`,
            }}
          >
            <Card key={movie.id}>
              <img
                style={{
                  width: "100%",
                  maxHeight: "200px",
                  overflowX: "hidden",
                }}
                src={`${baseUrlPoster}/${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
            </Card>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;