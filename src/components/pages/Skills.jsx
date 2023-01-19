//import pakages
import { useSelector } from 'react-redux'

function SKills({data}){
    const them = useSelector((state) => state.toggle.them)
    const lang = useSelector((state) => state.toggle.lang)
    const content = []
    for(let i = 0 ; Math.ceil(data.length / 2) > i ; i++){
        const number = data.indexOf(data[2*i])
        content.push(<div className={`w-full items-center flex flex-col md:flex-row md:mx-10 ${ Math.ceil(data.length / 2) % 2 === 0 ? 'lg:absolute lg:flex-col lg:top-80 lg:mt-12' : 'lg:justify-around'}`}>
            {i%2 === 0 ? <>
                    <span className={`w-4/5 md:w-3/6 lg:w-2/6 xl:w-1/4 md:mx-10 inline-block animate__animated animate__slow ${(number % 3 === 0) ? 'animate__fadeInLeft' : (number % 3 === 1) ? 'animate__fadeInRight' : (window.innerWidth > 1024 ) ? 'animate__fadeInUp' : 'animate__fadeInLeft'}`}>
                        <label className="text-xl md:text-2xl">{data[number].Title}</label>
                        <div className={`rounded-full lg:h-1 h-0.5 bg-${them.subBorderColor} mt-2`}>
                            <div className={`bg-${them.mainTxtColor} h-full rounded-full w-[${data[number].Percent}%]`}></div>
                        </div>
                    </span>
                    {data[number+2] && <span className={`w-4/5 md:w-3/6 lg:w-2/6 xl:w-1/4 md:mx-10 inline-block animate__animated  animate__slow my-8 ${(number+2 % 3 === 0) && (window.innerWidth > 1024 ) ? 'animate__fadeInUp' : 'animate__fadeInLeft'} ${(number+2 % 3 === 1) ? 'animate__fadeInLeft' : 'animate__fadeInRight'}`}>
                        <label className="text-xl md:text-2xl">{data[number+2].Title}</label>
                        <div className={`rounded-full lg:h-1 h-0.5 bg-${them.subBorderColor} mt-2`}>
                            <div className={`bg-${them.mainTxtColor} h-full rounded-full w-[${data[number+2].Percent}%]`}></div>
                        </div>
                    </span>}
            </> : <>
                    <span className={`w-4/5 md:w-3/6 lg:w-2/6 xl:w-1/4 md:mx-10 inline-block animate__animated animate__slow ${(number-1 % 3 === 0) ? 'animate__fadeInLeft' : (number-1 % 3 === 1) ? 'animate__fadeInRight' : (window.innerWidth > 1024 ) ? 'animate__fadeInUp' : 'animate__fadeInLeft'}`}>
                        <label className="text-xl md:text-2xl">{data[number-1].Title}</label>
                        <div className={`rounded-full lg:h-1 h-0.5 bg-${them.subBorderColor} mt-2`}>
                            <div className={`bg-${them.mainTxtColor} h-full rounded-full w-[${data[number-1].Percent}%]`}></div>
                        </div>
                    </span>
                    {data[number+1] && <span className={`w-4/5 md:w-3/6 lg:w-2/6 xl:w-1/4 md:mx-10 inline-block animate__animated  animate__slow my-8 ${(number+1 % 3 === 0) && (window.innerWidth > 1024 ) ? 'animate__fadeInUp' : 'animate__fadeInLeft'} ${(number+1 % 3 === 1) ? 'animate__fadeInLeft' : 'animate__fadeInRight'}`}>
                        <label className="text-xl md:text-2xl">{data[number+1].Title}</label>
                        <div className={`rounded-full lg:h-1 h-0.5 bg-${them.subBorderColor} mt-2`}>
                            <div className={`bg-${them.mainTxtColor} h-full rounded-full w-[${data[number+1].Percent}%]`}></div>
                        </div>
                    </span>}
            </>}
        </div>)
    }
    return(
        <div className="md:mr-36 lg:mr-48 lg:reletive h-full overflow-x-hidden">
            <span className="flex justify-center my-10">
                <h3 className={`text-3xl md:text-4xl border-b animate__animated animate__fadeInDown animate__slow border-${them.mainTxtColor} p-3`}>{lang === 'EN' ? 'Skills' : 'مهارت ها'}</h3>
            </span>
            <div className={`mx-5 flex flex-col items-center ${lang === 'FA' && 'text-left'}`}>
                {content}
            </div>
        </div>
    )
}
export default SKills