import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Paintings from "./components/Paintings";
import Books from "./components/Books";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Store from "./components/Store";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Paintings />
      <Books />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

function StorePage() {
  return <Store />;
}

function App() {
  return (
    <div className="min-h-screen bg-[#F8F4EA]">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<StorePage />} />
      </Routes>
    </div>
  );
}

export default App;
