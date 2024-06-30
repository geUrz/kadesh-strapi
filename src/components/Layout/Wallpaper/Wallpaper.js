import { Image } from 'semantic-ui-react'
import styles from './Wallpaper.module.css'

export function Wallpaper() {
  return (
    
    <div className={styles.wallpaper}>
      <Image src='img/wallpaper.webp' />
    </div> 

  )
}
