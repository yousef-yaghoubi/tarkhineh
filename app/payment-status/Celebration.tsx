'use client';
import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

const Celebrate = () => {
  const [isClient, setClient] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });


  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;
    setDimensions({
      width,
      height,
    });
    setClient(true);
    setTimeout(() => {
        setClient(false);
    }, 5000);
  }, []);
  
  return (
    <>
      {isClient && (
        <Confetti width={dimensions.width} height={dimensions.height} />
      )}
    </>
  );
};

export default Celebrate;
