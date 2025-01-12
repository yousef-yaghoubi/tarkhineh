'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

function ButtonBack({children}: {children: React.ReactNode}) {
    const router = useRouter()
  return (
    <button
      onClick={() => router.back()}
      className="absolute top-4 left-4 w-6 h-6 sm:h-10 sm:w-10 sm:top-[0.4em] sm:left-[0.4em] md:w-10 md:top-5 md:left-5 text-gray-600 hover:text-gray-800 focus:outline-none"
      aria-label="Close Modal"
    >
        {children}
    </button>
  );
}

export default ButtonBack;
