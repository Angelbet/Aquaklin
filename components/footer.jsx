"use client";

import React, { createRef, useEffect, useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';

// Gsap
import { gsap } from 'gsap'

// Styles
import style from '../styles/Footer.module.scss'

// Images
import logo_white from '../public/assets/l0go_white.png'

// Fonts
import { Raleway } from 'next/font/google'
const raleway = Raleway({
    weight: '600',
    subsets: ['latin'],
    display: 'swap',
})
const raleway_2 = Raleway({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
})

const Footer = () => {

    // Desplazamiento horizontal Infinito
    const MovingSubtextRef1 = createRef(null);
    const MovingSubtextRef2 = createRef(null);

    useEffect(() => {
        const MovingSubtext1 = MovingSubtextRef1.current;
        const MovingSubtext2 = MovingSubtextRef2.current;

        // Creamos una animación para mover los dos elementos hacia la izquierda
        const tl = gsap.to([MovingSubtext1, MovingSubtext2], {
            duration: 12,
            x: '-100%',
            ease: 'none',
            stagger: 0.1, // Agregamos un retraso de 0.5 segundos entre cada elemento para evitar que choquen
            yoyo: true, // Hacemos que la animación se repita en reversa automáticamente
            repeat: -1, // Hacemos que la animación se repita infinitamente
        });
    }, []);


    // ===========================================================

    const lineRef = React.createRef(null);

    const handleHoverIn = () => {
        gsap.to(lineRef.current, {
            duration: 0.5,
            width: "100%",
            ease: "outExpo"
        });
    };

    const handleHoverOut = () => {
        gsap.to(lineRef.current, {
            duration: 0.8,
            width: "20%",
            ease: "outExpo"
        });
    };

    return (
        <footer className={style.footer}>
            <div className={style.page_padding}>
                <div className={style.container_large}>
                    <div className={`${style.padding_top} ${style.padding_huge}`}>
                        <div className={style.footer_component}>
                            <div className={style.footer_top}>
                                <div className={style.moving_subtext_wrap}>
                                    <div ref={MovingSubtextRef1} className={`${style.moving_subtext} ${raleway.className}`}>
                                        contenido contenido contenido contenido contenido contenido
                                        contenido&nbsp;-</div><div ref={MovingSubtextRef2} className={`${style.moving_subtext} ${raleway.className}`}>contenido contenido contenido contenido contenido contenido
                                            contenido&nbsp;-&nbsp;
                                    </div>
                                </div>
                                    <Link
                                        href="/"
                                        className={`${style.footer_contact_link} ${style.w_inline_block}`}
                                        onMouseEnter={handleHoverIn}
                                        onMouseLeave={handleHoverOut}
                                    >
                                        <div className={raleway_2.className}>Contacto</div>
                                        <div className={style.footer_contact_link_line} ref={lineRef} />
                                    </Link>
                            </div>
                            <div className={`${style.footer_main}`}>
                                <div className={`${style.footer_logo_text_wrap} ${raleway.className}`}>
                                    <Link href="/" className={`${style.footer_logo} ${style.w_inline_block}`}>
                                        <Image
                                            src={logo_white}
                                            className={style.logo_w}
                                            alt="logo white"
                                        />
                                    </Link>
                                    <div>Contenido contenido contenido contenido contenido</div>
                                </div>
                                <div className={`${style.footer_links_wrap} ${raleway_2.className}`}>
                                    <div className={style.footer_link_column}>
                                        <Link href="/home" className={style.footer_link}>
                                            Inicio
                                        </Link>
                                        <Link
                                            href="/"
                                            className={style.footer_link}
                                        >
                                            Nosotros
                                        </Link>
                                        <Link href="/products" className={style.footer_link}>
                                            Productos
                                        </Link>
                                        <Link href="/blog" className={style.footer_link}>
                                            Contacto
                                        </Link>
                                    </div>
                                    <div className={style.footer_link_column}>
                                        <Link
                                            href="https://twitter.com/"
                                            target="_blank"
                                            className={style.footer_link}
                                        >
                                            instagram
                                        </Link>
                                        <Link
                                            href="https://www.instagram.com/"
                                            target="_blank"
                                            className={style.footer_link}
                                        >
                                            Email
                                        </Link>
                                        <Link
                                            href="https://dribbble.com/"
                                            target="_blank"
                                            className={style.footer_link}
                                        >
                                            Facebook
                                        </Link>
                                        <Link
                                            href="https://www.behance.net/"
                                            target="_blank"
                                            className={style.footer_link}
                                        >

                                        </Link>
                                    </div>
                                    <div className={style.footer_link_column}>
                                        <Link href="/" className={style.footer_link}>
                                            Producto
                                        </Link>
                                        <Link href="/" className={style.footer_link}>
                                            Producto
                                        </Link>
                                        <Link href="/" className={style.footer_link}>
                                            Producto
                                        </Link>
                                        <Link href="/" className={style.footer_link}>
                                            Producto
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className={`${style.footer_bottom} ${raleway.className}`}>
                                <div>
                                    © {new Date().getFullYear()} — {" "}
                                    <Link
                                        href="/"
                                        target="_blank"
                                        className={style.inline_link}
                                    >
                                        Aquaklin
                                    </Link>
                                </div>
                                <div>
                                    by{" "}
                                    <Link
                                        href="/"
                                        target="_blank"
                                        className={style.inline_link}
                                    >
                                        Angel
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;