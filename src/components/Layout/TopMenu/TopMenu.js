import { FaAddressCard, FaBars, FaHome, FaMicrophone, FaStore, FaTimes } from 'react-icons/fa'
import styles from './TopMenu.module.css'
import { useState } from 'react'
import Link from 'next/link'
import { Image } from 'semantic-ui-react'

export function TopMenu() {

  const [menu, setMenu] = useState(false)

  const menuOpen = () => setMenu((prevState) => !prevState)

  return (

    <div className={styles.section}>
      <div className={styles.container}>
        <Link href='/' className={styles.logo}>
          <Image src='img/logo.webp' />
        </Link>
        <div className={styles.iconBar} onClick={menuOpen}>
          {menu ? (
            <FaTimes />
          ) : (
            <FaBars />
          )}
        </div>
      </div>
      <div className={styles.asideMenuSection} style={{ left: menu ? '0' : '-100%' }} onClick={menuOpen}>
        <Link href='/' className={styles.menuTop}>
          <FaHome />
        </Link>
        <div className={styles.menuList}>
          <Link href='events'>
            <FaMicrophone />
            <h1>Eventos</h1>
          </Link>
          <Link href='products'>
            <FaStore />
            <h1>Productos</h1>
          </Link>
          <Link href='about'>
            <FaAddressCard />
            <h1>¿ Quienes somos ?</h1>
          </Link>
        </div>
      </div>
    </div>

  )
}
