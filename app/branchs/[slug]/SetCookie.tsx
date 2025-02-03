'use client';
import Cookies from 'js-cookie';
function SetCookie({ value }: { value: string }) {
  Cookies.set('branch', value);
  return null;
}

export default SetCookie;
