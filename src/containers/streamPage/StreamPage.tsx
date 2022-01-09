import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Player from "../../components/player/Player";
import { getEpisodeBySeason, getMovie, getTvSeries } from "../../service/api";
import {
  Box,
  FormControl,
  InputLabel,
  ListItemButton,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Loader from "../../components/loader/Loader";

export const StreamPage = () => {
  const { id, source } = useParams();
  const [streamData, setStreamData] = useState(null as any);
  const [season, setSeason] = useState(0);
  const [episode, setEpisode] = useState([] as any);
  const [streamUrl, setStreamUrl] = useState("" as any);
  const [pageTitle, setPageTitle] = useState("" as any);

  const getStreamData = async () => {
    try {
      if (source === "movie") {
        const res = await getMovie(id as number | string);
        setStreamData(res);
        setPageTitle(res.title);
        setStreamUrl(res.url);
      }
      if (source === "tv") {
        const res = await getTvSeries(id as number | string);
        setStreamData(res);
        setPageTitle(res.name);
        setStreamUrl(res?.seasons[0]?.episodes[0]?.url);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchEpisode = async (id: string, season: number) => {
    try {
      const res = await getEpisodeBySeason(id as number | string, season);
      setEpisode(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    setSeason(Number(event.target.value));
    fetchEpisode(id as string, Number(event.target.value) + 1);
  };
  console.log(streamData?.title, "resss");
  useEffect(() => {
    fetchEpisode(id as string, season + 1);
    getStreamData();
    document.title = pageTitle;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageTitle]);

  return (
    <div>
      <Header />
      {streamData ? (
        <>
          {source === "movie" ? (
            <div className="movie-items" style={{ padding: "10%" }}>
              <Player streamUrl={streamData?.url} />
            </div>
          ) : (
            <div className="movie-items" style={{ padding: "10%" }}>
              {streamData && <Player streamUrl={streamUrl} />}
              {episode ? (
                <Box sx={{ minWidth: 120, backgroundColor: "grey" }}>
                  <FormControl fullWidth style={{ backgroundColor: "grey" }}>
                    <InputLabel>Seasons</InputLabel>
                    <Select
                      value={season.toString()}
                      label="Season"
                      onChange={handleChange}
                    >
                      {streamData?.seasons.map((item: any, index: number) => (
                        <MenuItem key={item.id} value={index}>
                          {item.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <ListItemButton>
                    {episode?.episodes?.map((ep: any) => (
                      <ListItemText onClick={() => setStreamUrl(ep?.url)}>
                        {ep.name}
                      </ListItemText>
                    ))}
                  </ListItemButton>
                </Box>
              ) : (
                <Loader />
              )}
            </div>
          )}
        </>
      ) : (
        <Loader />
      )}

      <Footer />
    </div>
  );
};
