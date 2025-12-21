import { useState, useEffect, useRef } from "react";

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
  const [isMobile, setIsMobile] = useState(false);
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  const startX = useRef(0);

  /* ===== DETECTAR MOBILE ===== */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* ===== SWIPE MOBILE (1 POR 1) ===== */
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    const total = testimonios.length;

    if (Math.abs(diff) < 40) return;

    if (diff > 0) {
      setPaginaActiva((prev) => (prev + 1) % total);
    } else {
      setPaginaActiva((prev) => (prev - 1 + total) % total);
    }

    setShowSwipeHint(false);
  };

  return (
    <section
      id="TESTIMONIALES"
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="overflow-hidden">

        {/* Gradientes */}
        <div className="absolute top-0 w-full h-[299px] bg-gradient-to-b from-black to-transparent z-10" />
        <div className="absolute bottom-0 w-full h-[348px] bg-gradient-to-t from-black to-transparent z-10" />

        <div className="relative z-20">

          {/* HEADER */}
          <div className="flex flex-col items-center text-center pt-24 md:pt-32">
            <img
              src={titulo}
              alt="Título"
              className="mb-8 w-[289px] h-[27px] md:w-auto md:h-auto"
            />
            <h1 className="max-w-[476px] font-bold text-white capitalize text-[24px] leading-[32px] md:text-[35px] md:leading-[45px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h1>
          </div>

          {/* ===== SLIDER ===== */}
          <div
            className="relative mt-20 mb-16 md:mt-28 md:mb-0 flex justify-center overflow-hidden"
            onTouchStart={isMobile ? onTouchStart : undefined}
            onTouchEnd={isMobile ? onTouchEnd : undefined}
          >
            {/* INDICADOR SWIPE */}
            {isMobile && showSwipeHint && (
              <div className="swipe-indicator">
                <div className="swipe-pill">
                  <span className="arrow left" />
                  <span className="hand" />
                  <span className="arrow right" />
                </div>
              </div>
            )}

            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: isMobile
                  ? `translateX(-${paginaActiva * 100}%)`
                  : `translateX(${(CENTER_INDEX - paginaActiva) * CARD_WIDTH}px)`
              }}
            >
              {testimonios.map((item, index) => {
                const isActive = index === paginaActiva;

                return (
                  <div
                    key={item.id}
                    className="min-w-full md:min-w-[unset] shrink-0 flex justify-center"
                  >
                    {/* TARJETA ORIGINAL — SIN MODIFICAR */}
                    <div
                      className={`
                        relative shrink-0
                        w-[320px] h-[300px] mx-[16px]
                        md:w-[684px] md:h-[357px] md:mx-[38px]
                        rounded-[32px] md:rounded-[50px]
                        overflow-hidden transition-all duration-500
                        ${isActive
                          ? "bg-black opacity-100 scale-100 shadow-2xl"
                          : "bg-black/40 backdrop-blur-md opacity-60 scale-95"}
                      `}
                    >
                      <img
                        src={cliente}
                        className="absolute top-6 left-6 w-[56px] h-[56px] md:top-9 md:left-9 md:w-[81px] md:h-[81px]"
                      />
                      <img
                        src={comillas}
                        className="absolute top-7 right-6 w-[48px] md:top-11 md:right-10 md:w-[75px]"
                      />

                      <p className="mt-[90px] px-[24px] italic text-white text-[16px] leading-[26px] md:mt-[130px] md:px-[40px] md:text-[22px] md:leading-[35px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                      </p>

                      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between md:bottom-10 md:left-[70px] md:right-[70px]">
                        <div>
                          <span className="block font-semibold text-white text-[16px] md:text-[22px]">
                            {item.nombre}
                          </span>
                          <span className="text-white text-[13px] md:text-[16px]">
                            {item.rol}
                          </span>
                        </div>

                        <div className="w-[3px] h-[32px] md:w-[4px] md:h-[40px] bg-[#34B5E5] rounded-[10px]" />

                        <div className="flex gap-1 md:gap-2 text-[#34B5E5] text-[16px] md:text-[22px]">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                      </div>

                      <img
                        src={rectangulo}
                        className={`absolute bottom-[-10px] right-[-30px] w-[120px] h-[120px] md:bottom-[-20px] md:right-[-60px] md:w-[200px] md:h-[200px] transition-all duration-500 ${
                          isActive ? "opacity-100" : "opacity-30 blur-sm"
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* PAGINACIÓN SOLO DESKTOP */}
          {!isMobile && (
            <div className="mt-16 md:mt-20 flex justify-center gap-3">
              {testimonios.map((_, i) => (
                <span
                  key={i}
                  onClick={() => setPaginaActiva(i)}
                  className={`cursor-pointer transition-all duration-300 rounded-[10px]
                    ${
                      paginaActiva === i
                        ? "w-[66px] h-[10px] bg-[#34B5E5]"
                        : "w-[41px] h-[7px] border border-white"
                    }
                  `}
                />
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
