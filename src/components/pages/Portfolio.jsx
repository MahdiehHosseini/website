//import images
import image from './../../assets/portfolio-images/image.jpg'
import { useSelector } from 'react-redux'

function Portfolio(){
    const them = useSelector((state) => state.toggle.them)
    const lang = useSelector((state) => state.toggle.lang)
    return(
        <div className='h-full md:mr-36 lg:mr-48 overflow-x-hidden'>
            <span className="flex justify-center mt-10">
                <h3 className={`text-4xl border-b animate__animated animate__fadeInDown animate__slow border-${them.mainTxtColor} p-3`}>{lang === 'EN' ? 'Portfolio' : 'نمونه کارها'}</h3>
            </span>
            <div className="mx-16 lg:mx-10 flex flex-col items-center">
                <div className='flex flex-col items-center w-full lg:flex-row lg:justify-around'>
                    <div className="my-14 relative md:flex md:self-start animate__animated animate__fadeInLeft animate__slow">
                        <img className=" h-48 rounded-2xl" src={image}></img>
                        <span className='flex justify-center'>
                            <p className={`text-xl md:text-2xl bg-${them.mainBgColor} py-1 px-3 md:left-32 absolute -bottom-4 rounded-lg`}>{lang === 'EN' ? 'Home' : 'خانه'}</p>
                        </span>
                    </div>
                    <div className="relative md:self-end md:flex lg:self-center animate__animated animate__fadeInRight animate__slow">
                        <img className=" h-48 rounded-2xl" src={image}></img>
                        <span className='flex justify-center'>
                            <p className={`text-xl md:text-2xl bg-${them.mainBgColor} py-1 px-3 md:left-32  absolute -bottom-4 rounded-lg`}>{lang === 'EN' ? 'Home' : 'خانه'}</p>
                        </span>
                    </div>
                </div>
                <div className={`my-14 relative md:self-start md:flex lg:self-center animate__animated animate__slow ${ window.innerWidth > 1024 ? 'animate__fadeInUp' : 'animate__fadeInLeft'}`}>
                    <img className=" h-48 rounded-2xl" src={image}></img>
                    <span className='flex justify-center'>
                        <p className={`text-xl md:text-2xl bg-${them.mainBgColor} py-1 px-3 absolute md:left-32  -bottom-4 rounded-lg`}>{lang === 'EN' ? 'Home' : 'خانه'}</p>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Portfolio