import { useState, lazy, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { FaClipboardList, FaClone, FaEnvelope, FaHome, FaMoon, FaSun, FaUser } from 'react-icons/fa'
import { toggleLang, toggleMode } from './../store/slice/toggleSlice'

const Music = lazy(() => import('./Music'))

function Navbar({ onNavToggle }) {
  const [showNav, setShowNav] = useState(false)
  const them = useSelector((state) => state.toggle.them)
  const lang = useSelector((state) => state.toggle.lang)
  const dispatch = useDispatch()
  const isDark = them.name === 'dark'

  useEffect(() => {
    onNavToggle(showNav)
  }, [showNav])

  const closeNav = () => setShowNav(false)

  return (
    <nav className="flex justify-between md:justify-end z-10">
      {/* همبرگر موبایل */}
      <button
        onClick={() => setShowNav(!showNav)}
        className="md:hidden flex flex-col justify-between h-4 mt-7 ml-5 z-10 cursor-pointer"
        aria-label="Toggle navigation"
      >
        <span
          style={{ borderColor: them.mainTxt }}
          className={`${showNav ? 'rotate-45 translate-y-2' : ''} border w-10 h-0 transition-transform duration-300`}
        />
        <span
          style={{ borderColor: them.mainTxt }}
          className={`${showNav ? '-rotate-45' : ''} border w-10 h-0 transition-transform duration-300`}
        />
      </button>

      {/* منوی ناوبری */}
      <div
        style={{
          backgroundColor: showNav ? `${them.mainBg}b3` : 'transparent',
          borderColor: them.subBorder,
        }}
        className={`
          ${!showNav ? 'hidden' : ''}
          flex h-screen w-full md:border-l
          md:flex md:mt-28 md:right-0 absolute md:w-1/6
          flex-col justify-around py-52 md:p-5 md:h-4/6
          items-center md:bg-transparent
        `}
      >
        {[
          { to: '/', icon: <FaHome className="text-4xl" />, label: 'Home' },
          { to: '/aboutme', icon: <FaUser className="text-4xl" />, label: 'About' },
          { to: '/skills', icon: <FaClipboardList className="text-4xl" />, label: 'Skills' },
          { to: '/portfolio', icon: <FaClone className="text-4xl" />, label: 'Portfolio' },
          { to: '/contact', icon: <FaEnvelope className="text-4xl" />, label: 'Contact' },
        ].map(({ to, icon, label }) => (
          <Link key={to} to={to} aria-label={label} onClick={closeNav} style={{ color: them.mainTxt }}>
            {icon}
          </Link>
        ))}
      </div>

      {/* موزیک — فقط وقتی منو باز باشه یا دسکتاپ */}
      {(showNav || window.innerWidth > 768) && <Music />}

      {/* تغییر زبان و تم */}
      <span className="mt-4 flex flex-col items-center mr-5 md:mr-10 lg:mr-16 2xl:mr-20">
        <button
          onClick={() => dispatch(toggleLang(lang === 'EN' ? 'FA' : 'EN'))}
          className="cursor-pointer text-2xl flex"
          aria-label="Toggle language"
        >
          <p style={{ color: lang !== 'EN' ? them.subTxt : them.mainTxt }} className="mr-1">EN</p>
          <span>/</span>
          <p style={{ color: lang !== 'FA' ? them.subTxt : them.mainTxt }} className="ml-1">FA</p>
        </button>

        <button
          onClick={() => dispatch(toggleMode(isDark ? 'light' : 'dark'))}
          className="cursor-pointer items-center text-2xl flex mt-2"
          aria-label="Toggle theme"
        >
          <FaSun style={{ color: isDark ? them.subTxt : them.mainTxt }} className="mr-1" />
          <span>/</span>
          <FaMoon style={{ color: !isDark ? them.subTxt : them.mainTxt }} className="ml-1" />
        </button>
      </span>
    </nav>
  )
}

export default Navbar
