import React, { createRef, useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'


// Styles
import style from '../styles/Products.module.scss'

// Images
import effect_2 from '../public/assets/effect_2.png';
import p1 from '../public/assets/Home/Products/p1.jpg'

// Gsap
import { gsap } from 'gsap';
import { Linear } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Components
import Navbar from '../components/navbar'
import Footer from '../components/footer'

import ProductCard from '@/components/productCard';


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
                scale: 1.5,
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
    const followCursor = (e, element) => {
        const target = element;
        const rect = target.getBoundingClientRect();
        const container = element.parentNode; // Obtiene el elemento padre de cada elemento ".elemento-animado"
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
            resetCursor(element);
        }
    };

    const resetCursor = (element) => {
        const target = element;
        gsap.to(target, {
            xPercent: 0,
            yPercent: 0,
            duration: 0.3,
        });
    };

    useEffect(() => {
        const elements = document.querySelectorAll(".elemento-animado");
        elements.forEach((element) => {
            document.addEventListener("mousemove", (e) => followCursor(e, element));
            document.addEventListener("mouseleave", () => resetCursor(element));
        });

        return () => {
            elements.forEach((element) => {
                document.removeEventListener("mousemove", (e) => followCursor(e, element));
                document.removeEventListener("mouseleave", () => resetCursor(element));
            });
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
                    start: 'top bottom',
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

                        <ProductCard
                            products={{
                                data: [
                                    {
                                        image_product: "/assets/Home/Products/p1.jpg",
                                        width: 1157,
                                        height: 1688,
                                        link: "/products/aluminum-sulfate",
                                        category: "Aquaklin",
                                        name: "Sulfato de Aluminio",
                                        content: "Elimina las impurezas del agua, como los sedimentos, las bacterias, los virus y clarifica el agua.",
                                        status: "Disponible",
                                        style: `${style.margin_100px} ${style._1}`,
                                        category_color: `${style.category} ${raleway_3.className}`,
                                    },
                                    {
                                        image_product: "/assets/Home/Products/product_2.jpg",
                                        width: 342,
                                        height: 500,
                                        link: "/products/aquaphon-a-200",
                                        category: "Sewerin",
                                        name: "Aquaphon A 200",
                                        content: "Ideal para la localización de fugas y redes de tuberias.",
                                        status: "Bajo Encargo",
                                        style: `${style.margin_100px} ${style._2}`,
                                        category_color: `${style.category} ${style.sewerin} ${raleway_3.className}`,

                                    },
                                    {
                                        image_product: "/assets/Home/Products/product_3.jpg",
                                        width: 342,
                                        height: 500,
                                        link: "/products/aquaphon-a-50",
                                        category: "Sewerin",
                                        name: "Aquaphon A 50",
                                        content: "Acceso asequible a la detección de fugas de agua con un desempeño acústico profesional.",
                                        status: "Bajo Encargo",
                                        style: `${style.margin_100px} ${style._3}`,
                                        category_color: `${style.category} ${style.sewerin} ${raleway_3.className}`,

                                    },
                                    {
                                        image_product: "/assets/Home/Products/product_4.jpg",
                                        width: 342,
                                        height: 500,
                                        link: "/products/aquatest-t10",
                                        category: "Sewerin",
                                        name: "AquaTest T10",
                                        content: "Robusto baston de escucha para la detección acústica de fugas de agua en exteriores.",
                                        status: "Bajo Encargo",
                                        style: `${style.margin_100px} ${style._2}`,
                                        category_color: `${style.category} ${style.sewerin} ${raleway_3.className}`,

                                    },
                                    {
                                        image_product: "/assets/Home/Products/product_5.jpg",
                                        width: 342,
                                        height: 500,
                                        link: "/products/stethophon-04",
                                        category: "Sewerin",
                                        name: "Stethophon 04",
                                        content: "Receptor compacto, manejable con una sola mano, para la detección acústica de fugas de agua en edificios.",
                                        status: "Bajo Encargo",
                                        style: `${style.margin_100px} ${style._3}`,
                                        category_color: `${style.category} ${style.sewerin} ${raleway_3.className}`,

                                    },
                                    {
                                        image_product: "/assets/Home/Products/product_6.jpg",
                                        width: 342,
                                        height: 500,
                                        link: "/products/aquaphon-af-100",
                                        category: "Sewerin",
                                        name: "Aquaphon AF 100",
                                        content: "Combinación de la detección acústica de fuga de agua con la localización de tuberías.",
                                        status: "Bajo Encargo",
                                        style: `${style.margin_100px} ${style._2}`,
                                        category_color: `${style.category} ${style.sewerin} ${raleway_3.className}`,

                                    },
                                    {
                                        image_product: "/assets/Home/Products/product_7.jpg",
                                        width: 342,
                                        height: 500,
                                        link: "/products/secorrphon-ac-200",
                                        category: "Sewerin",
                                        name: "SeCorrPhon AC 200",
                                        content: "Combinación de correlador y localizador de fugas de agua profesional - flexible - inteligente.",
                                        status: "Bajo Encargo",
                                        style: `${style.margin_100px} ${style._3}`,
                                        category_color: `${style.category} ${style.sewerin} ${raleway_3.className}`,
                                    },
                                    {
                                        image_product: "/assets/Home/Products/product_8.jpg",
                                        width: 342,
                                        height: 500,
                                        link: "/products/variotec-460",
                                        category: "Sewerin",
                                        name: "VARIOTEC 460",
                                        content: "El especialista en detección de fugas con gas trazador hidrógeno.",
                                        status: "Bajo Encargo",
                                        style: `${style.margin_100px} ${style._2}`,
                                        category_color: `${style.category} ${style.sewerin} ${raleway_3.className}`,
                                    },
                                    {
                                        image_product: "/assets/Home/Products/product_9.jpg",
                                        width: 342,
                                        height: 500,
                                        link: "/products/diy-bacteria-test",
                                        category: "SafeHome",
                                        name: "Bacteria In Water Individual Test",
                                        content: "Kit de prueba de bacterias en agua potable, detecta 50 especies diferentes de bacterias coliformes tan rápido como 24 horas.",
                                        status: "Bajo Encargo",
                                        style: `${style.margin_100px} ${style._3}`,
                                        category_color: `${style.category} ${style.safehome} ${raleway_3.className}`,
                                    },
                                    {
                                        image_product: "/assets/Home/Products/product_10.jpg",
                                        width: 342,
                                        height: 500,
                                        link: "/products/high-quality-drinking-water-test-kit",
                                        category: "SafeHome",
                                        name: "Kit de prueba de agua potable de alta calidad",
                                        content: "Pruebas completas para 50 parámetros diferentes.",
                                        status: "Bajo Encargo",
                                        style: `${style.margin_100px} ${style._2}`,
                                        category_color: `${style.category} ${style.safehome} ${raleway_3.className}`,
                                    },
                                    {
                                        image_product: "/assets/Home/Products/product_11.jpg",
                                        width: 342,
                                        height: 500,
                                        link: "/products/nautilus-system",
                                        category: "Aganova",
                                        name: "Sistema Nautilus",
                                        content: "Solución innovadora y eficaz para la detección de fugas en tuberías de gran diametro.",
                                        status: "Bajo Encargo",
                                        style: `${style.margin_100px} ${style._3}`,
                                        category_color: `${style.category} ${style.aganova} ${raleway_3.className}`,
                                    },
                                ]
                            }}
                        />

                    </div>
                </div>

                {/* Products */}



            </main>

            <Footer />


        </>
    )
}

export default Products