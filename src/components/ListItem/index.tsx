import React from 'react';

interface propsType {
  item: MovieType;
  index: number;
}
const ListItem = ({ item, index }: propsType) => {
  const transformOriginValue: () => string = () => {
    const left = [0, 5, 10, 15];
    const right = [4, 9, 14, 19];
    if (left.includes(index)) {
      return '0 50%';
    } else if (right.includes(index)) {
      return '100% 50%';
    } else {
      return 'center';
    }
  };

  return (
    <div
      className='relative inline-block px-1 transition-all duration-500 cursor-pointer lg:w-1/5 hover:scale-125 hover:z-50'
      style={{ transformOrigin: transformOriginValue() }}
    >
      <div
        className='bg-center bg-cover aspect-[2/3] overflow-hidden rounded'
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/w500/${item.poster_path}')`,
        }}
      ></div>
    </div>
  );
};

export default ListItem;
