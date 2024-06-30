import classNames from 'classnames'
import { Footer, Sound, TopMenu } from '@/components/Layout'
import styles from './BasicLayout.module.css'

export function BasicLayout(props) {

  const {
    children,
    relative=false,
    noLogo
  } = props

  return (
    
    <>
    
      <TopMenu noLogo={noLogo} />
      <div className={classNames({[styles.relative] : relative})}>
        {children}
      </div>
      <Sound />
      <Footer />
    
    </>

  )
}
