import React, { useState } from 'react';
import ListItem from '../ListItem';

interface propsType {
  data: Array<MovieType>;
  title: string;
}

const SwiperList = ({ title, data }: propsType) => {
  const [page, setPage] = useState(0);

  const changePage = (value: number) => {
    setPage(page + value);
  };

  return (
    <div className='relative z-10'>
      <div className='pb-12'>
        <div className='mb-3 text-2xl font-bold lg:px-20'>{title}</div>
        <div className='relative lg:px-20'>
          <div
            className={`w-full transition-all whitespace-nowrap duration-1000`}
            style={{ transform: `translateX(${-100 * page}%)` }}
          >
            {data.map((item, index) => {
              return <ListItem key={item.id} item={item} index={index} />;
            })}
          </div>
          <div
            onClick={() => changePage(1)}
            className='w-[76px] h-full absolute top-0 right-0 bg-black/50 rounded-l cursor-pointer'
            style={{
              display: (page + 1) * 5 == data.length ? 'none' : 'block',
            }}
          ></div>
          <div
            onClick={() => changePage(-1)}
            className='w-[76px] h-full absolute top-0 left-0 bg-black/50 rounded-r cursor-pointer'
            style={{ display: page > 0 ? 'block' : 'none' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SwiperList;
