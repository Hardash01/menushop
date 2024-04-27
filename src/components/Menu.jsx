import { bebidasFrias } from "../constants"

export function Menu () {

  return(
    <>
      <h2 className="text-white">esto es desde el menu</h2>
      <ul className="space-y-5 mx-3">
        {bebidasFrias.map(bebidafria => (
          <li key={bebidafria.id} className="flex gap-4">
            <div className="w-1/5 rounded-2xl">
              <img src={`./img/bebidas/${bebidafria.image}.webp`} alt={`imagen de ${bebidafria.name}`} className="rounded-2xl border border-white border-opacity-40" />
            </div>
            <div className="w-4/5 flex flex-col justify-center">
              <h3 className="text-white font-bold text-lg">{bebidafria.name}</h3>
              <p className="text-[#e4c590]">${bebidafria.price.toFixed(2)}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}