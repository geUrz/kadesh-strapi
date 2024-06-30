import { BasicLayout } from '@/layouts'
import styles from './about.module.css'
import { Image } from 'semantic-ui-react'

export default function About() {
  return (

    <BasicLayout relative>

      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.boxMain}>
            <div>
              <h1>Inicio</h1>
              <div className={styles.lineV}>

              </div>
              <div className={styles.box}>
                <div className={styles.lineH}></div> 
                <div className={styles.circle}></div>
                <h1>2022</h1>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ut, platea a dis per curae vivamus tempor cras, in ac augue ultricies urna posuere suspendisse. Metus ridiculus eros luctus mi ad porttitor bibendum tellus commodo, curae tortor tempus ante in condimentum sollicitudin conubia, orci risus parturient dictum pharetra nibh dignissim posuere. Quam id class eleifend vivamus curabitur bibendum libero, tempor pretium mauris et dictumst lacus magna taciti, odio fames primis lectus vehicula ridiculus.</p>
              <div className={styles.sectionImg}>
                <div className={styles.boxImg}>
                  <Image src='img/about/samy.webp' />
                  <h1>Samuel</h1>
                </div>
                <div className={styles.boxImg}>
                  <Image src='img/about/mike.webp' />
                  <h1>Miguel</h1>
                </div>
                <div className={styles.boxImg}>
                  <Image src='img/about/pedro.webp' />
                  <h1>Pedro</h1>
                </div>
              </div>
              <div className={styles.lineV2}></div>
              <h1>Metas</h1>
              <div className={styles.lineV2}></div>
              <div className={styles.box}>
                <div className={styles.lineH}></div> 
                <div className={styles.circle}></div>
                <h1>2023</h1>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ut, platea a dis per curae vivamus tempor cras, in ac augue ultricies urna posuere suspendisse. Metus ridiculus eros luctus mi ad porttitor bibendum tellus commodo, curae tortor tempus ante in condimentum sollicitudin conubia, orci risus parturient dictum pharetra nibh dignissim posuere. Quam id class eleifend vivamus curabitur bibendum libero, tempor pretium mauris et dictumst lacus magna taciti, odio fames primis lectus vehicula ridiculus.</p>
              <div className={styles.lineV2}></div>
              <h1>Proyectos</h1>
              <div className={styles.lineV2}></div>
              <div className={styles.box}>
                <div className={styles.lineH}></div> 
                <div className={styles.circle}></div>
                <h1>2024</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

    </BasicLayout>

  )
}
