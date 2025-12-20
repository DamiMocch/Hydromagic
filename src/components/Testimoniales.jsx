import { useState, useEffect } from "react";

import titulo from "../assets/img/Titulo_testimoniales.png";
import fondo from "../assets/img/Testimoniales.png";
import rectangulo from "../assets/img/Rectangulo_testimoniales.png";
import comillas from "../assets/img/comillas.png";
import cliente from "../assets/img/cliente_testimoniales.png";

const testimonios = [
  { id: 1, nombre: "Michelle Rodriguez", rol: "Founder" },
  { id: 2, nombre: "Michelle Rodriguez", rol: "Founder" },
  { id: 3, nombre: "Michelle Rodriguez", rol: "Founder" },
  { id: 4, nombre: "Michelle Rodriguez", rol: "Founder" },
  { id: 5, nombre: "Michelle Rodriguez", rol: "Founder" },
];

export default function Testimoniales() {
  const CARD_WIDTH = 760;
  const CENTER_INDEX = Math.floor(testimonios.length / 2);

  const [paginaActiva, setPaginaActiva] = useState(CENTER_INDEX);

  useEffect(() => {
    const interval = setInterval(() => {
      setPaginaActiva((prev) => (prev + 1) % testimonios.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="TESTIMONIALES" className="relative bg-cover bg-center" style={{ backgroundImage: `url(${fondo})` }}>
      <div className="overflow-hidden">

        {/* Gradientes */}
        <div className="absolute top-0 w-full h-[299px] bg-gradient-to-b from-black to-transparent z-10" />
        <div className="absolute bottom-0 w-full h-[348px] bg-gradient-to-t from-black to-transparent z-10" />

        <div className="relative z-20">

          {/* Header */}
          <div className="flex flex-col items-center text-center pt-32">
            <img src={titulo} alt="Título" className="mb-8" />
            <h1 className="max-w-[476px] font-bold text-[35px] leading-[45px] text-white capitalize">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h1>
          </div>

          {/* Slider */}
          <div className="mt-28 flex justify-center overflow-hidden">
            <div className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(${(CENTER_INDEX - paginaActiva) * CARD_WIDTH}px)` }}>

              {testimonios.map((item, index) => {
                const isActive = index === paginaActiva;
                return (
                  <div key={item.id} className={`relative shrink-0 w-[684px] h-[357px] mx-[38px] rounded-[50px] overflow-hidden transition-all duration-500
                    ${isActive ? "bg-black opacity-100 scale-100 shadow-2xl" : "bg-black/40 backdrop-blur-md opacity-60 scale-95"}`}>
                    <img src={cliente} alt="Cliente" className="absolute top-9 left-9 w-[81px] h-[81px]" />
                    <img src={comillas} alt="Comillas" className="absolute top-11 right-10 w-[75px]" />
                    <p className="mt-[130px] pl-[40px] pr-[70px] italic text-[22px] leading-[35px] text-white text-left">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <div className="absolute bottom-10 left-[70px] right-[70px] flex items-center justify-between">
                      <div>
                        <span className="block font-semibold text-[22px] text-white">{item.nombre}</span>
                        <span className="text-[16px] text-white">{item.rol}</span>
                      </div>

                      <div className="w-[4px] h-[40px] rounded-[10px] bg-[#34B5E5]" />

                      <div className="flex gap-2 text-[#34B5E5] text-[22px]">
                        {[...Array(5)].map((_, i) => (<span key={i}>★</span>))}
                      </div>
                    </div>

                    <img src={rectangulo} alt="Decoración" className={`absolute bottom-[-20px] right-[-60px] w-[200px] h-[200px] transition-all duration-500 ${isActive ? "opacity-100" : "opacity-30 blur-sm"}`} />
                  </div>
                );
              })}

            </div>
          </div>

          {/* Paginación */}
          <div className="mt-20 flex justify-center gap-3">
            {testimonios.map((_, i) => (
              <span key={i} onClick={() => setPaginaActiva(i)}
                className={`cursor-pointer transition-all duration-300 rounded-[10px]
                  ${paginaActiva === i ? "w-[66px] h-[10px] bg-[#34B5E5]" : "w-[41px] h-[7px] border border-white"}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
