import 'animate.css'
import { lazy, Suspense, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

const HomePage = lazy(() => import('./components/pages/HomePage'))
const AboutMe = lazy(() => import('./components/pages/AboutMe'))
const Skills = lazy(() => import('./components/pages/Skills'))
const Portfolio = lazy(() => import('./components/pages/Portfolio'))
const Contact = lazy(() => import('./components/pages/Contact'))
const Navbar = lazy(() => import('./components/Navbar'))

function App() {
  const them = useSelector((state) => state.toggle.them)
  const lang = useSelector((state) => state.toggle.lang)
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div
      style={{ backgroundColor: them.mainBg, color: them.mainTxt }}
      className={`${lang === 'FA' ? 'font-vazir text-right' : 'font-convergence'} ${navOpen ? 'overflow-hidden' : ''} h-screen relative flex flex-col`}
    >
      <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
        <BrowserRouter>
          <Navbar onNavToggle={setNavOpen} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route
              path="/skills"
              element={
                <Skills
                  data={[
                    { title: '.Net', percent: 96 },
                    { title: 'C#', percent: 50 },
                    { title: 'Database', percent: 96 },
                    { title: 'SQL', percent: 50 },
                    { title: 'Golang', percent: 96 },
                    { title: 'PHP', percent: 50 },
                  ]}
                />
              }
            />
            <Route
              path="/portfolio"
              element={
                <Portfolio
                  data={[
                    { title: 'Home', imageName: '/src/assets/portfolio-images/image.jpg', address: '#' },
                    { title: 'Home', imageName: '/src/assets/portfolio-images/image.jpg', address: '#' },
                    { title: 'Home', imageName: '/src/assets/portfolio-images/image.jpg', address: '#' },
                  ]}
                />
              }
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  )
}

export default App
