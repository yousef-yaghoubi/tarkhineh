'use client';
import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

const TestConfetti = () => {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [isClient, setClient] = useState(false);
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

export default TestConfetti;
