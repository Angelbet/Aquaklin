import Image from 'next/image'

import style from '../styles/UnderConstruction.module.scss'
import Link from 'next/link'

// Images
import logo from '../public/assets/Isologo.png'
import effect_1 from '../public/assets/effect_1.png'

// Fonts
import { Raleway } from 'next/font/google'

const raleway = Raleway({
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
})

// Gsap
import { gsap } from 'gsap'
import { Linear } from 'gsap'

export default function Home() {



  return (

    <main className={style.body_content}>

      {/* Logo */}
      <a
        href="/"
        className={`${style.template_logo} ${style.w_inline_block}`}
      >
        <Image
          src={logo}
          width={300}
          alt="Aquaklin Logo"
          className={style.zork_logo}
        />
      </a>

      <div className={style.hero}>
        <div
          id={style["w-node-_153fadda-452c-0f46-de80-5a387729fd05-e0473f29"]}
          className={style.max_w_hero}
        >
          <h1 className={`${style.title_1} ${raleway.className}`}>
            Aquaklin.
            <br />
            <span className={style.image_span}>
              <br />
            </span>
            Próximamente.
          </h1>
        </div>
        <div
          id={style["w-node-_30ebfbd2-b113-de0e-04ca-62149e5ae34d-e0473f29"]}
          className={style.hero_photo}
        >
          {/* <div className={style.video}>
            <div className={`${style.video_section} ${style.background_video}`}>
              <video
                autoPlay
                loop
                muted
              >
                <source
                  src="../assets/Aquiaklin_video.mp4" type="video/mp4"
                />
                <source
                />
              </video>

            </div>

          </div> */}
          <Link
            href="/"
            className={`${style.lightbox_link} ${style.w_inline_block} ${style.w_lightbox}`}
          >
            <Image
              src={effect_1}
              loading="lazy"
              width="318.5"
              sizes="102px"
              alt=""
              className={style.play_showreel}
            />
            <div className={style.play_content}>

              <div
                target="_blank"
                className={`${style.circle_link_block} ${style.w_inline_block}`}
                href="https://www.instagram.com/aquaklin.ve/"
              >
                <img
                  alt=""
                  loading="lazy"
                  width={60}
                  height={60}
                  className={style.social_media_icon}
                  src="https://galeryan.com/_next/static/media/instagram.6592c30f.svg"
                />
              </div>

              {/* <div
                className={style.play_text}
                style={{
                  transform:
                    "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d"
                }}
              >
                Play
              </div>
              <div
                className={style.play_text}
                style={{
                  transform:
                    "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d"
                }}
              >
                Play
              </div> */}
            </div>
          </Link>
        </div>
      </div>

    </main>

  )
}
