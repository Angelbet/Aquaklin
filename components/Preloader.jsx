import React, { createRef, useEffect } from 'react';
import { useState } from 'react';

// Styles
import style from '../styles/Preloader.module.scss'

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Fonts
import { Raleway } from 'next/font/google'

const raleway = Raleway({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
})

export default function Preloader() {


    return (
        <div className={`${style.loader}`}>
            <div className={`${style.footer_logo_container} ${style.absolute}`}>
                <div className={style.footer_triangle}>
                    <div className={style.image}>
                        <svg
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 584.01 192.72"
                        >
                            <defs>
                                <style
                                    dangerouslySetInnerHTML={{
                                        __html: ".cls-1{fill:#457b9d;}.cls-2{fill:#a4dbf0;}"
                                    }}
                                />
                            </defs>
                            <path
                                className="cls-1"
                                d="M410.08,186.77c-20.99-5.22-40.94-13.14-60.71-21.57-15.58-6.64-31.11-13.38-46.78-19.78-17.76-7.25-36.02-12.95-54.82-16.87-9.11-1.9-18.27-3.43-27.54-4.32-8.03-.77-16.07-1.1-24.12-.78-10.86,.43-21.52,2.08-31.81,5.72-5.18,1.84-10.11,4.21-14.78,7.13-.29,.18-.6,.35-.91,.53-.13-.12-.25-.2-.34-.31-.45-.54-.88-1.08-1.44-1.77,1.95-1.31,3.82-2.63,5.76-3.86,8.02-5.04,16.74-8.43,25.88-10.8,7.12-1.85,14.36-3.02,21.69-3.73,7.24-.7,14.5-1.06,21.76-.78,7.37,.28,14.75,.65,22.09,1.36,19.21,1.86,38.18,5.22,56.74,10.54,14.11,4.05,28.08,8.59,42.1,12.98,9.59,3.01,19.14,6.17,28.92,8.53,7.63,1.85,15.35,3.16,23.15,4.03,8.16,.9,16.34,1.32,24.54,1.15,19.22-.4,37.91-3.71,55.94-10.46,11.46-4.29,22.33-9.76,32.22-17.03,11-8.09,20.03-17.9,25.98-30.32,3.61-7.53,5.82-15.47,6.93-23.73,.73-5.42,.98-10.86,.82-16.32-.21-7-.81-13.98-2.01-20.88-1.94-11.14-4.03-22.25-6.08-33.37-.12-.62,.02-.94,.53-1.28,1.53-1.01,1.52-1.04,3.04-.03,15.4,10.22,27.28,23.6,35.77,40,4.43,8.57,7.6,17.59,9.5,27.05,1.06,5.3,1.7,10.65,1.86,16.05,.72,23.4-6.61,44.1-21.03,62.38-9.4,11.91-21.04,21.19-34.28,28.53-13.17,7.3-27.2,12.19-41.94,15.11-7.96,1.58-16.02,2.45-24.13,2.75-8.5,.32-16.98-.02-25.42-.95-9.11-1.01-18.11-2.65-27.07-4.88Z"
                            />
                            <path
                                className="cls-1"
                                d="M159,77.69c14.14-6.16,28.67-10.8,43.77-13.68,7.46-1.42,14.97-2.42,22.53-2.9,7.66-.49,15.33-.46,23,.08,10.65,.75,21.12,2.5,31.41,5.33,9.65,2.65,19,6.2,28.23,10.04,12,4.99,23.92,10.17,35.9,15.21,10.99,4.62,22.13,8.87,33.57,12.24,9.1,2.68,18.33,4.78,27.77,5.84,8.6,.97,17.22,1.06,25.85,.3,16.83-1.48,32.84-6.05,48.37-12.55,12.05-5.05,23.52-11.19,34.69-17.93,.3-.18,.6-.34,.96-.54,.56,.68,1.1,1.32,1.69,2.03-.76,.83-1.48,1.66-2.23,2.46-11.23,11.9-23.64,22.36-37.66,30.85-14.11,8.55-29.17,14.7-45.36,18-9.61,1.96-19.32,2.82-29.13,2.6-8.41-.19-16.75-1.05-25.04-2.47-15.15-2.61-29.87-6.85-44.34-11.94-10.74-3.78-21.42-7.76-32.11-11.69-9.96-3.66-19.99-7.08-30.26-9.79-8.75-2.31-17.6-4.05-26.6-5.05-7.5-.83-15.02-1.08-22.54-.77-7.7,.32-15.32,1.34-22.89,2.82-23.88,4.67-46.87,12.28-69.47,21.17-16.03,6.3-31.83,13.17-47.57,20.14-.76,.34-1.21,.34-1.63-.41-.25-.45-.62-.84-1.02-1.38,22.7-24.87,49.26-44.32,80.12-57.99Z"
                            />
                            <path
                                className="cls-2"
                                d="M191.64,174.57c-9.68,2.21-19.28,4.46-28.91,6.54-5.84,1.26-11.72,2.31-17.6,3.34-3.15,.55-6.34,.9-9.52,1.28-2.8,.34-5.61,.62-8.42,.87-2.47,.22-4.95,.46-7.43,.52-6.75,.16-13.5,.26-20.25,.33-2.24,.02-4.48-.03-6.71-.16-2.7-.16-5.4-.44-8.1-.68-2.07-.18-4.14-.32-6.2-.56-2.56-.3-5.1-.67-7.65-1.02-2.46-.34-4.93-.65-7.38-1.07-3.15-.54-6.29-1.11-9.41-1.79-3.89-.85-7.78-1.75-11.63-2.76-4.82-1.27-9.63-2.59-14.39-4.04-8.01-2.44-15.87-5.32-23.63-8.47-1.49-.6-2.96-1.26-4.41-2.03,1.03,.2,2.06,.41,3.1,.6,2.9,.51,5.79,1.04,8.7,1.51,2.37,.39,4.75,.75,7.13,1.05,1.83,.23,3.66,.36,5.5,.52,2.16,.19,4.31,.38,6.47,.54,1.36,.1,2.72,.17,4.09,.18,5.67,.02,11.35,.08,17.02-.02,3.33-.06,6.65-.37,9.98-.63,3.47-.27,6.95-.51,10.4-.95,5.88-.75,11.76-1.51,17.6-2.51,7.69-1.31,15.36-2.74,23-4.32,8.39-1.73,16.74-3.68,25.1-5.54,7.67-1.7,15.34-3.46,23.02-5.1,4.99-1.07,10-2.04,15.03-2.93,3.16-.56,6.37-.89,9.56-1.29,2.97-.37,5.95-.73,8.93-1.02,2.04-.2,4.1-.29,6.15-.38,4.96-.21,9.92-.44,14.88-.58,2.77-.07,5.54,0,8.31,.07,2.4,.06,4.81,.2,7.21,.34,2.45,.15,4.9,.29,7.34,.52,3.23,.3,6.47,.62,9.68,1.06,3.74,.51,7.47,1.07,11.17,1.75,4.71,.86,9.42,1.76,14.09,2.8,4.38,.98,8.74,2.09,13.07,3.29,4.33,1.2,8.68,2.41,12.92,3.9,6.96,2.45,13.84,5.13,20.75,7.73,.87,.33,1.71,.71,2.53,1.24-1.19-.22-2.37-.46-3.56-.67-2.14-.39-4.27-.78-6.41-1.14-1.78-.3-3.55-.6-5.34-.84-1.77-.24-3.54-.4-5.32-.59-2.03-.22-4.06-.46-6.09-.65-1.3-.12-2.6-.18-3.91-.23-3.22-.14-6.43-.31-9.65-.36-3.38-.05-6.76,.02-10.15,.06-1.07,.01-2.14,.06-3.21,.13-2.63,.17-5.25,.36-7.88,.54-1.7,.12-3.41,.18-5.1,.34-2.52,.25-5.04,.56-7.56,.86-2.52,.29-5.06,.51-7.56,.92-6.78,1.11-13.56,2.18-20.3,3.49-9.6,1.88-19.17,3.96-28.75,5.95-.08,.02-.17,0-.33,.04Z"
                            />
                        </svg>
                    </div>
                </div>
                <div className={`${style.wrapper} ${style.for_loader}`}>
                    <div className={`${style.footer_logo_text} ${raleway.className}`}>
                        Aquaklin
                    </div>
                </div>
            </div>
            <div className={style.loader_circle} />
        </div>
    )
}
