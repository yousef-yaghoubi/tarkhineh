'use client';

import React from 'react'

function ButtonProvider({children}: {children: React.ReactNode}) {
    return (
        <div>{children}</div>
    )
}

export default ButtonProvider
