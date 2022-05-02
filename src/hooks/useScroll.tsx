import { useState, useEffect } from 'react';

export const useScroll = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => {
      setPosition({ x: window.scrollX, y: window.scrollY });
    };
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return position;
};

export default useScroll;
