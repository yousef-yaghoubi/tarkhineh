
import Portal from '@/components/shared/Portal'
import React from 'react'

function page() {
  return (
    <Portal>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
        <div className="bg-white dark:bg-background-1 rounded-sm sm:rounded-md shadow-lg  max-w-[800px] w-11/12 relative flex flex-col items-center overflow-hidden">
          Login
        </div>
      </div>
    </Portal>
  )
}

export default page
