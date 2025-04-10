'use client'
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }: {children : React.ReactElement}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(children, document.body);
};

export default Portal;
