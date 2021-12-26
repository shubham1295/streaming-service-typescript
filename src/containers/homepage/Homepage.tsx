import { Button, Container, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardGrid from "../../components/cardGrid/CardGrid";
import Carousel from "../../components/carousel/Carousel";
import { getFeaturedMovies, getTrendingMovies } from "../../service/api";

export const HomePage = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [trendingMovies, setTrendingMovies] = useState([] as any);
  const [featuredMovies, setFeaturedMovies] = useState([] as any);
  const navigate = useNavigate();

  const handleGotoSearch = () => {
    navigate(`/search/${searchKeyword}`);
  };

  const fetchTrendingMovies = async () => {
    const response = await getTrendingMovies();
    setTrendingMovies(response?.results);
    const res = await getFeaturedMovies();
    setFeaturedMovies(res);
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);
  console.log(trendingMovies, "trending movies");
  return (
    <div>
      <header className="ht-header">
        <div className="container">
          <nav className="navbar navbar-default navbar-custom">
            <div className="navbar-header logo">
                <div className="navbar-toggle">
                  <span className="sr-only">Toggle navigation</span>
                  
                </div>
                <a href="index.html"><img className="logo" src="images/logo1.png" alt="" width="119" height="58"/></a>
              </div>            
          </nav>
          
          <div className="top-search">
            <select>
            <option value="movie">Movie</option>
            <option value="tv">Tv Show</option>
          </select>
          <input type="text" placeholder="Search for a movie or a TV Show. "/>
          <Button onClick={handleGotoSearch}>Search</Button>
          </div>
        </div>
      </header>

      {/* THis is Corousal */}
      <div className="sliderv3 movie-items">
        <div className="container">
          <div className="row">
              <div  className="slick-multiItemSlider">
                
                {/* Iterrate this  */}
                <div className="movie-item">
                    {/* onclick="location.href='#';"> */}
                  <div className="mv-img">
                    <a href="#"><img src="https://www.theplace2.ru/cache/archive/fan_bing_bing/img/9bc6fb13f755f229_147810563_10-gthumb-gwdata1200-ghdata1200-gfitdatamax.jpg" alt="" width="285" height="437"/></a>
                  </div>
                    <div className="title-in">
                      <div className="cate">
                        
                      </div>
                      <h6><a href="#">Interstellar</a></h6>
                      <p><a href="#">1995</a></p>
                    </div>
                </div>
                
              </div>
            </div>
        </div>
      </div>
      
      <div className="page-single">
        <div className="container">
          <div className="row ipad-width">
            <div className="col-md-8 col-sm-12 col-xs-12">
              
                
              <h4 className="sb-title">Popular Movies</h4>
                
              <div className="flex-wrap-movielist">
                  
                  {/* Iterrate this  */}
                  <div className="movie-item-style-2 movie-item-style-1">
                    <img src="images/mv1.jpg" alt=""/>
                    <div className="hvr-inner">
                            {/* Change this to Play button  */}
                            <a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                          </div>
                    <div className="mv-item-infor">
                      <h6><a href="#">test</a></h6>
                      <p className="rate"><i className="ion-android-star"></i><span>8.1</span> /10</p>
                    </div>
                  </div>  
                    

              </div>	
              
              
              <h4 className="sb-title">Popular Series </h4>


              <div className="flex-wrap-movielist">
                  
                  {/* Iterrate this  */}
                  <div className="movie-item-style-2 movie-item-style-1">
                    <img src="images/mv1.jpg" alt=""/>
                    <div className="hvr-inner">
                            {/* Change this to Play button  */}
                            <a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                          </div>
                    <div className="mv-item-infor">
                      <h6><a href="#">test</a></h6>
                      <p className="rate"><i className="ion-android-star"></i><span>8.1</span> /10</p>
                    </div>
                  </div>  

              </div>

            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="sidebar">
                <div className="searh-form">
                  <h4 className="sb-title">Ads</h4>
                  <div className="ads">
                    <img src="images/uploads/ads1.png" alt=""/>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      <footer className="ht-footer">
        <div className="container">
          <div className="flex-parent-ft">
            <div className="flex-child-ft item1">
              <a href="index.html"><img className="logo" src="images/logo1.png" alt=""/></a>
              <p>5th Avenue st, manhattan<br/>
              New York, NY 10001</p>
              <p>Call us: <a href="#">(+01) 202 342 6789</a></p>
            </div>
            <div className="flex-child-ft item2">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">About</a></li> 
                <li><a href="#">Blockbuster</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="flex-child-ft item3">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Terms of Use</a></li> 
                <li><a href="#">Privacy Policy</a></li>	
                <li><a href="#">Security</a></li>
              </ul>
            </div>
            <div className="flex-child-ft item5">
              <h4>Announcement</h4>
              <p>Cineb.net does not store any files on our server,<br/> we only linked to the media which is hosted on 3rd party services.</p>
              
            </div>
          </div>
        </div>
        <div className="ft-copyright">
          <div className="ft-left">
            <p>© 2017 Blockbuster. All Rights Reserved. Designed by leehari.</p>
          </div>
          
        </div>
      </footer>

      {/* <Carousel title={"Featured"} movies={featuredMovies} />
      <hr />
      <h1>Trending</h1>
      <CardGrid movies={trendingMovies} /> */}
    </div>
  );
};
