import classNames from 'classnames'
import { Footer, TopMenu } from '@/components/Layout'
import { Image } from 'semantic-ui-react'
import styles from './BasicLayout.module.css'

export function BasicLayout(props) {

  const {
    children,
    relative=false
  } = props

  return (
    
    <>
    
      <TopMenu />
      <div className={classNames({[styles.relative] : relative})}>
        {children}
      </div>
      <Footer />
    
    </>

  )
}
