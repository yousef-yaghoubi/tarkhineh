'use client';
import React, { use, useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import TestConfetti from './Celebration';

function page() {
  
  return (
    <div className="h-screen w-screen relative">
      success
      <TestConfetti/>
    </div>
  );
}

export default page;
