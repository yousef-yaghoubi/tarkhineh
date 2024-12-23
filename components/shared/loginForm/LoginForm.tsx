'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React, { useState } from 'react';
import Portal from '../Portal';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import FloatingLabelInput from './InputNum';
import Button from '../button/Button';
import Link from 'next/link';
import { GetBranch } from '@/app/actions/branchAction';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Schema, z } from 'zod';
import { tree } from 'next/dist/build/templates/app-page';
import { Input } from '@/components/ui/input';

const SchemaLogin = z.object({
  email: z
    .string()
    .email('ایمیل نامعتبر است')
    .refine((val) => val.endsWith('@gmail.com'), {
      message: 'ایمیل باید با @gmail.com تمام شود',
    }),

  password: z
    .string()
    .min(8, 'رمز عبور باید حداقل 8 کاراکتر باشد')
    .refine((val) => /[a-z]/.test(val) && /[A-Z]/.test(val), {
      message: 'رمز عبور باید شامل حداقل یک حرف بزرگ و یک حرف کوچک باشد',
    }),
});

const SchemaRegister = z.object({
  email: z
    .string()
    .email('ایمیل نامعتبر است')
    .refine((val) => val.endsWith('@gmail.com'), {
      message: 'ایمیل باید با @gmail.com تمام شود',
    }),
  password: z
    .string()
    .min(8, 'رمز عبور باید حداقل 8 کاراکتر باشد')
    .refine((val) => /[a-z]/.test(val) && /[A-Z]/.test(val), {
      message: 'رمز عبور باید شامل حداقل یک حرف بزرگ و یک حرف کوچک باشد',
    }),
  repassword: z
    .string()
    .min(8, 'رمز عبور باید حداقل 8 کاراکتر باشد')
    .refine((val) => /[a-z]/.test(val) && /[A-Z]/.test(val), {
      message: 'رمز عبور باید شامل حداقل یک حرف بزرگ و یک حرف کوچک باشد',
    }),
});

type loginType = z.infer<typeof SchemaLogin>;
type registerType = z.infer<typeof SchemaRegister>;

