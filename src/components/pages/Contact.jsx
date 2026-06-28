import { FaTelegram, FaWhatsapp } from 'react-icons/fa'
import { useSelector } from 'react-redux'

function Contact() {
  const them = useSelector((state) => state.toggle.them)
  const lang = useSelector((state) => state.toggle.lang)

  const inputClass = `bg-transparent py-1 focus:outline-none border-b w-4/6 ${lang === 'FA' ? 'text-right' : ''}`

  return (
    <div className="md:mr-36 h-full overflow-x-hidden">
      <span className="flex justify-center my-10">
        <h3
          style={{ borderColor: them.mainTxt }}
          className="text-3xl md:text-4xl animate__animated animate__fadeInDown animate__slow border-b p-3"
        >
          {lang === 'EN' ? 'Contact' : 'تماس'}
        </h3>
      </span>

      <div className="flex flex-col items-center my-10 text-xl md:text-2xl animate__animated animate__fadeInUp animate__slow">
        <div className="flex items-center flex-col lg:flex-row lg:justify-around w-full">
          <input
            type="text"
            style={{ borderColor: them.subTxt, color: them.mainTxt }}
            className={`${inputClass} md:flex lg:w-1/4 md:ml-20 xl:w-1/5 md:w-3/6 md:self-start`}
            placeholder={lang === 'EN' ? 'name' : 'نام'}
          />
          <input
            type="email"
            style={{ borderColor: them.subTxt, color: them.mainTxt }}
            className={`${inputClass} my-7 md:flex lg:w-1/4 lg:mt-0 xl:w-1/5 md:mt-10 md:mr-20 md:w-3/6 md:self-end`}
            placeholder={lang === 'EN' ? 'email' : 'ایمیل'}
          />
        </div>
        <textarea
          rows="4"
          style={{ borderColor: them.subTxt, color: them.mainTxt }}
          className={`${inputClass} lg:w-2/4 md:mt-5 xl:w-2/6`}
          placeholder={lang === 'EN' ? 'message' : 'پیام'}
        />
        <button
          style={{ borderColor: them.mainTxt }}
          className="border-b py-0.5 px-1 my-10 lg:py-1 lg:px-2 cursor-pointer"
        >
          {lang === 'EN' ? 'Send' : 'ارسال'}
        </button>
      </div>

      <hr style={{ borderColor: them.subBorder }} className="mx-10 lg:mx-44 md:mx-32" />

      <footer className="flex flex-col items-center lg:flex-row lg:justify-around lg:mx-32 lg:mt-10 mb-5 animate__animated animate__fadeIn animate__delay-2s animate__slow">
        <a href="https://wa.me/989130934801" className="flex cursor-pointer flex-col items-center my-10">
          <FaWhatsapp className="text-3xl" />
          <p className="text-xl mt-4">+98 9000987801</p>
        </a>
        <a href="https://t.me/agan_developer" className="flex flex-col items-center cursor-pointer">
          <FaTelegram className="text-3xl" />
          <p className="text-xl mt-4">@agent_developer</p>
        </a>
      </footer>
    </div>
  )
}

export default Contact
