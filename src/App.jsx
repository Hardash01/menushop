import { Menu } from "./components/Menu"
import { MenuAseo } from "./components/MenuAseo"
import { MenuSnacks } from "./components/MenuSnacks"

function App() {

  return (
    <>
      <h1 className="text-6xl font-bold text-white text-center inline-block">Tienda Panda&Muñeca</h1>
      <Menu />
      <MenuSnacks />
      <MenuAseo />
    </>
  )
}

export default App
