import { BasicLayout } from '@/layouts'
import { Image } from 'semantic-ui-react'
import { FaShoppingCart } from 'react-icons/fa'
import styles from './products.module.css'
import Link from 'next/link'
import { Swiper as SwiperObj } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { useState } from 'react'

export default function Products() {

  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [thumbsSwiper2, setThumbsSwiper2] = useState(null)

  return (

    <BasicLayout relative>

      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.boxProduct}>

            <Swiper
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }}
              spaceBetween={50}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <Image src="img/products/cbf.webp" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="img/products/cba.webp" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image src="img/products/cbf.webp" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="img/products/cba.webp" />
              </SwiperSlide>
            </Swiper>

            <div className={styles.name}>
              <h1>Camiseta cuello redondo color beige</h1>
              <h2>$250 MXN</h2>
            </div>
            <div className={styles.buy}>
              <Link target='blank' href='https://wa.me/526862026039'>
                <FaShoppingCart />
                <h2>Pedir</h2>
              </Link>
            </div>
          </div>
          <div className={styles.boxProduct}>

            <Swiper
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }}
              spaceBetween={50}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper2 }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <Image src="img/products/cnf.webp" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="img/products/cna.webp" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper2}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image src="img/products/cnf.webp" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="img/products/cna.webp" />
              </SwiperSlide>
            </Swiper>

            <div className={styles.name}>
              <h1>Camiseta cuello redondo color negro</h1>
              <h2>$250 MXN</h2>
            </div>
            <div className={styles.buy}>
              <Link target='blank' href='https://wa.me/526862026039'>
                <FaShoppingCart />
                <h2>Pedir</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </BasicLayout>

  )
}
