import { Menu } from "./components/Menu"
import { MenuAseo } from "./components/MenuAseo"
import { MenuSnacks } from "./components/MenuSnacks"

function App() {

  return (
    <>
      <section className="[background-image:linear-gradient(to_right,rgb(0_0_0/.8),rgb(0_0_0/.2)),url(/img/pupas.webp)] h-screen grid items-center md:bg-cover bg-bottom md:p-0 mb-10">
        <h1 className="text-6xl font-bold text-white text-center inline-block">Tienda Panda&Muñeca</h1>
      </section>
      <Menu />
      <MenuSnacks />
      <MenuAseo />
    </>
  )
}

export default App
