import React, { useState, useEffect } from 'react';
// import ListItem from '../ListItem';

const List = () => {
  const [data, setData] = useState([] as Array<MovieType>);
  const getData = async () => {
    const resp = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=fd54ef9ae9fc763f54506f3d1701ca12&page=1',
    );
    const json = await resp.json();
    setData(json.results);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <ul>
        {data.map((item) => {
          return <li key={item.id}>{/* <ListItem item={item} /> */}</li>;
        })}
      </ul>
    </div>
  );
};

export default List;
