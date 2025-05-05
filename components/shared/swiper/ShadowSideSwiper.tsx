import React from 'react'

function ShadowSideSwiper({ badgeSlides, theme }: { badgeSlides?: 'type' | 'sort', theme: 'Primary' | 'White' }) {
    return (
        <>
            {badgeSlides == undefined && (
                <div
                    className={`w-[5%] h-full ${theme == 'Primary'
                        ? 'bg-[#417f567d]'
                        : 'bg-[#ffffff87] dark:bg-[#232b339e]'
                        } z-10 hidden md:flex`}
                ></div>
            )}
        </>
    )
}

export default ShadowSideSwiper