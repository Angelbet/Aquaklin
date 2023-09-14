import React, { useEffect, useState } from 'react'

// Styles
import style from '../styles/Navbar.module.scss'

// Images
import logo from '../public/assets/l0go.png'

// Gsap
import { gsap } from 'gsap';

// Icons
import { UilAirplay } from '@iconscout/react-unicons'
import { UilApps } from '@iconscout/react-unicons'
// Fonts
import { Raleway } from 'next/font/google'
import Image from 'next/image';
import Link from 'next/link';
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

export default function Navbar() {

    const [isOpen, setIsOpen] = createRef(false);

    useEffect(() => {
        if (isOpen) {
            // Animación de apertura utilizando GSAP
            gsap.from('.navbar-content', { opacity: 0, y: -60, duration: 0.3 });
        } else {
            // Animación de cierre utilizando GSAP
            gsap.to('.navbar-content', { opacity: 0, y: -60, duration: 0.3 });
        }
    }, [isOpen]);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };



    return (
        <>

            <div
                className={`${style.navigation_mbl} ${style.w_nav}`}
            >
                <div className={`${style.container} ${style.mbl_nav} ${style.w_container}`}>
                    <Link href="/home" className={style.w_nav_brand}>
                        <Image
                            src={logo}

                            className={style.brand_logo}
                        />
                    </Link>


                    <div
                        onClick={toggleNavbar}
                        className={`${style.menu_button} ${style.w_nav_button}`}
                        style={{ WebkitUserSelect: "text" }}
                    >
                        <UilApps with={20} height={20} />
                    </div>
                </div>

                {/* Menus */}
                <div
                    className={style.w_nav_overlay}
                    id="w-nav-overlay-0"
                >
                    {isOpen && (
                        <nav className={`navbar-content ${style.nav_menu} ${style.w_nav_menu} ${style.open_box}`}>
                            <div className={`${style.w_layout_grid} ${style.nav_menu_grid}`}>
                                <div id={style["w-node-aa1cfef0-2bb1-d85c-f3fc-fe33f3521bf1-f3521be7"]}>
                                    <ul className={`${style.mbl_nav_list} ${style.w_list_unstyled} ${raleway_2.className}`}>
                                        <li className={style.nav_list_item}>
                                            <div
                                                className={`${style.dropdown_mbl} ${style.w_dropdown}`}
                                            >
                                                <Link
                                                    href="/home"
                                                    className={`${style.nav_link_mbl} ${style.w_dropdown_toggle}`}
                                                >
                                                    <div
                                                        className={`${style.icon} ${style.w_icon_dropdown_toggle}`}
                                                    />
                                                    Home
                                                </Link>
                                            </div>
                                        </li>
                                        <li className={style.nav_list_item}>
                                            <div
                                                className={`${style.dropdown_mbl} ${style.w_dropdown}`}
                                                style={{ maxWidth: 1400 }}
                                            >
                                                <Link
                                                    href="/about"
                                                    className={`${style.nav_link_mbl} ${style.w_dropdown_toggle}`}
                                                >
                                                    {/* <UilAirplay
                                                        className={`${style.icon} ${style.w_icon_dropdown_toggle}`}
                                                    /> */}
                                                    <div>Nosotros</div>
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div id={style["w-node-aa1cfef0-2bb1-d85c-f3fc-fe33f3521c1d-f3521be7"]}>
                                    <ul className={`${style.mbl_nav_list} ${style.top_margin_0} ${style.w_list_unstyled} ${raleway_2.className}`}>
                                        <li className={style.nav_list_item}>
                                            <div
                                                className={`${style.dropdown_mbl} ${style.w_dropdown}`}
                                                style={{ maxWidth: 1400 }}
                                            >
                                                <Link
                                                    href="/products"
                                                    className={`${style.nav_link_mbl} ${style.w_dropdown_toggle}`}
                                                >
                                                    {/* <UilAirplay
                                                        className={`${style.icon} ${style.w_icon_dropdown_toggle}`}
                                                    /> */}
                                                    <div>Productos</div>
                                                </Link>
                                                {/* <nav
                                                    className={`${style.dropdown_list_mbl} ${style.w_dropdown_list}`}
                                                    id="w-dropdown-list-3"
                                                >
                                                    <div className={style.dropdown_flex_mbl}>
                                                        <a
                                                            href="/cases/cases-slide"
                                                            className={`${style.dropdown_link_styles} ${style.w_dropdown_link}`}
                                                        >
                                                            Productos
                                                        </a>
                                                        <a
                                                            href="/cases/cases-gride"
                                                            className={`${style.dropdown_link_styles} ${style.w_dropdown_link}`}
                                                        >
                                                            Productos
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className={`${style.dropdown_link_styles} ${style.w_dropdown_link}`}
                                                        >
                                                            Productos
                                                        </a>
                                                    </div>
                                                </nav> */}
                                            </div>
                                        </li>
                                        <li className={style.nav_list_item}>
                                            <div
                                                className={`${style.dropdown_mbl} ${style.w_dropdown}`}
                                                style={{ maxWidth: 1400 }}
                                            >
                                                <Link
                                                    href="mailto:serviciosaquaklin@gmail.com"
                                                    className={`${style.nav_link_mbl} ${style.w_dropdown_toggle}`}
                                                >
                                                    <div>Contacto</div>
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    )}

                </div>
            </div>


            <header id="nav" className={style.sticky_nav}>
                <nav className={`${style.container} ${style.w_container}`}>
                    <ul className={`${style.nav_grid} ${style.w_list_unstyled}`}>
                        <li>
                            <div className={`${style.dropdown} ${style.w_dropdown}`}>
                                <Link href="/home" className={`${style.nav_link} ${style.w_dropdown_toggle}`} id="w-dropdown-toggle-6">
                                    <div className={raleway_2.className}>Inicio</div>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div
                                className={`${style.dropdown} ${style.w_dropdown}`}
                            >
                                <Link href="/about" className={`${style.nav_link} ${style.w_dropdown_toggle}`}>
                                    <div className={raleway_2.className}>Nosotros</div>
                                </Link>
                            </div>
                        </li>
                        <li id={style["w-node-b92e1f18-3e01-e52e-83a9-a194f17fd04e-f17fd021"]}>
                            <Link
                                href="/"
                                className={`${style.logo_link} ${style.w_inline_block} ${style.w__current}`}
                            >
                                <Image
                                    src={logo}

                                    className={style.brand_logo}
                                />
                            </Link>
                        </li>
                        <li>
                            <div
                                className={`${style.dropdown} ${style.w_dropdown}`}
                            >
                                <Link
                                    href="/products"
                                    className={`${style.nav_link} ${style.w_dropdown_toggle}`}
                                >
                                    <div className={raleway_2.className}>Productos</div>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div
                                className={`${style.dropdown} ${style.w_dropdown}`}
                            >
                                <Link
                                    href="mailto:serviciosaquaklin@gmail.com"
                                    className={`${style.nav_link} ${style.w_dropdown_toggle}`}
                                >
                                    <div className={raleway_2.className}>Contacto</div>
                                </Link>
                            </div>
                        </li>
                        {/* <select >
                            <option value="es">Español</option>
                            <option value="en">English</option>
                        </select> */}
                    </ul>
                </nav>
            </header>
        </>
    )
}
