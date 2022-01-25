
import { ReactChild, ReactFragment, ReactPortal } from "react";
import "./style.css";

const DisplayInfo = (props: any) => {
  const baseUrlPoster = "https://image.tmdb.org/t/p/w185/";
  return (
    <div className="movie-items">
      <div id="main-container">
        <div className="container">
          <div className="card web" style={{
              
            backgroundColor: "rgb(10, 26, 43)",
          }}>
            <div className="card-body">

              <div className="row">
                <div className="col-2">
                  <img src={`${baseUrlPoster}${props.image}`} alt={props.name} />
                </div>
                <div className="col-10">
                  <span ><h1>{props.name}</h1></span>
                  <p >Release Date : {props.release}</p>
                
                  <p >{props.description}</p>
                  {/* {props.description.split(".").map((char: any)=>(
              <p>{char}</p>
          ))} */}
                  <p >{props.genere}</p>
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
          </div>
          <div className="card mobile" style={{

            backgroundColor: "rgb(10, 26, 43)",
          }}>
            <div className="card-body">


              <img src={`${baseUrlPoster}${props.image}`} alt={props.name} />


              <div>
                <br></br>
                <span className="title"><h6>{props.name}</h6></span>
                <p >{props.release}</p>
                <br></br>
                <p >{props.description}</p>
                {/* {props.description.split(".").map((char: any)=>(
              <p>{char}</p>
          ))} */}
                <p >{props.genere}</p>
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
        </div>
      </div>
    </div>


  );
};

export default DisplayInfo;
