'use client';
import React from 'react';
import Image from 'next/image';
import Button from '../button/Button';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import ErrorMessage from './ErrorMessage';
import { SchemaLogin, SchemaRegister } from '@/lib/zod';
import { signIn } from 'next-auth/react';
import ButtonBack from '../button/ButtonBack';

type loginType = z.infer<typeof SchemaLogin>;
type registerType = z.infer<typeof SchemaRegister>;

function LoginForm() {
  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: errorsLogin },
  } = useForm<loginType>({
    resolver: zodResolver(SchemaLogin),
  });


  const submitFormLogin = async (e: { email: string; password: string }) => {
    // SignInCredential(e)
    await signIn('credentials', {
      email: e.email,
      password: e.password,
      callbackUrl: '/',
    });
  };

  return (
    <div className="bg-white dark:bg-background-1 rounded-md w-11/12 max-w-[392px] h-[30em] flex flex-col items-center overflow-hidden relative">
      <div className="w-full h-[72px] flex justify-center relative items-center">
        <Image
          src="/logoGreenSmall.png"
          alt="logo"
          height={36}
          width={100}
          className="h-9"
        />

        <ButtonBack>
          <Image
            src="/icons/CloseIcon.png"
            alt="close"
            width={24}
            height={24}
          />
        </ButtonBack>
      </div>

      <div className="flex flex-col justify-center items-center" dir="rtl">
        <form
          className="flex flex-col items-center"
          onSubmit={handleSubmitLogin(submitFormLogin)}
        >
          <h6>ورود / ثبت نام</h6>
          <p className="caption-md text-gray-7 mt-[6px]">
            لطفا جیمیل و رمز عبور خود را وارد کنید
          </p>

          <div
            className="relative w-full max-w-sm flex justify-center mt-3"
            id="InputEmail"
          >
            <input
              dir="ltr"
              type="text"
              id="InputEmailLogin"
              {...registerLogin('email')}
              className="peer w-11/12 max-w-[344px] border border-gray-4 h-10 rounded-sm px-2 pt-5 pb-5 text-gray-900 dark:text-gray-100 dark:bg-transparent transition-all duration-300 placeholder-transparent focus:outline-none focus:border-primary hover:border-gray-8 dark:hover:border-slate-400"
              placeholder="ایمیل"
            />
            <label
              htmlFor="InputEmailLogin"
              className={`absolute right-10 -top-[15px] flex justify-center items-center px-1 text-gray-7 text-sm transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400  peer-hover:text-gray-8 dark:peer-hover:text-slate-400 peer-placeholder-shown:text-base peer-focus:-top-[15px] focus:text-sm peer-focus:text-primary bg-white dark:bg-background-1`}
            >
              ایمیل
            </label>
          </div>

          <ErrorMessage forInput={errorsLogin.email} />

          <div
            className="relative w-full max-w-sm flex justify-center mt-3"
            id="InputPass"
          >
            <input
              dir="ltr"
              type="password"
              id="InputPassLogin"
              {...registerLogin('password')}
              className="peer w-11/12 max-w-[344px] border border-gray-4 h-10 rounded-sm px-2 pt-5 pb-5 text-gray-900 dark:text-gray-100 dark:bg-transparent transition-all duration-300 placeholder-transparent focus:outline-none focus:border-primary hover:border-gray-8 dark:hover:border-slate-400"
              placeholder="رمز ورود"
            />
            <label
              htmlFor="InputPassLogin"
              className={`absolute right-10 -top-[15px] flex justify-center items-center px-1 text-gray-7 text-sm transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400  peer-hover:text-gray-8 dark:peer-hover:text-slate-400 peer-placeholder-shown:text-base peer-focus:-top-[15px] focus:text-sm peer-focus:text-primary bg-white dark:bg-background-1`}
            >
              رمز ورود
            </label>
          </div>
          <ErrorMessage forInput={errorsLogin.password} />

          <Button
            btn="fill"
            theme="Primary"
            btnSize="w-[344px] max-w-[90%] h-10 mt-4"
            type="submit"
          >
            ورود / ثبت نام
          </Button>
        </form>
        <div className="flex flex-col w-full h-fit items-center">
          <span className="caption-sm mt-3">یا</span>

          <button
            className="w-[90%] h-16 rounded-sm flex justify-evenly items-center hover:bg-gray-100 dark:hover:bg-background-2 transition-colors duration-150 mt-2"
            onClick={() => signIn('google')}
          >
            <span>ورود یا ثبت نام با گوگل</span>
            <svg
              width="40px"
              height="40px"
              viewBox="-3 0 262 262"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <path
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                fill="#4285F4"
              />
              <path
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                fill="#34A853"
              />
              <path
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                fill="#FBBC05"
              />
              <path
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                fill="#EB4335"
              />
            </svg>
          </button>

          <div className="flex justify-center w-full absolute bottom-4">
            <p className="caption-sm text-gray-8 mt-4 dark:text-gray-2">
              ورود و عضویت در ترخینه به منزله قبول
              <Link href={'/rules'} className="text-primary">
                {' '}
                قوانین و مقررات{' '}
              </Link>
              است.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
