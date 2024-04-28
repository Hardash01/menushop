import { bebidasFrias } from "../constants"

export function Menu () {

  return(
    <>
      <p className="text-center text-[#e4c590] uppercase">menu de</p>
      <h2 className="text-white text-center text-2xl uppercase pb-3 tracking-widest">Bebidas</h2>
      <img className="w-full h-[200px] object-cover pb-3" src="./img/bebidas.webp" alt="image de bebidas" />
      <ul className="space-y-5 px-3 w-full mx-auto mb-10">
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