import productsData from "./product.json";


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
import by from '@/public/assets/l0go.png'
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


export async function getStaticPaths() {
    const paths = productsData.map((product) => ({
        params: { id: product.id.toString() },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    // Obtiene los datos del producto correspondiente al ID
    const product = productsData.find((product) => product.id === params.id);

    return {
        props: {
            product,
        },
    };
}



function ProductPage({ product }) {

    return (
        <>

            <Head>
                <title>{product.title}</title>
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
                                                className={`${raleway_2.className} ${style.category_link} ${style.w__current} ${style[product.category_link_color]}`}
                                            >
                                                {product.category_link}
                                            </a>
                                        </div>
                                        <div>
                                            <div className={style.hero_row_hidden}>
                                                <h1 className={`${style.h1_post} ${raleway_3.className}`}>
                                                    {product.title_product}
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.post_summary}>
                                        <div className={`${style.hero_row_hidden} ${raleway_4.className}`}>
                                            <p>
                                                {product.short_description}
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
                                    className={`${style.change_this_image} ${style[product.image_product]}`}
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
                                    <h1>{product.title_description}</h1>
                                    <article>

                                        {Array.isArray(product.description) ? (
                                            <div>
                                                {product.description.map((desc, index) => (
                                                    <p key={index}>
                                                        {desc}
                                                    </p>
                                                ))}
                                            </div>
                                        ) : (
                                            <p>{product.description}</p>
                                        )}

                                        {/* {product.description} */}
                                    </article>
                                    <h1>{product.distributed}</h1>
                                    <div className={style.figure_flex}>
                                        <figure
                                            className={`${style.w_richtext_align_floatleft} ${style.w_richtext_figure_type_image}`}
                                        >
                                            <div>
                                                <Image
                                                    src={by}
                                                    width={150}
                                                    height={70}
                                                    alt="Aquaklin Logo"
                                                />
                                            </div>
                                        </figure>

                                        {product ? (
                                            <>
                                                <figure
                                                    className={`${style.w_richtext_align_floatleft} ${style.w_richtext_figure_type_image}`}
                                                >
                                                    {product.certificate && <Image width={200} height={180} src={product.certificate} alt={`Producto ${product.id}`} />}
                                                </figure>
                                                <figure
                                                    className={`${style.w_richtext_align_floatleft} ${style.w_richtext_figure_type_image}`}
                                                >
                                                    {product.awwa && <Image width={230} height={170} src={product.awwa} alt={`Producto ${product.id}`} />}
                                                </figure>
                                            </>
                                        ) : (
                                            <></>
                                        )}

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
                                    {Array.isArray(product.characteristics) ? (
                                        <ul>
                                            {product.characteristics.map((desc, index) => (
                                                <li key={index}>
                                                    <p>{desc}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>{product.characteristics}</p>
                                    )}
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
                                    Uso
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Content */}




            </main>

            <Footer />



        </>

    );
}

export default ProductPage;