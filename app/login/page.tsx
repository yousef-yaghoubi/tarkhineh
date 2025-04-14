import LoginForm from '@components/shared/loginForm/LoginForm'
import React from 'react'

function loginModal() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <LoginForm/>
    </div>
  )
}

export default loginModal
