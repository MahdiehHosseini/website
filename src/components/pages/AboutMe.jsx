//import pakages
import { useSelector } from 'react-redux'

function AboutMe(){
    const them = useSelector((state) => state.toggle.them)
    const lang = useSelector((state) => state.toggle.lang)
    return(
        <div className="md:mr-36 lg:mr-48 h-full overflow-x-hidden">
            <span className="flex justify-center mt-10">
                <h3 className={`animate__animated animate__fadeInDown animate__slow text-3xl  md:text-4xl border-b border-${them.mainTxtColor} p-3`}>{ lang === 'EN' ? 'About me' : 'درباره من'}</h3>
            </span>
            <div className={`ml-5 animate__animated animate__fadeInLeft animate__slow my-16 md:ml-20 ${lang === 'FA' && 'animate__fadeInRight float-right mr-7 md:mr-20 xl:mr-32'}`}>
                <h1 className="text-xl md:text-2xl">{lang === 'EN' ? 'Alireza Ganji' : 'علیرضا گنجی'}</h1>
               <span className={`flex items-center text-${them.subTxtColor} md:text-xl text-lg mt-1`}>
                    <i className={`fa fa-map-marker-alt mr-2 ${lang === 'FA' && 'order-1 mr-0 ml-2'}`}></i>
                    <p>{lang === 'EN' ? 'Esfehan , Iran' : 'اصفهان ، ایران'}</p>
               </span>
            </div>
            <div className={`${lang === 'FA' && ' mt-48'} text-center md:flex md:justify-around md:mx-16 xl:mx-48 animate__animated animate__fadeInUp animate__slow`}>
                <p className="text-xl md:text-2xl">{lang === 'EN' ? 'back-end developer' : 'برنامه نویس بک اند'}</p>
                <p className="text-xl my-3 md:text-2xl md:mt-14 lg:mt-0">{lang === 'EN' ? '3 years experience' : 'با 3 سال تجربه'}</p>
            </div>
        </div>
    )
}
export default AboutMe