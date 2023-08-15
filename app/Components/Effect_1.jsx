"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { Linear } from 'gsap';

// Styles
import style from '../../styles/UnderConstruction.module.scss'

// Images
import effect_1 from '../../public/assets/effect_1.png';

export default function Effect_1() {

  const footerRotation = useRef(null);

  useEffect(() => {
    const duration = 8;

    gsap.to(footerRotation.current, {
      ease: Linear.easeNone,
      repeat: -1,
      rotation: '+=360',
      duration: duration,
    });
  }, []);

  return (
    <Image
      src={effect_1}
      width="318.5"
      sizes="102px"
      alt="Circle Aquaklin"
      className={style.play_showreel}
      ref={footerRotation}
    />
  );
}
