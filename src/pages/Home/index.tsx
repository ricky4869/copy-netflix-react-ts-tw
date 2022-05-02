import React, { useState, useEffect } from 'react';
import SwiperList from '../../components/SwiperList';
import Hero from '../../components/Hero';

const Home = () => {
  const [popular, setPopular] = useState([] as Array<MovieType>);
  const getPopular = async () => {
    const resp = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=fd54ef9ae9fc763f54506f3d1701ca12&page=1',
    );
    const json = await resp.json();
    setPopular(json.results);
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div>
      <Hero></Hero>
      <div className='mt-[-200px] relative z-20 pt-5'>
        <div className='absolute top-0 left-0 w-full h-56 bg-gradient-to-t from-black/100 to-black/0'></div>
        <SwiperList data={popular} title='熱門電影' />
        <SwiperList data={popular} title='熱門電影' />
      </div>
    </div>
  );
};

export default Home;
