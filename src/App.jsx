import { About } from "./pages/About"
import { Hero } from "./pages/Hero"
import { Products } from "./pages/Products"
import { Navbar } from "./pages/navbar"

export default function App() {
  return (
   <main className="relative">
    <Navbar/>
    <section className="xl:padding-l wide:padding-r padding-b sm:px-12 sm:py-12">
        <Hero />
      </section>
      <section className='xl:padding-l px-12 py-12 wide:padding-r padding-b'>
        <Products />
      </section>
      <section className='xl:padding-l px-12 py-12 wide:padding-r padding-b'>
        <About />
      </section>
   </main>
  )
}