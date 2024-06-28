import { Image } from 'semantic-ui-react'
import styles from './Footer.module.css'
import { FaFacebook, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'

export function Footer() {
  return (

    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src='img/logo.webp' />
        </div>
        <div className={styles.social}>
          <Link target='blank' href='https://www.facebook.com/profile.php?id=61551728948160&mibextid=ZbWKwL'>
            <FaFacebookF />
          </Link>
          <Link target='blank' href='https://www.instagram.com/kadeshgrupoficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
            <FaInstagram />
          </Link>
          <Link target='blank' href='https://wa.me/526862026039'>
            <FaWhatsapp />
          </Link>
        </div>
        <div className={styles.copy}>
          <h1>&copy; 2024 KADESH</h1>
        </div>
      </div>
    </div>

  )
}
