import { useSelector } from 'react-redux'

function Skills({ data }) {
  const them = useSelector((state) => state.toggle.them)
  const lang = useSelector((state) => state.toggle.lang)

  // جفت جفت کردن آیتم‌ها
  const pairs = []
  for (let i = 0; i < data.length; i += 2) {
    pairs.push([data[i], data[i + 1] || null])
  }

  const animations = ['animate__fadeInLeft', 'animate__fadeInRight', 'animate__fadeInUp']

  return (
    <div className="md:mr-36 lg:mr-48 h-full overflow-x-hidden">
      <span className="flex justify-center my-10">
        <h3
          style={{ borderColor: them.mainTxt }}
          className="text-3xl md:text-4xl border-b animate__animated animate__fadeInDown animate__slow p-3"
        >
          {lang === 'EN' ? 'Skills' : 'مهارت‌ها'}
        </h3>
      </span>

      <div className={`mx-5 flex flex-col items-center ${lang === 'FA' ? 'text-left' : ''}`}>
        {pairs.map((pair, pairIdx) => (
          <div key={pairIdx} className="w-full flex flex-col md:flex-row md:justify-around md:mx-10 mb-10">
            {pair.map((item, itemIdx) => {
              if (!item) return null
              const globalIdx = pairIdx * 2 + itemIdx
              const animation = animations[globalIdx % animations.length]
              return (
                <span
                  key={itemIdx}
                  className={`w-4/5 md:w-2/5 inline-block animate__animated animate__slow ${animation} ${itemIdx === 1 ? 'mt-8 md:mt-0' : ''}`}
                >
                  <label className="text-xl md:text-2xl">{item.title}</label>
                  <div
                    style={{ backgroundColor: them.subBorder }}
                    className="rounded-full h-1 mt-2"
                  >
                    <div
                      style={{
                        backgroundColor: them.mainTxt,
                        width: `${item.percent}%`,
                      }}
                      className="h-full rounded-full transition-all duration-700"
                    />
                  </div>
                </span>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
