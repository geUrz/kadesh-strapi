import { BasicLayout } from '@/layouts'
import { Image } from 'semantic-ui-react'
import { FaShoppingCart } from 'react-icons/fa'
import styles from './products.module.css'
import Link from 'next/link'

export default function Products() {
  return (
    
    <BasicLayout relative>

      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.boxProduct}>
            <div className={styles.img}>
              <Image src='img/products/cbf.webp' />
            </div>
            <div className={styles.name}>
              <h1>Camiseta cuello redondo color beige</h1>
              <h2>$250 MXN</h2>
            </div>
            <div className={styles.buy}>
              <Link target='blank' href='https://wa.me/526862026039'>
                <FaShoppingCart />
                <h2>Comprar</h2>
              </Link>
            </div>
          </div>
          <div className={styles.boxProduct}>
            <div className={styles.img}>
              <Image src='img/products/cnf.webp' />
            </div>
            <div className={styles.name}>
              <h1>Camiseta cuello redondo color negro</h1>
              <h2>$250 MXN</h2>
            </div>
            <div className={styles.buy}>
              <Link target='blank' href='https://wa.me/526862026039'>
                <FaShoppingCart />
                <h2>Comprar</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </BasicLayout>

  )
}
