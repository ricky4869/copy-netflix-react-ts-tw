import React from 'react';

const Hero = () => {
  return (
    <div className='relative w-full hero aspect-video'>
      <div
        className='absolute top-0 left-0 w-full h-full bg-center bg-cover'
        style={{ backgroundImage: `url('/images/hero-image.jpg')` }}
      ></div>
      <div className='absolute w-[36%] bottom-[35%] left-[4%]'>
        <div className='mb-5 font-bold text-7xl text-shadow'>花束般的戀愛</div>
        <div className='block w-full text-lg font-bold text-shadow line-clamp-2'>
          2020年，一對年輕的情侶在某間咖啡廳各別用同條耳機的其中一邊揚聲器，聆聽智慧手機裡的音樂，同樣在該間餐廳的山音麥和八谷絹望見此景，稱他們雖然喜歡音樂，但若僅用其中一端耳機，各自聽見的音頻便不會是相同的，觀察著該對年輕情侶的互動後，短暫地陷入沉默之中。
        </div>
        <div className='mt-7'>
          <button className='mb-3 mr-3 text-black bg-white/100 hover:bg-white/75 btn'>
            播放
          </button>
          <button className='mb-3 mr-3 text-white bg-gray-500/75 hover:bg-gray-500/50 btn'>
            更多資訊
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
