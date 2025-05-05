'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SchemaLogin } from '@/validators/zod';
import { signIn } from 'next-auth/react';
import ButtonBack from '../button/ButtonBack';
import IconClose from '@icons/CloseIcon.svg';
import dynamic from 'next/dynamic';
import InputCustom from '../input/InputCustom';
import IconGoogle from '@icons/Google.svg';
type loginType = z.infer<typeof SchemaLogin>;
const Button = dynamic(() => import('@/components/shared/button/Button'));
function LoginForm() {
  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: errorsLogin },
  } = useForm<loginType>({
    resolver: zodResolver(SchemaLogin),
  });

  const submitFormLogin = async (e: { email: string; password: string }) => {
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
          src="/logoGreenSmall.webp"
          alt="logo"
          height={36}
          width={100}
          className="h-9"
        />

        <ButtonBack>
          <IconClose className="w-6 h-6 fill-[#717171]" />
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

          <InputCustom
            classNameParent="w-[344px] !max-w-[90%] max-w-sm mt-3"
            id="InputEmail"
            placeholder="ایمیل"
            dir='ltr'
            type="text"
            error={errorsLogin.email}
            {...registerLogin('email')}
          />
          <InputCustom
            classNameParent="w-[344px] !max-w-[90%] max-w-sm mt-3"
            id="InputPass"
            placeholder="رمز عبور"
            dir='ltr'
            type="password"
            error={errorsLogin.password}
            {...registerLogin('password')}
          />

          <Button
            btn="fill"
            theme="Primary"
            className="w-[344px] max-w-[90%] h-10 mt-4"
            type='submit'
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
            <IconGoogle width={40} height={40}/>
          </button>

          <div className="flex justify-center w-full absolute bottom-4">
            <p className="caption-sm text-gray-8 mt-4 dark:text-gray-2">
              ورود و عضویت در ترخینه به منزله قبول
              <Link href={'/ruls'} className="text-primary">
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
