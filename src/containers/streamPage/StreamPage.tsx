import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Player from "../../components/player/Player";
import {
  getEpisodeBySeason,
  getMovie,
  getSimilarMovies,
  getSimilarTvSeries,
  getTvSeries,
} from "../../service/api";
import {
  Box,
  FormControl,
  Grid,
  ListItemButton,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Skeleton,
} from "@mui/material";
import Loader from "../../components/loader/Loader";
import GridDisplay from "../../components/gridDisplay/GridDisplay";
import DisplayInfo from "../../components/displayInfo/DisplayInfo";

import { GoogleAnalyticsInit } from "../../utils/GoogleAnalyticsInit";

export const StreamPage = () => {
  const { id, source } = useParams();
  const [streamData, setStreamData] = useState(null as any);
  const [season, setSeason] = useState(0);
  const [episode, setEpisode] = useState([] as any);
  const [streamUrl, setStreamUrl] = useState("" as any);
  const [pageTitle, setPageTitle] = useState("" as any);
  const [similarStreamData, setSimilarStreamData] = useState([] as any);
  const [serverUrls, setServerUrls] = useState([] as any);
  const [loader, setLoader] = useState(0);

  const getStreamData = async () => {
    try {
      if (source === "movie") {
        const res = await getMovie(id as number | string);
        const similarMovie = await getSimilarMovies(id as string);
        setStreamData(res);
        setPageTitle(res.title);
        setStreamUrl(res.url);
        setServerUrls(res.url);
        setSimilarStreamData(similarMovie.results);
      }
      if (source === "tv") {
        const res = await getTvSeries(id as number | string);
        const similarTvSeries = await getSimilarTvSeries(id as string);
        setStreamData(res);
        setPageTitle(res.name);
        setServerUrls(res?.seasons[0]?.episodes[0]?.url);
        setStreamUrl(res?.seasons[0]?.episodes[0]?.url[0]);
        setSimilarStreamData(similarTvSeries.results);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchEpisode = async (id: string, season: number) => {
    try {
      const res = await getEpisodeBySeason(id as number | string, season);
      setLoader(1);
      setEpisode(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    setSeason(Number(event.target.value));
    setLoader(0);
    fetchEpisode(id as string, Number(event.target.value) + 1);
  };

  useEffect(() => {
    GoogleAnalyticsInit();

    if (source === "tv") fetchEpisode(id as string, season + 1);
    getStreamData();
    document.title = pageTitle;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageTitle]);

  return (
    <div>
      <Header />

      {streamData ? (
        <>
          <iframe
            title="ad"
            data-aa="1909560"
            src="//acceptable.a-ads.com/1909560"
            style={{
              width: "100%",
              height: "100%",
              border: "0px",
              padding: "0",
              overflow: "hidden",
              backgroundColor: "transparent",
            }}
          ></iframe>
          {source === "movie" ? (
            <div className="movie-items" style={{ padding: "2% 8% 2% 8%" }}>
              <h1 style={{ paddingBottom: "2%" }}>
                {streamData.name || streamData.title}
              </h1>
              <Player streamUrl={streamData?.url} />
              {serverUrls.length > 1 && (
                <Box
                  className="card"
                  style={{ backgroundColor: "rgb(10, 26, 43)" }}
                >
                  <div className="card-body">
                    <Grid container>
                      {/* Streaming multipleServer  */}
                      {serverUrls?.map((server: any, index: any) => (
                        <Grid
                          item
                          xs={12}
                          md={6}
                          lg={2}
                          style={{
                            margin: "1.5%",
                            backgroundColor: "rgb(37, 59, 83)",
                            padding: "0px",
                            borderRadius: "5px",
                          }}
                        >
                          <ListItemButton>
                            <ListItemText
                              onClick={() => setStreamUrl(server)}
                              style={{ color: "white", textAlign: "center" }}
                            >
                              {`Server ${index + 1}`}
                            </ListItemText>
                          </ListItemButton>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </Box>
              )}
            </div>
          ) : (
            <div className="movie-items" style={{ padding: "2% 8% 2% 8%" }}>
              <h1 style={{ paddingBottom: "2%" }}>
                {streamData.name || streamData.title}
              </h1>
              {streamData && <Player streamUrl={streamUrl} />}
              <br></br>
              {serverUrls.length > 1 && (
                <Box
                  className="card"
                  style={{ backgroundColor: "rgb(10, 26, 43)" }}
                >
                  <div className="card-body">
                    <Grid container>
                      {/* Streaming multipleServer  */}
                      {serverUrls?.map((server: any, index: any) => (
                        <Grid
                          item
                          xs={12}
                          md={6}
                          lg={2}
                          style={{
                            margin: "1.5%",
                            backgroundColor: "rgb(37, 59, 83)",
                            padding: "0px",
                            borderRadius: "5px",
                          }}
                        >
                          <ListItemButton>
                            <ListItemText
                              onClick={() => setStreamUrl(server)}
                              style={{ color: "white", textAlign: "center" }}
                            >
                              {`Server ${index + 1}`}
                            </ListItemText>
                          </ListItemButton>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </Box>
              )}

              <br></br>
              {episode ? (
                <Box
                  className="card"
                  sx={{ minWidth: 120, backgroundColor: "rgb(10, 26, 43)" }}
                >
                  <FormControl className="card-body">
                    <Select
                      style={{
                        color: "white",
                        fontSize: "1.4rem",
                        backgroundColor: "rgb(37, 59, 83)",
                      }}
                      value={season.toString()}
                      onChange={handleChange}
                    >
                      {/* Season Iteration */}
                      {streamData?.seasons.map((item: any, index: number) => (
                        <MenuItem
                          key={item.id}
                          value={index}
                          style={{ fontSize: "1.4rem" }}
                        >
                          {item.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {loader === 1 ? (
                    <Grid
                      container
                      style={{
                        overflowY: "scroll",
                        position: "relative",
                        height: "250px",
                      }}
                    >
                      {/* Episode Iteration */}
                      {episode?.episodes?.map((ep: any) => (
                        <Grid
                          item
                          xs={12}
                          md={2}
                          style={{
                            maxHeight: "50px",
                            margin: "1.6%",
                            backgroundColor: "rgb(37, 59, 83)",
                            padding: "2px",
                            borderRadius: "5px",
                          }}
                        >
                          <ListItemButton>
                            <ListItemText
                              style={{ color: "white", textAlign: "center" }}
                              onClick={() => {
                                setStreamUrl(ep?.url[0]);
                                setServerUrls(ep?.url);
                              }}
                            >
                              {ep.name}
                            </ListItemText>
                          </ListItemButton>
                        </Grid>
                      ))}
                    </Grid>
                  ) : (
                    <div style={{ margin: "0 10% 0 10%" }}>
                      <Skeleton
                        style={{
                          height: "75px",
                          width: "auto",
                        }}
                        animation="pulse"
                        variant="text"
                      />
                      <Skeleton
                        style={{
                          height: "75px",
                          width: "auto",
                        }}
                        animation="pulse"
                        variant="text"
                      />
                      <Skeleton
                        style={{
                          height: "75px",
                          width: "auto",
                        }}
                        animation="pulse"
                        variant="text"
                      />
                    </div>
                  )}
                </Box>
              ) : (
                <Loader />
              )}
            </div>
          )}
          <DisplayInfo
            name={streamData.name || streamData.title}
            image={streamData.poster_path}
            description={streamData.overview}
            id={streamData.imdbId}
            release={streamData.first_air_date || streamData.release_date}
          />
        </>
      ) : (
        <Loader />
      )}
      {source === "movie" ? (
        <GridDisplay
          title={"Similar Movies"}
          movies={similarStreamData}
          source={"movie"}
        />
      ) : (
        <GridDisplay
          title={"Similar TV Series"}
          movies={similarStreamData}
          source={"tv"}
        />
      )}

      <Footer />
    </div>
  );
};
