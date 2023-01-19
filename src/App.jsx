//import animation
import 'animate.css'
//import pakages
import { lazy,Suspense,useState } from 'react'
import {BrowserRouter,Routes,Route,} from "react-router-dom"
import { useSelector } from 'react-redux'
//import components
const HomePage = lazy(() => import('./components/pages/HomePage'))
const AboutMe = lazy(() => import('./components/pages/AboutMe'))
const Skills = lazy(() => import('./components/pages/Skills'))
const Portfolio = lazy(() => import('./components/pages/Portfolio'))
const Contact = lazy(() => import('./components/pages/Contact'))
const Navbar = lazy(() => import('./components/Navbar'))

function App() {
  const them = useSelector((state) => state.toggle.them)
  const lang = useSelector((state) => state.toggle.lang)
  const [viablity , setViablity] = useState(false)
  const navVisablity = (viablity)=>{
    setViablity(viablity)
  }
  return (
    <div className={`font-${lang === 'EN' ? 'convergence' : 'vazir text-right'} ${viablity && 'overflow-hidden'} h-screen relative flex flex-col bg-${them.mainBgColor} text-${them.mainTxtColor}`}>
      <Suspense fallback={<></>}>
        <BrowserRouter>
          <Navbar navVisablity={navVisablity} />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/aboutme' element={<AboutMe />} />
            <Route path='/skills' element={<Skills data={[{Title: '1', Percent: 96},{Title: '2', Percent: 50},{Title: '3', Percent: 96},{Title: '4', Percent: 50},{Title: '5', Percent: 96},{Title: '6', Percent: 50}]} />} />
            <Route path='/portfolio' element={<Portfolio data={[{Title: 'home', ImageName: '/src/assets/portfolio-images/image.jpg', Address: '#'},{Title: 'home', ImageName: '/src/assets/portfolio-images/image.jpg', Address: '#'},{Title: 'home', ImageName: '/src/assets/portfolio-images/image.jpg', Address: '#'}]}/>} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
      {/*classes*/}
      <span className='hidden font-convergence font-vazir bg-black text-neutral-400 text-neutral-600 bg-white bg-light-black bg-light-black/70 bg-white/70 text-white text-black border-black border-neutral-400 placeholder:text-neutral-400 border-neutral-600 placeholder:text-neutral-600 bg-neutral-800 bg-neutral-200 border-white w-[50%]'></span>
    </div>
  )
}

export default App
