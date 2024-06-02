import { Hero } from "./pages/Hero"
import { Products } from "./pages/Products"
import { Navbar } from "./pages/navbar"

export default function App() {
  return (
   <div className="container w-[100vw]  bg-[#ffffff]">
    <Navbar/>
    <section className='xl:padding-l px-12 py-12 wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='xl:padding-l px-12 py-12 wide:padding-r padding-b'>
        <Products />
      </section>
   </div>
  )
}