import { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import music from './../assets/background-music/music.mp3'

function Music() {
  const [isPlaying, setIsPlaying] = useState(true)
  const them = useSelector((state) => state.toggle.them)
  const audioRef = useRef(null)

  useEffect(() => {
    if (!audioRef.current) return
    isPlaying ? audioRef.current.play().catch(() => {}) : audioRef.current.pause()
  }, [isPlaying])

  return (
    <>
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        className={`cursor-pointer animate__animated animate__fadeInUp animate__slow flex absolute self-end right-0 bottom-5 2xl:mr-24 lg:mr-16 xl:mr-20 mr-5 md:mr-12 ${isPlaying ? 'music-icon' : ''}`}
      >
        {Array.from({ length: 7 }, (_, i) => (
          <span
            key={i}
            style={{ backgroundColor: them.mainTxt }}
            className={`block w-1 rounded-t-xl duration-700 h-8 span origin-bottom ${i % 2 !== 0 ? 'mx-0.5' : ''}`}
          />
        ))}
      </button>

      <audio ref={audioRef} autoPlay loop>
        <source src={music} type="audio/mpeg" />
      </audio>
    </>
  )
}

export default Music
