import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

// Styles
import style from '@/styles/About.module.scss'
import styleTitle from '@/styles/Home.module.scss'

// Images
import About_hero from '../public/assets/About/about_hero.jpg'
import about_1 from '../public/assets/About/about_1.jpeg'
import about_2 from '../public/assets/About/about_2.jpg'
import effect_1 from '../public/assets/effect_1.png';

// Components
import Navbar from '../components/navbar'
import Footer from '../components/footer'

// Gsap
import { gsap } from 'gsap';
import { Linear } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


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
const raleway_3 = Raleway({
    weight: '800',
    subsets: ['latin'],
    display: 'swap',
})
const raleway_4 = Raleway({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})



function About() {

    useEffect(() => {
        const duration = 8;
        const elementos = document.getElementsByClassName("circle");

        gsap.to(elementos, {
            ease: Linear.easeNone,
            repeat: -1,
            rotation: '+=360',
            duration: duration,
        });
    }, []);


    // ===========================================================


    // Tittle Effect
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.to(".title_scrolling", {
            x: -1700,
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


    return (
        <>

            <Head>
                <title>Aquaklin</title>
                <meta name="description" content="Ofrecemos
                                    una amplia gama de productos. Incluyendo equipos
                                    para el procesamiento, filtración y tratamiento de aguas
                                    blancas, residuales y asesoría técnica en búsqueda
                                    de soluciones." />
            </Head>

            <Navbar />

            <main id={style['About']} className={`${style.main_wrapper} ${style.overflow_visible}`}>


                {/* Hero */}
                <div className={style.hero}>
                    <div className={style.wide_container}>
                        <div className={style.home_hero_container}>
                            <div className={`${style.home_heading_wrapper} ${raleway_3.className}`}>
                                <div className={style.wrapper}>
                                    <h1 className={`${style.heading_1} ${style.in_hero}`}>
                                        Aquaklin esta
                                    </h1>
                                </div>
                                <div className={style.wrapper}>
                                    <h1 className={style.heading_1}>
                                        comprometida con la calidad del agua
                                    </h1>
                                </div>
                            </div>
                            <div className={style.hero_paragraph}>
                                <p className={`${style.paragraph} ${raleway_4.className}`}>
                                    Ofrecemos
                                    una amplia gama de productos. Incluyendo equipos
                                    para el procesamiento, filtración y tratamiento de aguas
                                    blancas, residuales y asesoría técnica en búsqueda
                                    de soluciones.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={style.home_hero_image_wrapper}>
                        <Image
                            src={About_hero}
                            alt="About Hero"
                            className={`${style.image} ${style.in_hero}`}
                        />
                        <div className={`${style.huge_button_circle_wrapper} ${style.hero_circle}`}>
                            <div className={style.arrow_inner}>
                                <Image
                                    src={effect_1}
                                    alt="Circle"
                                    className={`${style.image} ${style.point_down} circle`}
                                />
                            </div>
                        </div>
                        <div className={`${style.huge_button_circle_wrapper} ${style.hero_circle} ${style.hero_circle_2}`}>
                            <div className={style.arrow_inner}>
                                <Image
                                    src={effect_1}
                                    alt="Circle"
                                    className={`${style.image} ${style.point_down} circle`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero */}


                {/* Title About */}
                <div className={styleTitle.about_bio_section}>
                    <div
                        className={`${styleTitle.infinite_loop_container} ${styleTitle.works_text_loop} ${styleTitle.w_container} ${raleway_2.className} title_scrolling`}
                    >
                        <div className={styleTitle.text_loop_part}>
                            <div className={styleTitle.primary_loop_text}>Nosotros</div>
                            <div className={styleTitle.secondary_loop_text}>Aquaklin</div>
                            <div className={styleTitle.primary_loop_text}>Nosotros</div>
                            <div className={styleTitle.secondary_loop_text}>Aquaklin</div>
                            <div className={styleTitle.primary_loop_text}>Nosotros</div>
                            <div className={styleTitle.secondary_loop_text}>Aquaklin</div>
                        </div>
                        <div className={styleTitle.text_loop_part}>
                            <div className={styleTitle.primary_loop_text}>Nosotros</div>
                            <div className={styleTitle.secondary_loop_text}>Aquaklin</div>
                            <div className={styleTitle.primary_loop_text}>Nosotros</div>
                            <div className={styleTitle.secondary_loop_text}>Aquaklin</div>
                            <div className={styleTitle.primary_loop_text}>Nosotros</div>
                            <div className={styleTitle.secondary_loop_text}>Aquaklin</div>
                        </div>
                    </div>
                </div>
                {/* Title About */}


                {/* About Content */}
                <div className={`${style.about_section}`}>
                    <div className={style.wide_container}>
                        <div className={style.home_services_container}>
                            <div className={style.services_secondary_image}>
                                <Image
                                    src={about_1}
                                    alt="Services Image"
                                    className={style.image}
                                />
                                <div className={`${style.services_secondary_image} ${style.border}`} />
                            </div>
                            <div className={style.home_services_grid}>
                                <div
                                    id={style["w-node-f1a550f2-98b9-508d-789e-265dfe1c2e22-9ea51459"]}
                                    className={style.home_services_heading_wrapper}
                                >
                                    <h1 className={`${style.heading_1} ${raleway_3.className}`}>
                                        Aquaklin es una empresa líder en el tratamiento de agua.
                                    </h1>
                                </div>
                                <div
                                    id={style["w-node-_0030c0e2-110a-3ecc-c3dd-c66f942224bd-9ea51459"]}
                                    className={style.paragraph_wrapper}
                                >
                                    <p className={`${style.paragraph} ${style.color_change} ${raleway_4.className}`}>
                                        Importamos, distribuimos y vendemos equipos para
                                        el procesamiento, filtración y tratamiento de aguas blancas y
                                        residuales. También vendemos e instalamos equipos industriales,
                                        comerciales y residenciales para el tratamiento de aguas.
                                    </p>
                                </div>
                                <div
                                    id={style["w-node-a4c5f1d4-ee25-0003-1451-e03261d2ad32-9ea51459"]}
                                    className={`${style.paragraph_wrapper} ${style.relative} ${raleway_4.className}`}
                                >
                                    <p className={`${style.paragraph} ${style.color_change} ${raleway_4.className}`}>
                                        Ofrecemos asesoría técnica en búsqueda de soluciones integrales para el
                                        tratamiento de aguas blancas o residuales. Trabajamos con
                                        clientes de todo tipo, residenciales, comerciales e industriales.
                                    </p>
                                </div>
                                <div
                                    id={style["w-node-da6fa69e-f6c1-0e02-9bdf-9cfe135f545a-9ea51459"]}
                                    className={style.services_image_wrapper}
                                >
                                    <Image
                                        src={about_2}
                                        width={900}
                                        height={700}
                                        alt="Aquaklin People"
                                        className={`${style.image} ${style.secondary_services}`}
                                    />
                                </div>
                                {/* <div
                                    id={style["w-node-_44c52337-fc17-2b32-39a2-007eedd2915a-9ea51459"]}
                                    className={style.paragraph_and_button_wrapper}
                                >
                                    <div
                                        id={style["w-node-_283d0b5f-42ed-42b9-8af5-920a652ab9e8-9ea51459"]}
                                        className={style.paragraph_wrapper}
                                    >
                                        <p className={`${style.paragraph} ${style.color_change} ${raleway_4.className}`}>
                                            Estamos comprometidos a brindar a nuestros clientes agua de la más
                                            alta calidad. Nuestros equipos y productos están diseñados para
                                            eliminar contaminantes del agua, incluyendo bacterias, virus, protozoos,
                                            metales pesados, pesticidas, herbicidas y productos químicos.
                                        </p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* About Content */}


                {/* Title Objetives */}
                <div className={styleTitle.about_bio_section}>
                    <div
                        className={`${styleTitle.infinite_loop_container} ${styleTitle.works_text_loop} ${styleTitle.w_container} ${raleway_2.className} title_scrolling`}
                    >
                        <div className={styleTitle.text_loop_part}>
                            <div className={styleTitle.primary_loop_text}>Objetivos</div>
                            <div className={styleTitle.secondary_loop_text}>Aquaklin</div>
                            <div className={styleTitle.primary_loop_text}>Objetivos</div>
                            <div className={styleTitle.secondary_loop_text}>Aquaklin</div>
                            <div className={styleTitle.primary_loop_text}>Objetivos</div>
                            <div className={styleTitle.secondary_loop_text}>Aquaklin</div>
                        </div>
                        <div className={styleTitle.text_loop_part}>
                            <div className={styleTitle.primary_loop_text}>Objetivos</div>
                            <div className={styleTitle.secondary_loop_text}>Aquaklin</div>
                            <div className={styleTitle.primary_loop_text}>Objetivos</div>
                            <div className={styleTitle.secondary_loop_text}>Aquaklin</div>
                            <div className={styleTitle.primary_loop_text}>Objetivos</div>
                            <div className={styleTitle.secondary_loop_text}>Aquaklin</div>
                        </div>
                    </div>
                </div>
                {/* Title Objetives */}


                {/* Objetives */}
                <div className={style.objetives_section}>
                    <div className={style.wide_container}>
                        <div className={style.home_careers_top_grid}>
                            <div
                                id={style["w-node-be1ef411-101b-b8a8-90c3-75ac9faa8914-9ea51459"]}
                                className={style.home_careers_heading_wrapper}
                            >
                                <div className={style.wrapper}>
                                    <h1
                                        className={`${style.heading_1} ${style.no_wrap} ${raleway_3.className}`}
                                    >
                                        Brindando agua
                                    </h1>
                                </div>
                                <div className={`${style.wrapper} ${style.horizontal} ${style.for_home_careers} ${raleway_3.className}`}>
                                    <h1
                                        className={`${style.heading_1} ${style.no_wrap}`}
                                    >
                                        limpia y saludable
                                    </h1>
                                </div>
                            </div>
                            <div
                                id={style["w-node-_1427781b-95da-f23a-344f-b049451824cd-9ea51459"]}
                                className={style.grid_item_top}
                            >
                                <div
                                    id={style["w-node-c8dd8ed8-7f78-891f-ca0d-e63fc2d4c582-9ea51459"]}
                                    className={`${style.grid_item} ${style.hide_on_tablet} ${style.first}`}
                                >
                                    <h3
                                        className={`${style.heading_3} ${style.bold} ${style.color_change} ${raleway_2.className}`}
                                    >
                                        Objetivo
                                    </h3>
                                    <div className={`${style.paragraph_wrapper} ${style.for_grid_item}`}>
                                        <p
                                            className={`${style.paragraph} ${style.color_change} ${raleway_4.className}`}
                                        >
                                            Tenemos como objetivo comprometernos a trabajar con comunidades para garantizar que tengan acceso al agua potable limpia y segura.
                                            Estamos seguros que <strong>el agua limpia es un derecho humano básico</strong> y estamos comprometidos en hacer nuestra parte para garantizar que todos puedan acceder a ella.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                id={style["w-node-_19fefa15-ee1e-036b-c723-d13b3d82ca98-9ea51459"]}
                                className={`${style.home_careers_empty_grid_item}`}
                            />
                            <div
                                id="w-node-bc6911a3-16d5-c64b-8047-0435f368776e-9ea51459"
                                className={`${style.grid_item} ${style.hide_on_tablet}`}
                            >
                                <h3
                                    className={`${style.heading_3} ${style.bold} ${style.color_change} ${raleway_2.className}`}
                                >
                                    Misión
                                </h3>
                                <div className={`${style.paragraph_wrapper} ${style.for_grid_item}`}>
                                    <p
                                        className={`${style.paragraph} ${style.color_change} ${raleway_4.className}`}
                                    >
                                        Somos proveedores de soluciones integrales para la potabilización,
                                        filtración, uso de agua de lluvias y clarificación de aguas, mediante la
                                        comercialización de equipos y productos para el uso residencial,
                                        hotelero, comercial e industrial.
                                    </p>
                                </div>
                            </div>
                            <div
                                id="w-node-aeb64ca9-fad3-d257-f8e1-911bf19b4e90-9ea51459"
                                className={style.grid_item}
                            >
                                <h3
                                    className={`${style.heading_3} ${style.bold} ${style.color_change} ${raleway_2.className}`}
                                >
                                    Visión
                                </h3>
                                <div className={`${style.paragraph_wrapper} ${style.for_grid_item}`}>
                                    <p
                                        className={`${style.paragraph} ${style.color_change} ${raleway_4.className}`}
                                    >
                                        Consolidarnos como proveedores para el servicio de potabilización y clarificación
                                        de las aguas para el sector residencial, comercial e industrial.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                {/* Objetives */}



            </main >


            <Footer />


        </>
    )
}

export default About