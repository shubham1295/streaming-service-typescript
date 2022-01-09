import { Pagination, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Footer from "../../components/footer/Footer";
import GridDisplay from "../../components/gridDisplay/GridDisplay";
import Header from "../../components/header/Header";
import Loader from "../../components/loader/Loader";
import { getSearch } from "../../service/api";

export const SearchResult = () => {
  const navigate = useNavigate();
  const { keyword, page } = useParams();
  const [search, setSearch] = useState([] as any);
  const [pg, setPg] = useState(Number(page));
  const [totalPages, setTotalPages] = useState(1);

  const fetchSerachData = async (p: number) => {
    try {
      const res = await getSearch(keyword as string, p);
      setSearch(res?.results);
      setTotalPages(res?.total_pages);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSerachData(pg);
    document.title = "Results for " + keyword;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword, page]);

  return (
    <div>
      <Header />
      {search.length > 0 ? (
        <div>
          <div style={{ paddingTop: "10%" }} className="movie-items">
            <GridDisplay
              title={`Search Results for ${keyword}`}
              movies={search}
            />
          </div>
          <Stack spacing={2}>
            <Pagination
              style={{ margin: "auto", display: "block" }}
              count={totalPages}
              defaultPage={pg}
              siblingCount={0}
              color="primary"
              onChange={(event, p) => {
                setPg(p);
                navigate(`/search/${keyword}/page=${p}`);
              }}
            />
          </Stack>
        </div>
      ) : (
        <Loader />
      )}
      <Footer />
    </div>
  );
};
