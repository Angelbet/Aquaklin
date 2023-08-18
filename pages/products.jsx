import React, { createRef, useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'


// Styles
import style from '../styles/Products.module.scss'

// Images
import effect_2 from '../public/assets/effect_2.png';

// Gsap
import { gsap } from 'gsap';
import { Linear } from 'gsap';
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
const raleway_4 = Raleway({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})


gsap.registerPlugin(ScrollTrigger);


function Products() {

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


    // Efecto Scroll Image Iterar
    useEffect(() => {
        const photoBlogs = document.getElementsByClassName("Img_Product");
        Array.from(photoBlogs).forEach((photoBlog) => {
            gsap.to(photoBlog, {
                y: "30%",
                ease: 'none',
                scale: 1.8,
                scrollTrigger: {
                    trigger: photoBlog,
                    start: "top center",
                    end: "bottom center",
                    scrub: 1,
                },
            });
        });


    }, []);



    // Cursor
    const followCursor = (e) => {
        const target = document.getElementById("divSeguidor");
        const rect = target.getBoundingClientRect();
        const container = document.getElementById("divContenedor");
        const containerRect = container.getBoundingClientRect();

        const centerX = containerRect.left + containerRect.width / 2;
        const centerY = containerRect.top + containerRect.height / 2;
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        if (
            mouseX >= containerRect.left &&
            mouseX <= containerRect.right &&
            mouseY >= containerRect.top &&
            mouseY <= containerRect.bottom
        ) {
            gsap.to(target, {
                xPercent: (mouseX - centerX) / rect.width * 100,
                yPercent: (mouseY - centerY) / rect.height * 100,
                duration: 0.3,
            });
        } else {
            resetCursor();
        }
    };

    const resetCursor = () => {
        const target = document.getElementById("divSeguidor");
        gsap.to(target, {
            xPercent: 0,
            yPercent: 0,
            duration: 0.3,
        });
    };

    useEffect(() => {
        document.addEventListener("mousemove", followCursor);
        document.addEventListener("mouseleave", resetCursor);

        return () => {
            document.removeEventListener("mousemove", followCursor);
            document.removeEventListener("mouseleave", resetCursor);
        };
    }, []);


    // Change Background
    useEffect(() => {
        const sections = document.querySelectorAll('.section_color'); // Replace '.section' with the CSS selector for your sections
        sections.forEach((section) => {
            gsap.to(section, {
                backgroundColor: '#457B9D', // Replace 'blue' with the desired background color
                ease: 'easeInOut',
                duration: 1000, // 1 segundo
                scrollTrigger: {
                    trigger: section,
                    start: 'top=600px',
                    end: 'bottom center',
                    // markers: true,
                    scrub: true, // Ajusta este valor para cambiar la sensibilidad del desplazamiento
                },
            });
        });



    }, []);


    // Change color Text
    useEffect(() => {
        const texts = document.querySelectorAll('.text_color');
        texts.forEach((text) => {
            gsap.to(text, {
                color: '#fff', // Replace 'blue' with the desired background color
                ease: 'easeInOut',
                duration: 1000, // 1 segundo
                scrollTrigger: {
                    trigger: text,
                    start: 'top center',
                    end: 'bottom center',
                    // markers: true,
                    scrub: 1, // Ajusta este valor para cambiar la sensibilidad del desplazamiento
                },
            });
        });
    }, []);




    // Animation Image Reveral
    useEffect(() => {
        const imageReverals = document.querySelectorAll('.image_reveral');
        imageReverals.forEach((imageReveral) => {
            gsap.fromTo(
                imageReveral,
                { width: 0 },
                {
                    width: "100%",
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: imageReveral,
                        start: 'top 80%', // Aparece cuando el elemento está a un 80% de la altura de la ventana
                        end: 'bottom 20%', // Desaparece cuando el elemento está a un 20% de la altura de la ventana
                        // scrub: true, // Permite que la animación se reproduzca mientras se hace scroll
                    },
                }
            );
        });


    }, []);


    // Animation Text Reveral
    useEffect(() => {


        const textReverals = document.querySelectorAll('.text_reveral');
        textReverals.forEach((textReveral) => {
            gsap.fromTo(
                textReveral,
                { y: '-100px', opacity: 0, duration: 2, },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: textReveral,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        // scrub: true,
                    },
                }
            );
        });


    }, []);


    // Content Product
    const badge = useRef(null);
    const title_product = useRef(null);
    const circle = useRef(null);
    const text_description = useRef(null);

    useEffect(() => {
        const badge_animation = badge.current;
        const title_effect = title_product.current;
        const circle_effect = circle.current;
        const description = text_description.current;

        const tl = gsap.timeline();

        tl.fromTo(
            badge_animation,
            { x: '-100px', opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1.5,
                ease: 'power2.out',
            }
        )
            .fromTo(
                title_effect,
                { x: '-40px', opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: 'power2.out',
                },
                '-=1' // Retrasa la animación del título en 1 segundo después de la animación del badge
            )
            .fromTo(
                circle_effect,
                { y: '40px', opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: 'power2.out',
                },
                '-=1' // Retrasa la animación del título en 1 segundo después de la animación del badge
            )
            .fromTo(
                description,
                { y: '-100px', opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: 'power2.out',
                },
                '-=1' // Retrasa la animación del elemento en 1 segundo después de la animación del título
            );
    }, []);



    const catalog_title = useRef(null);
  
    useEffect(() => {
      const title = catalog_title.current;
  
      const tl = gsap.timeline();
  
      tl.fromTo(
        title,
        { y: '40px', opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: 'power2.out',
        },
        '-=1' // Retrasa la animación del título en 1 segundo después de la animación del badge
    )
      ScrollTrigger.create({
        trigger: title,
        start: 'top 80%',
        end: 'bottom 20%',
        animation: tl,
        scrub: true,
      });
    }, []);
    
    

    return (
        <>
            <Head>
                <title>Productos</title>
                <meta name="description" content="Aquaklin es una empresa líder en la purificación de agua. Ofrecemos una amplia gama de productos y servicios para purificar agua para el hogar, la oficina y la industria. Nuestros productos son altamente eficaces y seguros, y nuestros servicios son personalizados para satisfacer las necesidades individuales de cada cliente." />
                <meta name="keywords" content="purificadores de agua, Aquaklin, Aquaklinonline, productos, servicios, hogar, oficina, industria, eficaz, seguro, personalizado, agua purificada, agua potable, agua limpia, agua segura, agua saludable, agua fresca, agua de calidad, agua filtrada, agua tratada, agua purificada" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* === NAVBAR === */}
            <Navbar />

            <main id={style['Products']} className={`${style.main_wrapper} ${style.overflow_visible} section_color`}>


                {/* Context */}
                <div className={`${style.section_products}`}>
                    <div className={`${style.container} ${style.w_container}`}>
                        <div className={`${style.w_layout_grid} ${style.maingrid} ${style.hero_space}`}>
                            <div
                                id={style["w-node-d42e9d56-488e-a3e1-14c3-59f6ab8bb2b8-9bc2eb49"]}
                                className={`${style.hero_title_wrapper}`}
                            >
                                <div ref={badge} className={`${style.wrapper_subtitle} ${style.bg_color_cream} ${raleway_3.className}`}>
                                    <div className={style.heading_small}>
                                        Productos
                                    </div>
                                </div>
                                <div ref={title_product} className={`${style.hero_title} ${raleway_4.className}`}>
                                    <h1 className={style.heading_xlarge}>
                                        Nuestros Productos
                                    </h1>
                                </div>
                            </div>
                            <div
                                id={style["w-node-d42e9d56-488e-a3e1-14c3-59f6ab8bb2c0-9bc2eb49"]}
                                className={style.hero_text}
                            >
                                <div ref={text_description} className={`${style.heading_medium} ${style.text_color_grey} ${raleway_4.className}`}>
                                    AquaKlin es una empresa comprometida con la calidad y la seguridad de sus
                                    productos. Nuestros productos son altamente eficaces y seguros,
                                    y no requieren ningún equipo especial.
                                </div>
                            </div>

                            {/* Circle Rotation */}
                            <div ref={circle} className={style.featured_circle}>
                                <Image
                                    src={effect_2}
                                    loading="lazy"
                                    width={180}
                                    height={130}
                                    alt="Aquaklin"
                                    className={style.image}
                                    ref={footerRotation}
                                />
                            </div>

                        </div>
                    </div>
                </div>
                {/* Context */}


                {/* Products */}
                <div className={style.section_catalog}>
                    <div className={style.container_catalog}>
                        <div ref={catalog_title} className={`${style.max_w_width} ${raleway.className}`}>
                            <h3 className={style.title_3}>
                                El agua es vida, y AquaKlin es la clave para tener agua limpia y segura.
                            </h3>

                        </div>

                        {/* 1 */}
                        <div className={`${style.margin_100px} ${style._1}`}>
                            <div className={style.blog_small_wrapper}>
                                <div className={style.w_dyn_list}>
                                    <div className={style.w_dyn_items}>
                                        <div className={style.w_dyn_item}>
                                            <div>
                                                <div
                                                    className={`${style.blog_content} ${style._2} image_reveral`}
                                                    id="divContenedor"
                                                >
                                                    <img
                                                        src="https://assets.website-files.com/61928ef6a6ac6c87de171cd9/619500635e8b16149270723e_blog-thumbnail.jpg"
                                                        loading="eager"
                                                        alt=""
                                                        className={`${style.photo_blog} Img_Product`}
                                                    />
                                                    <a
                                                        href="/post/15-reasons-why-you-shouldnt-ignore-travel"
                                                        className={`${style.project_circle} ${style._2} ${style.w_inline_block} ${raleway_4.className}`}
                                                        id="divSeguidor"
                                                    >
                                                        <div className={style.view_project}>
                                                            Ver
                                                            <br />
                                                            Producto
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className={`${style.blog_bottom_content} text_reveral`}>
                                                    <div className={style.category_flex}>
                                                        <a
                                                            href="/post-category/travelling"
                                                            className={`${style.category} ${raleway_3.className}`}
                                                        >
                                                            Aquaklin
                                                        </a>
                                                    </div>
                                                    <a
                                                        href="/post/15-reasons-why-you-shouldnt-ignore-travel"
                                                        className={`${style.blog_title} ${style._2} ${raleway_3.className}`}
                                                    >
                                                        Sulfato de Aluminio
                                                    </a>
                                                    <div className={style.margin_30px}>
                                                        <div className={`${style.blog_subhead} ${style._2} ${raleway.className} text_color`}>
                                                            Elimina las impurezas del agua, como los sedimentos, las bacterias,
                                                            los virus y clarifica el agua.
                                                        </div>
                                                    </div>
                                                    <div className={style.margin_15px}>
                                                        <div className={style.author_name}>
                                                            <p className={`${style.by_text} ${raleway_2.className} text_color`}>Disponible</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2 */}
                        <div className={`${style.margin_100px} ${style._2}`}>
                            <div className={style.blog_small_wrapper}>
                                <div className={style.w_dyn_list}>
                                    <div className={style.w_dyn_items}>
                                        <div className={style.w_dyn_item}>
                                            <div
                                            >
                                                <div
                                                    className={`${style.blog_content} ${style._2} image_reveral`}
                                                // id="divContenedor"
                                                >
                                                    <img
                                                        height={100}
                                                        src="https://assets.website-files.com/61928ef6a6ac6c87de171cd9/61950605af04d40fbfe69eec_blog-thumbnail-2.jpg"
                                                        alt=""
                                                        className={`${style.photo_blog} Img_Product`}
                                                    />
                                                    <a
                                                        // id="divSeguidor"
                                                        href="/post/heres-what-no-one-tells-you-about-fashion"
                                                        className={`${style.project_circle} ${style._2} ${style.w_inline_block} ${raleway_4.className}`}
                                                    >
                                                        <div className={style.view_project}>
                                                            Ver
                                                            <br />
                                                            Producto
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className={`${style.blog_bottom_content} text_reveral`}>
                                                    <div className={style.category_flex}>
                                                        <a
                                                            href="/post-category/travelling"
                                                            className={`${style.category} ${raleway_3.className}`}
                                                        >
                                                            Aquaklin
                                                        </a>
                                                    </div>
                                                    <a
                                                        href="/post/15-reasons-why-you-shouldnt-ignore-travel"
                                                        className={`${style.blog_title} ${style._2} ${raleway_3.className}`}
                                                    >
                                                        Sulfato de Aluminio
                                                    </a>
                                                    <div className={style.margin_30px}>
                                                        <div className={`${style.blog_subhead} ${style._2} ${raleway.className} text_color`}>
                                                            Elimina las impurezas del agua, como los sedimentos, las bacterias,
                                                            los virus y clarifica el agua.
                                                        </div>
                                                    </div>
                                                    <div className={style.margin_15px}>
                                                        <div className={style.author_name}>
                                                            <p className={`${style.by_text} ${raleway_2.className}`}>Disponible</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3 */}
                        <div className={`${style.margin_100px} ${style._3}`}>
                            <div className={style.blog_small_wrapper}>
                                <div className={style.w_dyn_list}>
                                    <div className={style.w_dyn_items}>
                                        <div className={style.w_dyn_item}>
                                            <div
                                                style={{ opacity: 1 }}
                                            >
                                                <div
                                                    className={`${style.blog_content} ${style._2} image_reveral`}
                                                >
                                                    <img
                                                        src="https://assets.website-files.com/61928ef6a6ac6c87de171cd9/61950a02e861101172ce76b7_blog-thumbnail-3.jpg"
                                                        loading="eager"
                                                        alt=""
                                                        sizes="(max-width: 767px) 100vw, 49vw"
                                                        srcSet="https://assets.website-files.com/61928ef6a6ac6c87de171cd9/61950a02e861101172ce76b7_blog-thumbnail-3-p-500.jpeg 500w, https://assets.website-files.com/61928ef6a6ac6c87de171cd9/61950a02e861101172ce76b7_blog-thumbnail-3-p-800.jpeg 800w, https://assets.website-files.com/61928ef6a6ac6c87de171cd9/61950a02e861101172ce76b7_blog-thumbnail-3-p-1080.jpeg 1080w, https://assets.website-files.com/61928ef6a6ac6c87de171cd9/61950a02e861101172ce76b7_blog-thumbnail-3.jpg 1200w"
                                                        className={`${style.photo_blog} Img_Product`}
                                                    />
                                                    <a
                                                        data-w-id="64913938-d5b2-01b5-8b0b-7cf1a99a3b76"
                                                        href="/post/a-beginners-guide-to-magazine"
                                                        className={`${style.project_circle} ${style._2} ${style.w_inline_block} ${raleway_4.className}`}
                                                    >
                                                        <div className={style.view_project}>
                                                            Ver
                                                            <br />
                                                            Productos
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className={`${style.blog_bottom_content} text_reveral`}>
                                                    <div className={style.category_flex}>
                                                        <a
                                                            href="/post-category/travelling"
                                                            className={`${style.category} ${raleway_3.className}`}
                                                        >
                                                            Aquaklin
                                                        </a>
                                                    </div>
                                                    <a
                                                        href="/post/15-reasons-why-you-shouldnt-ignore-travel"
                                                        className={`${style.blog_title} ${style._2} ${raleway_3.className}`}
                                                    >
                                                        Sulfato de Aluminio
                                                    </a>
                                                    <div className={style.margin_30px}>
                                                        <div className={`${style.blog_subhead} ${style._2} ${raleway.className} text_color`}>
                                                            Elimina las impurezas del agua, como los sedimentos, las bacterias,
                                                            los virus y clarifica el agua.
                                                        </div>
                                                    </div>
                                                    <div className={style.margin_15px}>
                                                        <div className={style.author_name}>
                                                            <p className={`${style.by_text} ${raleway_2.className}`}>Disponible</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 4 */}
                        <div className={`${style.margin_100px} ${style._2}`}>
                            <div className={style.blog_small_wrapper}>
                                <div className={style.w_dyn_list}>
                                    <div className={style.w_dyn_items}>
                                        <div className={style.w_dyn_item}>
                                            <div
                                            >
                                                <div
                                                    className={`${style.blog_content} ${style._2} image_reveral`}
                                                >
                                                    <img
                                                        height={100}
                                                        loading="eager"
                                                        src="https://assets.website-files.com/61928ef6a6ac6c87de171cd9/61950bb11104be52a8e5494f_blog-thumbnail-4.jpg"
                                                        alt=""
                                                        sizes="(max-width: 767px) 100vw, 49vw"
                                                        srcSet="https://assets.website-files.com/61928ef6a6ac6c87de171cd9/61950bb11104be52a8e5494f_blog-thumbnail-4-p-500.jpeg 500w, https://assets.website-files.com/61928ef6a6ac6c87de171cd9/61950bb11104be52a8e5494f_blog-thumbnail-4.jpg 1200w"
                                                        className={`${style.photo_blog} Img_Product`}

                                                    />
                                                    <a
                                                        href="/post/this-weeks-top-stories-about-lifestyle"
                                                        className={`${style.project_circle} ${style._2} ${style.w_inline_block} ${raleway_4.className}`}
                                                    >
                                                        <div className={style.view_project}>
                                                            Ver
                                                            <br />
                                                            Productos
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className={`${style.blog_bottom_content} text_reveral`}>
                                                    <div className={style.category_flex}>
                                                        <a
                                                            href="/post-category/travelling"
                                                            className={`${style.category} ${raleway_3.className}`}
                                                        >
                                                            Aquaklin
                                                        </a>
                                                    </div>
                                                    <a
                                                        href="/post/15-reasons-why-you-shouldnt-ignore-travel"
                                                        className={`${style.blog_title} ${style._2} ${raleway_3.className}`}
                                                    >
                                                        Sulfato de Aluminio
                                                    </a>
                                                    <div className={style.margin_30px}>
                                                        <div className={`${style.blog_subhead} ${style._2} ${raleway.className} text_color`}>
                                                            Elimina las impurezas del agua, como los sedimentos, las bacterias,
                                                            los virus y clarifica el agua.
                                                        </div>
                                                    </div>
                                                    <div className={style.margin_15px}>
                                                        <div className={style.author_name}>
                                                            <p className={`${style.by_text} ${raleway_2.className}`}>Disponible</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Products */}



            </main>

            <Footer />


        </>
    )
}

export default Products