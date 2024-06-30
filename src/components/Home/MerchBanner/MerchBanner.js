import { Image } from 'semantic-ui-react'
import styles from './MerchBanner.module.css'
import { FaChevronCircleRight } from 'react-icons/fa'
import Link from 'next/link'

export function MerchBanner() {
  return (

    <div className={styles.section}>
      <Link href='products'>
        <div>
          <h1>Conoce nuestra</h1>
          <h2>merch</h2>
          <FaChevronCircleRight />
        </div>
        <Image src='img/products/merch.webp' />
      </Link>
    </div>

  )
}
