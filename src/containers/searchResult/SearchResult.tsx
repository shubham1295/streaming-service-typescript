import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../../components/footer/Footer";
import GridDisplay from "../../components/gridDisplay/GridDisplay";
import Header from "../../components/header/Header";
import { getSearch } from "../../service/api";

export const SearchResult = () => {
  const { keyword } = useParams();
  const [search, setSearch] = useState([] as any);

  const fetchSerachData = async () => {
    try {
      const res = await getSearch(keyword as string);
      setSearch(res?.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSerachData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <div style={{ paddingTop: "10%" }} className="movie-items">
        <GridDisplay title={`Search Results for ${keyword}`} movies={search} />
      </div>
      <Footer />
    </div>
  );
};
