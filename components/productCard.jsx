import React from 'react'

// Styles
import style from '@/styles/Products.module.scss'
import Link from 'next/link'
import Image from 'next/image'

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


function ProductCard({ products }) {
    return (
        <>
            {
                products?.data.map((product, idx) => {
                    return (
                        <div key={idx} className={product.style}>
                            <div className={style.blog_small_wrapper}>
                                <div className={style.w_dyn_list}>
                                    <div className={style.w_dyn_items}>
                                        <div className={style.w_dyn_item}>
                                            <div>
                                                <div
                                                    className={`${style.blog_content} ${style._2} image_reveral`}
                                                    id="divContenedor"
                                                >
                                                    <Image
                                                        src={product.image_product}
                                                        alt="Sulfato de Aluminio"
                                                        width={products.data[0].width}
                                                        height={products.data[0].height}
                                                        className={`${style.photo_blog} Img_Product`}
                                                    />
                                                    <Link
                                                        href={product.link}
                                                        className={`${style.project_circle} ${style._2} ${style.w_inline_block} ${raleway_4.className} elemento-animado`}
                                                    >
                                                        <div className={style.view_project}>
                                                            Ver
                                                            <br />
                                                            Producto
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className={`${style.blog_bottom_content} text_reveral`}>
                                                    <div className={style.category_flex}>
                                                        <a
                                                            href="#"
                                                            className={product.category_color}
                                                        >
                                                            {product.category}
                                                        </a>
                                                    </div>
                                                    <a
                                                        href="/post/15-reasons-why-you-shouldnt-ignore-travel"
                                                        className={`${style.blog_title} ${style._2} ${raleway_3.className}`}
                                                    >
                                                        {product.name}
                                                    </a>
                                                    <div className={style.margin_30px}>
                                                        <div className={`${style.blog_subhead} ${style._2} ${raleway.className} text_color`}>
                                                            {product.content}
                                                        </div>
                                                    </div>
                                                    <div className={style.margin_15px}>
                                                        <div className={style.author_name}>
                                                            <p className={`${style.by_text} ${raleway_2.className} text_color`}>{product.status}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}

export default ProductCard