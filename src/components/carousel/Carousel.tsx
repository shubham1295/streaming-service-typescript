import Slider from "react-slick";
import { Card, CardMedia } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ResultsEntity } from "../../interface/getTrendingMoviesInterface";
import { Link } from "react-router-dom";
//create carousel component

type CarouselProps = {
  movies: ResultsEntity[];
  title?: string;
};

const Carousel = ({ movies, title }: CarouselProps) => {
  const baseUrlPoster = "https://image.tmdb.org/t/p/w342/";
  var settings = {
    dots: false,
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
    <div style={{ padding: "2%"}}>
      <Slider {...settings}>
        {movies.map((movie: ResultsEntity) => (
          <Link
            to={{
              pathname: `/stream/${movie.id}`,
            }}
          >
            <Card key={movie.id} style={{ backgroundColor: "#020d18", boxShadow: "none"}}>
              <CardMedia style={{ height: "400px", width: "270px", margin: "auto"}}
                component="img"
                image={`${baseUrlPoster}/${movie.poster_path}`}
              />
            </Card>
            <h3 style={{ color: "white", textAlign: "center"}}>{movie.title}</h3>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
