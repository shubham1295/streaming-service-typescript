import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Row from '../../components/row/Row';
import { getSearch } from '../../service/api';

export const SearchResult = () => {
  const { keyword } = useParams();
  const [search, setSearch] = useState([] as any);

  const handleMovieData = (data: any) => {
    console.log(data, 'Movie data');
  };

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
      <h1>Search Page : {keyword}</h1>
      <Row movies={search} handleMovieData={handleMovieData} />
    </div>
  );
};
