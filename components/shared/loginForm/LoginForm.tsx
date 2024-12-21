'use client'
import React from 'react'
import Portal from '../Portal'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import FloatingLabelInput from './InputNum'


function LoginForm() {
  const router = useRouter()
  return (
    <Portal>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
        <div className="bg-white dark:bg-background-1 rounded-sm sm:rounded-md shadow-lg  w-[392px] h-[302px] relative flex flex-col items-center overflow-hidden">
          <div className='w-full h-[72px] flex justify-center relative items-center'>
              <Image src='/logoGreenSmall.png' alt='logo' height={36} width={100} className='h-9'/>
              <button className='w-fit top-3 left-3 absolute' onClick={()=> router.back()}>
                <Image src='/icons/CloseIcon.png' alt='close' width={24} height={24}/>
              </button>
          </div>
          <h6>ورود / ثبت نام</h6>
          <p className='caption-md text-gray-7 mt-[6px]'>
            لطفا جیمیل خودرا وارد کنید
          </p>

          <FloatingLabelInput/>
        </div>
      </div>
    </Portal>
  )
}

export default LoginForm
