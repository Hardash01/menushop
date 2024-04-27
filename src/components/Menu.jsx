import { bebidasFrias } from "../constants"

export function Menu () {

  return(
    <>
      <h2 className="text-white">esto es desde el menu</h2>
      <ul className="space-y-5 px-3 w-full mx-auto">
        {bebidasFrias.map(bebidafria => (
          <li key={bebidafria.id} className="flex gap-4">
            <div className="w-full flex items-end justify-between">
              <h3 className="text-white font-bold text-lg flex ">{bebidafria.name}</h3>
              <hr className="border-gray-300 mx-2 flex-grow pb-1.5" />
              <p className="text-[#e4c590]">${bebidafria.price.toFixed(2)}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}