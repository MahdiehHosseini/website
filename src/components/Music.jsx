//import pakages
import { useState,useEffect,useRef } from "react"
import { useSelector } from 'react-redux'
//import music
import music from './../assets/background-music/music.mp3'

function Music(){
    const [playSound , setPlaySound] = useState(true)
    const them = useSelector((state) => state.toggle.them)
    const audio = useRef()
    useEffect(()=>{
        playSound ? audio.current.play() : audio.current.pause()
    } ,[playSound])
    return(
        <>
            <div onClick={()=>setPlaySound(!playSound)} className={` cursor-pointer animate__animated animate__fadeInUp animate__slow flex absolute self-end right-0 bottom-5 2xl:mr-24 lg:mr-16 xl:mr-20 mr-5 md:mr-12 ${playSound && 'music-icon'}`}>
                <span className={`bg-${them.mainTxtColor} block w-1 rounded-t-xl duration-700 h-8 span origin-bottom`}></span>
                <span className={`bg-${them.mainTxtColor} block w-1 rounded-t-xl duration-700 h-8 span origin-bottom mx-0.5`}></span>
                <span className={`bg-${them.mainTxtColor} block w-1 rounded-t-xl duration-700 h-8 span origin-bottom`}></span>
                <span className={`bg-${them.mainTxtColor} block w-1 rounded-t-xl duration-700 h-8 span origin-bottom mx-0.5`}></span>
                <span className={`bg-${them.mainTxtColor} block w-1 rounded-t-xl duration-700 h-8 span origin-bottom`}></span>
                <span className={`bg-${them.mainTxtColor} block w-1 rounded-t-xl duration-700 h-8 span origin-bottom mx-0.5`}></span>
                <span className={`bg-${them.mainTxtColor} block w-1 rounded-t-xl duration-700 h-8 span origin-bottom`}></span>
            </div>
            <audio ref={audio} autoplay>
                <source src={music} type="audio/mpeg" />
            </audio>
        </>
    )
}
export default Music