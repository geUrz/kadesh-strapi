import { FaPause, FaPlay } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import styles from './Sound.module.css'

export function Sound() {

  /* const [isPlaying, setIsPlaying] = useState(false);
  let audio

  const togglePlay = () => {
    if (audio.paused) {
      audio.play()
      setIsPlaying(true)
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  } */

    const [audio, setAudio] = useState()
    const [isPlaying, setIsPlaying] = useState()

    useEffect(() => {
      setAudio(new Audio('../../sound/praise.mp3'))
    }, [])
  
    useEffect(() => {
      if (isPlaying) {
        audio.play()
      } else {
        //audio.pause()
      }
    }, [isPlaying])
  
    const togglePlay = () => {
      setIsPlaying(!isPlaying)

      if(isPlaying){
        audio.pause()
      }

    }

  return (

    <>

      
        {isPlaying ? (
          <div className={styles.play} onClick={togglePlay}>
          <FaPause />
          </div>
        ) : (
          <div className={styles.play} onClick={togglePlay}>
          <FaPlay />
          </div>
        )}
      

    </>

  )
}
