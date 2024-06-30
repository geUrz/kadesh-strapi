import { BasicLayout } from '@/layouts'
import styles from './home.module.css'
import { Wallpaper } from '@/components/Layout'
import { MerchBanner } from '@/components/Home/MerchBanner/MerchBanner'

export default function Home() {

  return (
    
    <BasicLayout noLogo>

      <Wallpaper />

      <MerchBanner />

    </BasicLayout>

  )
}
