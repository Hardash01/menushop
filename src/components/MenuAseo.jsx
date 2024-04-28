import { aseoPersonal } from "../constants"

export function MenuAseo () {

  return(
    <>
      <p className="text-center text-[#e4c590] uppercase">menu de</p>
      <h2 className="text-white text-center text-2xl uppercase pb-3 tracking-widest">Aseo Personal</h2>
      <img className="w-full h-[200px] object-cover pb-3" src="./img/aseo.webp" alt="image de aseo" />
      <ul className="space-y-5 px-3 w-full mx-auto mb-10">
        {aseoPersonal.map(aseoPersona => (
          <li key={aseoPersona.id} className="flex gap-4">
            <div className="w-full flex items-end justify-between">
              <h3 className="text-white font-bold text-lg flex ">{aseoPersona.name}</h3>
              <hr className="border-gray-300 mx-2 flex-grow pb-1.5" />
              <p className="text-[#e4c590]">${aseoPersona.price.toFixed(2)}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}