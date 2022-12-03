//import pakages
import { useSelector } from 'react-redux'

function SKills(){
    const them = useSelector((state) => state.toggle.them)
    const lang = useSelector((state) => state.toggle.lang)
    return(
        <div className="md:mr-36 lg:mr-48 lg:reletive h-full overflow-x-hidden">
            <span className="flex justify-center my-10">
                <h3 className={`text-3xl md:text-4xl border-b animate__animated animate__fadeInDown animate__slow border-${them.mainTxtColor} p-3`}>{lang === 'EN' ? 'Skills' : 'مهارت ها'}</h3>
            </span>
            <div className={`mx-5 flex flex-col items-center ${lang === 'FA' && 'text-left'}`}>
                <div className=" w-full items-center flex flex-col md:flex-row md:mx-10 lg:justify-around">
                    <span className="w-4/5 md:w-3/6 lg:w-2/6 xl:w-1/4 md:mx-10 inline-block animate__animated animate__fadeInLeft animate__slow">
                        <label className="text-xl md:text-2xl">C#</label>
                        <div className={`rounded-full lg:h-1 h-0.5 bg-${them.subBorderColor} mt-2`}>
                            <div className={`bg-${them.mainTxtColor} h-full rounded-full w-95`}></div>
                        </div>
                    </span>
                    <span className="w-4/5 md:w-3/6 lg:w-2/6 md:mx-10 xl:w-1/4 inline-block my-8 animate__animated animate__fadeInRight animate__slow">
                        <label className="text-xl md:text-2xl">asp.net</label>
                        <div className={`rounded-full lg:h-1 h-0.5 bg-${them.subBorderColor} mt-2`}>
                            <div className={`bg-${them.mainTxtColor} h-full rounded-full w-90`}></div>
                        </div>
                    </span>
                </div>
                <div className=" w-full items-center flex flex-col md:flex-row md:mx-10 lg:absolute lg:flex-col lg:top-80 lg:mt-12">
                    <span className={`w-4/5 md:w-3/6 lg:w-2/6 md:mx-10 xl:w-1/4 inline-block animate__animated animate__slow ${ window.innerWidth > 1024 ? 'animate__fadeInUp' : 'animate__fadeInLeft'}`}>
                        <label className="text-xl md:text-2xl">javascript</label>
                        <div className={`rounded-full lg:h-1 h-0.5 bg-${them.subBorderColor} mt-2`}>
                            <div className={`bg-${them.mainTxtColor} h-full rounded-full w-45`}></div>
                        </div>
                    </span>
                    <span className={`w-4/5 md:w-3/6 lg:w-2/6 md:mx-10 xl:w-1/4 inline-block my-8 lg:mt-32 animate__animated animate__slow ${ window.innerWidth > 1024 ? 'animate__fadeInUp' : 'animate__fadeInRight'}`}>
                        <label className="text-xl md:text-2xl">Html</label>
                        <div className={`rounded-full lg:h-1 h-0.5 bg-${them.subBorderColor} mt-2`}>
                            <div className={`bg-${them.mainTxtColor} h-full rounded-full w-98`}></div>
                        </div>
                    </span>
                </div>
                <div className=" w-full items-center flex flex-col md:flex-row md:mx-10 lg:mt-20 lg:justify-around">
                    <span className="w-4/5 md:w-3/6 lg:w-2/6 md:mx-10 xl:w-1/4 inline-block animate__animated animate__fadeInLeft animate__slow">
                        <label className="text-xl md:text-2xl">Css</label>
                        <div className={`rounded-full lg:h-1 h-0.5 bg-${them.subBorderColor} mt-2`}>
                            <div className={`bg-${them.mainTxtColor} h-full rounded-full w-4/5`}></div>
                        </div>
                    </span>
                    <span className="w-4/5 md:w-3/6 lg:w-2/6 md:mx-10 xl:w-1/4 inline-block my-8 animate__animated animate__fadeInRight animate__slow">
                        <label className="text-xl md:text-2xl">Signal R</label>
                        <div className={`rounded-full lg:h-1 h-0.5 bg-${them.subBorderColor} mt-2`}>
                            <div className={`bg-${them.mainTxtColor} h-full rounded-full w-full`}></div>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default SKills