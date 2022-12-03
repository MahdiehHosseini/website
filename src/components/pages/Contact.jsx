//import pakages
import { useSelector } from 'react-redux'

function Contact(){
    const them = useSelector((state) => state.toggle.them)
    const lang = useSelector((state) => state.toggle.lang)
    return(
        <div className="md:mr-36 h-full overflow-x-hidden">
            <span className="flex justify-center my-10">
                <h3 className="text-3xl md:text-4xl animate__animated animate__fadeInDown animate__slow border-b border-black p-3">{lang === 'EN' ? 'Contact' : 'تماس'}</h3>
            </span>
            <form className="flex flex-col items-center my-10 text-xl md:text-2xl animate__animated animate__fadeInUp animate__slow">
                <div className="flex items-center flex-col lg:flex-row lg:justify-around w-full">
                    <input type='text' className={`bg-transparent py-1 md:flex lg:w-1/4 md:ml-20 xl:w-1/5 md:w-3/6 md:self-start focus:outline-none border-b w-4/6 border-${them.subTxtColor} placeholder:text-${them.subTxtColor} ${lang === 'FA' && 'text-right'}`} placeholder={lang === 'EN' ? 'name' : 'نام'}></input>
                    <input type='email' className={`bg-transparent my-7 md:flex lg:w-1/4 lg:mt-0 xl:w-1/5 md:mt-10 md:mr-20 md:w-3/6 md:self-end py-1 focus:outline-none border-b w-4/6 border-${them.subTxtColor} placeholder:text-${them.subTxtColor} ${lang === 'FA' && 'text-right'}`} placeholder={lang === 'EN' ? 'email' : 'ایمیل'}></input>
                </div>
                <textarea rows='4' className={`bg-transparent py-1 lg:w-2/4 focus:outline-none md:mt-5 xl:w-2/6 border-b w-4/6 border-${them.subTxtColor} placeholder:text-${them.subTxtColor} ${lang === 'FA' && 'text-right'}`} placeholder={lang === 'EN' ? 'message' : 'پیام'}></textarea>
                <button className={`lg:py-1 lg:px-2 border-b border-${them.mainTxtColor} py-0.5 px-1 my-10`} >{lang === 'EN' ? 'send' : 'ارسال'}</button>
            </form>
            <hr className={`mx-10 lg:mx-44 md:mx-32 border-${them.subBorderColor}`}></hr>
            <footer className="flex flex-col items-center lg:flex-row lg:justify-around lg:mx-32 lg:mt-10 mb-5 animate__animated animate__fadeIn animate__delay-2s animate__slow">
                <a href="https://wa.me/989130934801" className="flex cursor-pointer flex-col items-center my-10">
                    <i className=" text-3xl fa fa-whatsapp"></i>
                    <p className="text-xl mt-4">+98 9130934801</p>
                </a>
                <a href="https://t.me/agan_developer" className="flex flex-col items-center cursor-pointer">
                    <i className=" text-3xl fa fa-telegram"></i> 
                    <p className="text-xl mt-4">@agan_developer</p>
                </a>
            </footer>
        </div>
    )
}
export default Contact