function LoginForm() {
  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: errorsLogin, disabled },
  } = useForm<loginType>({
    resolver: zodResolver(SchemaLogin),
  });

  const {
    register: registerRegister,
    handleSubmit: handleSubmitRegister,
    formState: { errors: errorsRegister },
  } = useForm<registerType>({
    resolver: zodResolver(SchemaRegister),
  });

  const router = useRouter();

  const checkLoginOrSignIn = () => {
    console.log('testing');
  };

  const submitFormLogin = () => {
    console.log('submitting login form');
  };
  const submitFormRegister = () => {
    console.log('submitting login form');
  };

  return (
    <div className="bg-white dark:bg-background-1 rounded-md w-11/12 max-w-[392px] h-[40em] flex flex-col items-center overflow-hidden relative">
      <div className="w-full h-[72px] flex justify-center relative items-center">
        <Image
          src="/logoGreenSmall.png"
          alt="logo"
          height={36}
          width={100}
          className="h-9"
        />

        <button
          className="w-fit top-3 left-3 absolute"
          onClick={() => router.back()}
        >
          <Image
            src="/icons/CloseIcon.png"
            alt="close"
            width={24}
            height={24}
          />
        </button>
      </div>
      <Tabs
        defaultValue="login"
        className="flex flex-col justify-center items-center"
      >
        <TabsList className="w-3/4 bg-tint-1 rounded-md">
          <TabsTrigger
            value="signup"
            className="w-1/2 data-[state=active]:!text-primary data-[state=active]:shadow-none data-[state=active]:bg-tint-2 rounded-md dark:text-gray-8"
          >
            ثبت نام
          </TabsTrigger>
          <TabsTrigger
            value="login"
            className="w-1/2 data-[state=active]:!text-primary data-[state=active]:shadow-none data-[state=active]:bg-tint-2 rounded-md dark:text-gray-8"
          >
            ورود
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="signup"
          className="flex justify-center flex-col items-center"
        >
          <form
            className="flex flex-col items-center"
            onSubmit={handleSubmitRegister(submitFormRegister)}
          >
            <h6>ثبت نام</h6>
            <p className="caption-md text-gray-7 mt-[6px]">
              لطفا جیمیل و رمز عبور خود را وارد کنید
            </p>

            <div
              className="relative w-full max-w-sm flex justify-center mt-6"
              id="InputEmail"
            >
              <input
                type="text"
                id="InputEmailSignUp"
                {...registerRegister('email')}
                className="peer w-11/12 max-w-[344px] border border-gray-4 h-10 rounded-sm px-2 pt-5 pb-5 text-gray-900 dark:text-gray-100 dark:bg-transparent  transition-all duration-300 placeholder-transparent focus:outline-none focus:border-primary hover:border-gray-8 dark:hover:border-slate-400 "
                placeholder="ایمیل"
              />
              <label
                htmlFor="InputEmailSignUp"
                className={`absolute right-10 -top-[15px] flex justify-center items-center px-1 text-gray-7 text-sm transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400  peer-hover:text-gray-8 dark:peer-hover:text-slate-400 peer-placeholder-shown:text-base peer-focus:-top-[15px] focus:text-sm peer-focus:text-primary bg-white dark:bg-background-1`}
              >
                ایمیل
              </label>
            </div>
            <p className="w-11/12 flex justify-end">
              {errorsRegister.email && (
                <span className="caption-sm text-red-500" dir="rtl">
                  {errorsRegister.email.message}
                </span>
              )}
            </p>

            <div
              className="relative w-full max-w-sm flex justify-center mt-6"
              id="InputPass"
            >
              <input
                type="password"
                id="InputPassSignUp"
                {...registerRegister('password')}
                className="peer w-11/12 max-w-[344px] border border-gray-4 h-10 rounded-sm px-2 pt-5 pb-5 text-gray-900 dark:text-gray-100 dark:bg-transparent  transition-all duration-300 placeholder-transparent focus:outline-none focus:border-primary hover:border-gray-8 dark:hover:border-slate-400 "
                placeholder="رمز ورود"
              />
              <label
                htmlFor="InputPassSignUp"
                className={`absolute right-10 -top-[15px] flex justify-center items-center px-1 text-gray-7 text-sm transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400  peer-hover:text-gray-8 dark:peer-hover:text-slate-400 peer-placeholder-shown:text-base peer-focus:-top-[15px] focus:text-sm peer-focus:text-primary bg-white dark:bg-background-1`}
              >
                رمز ورود
              </label>
            </div>
            <p className="w-11/12 flex justify-end">
              {errorsRegister.password && (
                <span className="caption-sm text-red-500">
                  {errorsRegister.password.message}
                </span>
              )}
            </p>

            <div
              className="relative w-full max-w-sm flex justify-center mt-6"
              id="InputPass"
            >
              <input
                type="password"
                id="InputRePassSignUp"
                {...registerRegister('repassword')}
                className="peer w-11/12 max-w-[344px] border border-gray-4 h-10 rounded-sm px-2 pt-5 pb-5 text-gray-900 dark:text-gray-100 dark:bg-transparent transition-all duration-300 placeholder-transparent focus:outline-none focus:border-primary hover:border-gray-8 dark:hover:border-slate-400"
                placeholder="تکرار رمز ورود"
              />
              <label
                htmlFor="InputRePassSignUp"
                className={`absolute right-10 -top-[15px] flex justify-center items-center px-1 text-gray-7 text-sm transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400  peer-hover:text-gray-8 dark:peer-hover:text-slate-400 peer-placeholder-shown:text-base peer-focus:-top-[15px] focus:text-sm peer-focus:text-primary bg-white dark:bg-background-1`}
              >
                تکرار رمز ورود
              </label>
            </div>
            <p className="w-11/12 flex justify-end">
              {errorsRegister.repassword && (
                <span className="caption-sm text-red-500">
                  {errorsRegister.repassword.message}
                </span>
              )}
            </p>

            <Button
              btn="fill"
              theme="Primary"
              btnSize="w-[344px] max-w-[90%] h-10 mt-4"
              onClickCustom={() => checkLoginOrSignIn()}
              type="submit"
            >
              ادامه
            </Button>
          </form>

          <span className="caption-sm mt-3">یا</span>

          <div className="w-[90%] h-16 rounded-sm flex justify-evenly items-center hover:bg-gray-100 dark:hover:bg-background-2 transition-colors duration-300 mt-2">
            <span>ورود با گوگل</span>
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
          </div>

          <div className="absolute bottom-4 flex justify-center w-full">
            <p className="caption-sm text-gray-8 mt-4 dark:text-gray-2">
              ورود و عضویت در ترخینه به منزله قبول
              <Link href={'/rules'} className="text-primary">
                {' '}
                قوانین و مقررات{' '}
              </Link>
              است.
            </p>
          </div>
        </TabsContent>

        <TabsContent
          value="login"
          className="flex justify-center flex-col items-center"
        >
          <form
            className="flex flex-col items-center"
            onSubmit={handleSubmitLogin(submitFormLogin)}
          >
            <h6>ورود</h6>
            <p className="caption-md text-gray-7 mt-[6px]">
              لطفا جیمیل و رمز عبور خود را وارد کنید
            </p>

            <div
              className="relative w-full max-w-sm flex justify-center mt-6"
              id="InputEmail"
            >
              <input
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

            <p className="w-11/12 flex justify-end">
              {errorsLogin.email && (
                <span className="text-red-500 text-xs" dir="rtl">
                  {errorsLogin.email.message}
                </span>
              )}
            </p>

            <div
              className="relative w-full max-w-sm flex justify-center mt-6"
              id="InputPass"
            >
              <input
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
            <p className="w-11/12 flex justify-end">
              {errorsLogin.password && (
                <span className="text-red-500 text-xs">
                  {errorsLogin.password.message}
                </span>
              )}
            </p>

            <Button
              btn="fill"
              theme="Primary"
              btnSize="w-[344px] max-w-[90%] h-10 mt-4"
              type="submit"
            >
              ادامه
            </Button>
          </form>
          <div className="flex flex-col w-full h-fit items-center">
            <span className="caption-sm mt-3">یا</span>

            <div className="w-[90%] h-16 rounded-sm flex justify-evenly items-center hover:bg-gray-100 dark:hover:bg-background-2 transition-colors duration-300 mt-2">
              <span>ورود با گوگل</span>
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
            </div>

            <div className="absolute bottom-4 flex justify-center w-full">
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
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default LoginForm;
