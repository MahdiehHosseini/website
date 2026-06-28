import { FaMapMarkerAlt } from 'react-icons/fa'
import { useSelector } from 'react-redux'

function AboutMe() {
  const them = useSelector((state) => state.toggle.them)
  const lang = useSelector((state) => state.toggle.lang)
  const isFA = lang === 'FA'

  return (
    <div className="md:mr-36 lg:mr-48 h-full overflow-x-hidden">
      <span className="flex justify-center mt-10">
        <h3
          style={{ borderColor: them.mainTxt }}
          className="animate__animated animate__fadeInDown animate__slow text-3xl md:text-4xl border-b p-3"
        >
          {isFA ? 'درباره من' : 'About Me'}
        </h3>
      </span>

      <div
        className={`ml-5 animate__animated animate__slow my-16 md:ml-20 ${
          isFA ? 'animate__fadeInRight float-right mr-7 md:mr-20 xl:mr-32' : 'animate__fadeInLeft'
        }`}
      >
        <h1 className="text-xl md:text-2xl">{isFA ? 'علیرضا گنجی' : 'Alireza Ganji'}</h1>
        <span style={{ color: them.subTxt }} className="flex items-center md:text-xl text-lg mt-1">
          <FaMapMarkerAlt className={`${isFA ? 'order-1 mr-0 ml-2' : 'mr-2'}`} />
          <p>{isFA ? 'اصفهان ، ایران' : 'Esfahan, Iran'}</p>
        </span>
      </div>

      <div
        className={`${isFA ? 'mt-48' : ''} text-center md:flex md:justify-around md:mx-16 xl:mx-48 animate__animated animate__fadeInUp animate__slow`}
      >
        <p className="text-xl md:text-2xl">{isFA ? 'برنامه‌نویس بک‌اند' : 'Back-end Developer'}</p>
        <p className="text-xl my-3 md:text-2xl md:mt-14 lg:mt-0">{isFA ? 'با ۳ سال تجربه' : '3 Years Experience'}</p>
      </div>
    </div>
  )
}

export default AboutMe
