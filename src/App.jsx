import Navbar from "./components/Navbar";
import About from "./sections/About";
import Gallery from "./sections/Gallery";
import Hero from "./sections/Hero";
import Services from "./sections/Services";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
      </main>
    </>
  );
}

export default App;
