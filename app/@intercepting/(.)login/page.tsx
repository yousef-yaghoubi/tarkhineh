import LoginForm from '@/components/shared/loginForm/LoginForm'
import Portal from '@/components/shared/Portal'
import React from 'react'

function page() {
  return (
    <Portal>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">

      <LoginForm/>
      </div>
    </Portal>
  )
}

export default page
