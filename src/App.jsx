import { About } from "./pages/About";
import { Footer } from "./pages/Footer";
import { Hero } from "./pages/Hero";
import { Offers } from "./pages/Offers";
import { Products } from "./pages/Products";
import { Review } from "./pages/Review";
import { Services } from "./pages/Services";
import { Navbar } from "./pages/navbar";

export default function App() {
  return (
    <main className="relative">
      <Navbar />
      <section className="xl:padding-l wide:padding-r padding-b sm:px-12 sm:py-12">
        <Hero />
      </section>
      <section className="xl:padding-l wide:padding-r padding-b sm:px-12 sm:py-12">
        <Products />
      </section>
      <section className="xl:padding-l wide:padding-r padding-b sm:px-12 sm:py-12">
        <About />
      </section>
      <section className="xl:padding-l wide:padding-r padding-b sm:px-12 sm:py-12">
        <Services />
      </section>
      <section className="xl:padding-l wide:padding-r padding-b sm:px-12 sm:py-12">
        <Offers />
      </section>
      <section className="xl:padding-l wide:padding-r padding-b sm:px-12 sm:py-12 bg-slate-100">
        <Review />
      </section>
      <section className="xl:padding-l px-6 py-12 wide:padding-r padding-b bg-black">
        <Footer />
      </section>
    </main>
  );
}
