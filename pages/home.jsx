import React, { createRef, useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

// Styles
import style from '../styles/Home.module.scss'

// Icons
import { UilInstagram } from '@iconscout/react-unicons'
import { UilWhatsapp } from '@iconscout/react-unicons'

// Images
import home_1 from '../public/assets/Home/home_1.jpg'
import product_1 from '../public/assets/Home/Products/product_1.jpg'
import logo_white from '../public/assets/l0go_white.png'

import product1 from '../public/assets/Home/Products/product1.jpg'
import p2 from '../public/assets/Home/Products/p2.jpg'
import p3 from '../public/assets/Home/Products/p3.jpg'


import about_3 from '../public/assets/Home/about_3.jpg'
import about_4 from '../public/assets/Home/about_4.jpg'

import about1 from '../public/assets/Home/about1.jpg'
import about2 from '../public/assets/Home/about2.jpg'


// Brand
import brand_1 from '../public/assets/Home/Brand/Aganova.png'
import brand_3 from '../public/assets/Home/Brand/DaQua.webp'
import brand_4 from '../public/assets/Home/Brand/Ferralca.png'
import brand_5 from '../public/assets/Home/Brand/H2oGO2.png'
import brand_6 from '../public/assets/Home/Brand/primusline.png'
import brand_7 from '../public/assets/Home/Brand/SafeHome.png'
import brand_8 from '../public/assets/Home/Brand/Sewerin.png'
import brand_9 from '../public/assets/Home/Brand/Watertec.png'


// Gsap
import { gsap, Power2 } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Components
import Navbar from '../components/navbar'
import Footer from '../components/footer'

// Fonts
import { Raleway } from 'next/font/google'
import Link from 'next/link'
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
const raleway_3 = Raleway({
    weight: '800',
    subsets: ['latin'],
    display: 'swap',
})

function Home() {



    const textRef = createRef(null);
    const absoluteTextRef = createRef(null);

    // Función que se ejecuta cuando se produce el evento mouseover sobre el botón
    const handleMouseOver = () => {
        // Animamos el elemento superior (textRef.current) hacia arriba y mostramos el elemento inferior (absoluteTextRef.current)
        gsap.to(textRef.current, {
            duration: 0.5,
            ease: 'power3.out',
            y: -absoluteTextRef.current.offsetHeight, // utilizamos la propiedad offsetHeight para obtener la altura del elemento inferior
        });

        // Animamos el elemento inferior (absoluteTextRef.current) hacia abajo y lo mostramos
        gsap.to(absoluteTextRef.current, {
            duration: 0.5,
            ease: 'power3.out',
            y: 0,
        });

        // Animamos ambos elementos de texto (textRef.current y absoluteTextRef.current) para que roten en el eje Z
        gsap.to([textRef.current, absoluteTextRef.current], {
            duration: 0.5,
            ease: 'power3.out',
            rotationZ: 12,
        });
    };

    // Función que se ejecuta cuando se produce el evento mouseout sobre el botón
    const handleMouseOut = () => {
        // Animamos el elemento superior hacia abajo y ocultamos el elemento inferior
        gsap.to(textRef.current, {
            duration: 0.5,
            ease: 'power3.out',
            y: 0,
        });

        // Animamos el elemento inferior hacia arriba y lo ocultamos
        gsap.to(absoluteTextRef.current, {
            duration: 0.5,
            ease: 'power3.out',
            y: absoluteTextRef.current.offsetHeight, // utilizamos la propiedad offsetHeight para obtener la altura del elemento inferior
        });

        // Animamos ambos elementos de texto para que regresen a su posición original
        gsap.to([textRef.current, absoluteTextRef.current], {
            duration: 0.5,
            ease: 'power3.out',
            rotationZ: 0,
        });
    };


    // ===========================================================

    // Desplazamiento horizontal Infinito
    const movingSubtextRef1 = createRef(null);
    // const movingSubtextRef2 = useRef(null);

    useEffect(() => {
        const movingSubtext1 = movingSubtextRef1.current;
        // const movingSubtext2 = movingSubtextRef2.current;

        // Creamos una animación para mover los dos elementos hacia la izquierda
        const tl = gsap.to([movingSubtext1], {
            duration: 15,
            x: '-100%',
            ease: 'none',
            stagger: 0.1, // Agregamos un retraso de 0.5 segundos entre cada elemento para evitar que choquen
            yoyo: true, // Hacemos que la animación se repita en reversa automáticamente
            repeat: -1, // Hacemos que la animación se repita infinitamente
        });
    }, []);


    // ===========================================================

    // Brands de Logos

    useEffect(() => {
        const container = document.querySelector(".container");
        const valueContainer = document.querySelector(".value-container");

        // Clone the value container
        const cloneContainer = valueContainer.cloneNode(true);
        container.appendChild(cloneContainer);

        // Calculate the container width
        const containerWidth = valueContainer.offsetWidth * 1;

        // Set the initial position of the clone container
        gsap.set(cloneContainer, { x: containerWidth });

        // Scroll animation
        gsap.to(container, {
            x: `-${containerWidth}px`,
            duration: 19,
            repeat: -1,
            immediateRender: true,
            yoyo: true,
            ease: "none",
        });
    }, []);



    // ===========================================================

    // Tittle Effect
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.to(".title_scrolling", {
            x: -3700,
            duration: 1,
            ease: 'none',
            scrollTrigger: {
                start: "top center",
                toggleActions: "restart pause reverse pause",
                // end: '+=1200',
                scrub: 1,
                // markers: true
            }
        }
        );
    }, []);




    // ===========================================================


    // Seccion Horizontal Scroll
    const containerRef = createRef(null);
    useEffect(() => {
        // const timeline = gsap.timeline({
        //     ease: "none",
        //     scrollTrigger: {
        //         trigger: containerRef.current,
        //         pin: true,
        //         scrub: true,
        //         end: "50%",
        //         markers: true,
        //     },
        // });
        // timeline.to(containerRef.current, {
        //     x: "-100%", // desplaza el contenedor horizontalmente a la derecha
        //     duration: 30,
        // });

    }, []);

    // Check viewport width

    useEffect(() => {
        if (typeof window !== "undefined") {
            const mediaQuery = window.matchMedia("(min-width: 991px)");

            if (mediaQuery.matches) {
                const timeline = gsap.timeline({
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        pin: true,
                        scrub: 3,
                        end: "50%",
                        // markers: true,
                    },
                });
                timeline.to(containerRef.current, {
                    x: "-100%", // desplaza el contenedor horizontalmente a la derecha
                    duration: 30,
                });

            }

        }

    }, []);



    // ===========================================================


    // Galeria de Fotos
    useEffect(() => {

        var imgs = gsap.utils.toArray('#images img'),
            wrap = gsap.utils.wrap(imgs),
            count = imgs.length * 26,
            tl = gsap.timeline({ repeat: -1 }),
            i;

        imgs.reverse();

        for (i = 0; i < count; i++) {
            tl.to(wrap(i), {
                duration: 0,
                autoAlpha: 0,
                ease: 'none',
            }, "+=0.8");
            tl.to(wrap(i + 1), {
                duration: 0,
                autoAlpha: 1,
                ease: 'none',
            }, "<");
        }


        return;
    }, []);



    // ===========================================================


    // Efecto de Palabras
    useEffect(() => {
        const animation = gsap.timeline({ repeat: -1 });
        const values = ["Value 1", "Value 2", "Value 3", "Value 4", "Value 4",]; // Aquí puedes definir tu matriz de valores
        values.forEach((value, index) => {
            animation
                .to(".heading-medium", {
                    y: -80 * index,
                    duration: 0.4,
                    ease: "outQuint",
                    delay: 2,
                })
                .to(".heading-medium", {
                    text: value,
                    duration: 0,
                    delay: 0,
                });
        });
    }, []);



    // ===========================================================

    useEffect(() => {
        gsap.to(".review_right", {
            x: 0,
            duration: 1,
            ease: 'none',
            scrollTrigger: {
                start: "top center",
                toggleActions: "restart pause reverse pause",
                // end: '+=1200',
                scrub: 1,
                // markers: true
            }
        },
        );

        gsap.to(".review_left", {
            x: -1100,
            duration: 1,
            ease: 'none',
            scrollTrigger: {
                start: "top center",
                toggleActions: "restart pause reverse pause",
                // end: '+=1200',
                scrub: 1,
                // markers: true
            }
        }
        );

    }, []);



    const marqueeRef = createRef(null);
    const marqueelef = createRef(null);

    useEffect(() => {
        gsap.to(marqueeRef.current, {
            y: "-100%",
            repeat: -1,
            duration: 40,
            ease: "none",
        });
        gsap.to(marqueelef.current, {
            y: "100%",
            repeat: -1,
            duration: 40,
            ease: "none",
        });
    }, []);



    return (
        <>

            <Head>
                <title>Aquaklin</title>
                <meta name="description" content="Aquaklin Online" />
            </Head>


            {/* === NAVBAR === */}
            <Navbar />


            <main id={style['Home']} className={`${style.main_wrapper} ${style.overflow_visible}`}>

                {/* Social Mobile */}
                <div className={style.mobile_socials}>
                    <a href="mailto:serviciosaquaklin@gmail.com" className={`${style.mobile_socials_email_link} ${raleway.className}`}>
                        Email
                    </a>
                    <a
                        href="https://www.instagram.com/aquaklin.ve/"
                        target="_blank"
                        className={`${style.social_icon_link} ${style.w_inline_block}`}
                    >
                        <UilInstagram
                            width={45}
                            height={46}
                            className={style.socials_img}
                        />
                    </a>
                    <a
                        href="https://wa.me/+584121331350"
                        target="_blank"
                        className={`${style.social_icon_link} ${style.w_inline_block}`}
                    >
                        <UilWhatsapp
                            width={45}
                            height={46}
                            className={style.socials_img}
                        />
                    </a>
                </div>
                {/* Social Mobile */}

                {/* === S1 === */}
                <section className={style.home_hero_section}>
                    <div className={style.water_background}>
                        <video
                            autoPlay
                            loop
                            muted
                        >
                            <source
                                src="../assets/water_video.mp4" type="video/mp4"
                            />
                            <source
                                src="../public/assets/water_video.mp4" type="video/mp4"
                            />
                        </video>
                    </div>

                    <div className={style.page_padding}>
                        <div className={style.container_large}>
                            <div className={`${style.padding_vertical} ${style.padding_xhuge}`}>
                                <div className={style.home_hero_component}>
                                    <div className={style.text_style}>
                                        <div className={style.moving_subtext_wrap}>
                                            <div ref={movingSubtextRef1} className={`${style.moving_subtext} ${raleway_3.className}`}>
                                                Clarificador de Agua - Detectores de Fugas de Agua - Sistema Nautilus - Safe Home - Detectores de Bacteria - Clarificador de Agua - Detectores de Fugas de Agua - Sistema Nautilus - Safe Home - Detectores de Bacteria
                                            </div>

                                        </div>
                                    </div>

                                    {/* <div className={style.home_hero_heading_wrap}>
                                        <Image
                                            src={home_1}
                                            loading="lazy"
                                            alt="Drink Water"
                                            className={style.home_hero_heading_image}
                                        />
                                        <h1 className={raleway_3.className}>Agua Limpia</h1>
                                    </div> */}
                                    {/* <div className={style.buttons_wrap}>

                                        <a href="mailto:hello@website.com" className={`${style.button} ${style.w_button} ${raleway_2.className}`}>
                                            titulo
                                        </a>


                                        <a href="#work"
                                            onMouseOver={handleMouseOver}
                                            onMouseOut={handleMouseOut}
                                            className={`${style.button_s1} ${style.secondary} ${style.w_inline_block}`}
                                        >
                                            <div className={`${style.button_inside_div} ${raleway_2.className}`}>
                                                <div ref={textRef} className={style.button_text}>
                                                    titulo
                                                </div>
                                                <div ref={absoluteTextRef} className={style.button_text_absolute}>
                                                    titulo
                                                </div>
                                            </div>
                                        </a>
                                    </div> */}

                                    {/* ---- */}
                                    <div className={style.bio_meta_data}>
                                        <div className={style.position_slider}>
                                            <div className={`${style.position_container} ${raleway_3.className}`}>
                                                <h1 className={`${style.heading_medium} heading-medium`}>
                                                    Fácil de Usar
                                                </h1>
                                                <h1
                                                    className={`${style.heading_medium} heading-medium`}
                                                >
                                                    Agua Segura
                                                </h1>
                                                <h1
                                                    className={`${style.heading_medium} heading-medium`}
                                                >
                                                    Clarificador de Agua
                                                </h1>
                                                <h1
                                                    className={`${style.heading_medium} heading-medium`}
                                                >
                                                    Detectores de Fuga de Agua
                                                </h1>
                                                <h1
                                                    className={`${style.heading_medium} heading-medium`}
                                                >
                                                </h1>

                                            </div>
                                        </div>
                                    </div>

                                    <h2 className={`${style.heading_xlarge} ${style.shadow} ${raleway_3.className}`}>
                                        {/* {t('home.content')} */}
                                        Agua Limpia
                                    </h2>

                                    <div className={style.photo_address_socials}>
                                        <a
                                            href="mailto:serviciosaquaklin@gmail.com"
                                            target="_blank"
                                            className={`${style.email_info} ${raleway.className}`}
                                        >
                                            serviciosaquaklin@gmail.com
                                        </a>
                                        <div className={style.about_image_wrapper}>
                                            <Image
                                                src={home_1}
                                                width={548}
                                                alt="Drink Water"
                                                className={style.about_image}
                                            />
                                        </div>
                                        <ul className={style.list}>
                                            <li className={style.social_link}>
                                                <a
                                                    href="https://www.instagram.com/aquaklin.ve/"
                                                    target="_blank"
                                                    className={style.w_inline_block}
                                                >
                                                    <UilInstagram
                                                        width={45}
                                                        height={46}
                                                        className={style.socials_img}
                                                    />
                                                </a>
                                            </li>
                                            <li className={style.social_link}>
                                                <a href="https://wa.me/+584121331350"
                                                    target="_blank"
                                                    className={style.w_inline_block}>
                                                    <UilWhatsapp
                                                        width={45}
                                                        height={46}
                                                        className={style.socials_img}
                                                    />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* === S1 === */}


                {/* Title About */}
                <div className={style.about_bio_section}>
                    <div
                        className={`${style.infinite_loop_container} ${style.works_text_loop} ${style.w_container} ${raleway_2.className} title_scrolling`}
                    >
                        <div className={style.text_loop_part}>
                            <div className={style.primary_loop_text}>Nosotros</div>
                            <div className={style.secondary_loop_text}>Aquaklin</div>
                            <div className={style.primary_loop_text}>Nosotros</div>
                            <div className={style.secondary_loop_text}>Aquaklin</div>
                            <div className={style.primary_loop_text}>Nosotros</div>
                            <div className={style.secondary_loop_text}>Aquaklin</div>
                        </div>
                        <div className={style.text_loop_part}>
                            <div className={style.primary_loop_text}>Nosotros</div>
                            <div className={style.secondary_loop_text}>Aquaklin</div>
                            <div className={style.primary_loop_text}>Nosotros</div>
                            <div className={style.secondary_loop_text}>Aquaklin</div>
                            <div className={style.primary_loop_text}>Nosotros</div>
                            <div className={style.secondary_loop_text}>Aquaklin</div>
                        </div>
                    </div>
                </div>
                {/* Title About */}


                {/* === S2 === */}
                <section className={style.content_wrapper}>
                    <div className={style.hero_wrapper}>
                        <div className={`${style.grid} ${style.hero_grid}`}>
                            <Image
                                src={logo_white}
                                id={style["w-node-b77ccdbd-a799-5ad6-9a48-b10ce6441074-6d48d9a5"]}
                                alt="Aquakli Logo"
                                className={style.huge_logo}
                            />
                            <h3 id={style["w-node-_527da904-502d-317e-cb8d-9d894e754d52-6d48d9a5"]} className={`${style.hero_title} ${raleway_2.className}`}>
                                El Agua Limpia es un Derecho Humano Básico
                            </h3>
                        </div>
                        <div
                            id="images"
                            className={`${style.image_wrapper} ${style.load_up} ${style.hero}`}
                        >
                            <Image
                                src={about1}
                                alt="Vaso de Agua"
                                className={`${style.image} ${style.front}`}
                                width={1024}
                            />
                            <Image
                                src={about2}
                                alt=""
                                className={`${style.image} ${style.front}`}
                            />
                            <Image
                                src={about_3}
                                alt=""
                                className={`${style.image} ${style.front}`}
                            />
                            <Image
                                src={about_4}
                                alt=""
                                className={`${style.image} ${style.front}`}
                            />
                        </div>
                    </div>


                    {/* Content */}
                    <div className={style.grid}>
                        {/* <h2 className={`${style.title_hero_content} ${raleway.className}`} id={style["w-node-_48a76279-066a-ef49-bfd9-b8ea4648ae56-6d48d9a5"]}>
                        </h2> */}
                        <div
                            id={style["w-node-_4febf77a-068e-7f54-46e5-2e64b273c434-6d48d9a5"]}
                            className={`${style.rows} ${style.gap_4x}`}
                        >
                            <div className={raleway.className} id={style["w-node-f46328a8-2297-67c1-6672-a5e3cb6e33b8-6d48d9a5"]}>
                                Aquaklin es una empresa comprometida con la calidad del agua. Contamos con soluciones para la clarificación de agua. Sistemas para el uso de aguas de lluvias, equipos para la detección acústica de fugas de aguas.

                            </div>
                        </div>
                    </div>


                </section>
                {/* === S2 === */}


                {/* === BRAND === */}
                <div className="section-brand">
                    <div className={style.space_medium} />
                    <div className={`${style.wrapper_carroussel_motion}`}>
                        <div className={`${style.wrapper_carroussel} container`}>


                            <div className={`${style.w_layout_grid} ${style.corroussel_grid} value-container`}>
                                <div
                                    id={style["w-node-d030d8e1-a4ec-df11-873a-babc3c765ed7-3dc2eb3e"]}
                                    className={`${style.brand} ${style.brand_wrapper} ${style.brand_focus} ${style.brand_4}`}
                                >
                                    <Image
                                        src={brand_1}
                                        alt="Aganova"
                                        className={style.image_16}
                                        width={100}
                                    />
                                </div>
                                <div
                                    id={style["w-node-d030d8e1-a4ec-df11-873a-babc3c765edb-3dc2eb3e"]}
                                    className={style.brand_wrapper}
                                >
                                    <Image
                                        src={brand_3}
                                        alt="DaQua"
                                        width={150}
                                    />
                                </div>
                                <Link
                                    id={style["w-node-d030d8e1-a4ec-df11-873a-babc3c765edd-3dc2eb3e"]}
                                    href='/product'
                                    className={`${style.brand} ${style.brand_wrapper} ${style.brand_focus} ${style.brand_1}`}
                                >
                                    <Image
                                        src={brand_4}
                                        alt="Ferralca"
                                        width={80}
                                    />
                                </Link>
                                <div
                                    id={style["w-node-d030d8e1-a4ec-df11-873a-babc3c765edf-3dc2eb3e"]}
                                    className={`${style.brand} ${style.brand_wrapper} ${style.brand_focus} ${style.brand_5}`}
                                >
                                    <Image
                                        src={brand_5}
                                        alt="H2oGO2"
                                        width={60}
                                        height={65}
                                    />
                                </div>
                                <div
                                    id={style["w-node-d030d8e1-a4ec-df11-873a-babc3c765ee1-3dc2eb3e"]}
                                    className={style.brand_wrapper}
                                >
                                    <Image
                                        src={brand_6}
                                        alt="Primusline"
                                        width={170}
                                    />
                                </div>
                                <div
                                    id={style["w-node-d030d8e1-a4ec-df11-873a-babc3c765ed7-3dc2eb3e"]}
                                    className={`${style.brand} ${style.brand_wrapper} ${style.brand_focus} ${style.brand_4}`}
                                >
                                    <Image
                                        src={brand_1}
                                        alt="Aganova"
                                        className={style.image_16}
                                        width={100}
                                    />
                                </div>
                            </div>

                            <div className={`${style.w_layout_grid} ${style.corroussel_grid} value-container`}>
                                <div
                                    id={style["w-node-d030d8e1-a4ec-df11-873a-babc3c765ee1-3dc2eb3e"]}
                                    className={`${style.brand} ${style.brand_wrapper} ${style.brand_focus} ${style.brand_2}`}
                                >
                                    <Image
                                        src={brand_7}
                                        alt="SafeHome"
                                        width={150}
                                    />
                                </div>
                                <div
                                    id={style["w-node-d030d8e1-a4ec-df11-873a-babc3c765ee1-3dc2eb3e"]}
                                    className={`${style.brand} ${style.brand_wrapper} ${style.brand_focus} ${style.brand_3}`}
                                >
                                    <Image
                                        src={brand_8}
                                        alt="Sewerin"
                                        width={150}
                                    />
                                </div>
                                <Link
                                    id={style["w-node-d030d8e1-a4ec-df11-873a-babc3c765edd-3dc2eb3e"]}
                                    href='/product'
                                    className={`${style.brand} ${style.brand_wrapper} ${style.brand_focus} ${style.brand_1}`}
                                >
                                    <Image
                                        src={brand_4}
                                        alt="Ferralca"
                                        width={80}
                                    />
                                </Link>
                                <div
                                    id={style["w-node-d030d8e1-a4ec-df11-873a-babc3c765ed7-3dc2eb3e"]}
                                    className={`${style.brand} ${style.brand_wrapper} ${style.brand_focus} ${style.brand_4}`}
                                >
                                    <Image
                                        src={brand_1}
                                        alt="Aganova"
                                        className={style.image_16}
                                        width={100}
                                    />
                                </div>
                                <Link
                                    id={style["w-node-d030d8e1-a4ec-df11-873a-babc3c765edd-3dc2eb3e"]}
                                    href='/product'
                                    className={`${style.brand} ${style.brand_wrapper} ${style.brand_focus} ${style.brand_1}`}
                                >
                                    <Image
                                        src={brand_4}
                                        alt="Ferralca"
                                        width={80}
                                    />
                                </Link>
                                <div
                                    id={style["w-node-d030d8e1-a4ec-df11-873a-babc3c765edb-3dc2eb3e"]}
                                    className={style.brand_wrapper}
                                >
                                    <Image
                                        src={brand_3}
                                        alt="DaQua"
                                        width={150}
                                    />
                                </div>

                            </div>
                            <div className={`${style.w_layout_grid} ${style.corroussel_grid} value-container`}>
                                <Link
                                    id={style["w-node-d030d8e1-a4ec-df11-873a-babc3c765edd-3dc2eb3e"]}
                                    href='/product'
                                    className={`${style.brand} ${style.brand_wrapper} ${style.brand_focus} ${style.brand_1}`}
                                >
                                    <Image
                                        src={brand_4}
                                        alt="Ferralca"
                                        width={80}
                                    />
                                </Link>
                                <div
                                    id={style["w-node-d030d8e1-a4ec-df11-873a-babc3c765edf-3dc2eb3e"]}
                                    className={`${style.brand} ${style.brand_wrapper} ${style.brand_focus} ${style.brand_5}`}
                                >
                                    <Image
                                        src={brand_5}
                                        alt="H2oGO2"
                                        width={60}
                                        height={65}
                                    />
                                </div>
                                <div
                                    id={style["w-node-d030d8e1-a4ec-df11-873a-babc3c765ee1-3dc2eb3e"]}
                                    className={style.brand_wrapper}
                                >
                                    <Image
                                        src={brand_6}
                                        alt="Primusline"
                                        width={170}
                                    />
                                </div>
                                <div
                                    id={style["w-node-d030d8e1-a4ec-df11-873a-babc3c765ee1-3dc2eb3e"]}
                                    className={`${style.brand} ${style.brand_wrapper} ${style.brand_focus} ${style.brand_1}`}
                                >
                                    <Image
                                        src={brand_7}
                                        alt="SafeHome"
                                        width={150}
                                    />
                                </div>
                                <div
                                    id={style["w-node-d030d8e1-a4ec-df11-873a-babc3c765ee1-3dc2eb3e"]}
                                    className={`${style.brand} ${style.brand_wrapper} ${style.brand_focus} ${style.brand_3}`}
                                >
                                    <Image
                                        src={brand_8}
                                        alt="Sewerin"
                                        width={150}
                                    />
                                </div>
                                <Link
                                    id={style["w-node-d030d8e1-a4ec-df11-873a-babc3c765edd-3dc2eb3e"]}
                                    href='/product'
                                    className={`${style.brand} ${style.brand_wrapper} ${style.brand_focus} ${style.brand_1}`}
                                >
                                    <Image
                                        src={brand_4}
                                        alt="Ferralca"
                                        width={80}
                                    />
                                </Link>
                            </div>



                        </div>
                    </div>
                    <div className={style.space_medium} />
                </div>
                {/* === BRAND === */}


                {/* Title About */}
                <div className={style.about_bio_section}>
                    <div
                        className={`${style.infinite_loop_container} ${style.works_text_loop} ${style.w_container} ${raleway_2.className} title_scrolling`}
                    >
                        <div className={style.text_loop_part}>
                            <div className={style.primary_loop_text}>Productos</div>
                            <div className={style.secondary_loop_text}>Aquaklin</div>
                            <div className={style.primary_loop_text}>Productos</div>
                            <div className={style.secondary_loop_text}>Aquaklin</div>
                            <div className={style.primary_loop_text}>Productos</div>
                            <div className={style.secondary_loop_text}>Aquaklin</div>
                        </div>
                        <div className={style.text_loop_part}>
                            <div className={style.primary_loop_text}>Productos</div>
                            <div className={style.secondary_loop_text}>Aquaklin</div>
                            <div className={style.primary_loop_text}>Productos</div>
                            <div className={style.secondary_loop_text}>Aquaklin</div>
                            <div className={style.primary_loop_text}>Productos</div>
                            <div className={style.secondary_loop_text}>Aquaklin</div>
                        </div>
                    </div>
                </div>
                {/* Title About */}

                {/* === Products === */}
                <div className={`${style.section} ${style.home_about}`}>
                    <div className={style.track}>
                        <div className={style.camera}>
                            <div className={style.frame}>


                                <div ref={containerRef} className={`container_products ${style.home_projects_container}`}>

                                    {/* S1 */}
                                    <div className={`section_products ${style.projects_title_wrapper} ${style.for_projects}`}>
                                        <div className={`${style.section_title_wrapper} ${style.for_projects}`}>
                                            <h2 className={`${style.heading_2} ${style.absolute} ${style.white} ${raleway.className}`}>Nuestros Productos</h2>
                                            <div
                                                className={`${style.section_outlined_heading} ${style.outlined_white} ${raleway_3.className}`}
                                            >
                                                Productos
                                            </div>
                                            <div
                                                className={style.section_outlined_heading_trigger}
                                            />
                                        </div>
                                    </div>
                                    {/* S1 */}

                                    {/* S2 */}
                                    <div className={`section_products ${style.project_list_wrapper} ${style.w_dyn_list}`}>
                                        <div className={`${style.project_collection_list} ${style.w_dyn_items}`}>


                                            <div className={`${style.project_item} ${style.w_dyn_item}`}>
                                                <div className={style.project}>
                                                    <div className={`${style.project_outer_image_wrapper}`}>
                                                        <div className={`${style.project_image_wrapper}`}>
                                                            <Image
                                                                alt="Producto 1"
                                                                src={product1}
                                                                className={style.project_image}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className={style.project_context}>
                                                        <div className={`${style.project_type} ${raleway_2.className}`}>Clarificador de Agua</div>
                                                        <div className={`${style.big_text} ${raleway_3.className}`}>Sulfato de Aluminio</div>
                                                        <div className={style.secondary_button_wrapper}>
                                                            <Link href="/products/aluminum-sulfate"
                                                                onMouseOver={handleMouseOver}
                                                                onMouseOut={handleMouseOut}
                                                                className={`${style.secondary_button_wrapper} ${style.button_s1} ${style.secondary} ${style.w_inline_block}`}
                                                            >
                                                                <div className={`${style.button_inside_div} ${raleway_2.className}`}>
                                                                    <div ref={textRef} className={style.button_text}>
                                                                        Ver
                                                                    </div>
                                                                    <div ref={absoluteTextRef} className={style.button_text_absolute}>
                                                                        Ver
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={`${style.project_item} ${style.w_dyn_item}`}>
                                                <div className={style.project}>
                                                    <div className={`${style.project_outer_image_wrapper}`}>
                                                        <div className={`${style.project_image_wrapper}`}>
                                                            <Image
                                                                alt="Producto 1"
                                                                src={p2}
                                                                className={style.project_image}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className={style.project_context}>
                                                        <div className={`${style.project_type} ${raleway_2.className}`}>Sewerin</div>
                                                        <div className={`${style.big_text} ${raleway_3.className}`}>Detectores de Fuga de Agua</div>
                                                        <div className={style.secondary_button_wrapper}>
                                                            <a href="#"
                                                                onMouseOver={handleMouseOver}
                                                                onMouseOut={handleMouseOut}
                                                                className={`${style.secondary_button_wrapper} ${style.button_s1} ${style.secondary} ${style.w_inline_block}`}
                                                            >
                                                                <div className={`${style.button_inside_div} ${raleway_2.className}`}>
                                                                    <div ref={textRef} className={style.button_text}>
                                                                        Ver
                                                                    </div>
                                                                    <div ref={absoluteTextRef} className={style.button_text_absolute}>
                                                                        Ver
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={`${style.project_item} ${style.w_dyn_item}`}>
                                                <div className={style.project}>
                                                    <div className={`${style.project_outer_image_wrapper}`}>
                                                        <div className={`${style.project_image_wrapper}`}>
                                                            <Image
                                                                alt="Producto 1"
                                                                src={p3}
                                                                className={style.project_image}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className={style.project_context}>
                                                        <div className={`${style.project_type} ${raleway_2.className}`}>SafeHome</div>
                                                        <div className={`${style.big_text} ${raleway_3.className}`}>Kit Detector de Bacterias</div>
                                                        <div className={style.secondary_button_wrapper}>
                                                            <a href="#"
                                                                onMouseOver={handleMouseOver}
                                                                onMouseOut={handleMouseOut}
                                                                className={`${style.secondary_button_wrapper} ${style.button_s1} ${style.secondary} ${style.w_inline_block}`}
                                                            >
                                                                <div className={`${style.button_inside_div} ${raleway_2.className}`}>
                                                                    <div ref={textRef} className={style.button_text}>
                                                                        Ver
                                                                    </div>
                                                                    <div ref={absoluteTextRef} className={style.button_text_absolute}>
                                                                        Ver
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* S2 */}

                                    {/* https://design-creation.webflow.io */}
                                    {/* S3 */}
                                    {/* <div className={`section_products ${style.all_projects_container}`}>
                                        <div className={`${style.project_context} ${style.all_projects}`}>
                                            <div className={style.project_type} />
                                            <div className={`${style.big_text} ${style.wider} ${style.no_pointer_events} ${raleway_2.className}`}>
                                                Ver Más <br />
                                                Productos
                                            </div>
                                            <div className={`${style.secondary_button_wrapper} ${style.no_margin}`}>
                                                <a href="#"
                                                    onMouseOver={handleMouseOver}
                                                    onMouseOut={handleMouseOut}
                                                    className={`${style.secondary_button_wrapper} ${style.button_s1} ${style.secondary} ${style.w_inline_block}`}
                                                >
                                                    <div className={`${style.button_inside_div} ${raleway_2.className}`}>
                                                        <div ref={textRef} className={style.button_text}>
                                                            Ver
                                                        </div>
                                                        <div ref={absoluteTextRef} className={style.button_text_absolute}>
                                                            Ver
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className={style.infinite_slider}>
                                            <div className={`${style.outer_slider}`}>
                                                <div ref={marqueeRef} className={`${style.inner_slider}`}>
                                                    <div className={`${style.slider_1} ${style.w_dyn_list}`}>
                                                        <div className={`${style.slider_list} ${style.w_dyn_items}`}>
                                                            <div className={style.w_dyn_item}>
                                                                <div className={`${style.project_image_wrapper} ${style.no_rotate}`}>
                                                                    <Image
                                                                        src={product_1}
                                                                        alt=""
                                                                        className={style.project_image}
                                                                        style={{ filter: "saturate(0%)" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className={style.w_dyn_item}>
                                                                <div className={`${style.project_image_wrapper} ${style.no_rotate}`}>
                                                                    <Image
                                                                        src={product_1}
                                                                        loading="lazy"
                                                                        alt=""
                                                                        className={style.project_image}
                                                                        style={{ filter: "saturate(0%)" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className={style.w_dyn_item}>
                                                                <div className={`${style.project_image_wrapper} ${style.no_rotate}`}>
                                                                    <Image
                                                                        src={product_1}
                                                                        alt=""
                                                                        className={style.project_image}
                                                                        style={{ filter: "saturate(0%)" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className={style.w_dyn_item}>
                                                                <div className={`${style.project_image_wrapper} ${style.no_rotate}`}>
                                                                    <Image
                                                                        src={product_1}
                                                                        alt=""
                                                                        className={style.project_image}
                                                                        style={{ filter: "saturate(0%)" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className={style.w_dyn_item}>
                                                                <div className={`${style.project_image_wrapper} ${style.no_rotate}`}>
                                                                    <img
                                                                        src="https://assets.website-files.com/61efb3502ab169049f881c6d/6204c40d47b2e7047a1c4769_toon_games.jpg"
                                                                        loading="lazy"
                                                                        alt=""
                                                                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 50vw, (max-width: 991px) 56vw, (max-width: 1279px) 42vw, (max-width: 1439px) 39vw, (max-width: 1919px) 38vw, 35vw"
                                                                        srcSet="https://assets.website-files.com/61efb3502ab169049f881c6d/6204c40d47b2e7047a1c4769_toon_games-p-800.jpeg 800w, https://assets.website-files.com/61efb3502ab169049f881c6d/6204c40d47b2e7047a1c4769_toon_games-p-1080.jpeg 1080w, https://assets.website-files.com/61efb3502ab169049f881c6d/6204c40d47b2e7047a1c4769_toon_games-p-1600.jpeg 1600w, https://assets.website-files.com/61efb3502ab169049f881c6d/6204c40d47b2e7047a1c4769_toon_games.jpg 1920w"
                                                                        className={style.project_image}
                                                                        style={{ filter: "saturate(0%)" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className={style.w_dyn_item}>
                                                                <div className={`${style.project_image_wrapper} ${style.no_rotate}`}>
                                                                    <img
                                                                        src="https://assets.website-files.com/61efb3502ab169049f881c6d/61f0fae7b3308a4bd53edfe5_Sky_brand-min.jpg"
                                                                        loading="lazy"
                                                                        alt=""
                                                                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 50vw, (max-width: 991px) 56vw, (max-width: 1279px) 42vw, (max-width: 1439px) 39vw, (max-width: 1919px) 38vw, 35vw"
                                                                        srcSet="https://assets.website-files.com/61efb3502ab169049f881c6d/61f0fae7b3308a4bd53edfe5_Sky_brand-min-p-500.jpeg 500w, https://assets.website-files.com/61efb3502ab169049f881c6d/61f0fae7b3308a4bd53edfe5_Sky_brand-min-p-1080.jpeg 1080w, https://assets.website-files.com/61efb3502ab169049f881c6d/61f0fae7b3308a4bd53edfe5_Sky_brand-min-p-1600.jpeg 1600w, https://assets.website-files.com/61efb3502ab169049f881c6d/61f0fae7b3308a4bd53edfe5_Sky_brand-min.jpg 1920w"
                                                                        className={style.project_image}
                                                                        style={{ filter: "saturate(0%)" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className={style.w_dyn_item}>
                                                                <div className={`${style.project_image_wrapper} ${style.no_rotate}`}>
                                                                    <img
                                                                        src="https://assets.website-files.com/61efb3502ab169049f881c6d/61f0faf54090e9440605fd4d_Red_lake.jpg"
                                                                        loading="lazy"
                                                                        alt=""
                                                                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 50vw, (max-width: 991px) 56vw, (max-width: 1279px) 42vw, (max-width: 1439px) 39vw, (max-width: 1919px) 38vw, 35vw"
                                                                        srcSet="https://assets.website-files.com/61efb3502ab169049f881c6d/61f0faf54090e9440605fd4d_Red_lake-p-800.jpeg 800w, https://assets.website-files.com/61efb3502ab169049f881c6d/61f0faf54090e9440605fd4d_Red_lake-p-1600.jpeg 1600w, https://assets.website-files.com/61efb3502ab169049f881c6d/61f0faf54090e9440605fd4d_Red_lake.jpg 1920w"
                                                                        className={style.project_image}
                                                                        style={{ filter: "saturate(0%)" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="slider-1 extension w-dyn-list">
                                                        <div className={`${style.slider_list} ${style.w_dyn_items}`}>
                                                            <div className={style.w_dyn_item}>
                                                                <div className={`${style.project_image_wrapper} ${style.no_rotate}`}>
                                                                    <Image
                                                                        src={product_1}
                                                                        loading="lazy"
                                                                        alt=""
                                                                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 50vw, (max-width: 991px) 56vw, (max-width: 1279px) 42vw, (max-width: 1439px) 39vw, (max-width: 1919px) 38vw, 35vw"
                                                                        srcSet="https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f79a2eac3642a251a1f7_Dinser_agency-min-p-500.jpeg 500w, https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f79a2eac3642a251a1f7_Dinser_agency-min-p-1080.jpeg 1080w, https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f79a2eac3642a251a1f7_Dinser_agency-min-p-1600.jpeg 1600w, https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f79a2eac3642a251a1f7_Dinser_agency-min.jpg 1920w"
                                                                        className={style.project_image}
                                                                        style={{ filter: "saturate(0%)" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className={style.w_dyn_item}>
                                                                <div className={`${style.project_image_wrapper} ${style.no_rotate}`}>
                                                                    <Image
                                                                        src={product_1}
                                                                        alt=""
                                                                        className={style.project_image}
                                                                        style={{ filter: "saturate(0%)" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className={style.w_dyn_item}>
                                                                <div className={`${style.project_image_wrapper} ${style.no_rotate}`}>
                                                                    <img
                                                                        src="https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f324bee49fcbfe81335b_Gondric_berry-min.jpg"
                                                                        alt=""
                                                                        className={style.project_image}
                                                                        style={{ filter: "saturate(0%)" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className={style.w_dyn_item}>
                                                                <div className={`${style.project_image_wrapper} ${style.no_rotate}`}>
                                                                    <img
                                                                        src="https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f3310037c21f833e4082_Galax_timber-min.jpg"
                                                                        alt=""
                                                                        className={style.project_image}
                                                                        style={{ filter: "saturate(0%)" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className={style.w_dyn_item}>
                                                                <div className={`${style.project_image_wrapper} ${style.no_rotate}`}>
                                                                    <img
                                                                        src="https://assets.website-files.com/61efb3502ab169049f881c6d/6204c40d47b2e7047a1c4769_toon_games.jpg"
                                                                        alt=""
                                                                        className={style.project_image}
                                                                        style={{ filter: "saturate(0%)" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className={style.w_dyn_item}>
                                                                <div className={`${style.project_image_wrapper} ${style.no_rotate}`}>
                                                                    <img
                                                                        src="https://assets.website-files.com/61efb3502ab169049f881c6d/61f0fae7b3308a4bd53edfe5_Sky_brand-min.jpg"
                                                                        alt=""
                                                                        className={style.project_image}
                                                                        style={{ filter: "saturate(0%)" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className={style.w_dyn_item}>
                                                                <div className={`${style.project_image_wrapper} ${style.no_rotate}`}>
                                                                    <img
                                                                        src="https://assets.website-files.com/61efb3502ab169049f881c6d/61f0faf54090e9440605fd4d_Red_lake.jpg"
                                                                        loading="lazy"
                                                                        alt=""
                                                                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 50vw, (max-width: 991px) 56vw, (max-width: 1279px) 42vw, (max-width: 1439px) 39vw, (max-width: 1919px) 38vw, 35vw"
                                                                        srcSet="https://assets.website-files.com/61efb3502ab169049f881c6d/61f0faf54090e9440605fd4d_Red_lake-p-800.jpeg 800w, https://assets.website-files.com/61efb3502ab169049f881c6d/61f0faf54090e9440605fd4d_Red_lake-p-1600.jpeg 1600w, https://assets.website-files.com/61efb3502ab169049f881c6d/61f0faf54090e9440605fd4d_Red_lake.jpg 1920w"
                                                                        className={style.project_image}
                                                                        style={{ filter: "saturate(0%)" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`${style.outer_slider} ${style.hidden}`}>
                                                <div ref={marqueelef} className={style.inner_slider}>
                                                    <div className={`${style.slider_1} ${style.second} w-dyn-list`}>
                                                        <div className="w-dyn-items">
                                                            <div className={style.w_dyn_item}>
                                                                <div className={`${style.project_image_wrapper} ${style.no_rotate}`}>
                                                                    <Image
                                                                        src={product_1}
                                                                        alt=""
                                                                        className={style.project_image}
                                                                        style={{ filter: "saturate(0%)" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className={style.w_dyn_item}>
                                                                <div className={`${style.project_image_wrapper} ${style.no_rotate}`}>
                                                                    <img
                                                                        src="https://assets.website-files.com/61efb3502ab169049f881c6d/61f0fae7b3308a4bd53edfe5_Sky_brand-min.jpg"
                                                                        loading="lazy"
                                                                        alt=""
                                                                        sizes="(max-width: 991px) 100vw, (max-width: 1279px) 42vw, (max-width: 1439px) 39vw, (max-width: 1919px) 38vw, 35vw"
                                                                        srcSet="https://assets.website-files.com/61efb3502ab169049f881c6d/61f0fae7b3308a4bd53edfe5_Sky_brand-min-p-500.jpeg 500w, https://assets.website-files.com/61efb3502ab169049f881c6d/61f0fae7b3308a4bd53edfe5_Sky_brand-min-p-1080.jpeg 1080w, https://assets.website-files.com/61efb3502ab169049f881c6d/61f0fae7b3308a4bd53edfe5_Sky_brand-min-p-1600.jpeg 1600w, https://assets.website-files.com/61efb3502ab169049f881c6d/61f0fae7b3308a4bd53edfe5_Sky_brand-min.jpg 1920w"
                                                                        className={style.project_image}
                                                                        style={{ filter: "saturate(0%)" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className={style.w_dyn_item}>
                                                                <div className={`${style.project_image_wrapper} ${style.no_rotate}`}>
                                                                    <img
                                                                        src="https://assets.website-files.com/61efb3502ab169049f881c6d/6204c40d47b2e7047a1c4769_toon_games.jpg"
                                                                        loading="lazy"
                                                                        alt=""
                                                                        sizes="(max-width: 991px) 100vw, (max-width: 1279px) 42vw, (max-width: 1439px) 39vw, (max-width: 1919px) 38vw, 35vw"
                                                                        srcSet="https://assets.website-files.com/61efb3502ab169049f881c6d/6204c40d47b2e7047a1c4769_toon_games-p-800.jpeg 800w, https://assets.website-files.com/61efb3502ab169049f881c6d/6204c40d47b2e7047a1c4769_toon_games-p-1080.jpeg 1080w, https://assets.website-files.com/61efb3502ab169049f881c6d/6204c40d47b2e7047a1c4769_toon_games-p-1600.jpeg 1600w, https://assets.website-files.com/61efb3502ab169049f881c6d/6204c40d47b2e7047a1c4769_toon_games.jpg 1920w"
                                                                        className={style.project_image}
                                                                        style={{ filter: "saturate(0%)" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className={style.w_dyn_item}>
                                                                <div className={`${style.project_image_wrapper} ${style.no_rotate}`}>
                                                                    <img
                                                                        src="https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f3310037c21f833e4082_Galax_timber-min.jpg"
                                                                        loading="lazy"
                                                                        alt=""
                                                                        sizes="(max-width: 991px) 100vw, (max-width: 1279px) 42vw, (max-width: 1439px) 39vw, (max-width: 1919px) 38vw, 35vw"
                                                                        srcSet="https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f3310037c21f833e4082_Galax_timber-min-p-1080.jpeg 1080w, https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f3310037c21f833e4082_Galax_timber-min-p-1600.jpeg 1600w, https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f3310037c21f833e4082_Galax_timber-min.jpg 1920w"
                                                                        className={style.project_image}
                                                                        style={{ filter: "saturate(0%)" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className={style.w_dyn_item}>
                                                                <div className={`${style.project_image_wrapper} ${style.no_rotate}`}>
                                                                    <img
                                                                        src="https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f324bee49fcbfe81335b_Gondric_berry-min.jpg"
                                                                        loading="lazy"
                                                                        alt=""
                                                                        sizes="(max-width: 991px) 100vw, (max-width: 1279px) 42vw, (max-width: 1439px) 39vw, (max-width: 1919px) 38vw, 35vw"
                                                                        srcSet="https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f324bee49fcbfe81335b_Gondric_berry-min-p-800.jpeg 800w, https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f324bee49fcbfe81335b_Gondric_berry-min-p-1080.jpeg 1080w, https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f324bee49fcbfe81335b_Gondric_berry-min-p-1600.jpeg 1600w, https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f324bee49fcbfe81335b_Gondric_berry-min.jpg 1920w"
                                                                        className={style.project_image}
                                                                        style={{ filter: "saturate(0%)" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className={style.w_dyn_item}>
                                                                <div className={`${style.project_image_wrapper} ${style.no_rotate}`}>
                                                                    <img
                                                                        src="https://assets.website-files.com/61efb3502ab169049f881c6d/6204c49456aafd46a078383d_Everlast_inc-min.jpg"
                                                                        loading="lazy"
                                                                        alt=""
                                                                        sizes="(max-width: 991px) 100vw, (max-width: 1279px) 42vw, (max-width: 1439px) 39vw, (max-width: 1919px) 38vw, 35vw"
                                                                        srcSet="https://assets.website-files.com/61efb3502ab169049f881c6d/6204c49456aafd46a078383d_Everlast_inc-min-p-500.jpeg 500w, https://assets.website-files.com/61efb3502ab169049f881c6d/6204c49456aafd46a078383d_Everlast_inc-min-p-1080.jpeg 1080w, https://assets.website-files.com/61efb3502ab169049f881c6d/6204c49456aafd46a078383d_Everlast_inc-min-p-1600.jpeg 1600w, https://assets.website-files.com/61efb3502ab169049f881c6d/6204c49456aafd46a078383d_Everlast_inc-min.jpg 1920w"
                                                                        className={style.project_image}
                                                                        style={{ filter: "saturate(0%)" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className={style.w_dyn_item}>
                                                                <div className={`${style.project_image_wrapper} ${style.no_rotate}`}>
                                                                    <img
                                                                        src="https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f79a2eac3642a251a1f7_Dinser_agency-min.jpg"
                                                                        loading="lazy"
                                                                        alt=""
                                                                        sizes="(max-width: 991px) 100vw, (max-width: 1279px) 42vw, (max-width: 1439px) 39vw, (max-width: 1919px) 38vw, 35vw"
                                                                        srcSet="https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f79a2eac3642a251a1f7_Dinser_agency-min-p-500.jpeg 500w, https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f79a2eac3642a251a1f7_Dinser_agency-min-p-1080.jpeg 1080w, https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f79a2eac3642a251a1f7_Dinser_agency-min-p-1600.jpeg 1600w, https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f79a2eac3642a251a1f7_Dinser_agency-min.jpg 1920w"
                                                                        className={style.project_image}
                                                                        style={{ filter: "saturate(0%)" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={`${style.slider_1} ${style.extension} ${style.second} w-dyn-list`}>
                                                        <div className="w-dyn-items">
                                                            <div className={style.w_dyn_item}>
                                                                <div className={`${style.project_image_wrapper} ${style.no_rotate}`}>
                                                                    <Image
                                                                        src={product_1}
                                                                        alt=""
                                                                        className={style.project_image}
                                                                        style={{ filter: "saturate(0%)" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className={style.w_dyn_item}>
                                                                <div className={`${style.project_image_wrapper} ${style.no_rotate}`}>
                                                                    <Image
                                                                        src={product_1}
                                                                        alt=""
                                                                        className={style.project_image}
                                                                        style={{ filter: "saturate(0%)" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className={style.w_dyn_item}>
                                                                <div className={`${style.project_image_wrapper} ${style.no_rotate}`}>
                                                                    <img
                                                                        src="https://assets.website-files.com/61efb3502ab169049f881c6d/6204c40d47b2e7047a1c4769_toon_games.jpg"
                                                                        loading="lazy"
                                                                        alt=""
                                                                        sizes="(max-width: 991px) 100vw, (max-width: 1279px) 42vw, (max-width: 1439px) 39vw, (max-width: 1919px) 38vw, 35vw"
                                                                        srcSet="https://assets.website-files.com/61efb3502ab169049f881c6d/6204c40d47b2e7047a1c4769_toon_games-p-800.jpeg 800w, https://assets.website-files.com/61efb3502ab169049f881c6d/6204c40d47b2e7047a1c4769_toon_games-p-1080.jpeg 1080w, https://assets.website-files.com/61efb3502ab169049f881c6d/6204c40d47b2e7047a1c4769_toon_games-p-1600.jpeg 1600w, https://assets.website-files.com/61efb3502ab169049f881c6d/6204c40d47b2e7047a1c4769_toon_games.jpg 1920w"
                                                                        className={style.project_image}
                                                                        style={{ filter: "saturate(0%)" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className={style.w_dyn_item}>
                                                                <div className={`${style.project_image_wrapper} ${style.no_rotate}`}>
                                                                    <img
                                                                        src="https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f3310037c21f833e4082_Galax_timber-min.jpg"
                                                                        loading="lazy"
                                                                        alt=""
                                                                        sizes="(max-width: 991px) 100vw, (max-width: 1279px) 42vw, (max-width: 1439px) 39vw, (max-width: 1919px) 38vw, 35vw"
                                                                        srcSet="https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f3310037c21f833e4082_Galax_timber-min-p-1080.jpeg 1080w, https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f3310037c21f833e4082_Galax_timber-min-p-1600.jpeg 1600w, https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f3310037c21f833e4082_Galax_timber-min.jpg 1920w"
                                                                        className={style.project_image}
                                                                        style={{ filter: "saturate(0%)" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className={style.w_dyn_item}>
                                                                <div className={`${style.project_image_wrapper} ${style.no_rotate}`}>
                                                                    <img
                                                                        src="https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f324bee49fcbfe81335b_Gondric_berry-min.jpg"
                                                                        loading="lazy"
                                                                        alt=""
                                                                        sizes="(max-width: 991px) 100vw, (max-width: 1279px) 42vw, (max-width: 1439px) 39vw, (max-width: 1919px) 38vw, 35vw"
                                                                        srcSet="https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f324bee49fcbfe81335b_Gondric_berry-min-p-800.jpeg 800w, https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f324bee49fcbfe81335b_Gondric_berry-min-p-1080.jpeg 1080w, https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f324bee49fcbfe81335b_Gondric_berry-min-p-1600.jpeg 1600w, https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f324bee49fcbfe81335b_Gondric_berry-min.jpg 1920w"
                                                                        className={style.project_image}
                                                                        style={{ filter: "saturate(0%)" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className={style.w_dyn_item}>
                                                                <div className={`${style.project_image_wrapper} ${style.no_rotate}`}>
                                                                    <img
                                                                        src="https://assets.website-files.com/61efb3502ab169049f881c6d/6204c49456aafd46a078383d_Everlast_inc-min.jpg"
                                                                        loading="lazy"
                                                                        alt=""
                                                                        sizes="(max-width: 991px) 100vw, (max-width: 1279px) 42vw, (max-width: 1439px) 39vw, (max-width: 1919px) 38vw, 35vw"
                                                                        srcSet="https://assets.website-files.com/61efb3502ab169049f881c6d/6204c49456aafd46a078383d_Everlast_inc-min-p-500.jpeg 500w, https://assets.website-files.com/61efb3502ab169049f881c6d/6204c49456aafd46a078383d_Everlast_inc-min-p-1080.jpeg 1080w, https://assets.website-files.com/61efb3502ab169049f881c6d/6204c49456aafd46a078383d_Everlast_inc-min-p-1600.jpeg 1600w, https://assets.website-files.com/61efb3502ab169049f881c6d/6204c49456aafd46a078383d_Everlast_inc-min.jpg 1920w"
                                                                        className={style.project_image}
                                                                        style={{ filter: "saturate(0%)" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className={style.w_dyn_item}>
                                                                <div className={`${style.project_image_wrapper} ${style.no_rotate}`}>
                                                                    <img
                                                                        src="https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f79a2eac3642a251a1f7_Dinser_agency-min.jpg"
                                                                        loading="lazy"
                                                                        alt=""
                                                                        sizes="(max-width: 991px) 100vw, (max-width: 1279px) 42vw, (max-width: 1439px) 39vw, (max-width: 1919px) 38vw, 35vw"
                                                                        srcSet="https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f79a2eac3642a251a1f7_Dinser_agency-min-p-500.jpeg 500w, https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f79a2eac3642a251a1f7_Dinser_agency-min-p-1080.jpeg 1080w, https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f79a2eac3642a251a1f7_Dinser_agency-min-p-1600.jpeg 1600w, https://assets.website-files.com/61efb3502ab169049f881c6d/61f0f79a2eac3642a251a1f7_Dinser_agency-min.jpg 1920w"
                                                                        className={style.project_image}
                                                                        style={{ filter: "saturate(0%)" }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* S3 */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* === Products === */}



                {/* https://aestheria.webflow.io/#What-Do-You-Need */}
                {/* === Videos === */}
                {/* <section className={`${style.content_section} ${style.visible}`}>
                    <div className={`${style.content_wrapper} ${style.w_container}`}>
                        <div>
                            <div className={`${style.absolute_heading} ${style.medium} ${raleway.className}`}>
                                <div className={style.title}>Contenido</div>
                                <h3 className={style.h3_big}>
                                    Titulo
                                    <br />
                                    Titulo
                                </h3>
                                <div className={style.max_300_pixels}>
                                    <div className={style.mini_text}>
                                        we are a team of very friendly people drop us your message today
                                    </div>
                                </div>
                            </div>
                            <div className={style.pictures_container}>
                                <div className={style.pictures_left}>
                                    <div className={style.picture_item}>
                                        <img
                                            src="https://assets.website-files.com/620a86283656790bd590ec89/620e6f0341122f70d299c48e_Picture-bg.jpg"
                                            loading="lazy"
                                            width={465}
                                            sizes="(max-width: 479px) 42vw, (max-width: 767px) 43vw, (max-width: 1279px) 44vw, 465px"
                                            srcSet="https://assets.website-files.com/620a86283656790bd590ec89/620e6f0341122f70d299c48e_Picture-bg-p-500.jpeg 500w, https://assets.website-files.com/620a86283656790bd590ec89/620e6f0341122f70d299c48e_Picture-bg-p-800.jpeg 800w, https://assets.website-files.com/620a86283656790bd590ec89/620e6f0341122f70d299c48e_Picture-bg.jpg 930w"
                                            alt=""
                                        />
                                        <div className={`${style.change_this_image} ${style.picture_1}`} />
                                    </div>
                                    <div className={style.picture_item}>
                                        <img
                                            src="https://assets.website-files.com/620a86283656790bd590ec89/620e6f0341122f70d299c48e_Picture-bg.jpg"
                                            loading="lazy"
                                            width={465}
                                            sizes="(max-width: 479px) 42vw, (max-width: 767px) 43vw, (max-width: 1279px) 44vw, 465px"
                                            srcSet="https://assets.website-files.com/620a86283656790bd590ec89/620e6f0341122f70d299c48e_Picture-bg-p-500.jpeg 500w, https://assets.website-files.com/620a86283656790bd590ec89/620e6f0341122f70d299c48e_Picture-bg-p-800.jpeg 800w, https://assets.website-files.com/620a86283656790bd590ec89/620e6f0341122f70d299c48e_Picture-bg.jpg 930w"
                                            alt=""
                                        />
                                        <div className={`${style.change_this_image} ${style.picture_1}`} />
                                    </div>
                                </div>
                                <div className={style.pictures_right}>
                                    <div className={style.picture_item}>
                                        <img
                                            src="https://assets.website-files.com/620a86283656790bd590ec89/620e6f0341122f70d299c48e_Picture-bg.jpg"
                                            loading="lazy"
                                            width={465}
                                            sizes="(max-width: 479px) 43vw, (max-width: 767px) 45vw, (max-width: 1279px) 46vw, 465px"
                                            srcSet="https://assets.website-files.com/620a86283656790bd590ec89/620e6f0341122f70d299c48e_Picture-bg-p-500.jpeg 500w, https://assets.website-files.com/620a86283656790bd590ec89/620e6f0341122f70d299c48e_Picture-bg-p-800.jpeg 800w, https://assets.website-files.com/620a86283656790bd590ec89/620e6f0341122f70d299c48e_Picture-bg.jpg 930w"
                                            alt=""
                                        />
                                        <div className={`${style.change_this_image} ${style.picture_1}`} />
                                    </div>
                                    <div className={style.picture_item}>
                                        <img
                                            src="https://assets.website-files.com/620a86283656790bd590ec89/620e6f0341122f70d299c48e_Picture-bg.jpg"
                                            loading="lazy"
                                            width={465}
                                            sizes="(max-width: 479px) 43vw, (max-width: 767px) 45vw, (max-width: 1279px) 46vw, 465px"
                                            srcSet="https://assets.website-files.com/620a86283656790bd590ec89/620e6f0341122f70d299c48e_Picture-bg-p-500.jpeg 500w, https://assets.website-files.com/620a86283656790bd590ec89/620e6f0341122f70d299c48e_Picture-bg-p-800.jpeg 800w, https://assets.website-files.com/620a86283656790bd590ec89/620e6f0341122f70d299c48e_Picture-bg.jpg 930w"
                                            alt=""
                                        />
                                        <div className={`${style.change_this_image} ${style.picture_1}`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* === Products === */}


                {/* === Reviews === */}
                <section className={style.awards_section}>


                    {/* Title About */}
                    <div className={style.about_bio_section}>
                        <div
                            className={`${style.infinite_loop_container} ${style.works_text_loop} ${style.w_container} ${raleway_2.className} title_scrolling`}
                        >
                            <div className={style.text_loop_part}>
                                <div className={style.primary_loop_text}>Testimonios</div>
                                <div className={style.secondary_loop_text}>Aquaklin</div>
                                <div className={style.primary_loop_text}>Testimonios</div>
                                <div className={style.secondary_loop_text}>Aquaklin</div>
                                <div className={style.primary_loop_text}>Testimonios</div>
                                <div className={style.secondary_loop_text}>Aquaklin</div>
                            </div>
                            <div className={style.text_loop_part}>
                                <div className={style.primary_loop_text}>Testimonios</div>
                                <div className={style.secondary_loop_text}>Aquaklin</div>
                                <div className={style.primary_loop_text}>Testimonios</div>
                                <div className={style.secondary_loop_text}>Aquaklin</div>
                                <div className={style.primary_loop_text}>Testimonios</div>
                                <div className={style.secondary_loop_text}>Aquaklin</div>
                                <div className={style.primary_loop_text}>Testimonios</div>
                                <div className={style.secondary_loop_text}>Aquaklin</div>
                                <div className={style.primary_loop_text}>Testimonios</div>
                                <div className={style.secondary_loop_text}>Aquaklin</div>
                                <div className={style.primary_loop_text}>Testimonios</div>
                                <div className={style.secondary_loop_text}>Aquaklin</div>
                            </div>
                        </div>
                    </div>
                    {/* Title About */}


                    <div className={`${style.reviews_container} ${style.w_container}`}>
                        <div className={`${style.reviews_row} ${style.to_right} review_right`}
                            style={{
                                willChange: "transform",
                                transform:
                                    "translate3d(-61.9943%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                transformStyle: "preserve-3d"
                            }}
                        >
                            <div className={`${style.reviews_block} ${style.first_row_border} ${raleway.className}`}>
                                <div className={style.review_header}>
                                    <div className={style.customer_name}>Megan</div>
                                    <div className={style.customer_position}>Persona</div>
                                </div>
                                <div className={style.review}>
                                    Usé el producto de AquaKlin para limpiar el tanque de agua
                                    de mi casa y quedé muy contento con los resultados. El
                                    tanque quedó limpio y libre de bacterias, y el agua tiene
                                    mejor sabor.
                                </div>
                            </div>
                            <div className={`${style.reviews_block} ${style.first_row_border} ${raleway.className}`}>
                                <div className={style.review_header}>
                                    <div className={style.customer_name}>William</div>
                                    <div className={style.customer_position}>Persona</div>
                                </div>
                                <div className={style.review}>
                                    Siempre me preocupaba la calidad del agua que bebía,
                                    pero desde que uso el producto de AquaKlin, puedo beber
                                    agua con confianza. El agua está limpia, fresca y segura.
                                </div>
                            </div>
                            <div className={`${style.reviews_block} ${style.first_row_border} ${raleway.className}`}>
                                <div className={style.review_header}>
                                    <div className={style.customer_name}>Megan</div>
                                    <div className={style.customer_position}>Persona</div>
                                </div>
                                <div className={style.review}>
                                    Usé el producto de AquaKlin para limpiar el tanque de agua
                                    de mi casa y quedé muy contento con los resultados. El
                                    tanque quedó limpio y libre de bacterias, y el agua tiene
                                    mejor sabor.
                                </div>
                            </div>
                            <div className={`${style.reviews_block} ${style.first_row_border} ${raleway.className}`}>
                                <div className={style.review_header}>
                                    <div className={style.customer_name}>James</div>
                                    <div className={style.customer_position}>Organización</div>
                                </div>
                                <div className={style.review}>
                                    Usamos el producto de AquaKlin para limpiar los tanques
                                    de agua de nuestra escuela y estamos muy contentos con los
                                    resultados. Los tanques están limpios, seguros y libres de
                                    contaminantes. Estamos muy satisfechos con el producto.
                                </div>
                            </div>
                            <div className={`${style.reviews_block} ${style.first_row_border} ${raleway.className}`}>
                                <div className={style.review_header}>
                                    <div className={style.customer_name}>William</div>
                                    <div className={style.customer_position}>Empresa</div>
                                </div>
                                <div className={style.review}>
                                    Usamos el producto de AquaKlin para limpiar los tanques de agua
                                    de nuestra planta de producción y hemos tenido muy buenos resultados.
                                    Los tanques están limpios, seguros y libres de impurezas. Estamos muy
                                    satisfechos con el producto.
                                </div>
                            </div>
                            <div className={`${style.reviews_block} ${style.first_row_border} ${raleway.className}`}>
                                <div className={style.review_header}>
                                    <div className={style.customer_name}>William</div>
                                    <div className={style.customer_position}>Empresa</div>
                                </div>
                                <div className={style.review}>
                                    Usamos el producto de AquaKlin para limpiar los tanques de agua
                                    de nuestra planta de producción y hemos tenido muy buenos resultados.
                                    Los tanques están limpios, seguros y libres de impurezas. Estamos muy
                                    satisfechos con el producto.
                                </div>
                            </div>
                        </div>
                        <div className={`${style.reviews_row} ${style.to_left} review_left`}>
                            <div className={`${style.reviews_block} ${style.second_row_border} ${raleway.className}`}>
                                <div className={style.review_header}>
                                    <div className={style.customer_name}>Carol</div>
                                    <div className={style.customer_position}>Persona</div>
                                </div>
                                <div className={style.review}>
                                    Usé el producto de AquaKlin para purificar el agua de mi
                                    piscina y quedé muy contento con los resultados. El agua
                                    quedó limpia, cristalina y libre de bacterias. Lo recomiendo
                                    sin duda.
                                </div>
                            </div>
                            <div className={`${style.reviews_block} ${style.second_row_border} ${raleway.className}`}>
                                <div className={style.review_header}>
                                    <div className={style.customer_name}>Christie</div>
                                    <div className={style.customer_position}>Empresa</div>
                                </div>
                                <div className={style.review}>
                                    Usamos el producto de AquaKlin para purificar el agua de
                                    nuestra planta de producción y hemos tenido muy buenos
                                    resultados. El agua está limpia, segura y libre de impurezas.
                                    Estamos muy satisfechos con el producto.
                                </div>
                            </div>
                            <div className={`${style.reviews_block} ${style.second_row_border} ${raleway.className}`}>
                                <div className={style.review_header}>
                                    <div className={style.customer_name}>Amy</div>
                                    <div className={style.customer_position}>Persona</div>
                                </div>
                                <div className={style.review}>
                                    Usé el producto de AquaKlin para limpiar el tanque de agua de
                                    mi casa y quedé muy contento con los resultados. El tanque
                                    quedó limpio y libre de bacterias, y el agua tiene mejor sabor.
                                </div>
                            </div>
                            <div className={`${style.reviews_block} ${style.second_row_border} ${raleway.className}`}>
                                <div className={style.review_header}>
                                    <div className={style.customer_name}>Carol</div>
                                    <div className={style.customer_position}>Persona</div>
                                </div>
                                <div className={style.review}>
                                    Usé el producto de AquaKlin para limpiar el tanque
                                    de agua de mi casa y quedé tan impresionado con los
                                    resultados que le di a mi tanque de agua un nuevo nombre:
                                    AquaKlin.
                                </div>
                            </div>
                            <div className={`${style.reviews_block} ${style.second_row_border} ${raleway.className}`}>
                                <div className={style.review_header}>
                                    <div className={style.customer_name}>Christie</div>
                                    <div className={style.customer_position}>Persona</div>
                                </div>
                                <div className={style.review}>
                                    Soy una persona que tiene un tanque de agua en su casa y siempre tenía
                                    problemas con la calidad del agua. Desde que uso el producto de AquaKlin,
                                    el tanque de agua está limpio y libre de bacterias, y el agua tiene mejor
                                    sabor.
                                </div>
                            </div>
                            <div className={`${style.reviews_block} ${style.second_row_border} ${raleway.className}`}>
                                <div className={style.review_header}>
                                    <div className={style.customer_name}>Amy</div>
                                    <div className={style.customer_position}>Persona</div>
                                </div>
                                <div className={style.review}>
                                    Soy una persona que se preocupa por su salud y siempre busco
                                    formas de mejorar mi calidad de vida. Desde que uso el producto
                                    de AquaKlin, noté una diferencia significativa en la calidad del
                                    agua que bebo. Ahora estoy mucho más seguro de que estoy bebiendo
                                    agua limpia y segura.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* === Reviews === */}



            </main >



            <Footer />

        </>
    )
}

export default Home







