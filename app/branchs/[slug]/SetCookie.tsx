'use client';
import Cookies from 'js-cookie';
function SetCookie(value: string ) {
  Cookies.set('branch', value);
}

export default SetCookie;
