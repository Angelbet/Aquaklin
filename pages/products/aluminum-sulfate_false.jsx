import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

// Styles
import style from '@/styles/Product.module.scss'

// Components
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

// Images
import about2 from '../../public/assets/Home/about2.jpg'
import product1 from '../../public/assets/Home/Products/product1.jpg'

import manual_akuaklin from '../../public/assets/Home/Products/uso_aquaklin.jpeg'

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


function product() {
    return (
        <>

            <Head>
                <title>Aquaklin</title>
                <meta name="description" content="Aquaklin Online" />
            </Head>


            <main id={style['Product']} className={`${style.main_wrapper} ${style.overflow_visible}`}>

                {/* Title Content */}
                <section className={style.on_load}>
                    <div className={style.inner_hero_section}>
                        <div>
                            <div className={style.hero_inner_box}>
                                <div className={style.hero_heading_post}>
                                    <div>
                                        <div className={style.hero_row_hidden}>
                                            <a
                                                href="#"
                                                className={`${style.category_link} ${style.w__current} ${raleway.className}`}
                                            >
                                                {/* Soluciones &nbsp;para &nbsp;la &nbsp;clarificación &nbsp;del &nbsp;Aguas */}
                                                Clarificador &nbsp;de &nbsp;agua
                                            </a>
                                        </div>
                                        <div>
                                            <div className={style.hero_row_hidden}>
                                                <h1 className={`${style.h1_post} ${raleway_3.className}`}>
                                                    Sulfato de Aluminio
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.post_summary}>
                                        <div className={`${style.hero_row_hidden} ${raleway_4.className}`}>
                                            <p>
                                                Aquaklin ofrece Sulfato de Aluminio como el quimico utilizado,
                                                para clarificar el agua de piscinas y tanques. Los productos
                                                de Aquaklin son fáciles de usar y no requieren ningún equipo especial.
                                            </p>
                                        </div>
                                    </div>
                                    {/* <div className={style.hero_row_hidden}>
                                        <div className={`${style.minutes_to_read} ${raleway_2.className}`}>
                                            3 minutos de lectura
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className={style.post_hero_image}>
                                <img
                                    src="https://assets.website-files.com/620a86283656790bd590ec89/6213b06011fad812caaf4b69_Hero_services.jpg"
                                    sizes="100vw"
                                    alt=""
                                />
                                {/* <Image
                                    src={product1}
                                    sizes="100vw"
                                    alt=""
                                /> */}
                                <div
                                    className={style.change_this_image}
                                // style={{
                                //     backgroundImage:
                                //         'url("https://assets.website-files.com/620ab49506f7a517a73fe5f2/620af11335db40d5537d16b3_norbert-kowalczyk-jrKKj9nJMxM-unsplash.jpg")'
                                // }}
                                />
                            </div>
                            <div className={`${style.intro_bottom_line} ${style.gray}`} />
                        </div>
                    </div>
                </section>
                {/* Title Content */}

                {/* Content */}
                <section className={style.section}>
                    <div className={`${style.container} ${style.w_container}`}>
                        <div className={`${style.w_layout_grid} ${style.maingrid} ${style.margin_180}`}>
                            <div
                                id={style["w-node-_5d59707f-1ac7-4066-390a-e66f33cbb8bd-36c2eb42"]}
                                className={style.content_case}
                            >
                                <div className={`${style.heading_medium} ${style.w_richtext} ${raleway_4.className}`}>
                                    <h1>Dosificación / Disolución.</h1>
                                    <p>
                                        El Sulfato de Aluminio, es una sal fácilmente soluble
                                        en agua, pueden prepararse soluciones con concentraciones de sulfato
                                        sólido hasta de 55%. Para el tratamiento de agua se sugiere que la
                                        concentración no sea superior a 5% de sulfato de aluminio sólido,
                                        con el fin de lograr una buena velocidad de disolución.
                                    </p>
                                    <p>
                                        El tiempo
                                        de residencia en el tanque donde se disuelve el material no debe
                                        ser inferior a 2,5 min. La dósis máxima es de 150 mg/L y el aluminio
                                        residual en el agua potable no debe exceder 0,2 mg/L.
                                    </p>
                                    <p>‍</p>
                                    <h1>CERTIFICACIONES</h1>
                                    <div className={style.figure_flex}>
                                        <figure
                                            className={`${style.w_richtext_align_floatleft} ${style.w_richtext_figure_type_image}`}
                                        >
                                            <div>
                                                <img
                                                    src="https://ferralca.com.ve/images/certificado-NSF.png"
                                                    alt=""
                                                />
                                            </div>
                                        </figure>
                                        <figure
                                            className={`${style.w_richtext_align_floatleft} ${style.w_richtext_figure_type_image}`}
                                        >
                                            <div>
                                                <img
                                                    src="https://ferralca.com.ve/images/AWWA.png"
                                                    alt=""
                                                />
                                            </div>
                                        </figure>


                                        
                                    </div>

                                </div>
                            </div>

                            <div
                                id={style["w-node-_5d59707f-1ac7-4066-390a-e66f33cbb8d2-36c2eb42"]}
                                className={style.line_case}
                            />
                            <div
                                id={style["w-node-_362170ad-a1c4-e0d4-2914-826a0f791afc-36c2eb42"]}
                                className={`${style.wrapper_subtitle} ${style.bg_color_cream} ${style.align_right_title}`}
                            >
                                <div className={`${style.heading_small} ${style.text_color_black} ${raleway.className}`}>
                                    Descripción
                                </div>
                            </div>
                        </div>
                        <div className={`${style.w_layout_grid} ${style.maingrid}`}>
                            <div
                                id={style["w-node-_5d59707f-1ac7-4066-390a-e66f33cbb8d8-36c2eb42"]}
                                className={style.content_case}
                            >
                                <div className={`${style.heading_medium} ${style.w_richtext} ${raleway_4.className}`}>
                                    <ul>
                                        <li>
                                            <p>Elimina las impurezas del agua, como los sedimentos, las bacterias y los virus.</p>
                                        </li>
                                        <li>
                                            <p>Clarifica el agua, es decir, elimina las partículas en suspensión que hacen que el agua sea turbia.</p>
                                        </li>
                                        <li>
                                            <p>Es fácil de usar y no requiere ningún equipo especial.</p>
                                        </li>
                                        <li>
                                            <p>Es seguro y está certificado por las autoridades sanitarias competentes.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                id={style["w-node-_218914b2-728d-7137-a694-cbe486fd15f1-36c2eb42"]}
                                className={`${style.wrapper_subtitle} ${style.bg_color_cream} ${style.align_right_title}`}
                            >
                                <div className={`${style.heading_small} ${style.text_color_black} ${raleway.className}`}>
                                    Beneficios
                                </div>
                            </div>
                        </div>
                        <div
                            id={style["w-node-_5d59707f-1ac7-4066-390a-e66f33cbb92e-36c2eb42"]}
                            className={style.line_case}
                        />
                        <div className={`${style.w_layout_grid} ${style.maingrid}`}>

                            <div
                                id={style["w-node-_5d59707f-1ac7-4066-390a-e66f33cbb92a-36c2eb42"]}
                                className={`${style.image_case_01} ${style.space_margin}`}
                            >
                                <div className={style.wrapper_case_image}>
                                    <Image
                                        loading="lazy"
                                        src={manual_akuaklin}
                                        alt=""
                                        sizes="(max-width: 767px) 90vw, (max-width: 991px) 94vw, 88vw"
                                        srcSet="https://uploads-ssl.webflow.com/63e3d8f484c90f172bc2eb4e/63ea565cf94bcf3c74a1bf04_pot-p-500.jpg 500w, https://uploads-ssl.webflow.com/63e3d8f484c90f172bc2eb4e/63ea565cf94bcf3c74a1bf04_pot-p-800.jpg 800w, https://uploads-ssl.webflow.com/63e3d8f484c90f172bc2eb4e/63ea565cf94bcf3c74a1bf04_pot-p-1080.jpg 1080w, https://uploads-ssl.webflow.com/63e3d8f484c90f172bc2eb4e/63ea565cf94bcf3c74a1bf04_pot.jpg 1276w"
                                        className={style.image_12}
                                    />
                                </div>
                            </div>
                            <div
                                id={style["w-node-_5d59707f-1ac7-4066-390a-e66f33cbb92c-36c2eb42"]}
                                className={`${style.image_case_01} ${style.space_margin}`}
                            >
                                <div className={style.wrapper_case_image}>
                                    <Image
                                        src={about2}
                                        alt=""
                                        className={style.image_12}
                                    />
                                </div>
                            </div>
                            <div
                                id={style["w-node-_5d59707f-1ac7-4066-390a-e66f33cbb92f-36c2eb42"]}
                                className={`${style.image_case_01} ${style.no_margim}`}
                            >
                                <div className={style.wrapper_case_image}>
                                    <Image
                                        src={manual_akuaklin}
                                        alt=""
                                        className={style.image_12}
                                    />
                                </div>
                            </div>
                            <div
                                id={style["w-node-_753707ee-6db6-0b96-5cab-6f876765700c-36c2eb42"]}
                                className={`${style.wrapper_subtitle} ${style.bg_color_cream} ${style.align_right_title}`}
                            >
                                <div className={`${style.heading_small} ${style.text_color_black} ${raleway.className}`}>
                                    INSPIRATION
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Content */}




            </main>

            <Footer />



        </>
    )
}

export default product