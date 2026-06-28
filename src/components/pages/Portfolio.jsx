import { useSelector } from 'react-redux'

function Portfolio({ data }) {
  const them = useSelector((state) => state.toggle.them)
  const lang = useSelector((state) => state.toggle.lang)

  const pairs = []
  for (let i = 0; i < data.length; i += 2) {
    pairs.push([data[i], data[i + 1] || null])
  }

  return (
    <div className="h-full md:mr-36 lg:mr-48 overflow-x-hidden">
      <span className="flex justify-center mt-10">
        <h3
          style={{ borderColor: them.mainTxt }}
          className="text-4xl border-b animate__animated animate__fadeInDown animate__slow p-3"
        >
          {lang === 'EN' ? 'Sample Works' : 'نمونه کارها'}
        </h3>
      </span>

      <div className="mx-16 lg:mx-10 flex flex-col items-center">
        {pairs.map((pair, pairIdx) => (
          <div key={pairIdx} className="flex flex-col items-center w-full lg:flex-row lg:justify-around">
            {pair.map((item, itemIdx) => {
              if (!item) return null
              const isLeft = itemIdx === 0
              return (
                <a
                  key={itemIdx}
                  href={item.address}
                  className={`my-14 relative ${isLeft ? 'md:self-start' : 'md:self-end lg:self-center'} animate__animated animate__slow ${isLeft ? 'animate__fadeInLeft' : 'animate__fadeInRight'}`}
                >
                  <img className="h-48 rounded-2xl object-cover" src={item.imageName} alt={item.title} />
                  <span className="flex justify-center">
                    <p
                      style={{ backgroundColor: them.mainBg }}
                      className="text-xl md:text-2xl py-1 px-3 absolute -bottom-4 rounded-lg"
                    >
                      {item.title}
                    </p>
                  </span>
                </a>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
