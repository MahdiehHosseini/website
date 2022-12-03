//import pakages
import { useState,lazy,useEffect } from "react"
import { Link } from "react-router-dom"
import { useSelector,useDispatch } from 'react-redux'
//import components
const Music = lazy(() => import('./Music'))
//import store 
import {toggleLang, toggleMode} from './../store/slice/toggleSlice'

function Navbar({navVisablity}){
    const [showNav , setShowNav] = useState(false)
    const them = useSelector((state) => state.toggle.them)
    const lang = useSelector((state) => state.toggle.lang)
    const dispatch = useDispatch()
    useEffect(()=>{
        navVisablity(showNav)
    } , [showNav])
    return(
        <nav className="flex justify-between md:justify-end z-10">
            <span onClick={()=>setShowNav(!showNav)} className={`${showNav ? 'mt-5' : 'mt-7'} md:hidden flex flex-col justify-between h-4 text-xl mt-7 ml-5 z-10 cursor-pointer`}>
                <span className={`${showNav ? 'rotate-45 mt-3' : ''} border border-${them.mainTxtColor} w-10 h-0`}></span>
                <span className={`${showNav ? '-rotate-45' : ''} border border-${them.mainTxtColor} w-10 h-0`}></span>
            </span>
            <div className={`${!showNav && 'hidden'} flex h-screen w-full md:border-l border-${them.subBorderColor} md:flex md:mt-28 md:right-0 absolute md:w-1/6 flex-col justify-around md:bg-inherit py-52 md:p-5 md:h-4/6 items-center bg-${them.mainBgColor}/70`}>
                <Link to="/"><i onClick={()=>setShowNav(false)} className="fa fa-home text-4xl"></i></Link>
                <Link to="/aboutme"><i onClick={()=>setShowNav(false)} className="fa fa-user text-4xl"></i></Link>
                <Link to="/skills"><i onClick={()=>setShowNav(false)} className="fa fa-clipboard-list text-4xl"></i></Link>
                <Link to="/portfolio"><i onClick={()=>setShowNav(false)} className="fa fa-clone text-4xl"></i></Link>
                <Link to="/contact"><i onClick={()=>setShowNav(false)} className="fa fa-envelope text-4xl"></i></Link>
            </div>
            {showNav | window.innerWidth > 768 ? <Music /> : ''} 
            <span className="mt-4 flex flex-col items-center mr-5 md:mr-10 lg:mr-16 2xl:mr-20">
                <span onClick={()=> lang === 'EN' ? dispatch(toggleLang('FA')) : dispatch(toggleLang('EN'))} className=" cursor-pointer text-2xl flex"><p className={`mr-1 ${lang !== 'EN' && `text-${them.subTxtColor}` }`}>EN</p> / <p className={`ml-1 ${lang !== 'FA' && `text-${them.subTxtColor}` }`}>FA</p></span>
                <span onClick={()=> them.mainTxtColor === 'white' ? dispatch(toggleMode('light')) : dispatch(toggleMode('dark'))} className=" cursor-pointer items-center text-2xl flex mt-2"><i className={`fa fa-sun mr-1 ${them.mainTxtColor === 'white' && `text-${them.subTxtColor}`}`}></i> / <i className={`fa fa-moon ml-1 ${them.mainTxtColor === 'black' && `text-${them.subTxtColor}`}`}></i></span>
            </span>
        </nav>
    )
}
export default Navbar