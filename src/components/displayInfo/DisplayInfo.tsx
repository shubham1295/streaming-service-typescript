
import { ReactChild, ReactFragment, ReactPortal } from "react";
import "./style.css";

const DisplayInfo = (props: any) => {
  const baseUrlPoster = "https://image.tmdb.org/t/p/w185/";
  return (
    <div className="movie-items">
      <div id="main-container">
      <div className="container">
        <div className="box">
          <img src={`${baseUrlPoster}${props.image}`} alt={props.name} />
        </div>
        <div className="content">
          <span className="title"><h6>{props.name}</h6></span>
          <p >{props.release}</p>
          <p >{props.description}</p>
          {/* {props.description.split(".").map((char: any)=>(
              <p>{char}</p>
          ))} */}
          <p >{props.genere}</p>
        </div>
      </div>
    </div>
      {/* <div className="movie-details">
        <img src={`${baseUrlPoster}${props.image}`} alt={props.name} />
      </div>
      <div className="movie-details">
        <h6>{props.name}</h6>
        <h6>{props.description}</h6>
        <h6>{props.id}</h6>
        <h6>{props.genere}</h6>
        <h6>{props.release}</h6>
      </div>*/}
    </div> 
  );
};

export default DisplayInfo;
