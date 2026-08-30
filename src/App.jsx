import Navbar from "./components/Navbar";
import About from "./sections/About";
import BookingCTA from "./sections/BookingCTA";
import Footer from "./sections/Footer";
import Gallery from "./sections/Gallery";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Team from "./sections/Team";
import Testimonial from "./sections/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonial />
        <Team />
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
