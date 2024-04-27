import { aseoPersonal } from "../constants"

export function MenuAseo () {

  return(
    <>
      <h2 className="text-white text-center text-2xl uppercase py-3">esto es desde el menu</h2>
      <ul className="space-y-5 px-3 w-full mx-auto">
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