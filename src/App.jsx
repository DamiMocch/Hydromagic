import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Nosotros from "./components/Nosotros";
import Espacios from "./components/Espacios";
import Productos from "./components/Productos";
import Testimoniales from "./components/Testimoniales";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* NOSOTROS */}
      <Nosotros />

      {/* ESPACIOS */}
      <Espacios />

      {/* PRODUCTOS */}
      <Productos />

      {/* TESTIMONIALES */}
      <Testimoniales />

      {/* FOOTER*/}
      <Footer />
    </div>
  );
}
