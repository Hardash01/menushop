import { snacks } from "../constants"

export function MenuSnacks () {

  return(
    <>
      <p className="text-center text-[#e4c590] uppercase">menu de</p>
      <h2 className="text-white text-center text-2xl uppercase pb-3 tracking-widest">Snacks y Golosinas</h2>
      <img className="w-full h-[200px] object-cover pb-3" src="./img/snac.webp" alt="image de snac" />
      <ul className="space-y-5 px-3 w-full mx-auto mb-10">
        {snacks.map(snack => (
          <li key={snack.id} className="flex gap-4">
            <div className="w-full flex items-end justify-between">
              <h3 className="text-white font-bold text-lg flex ">{snack.name}</h3>
              <hr className="border-gray-300 mx-2 flex-grow pb-1.5" />
              <p className="text-[#e4c590]">${snack.price.toFixed(2)}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}