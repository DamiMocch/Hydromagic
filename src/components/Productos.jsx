import { useState, useRef, useEffect } from "react";
import "../assets/css/Productos.css";

/* imports iguales */

const paginasExtendidas = [
  paginas[paginas.length - 1], // clon última
  ...paginas,
  paginas[0], // clon primera
];

export default function Productos() {
  const [paginaActiva, setPaginaActiva] = useState(1);
  const trackRef = useRef(null);
  const startX = useRef(0);
  const isDragging = useRef(false);

  /* ===== TOUCH ===== */
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchEnd = (e) => {
    if (!isDragging.current) return;

    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (diff > 50) {
      setPaginaActiva((prev) => prev + 1);
    } else if (diff < -50) {
      setPaginaActiva((prev) => prev - 1);
    }

    isDragging.current = false;
  };

  /* ===== LOOP SILENCIOSO ===== */
  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const handleTransitionEnd = () => {
      track.style.transition = "none";

      if (paginaActiva === 0) {
        setPaginaActiva(paginas.length);
      }

      if (paginaActiva === paginas.length + 1) {
        setPaginaActiva(1);
      }

      requestAnimationFrame(() => {
        track.style.transition = "transform 0.6s ease";
      });
    };

    track.addEventListener("transitionend", handleTransitionEnd);
    return () => track.removeEventListener("transitionend", handleTransitionEnd);
  }, [paginaActiva]);

  return (
    <section id="PRODUCTOS" className="productos-section">

      {/* HEADER Y FONDOS IGUALES */}

      <div
        className="productos-slider"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={trackRef}
          className="productos-track"
          style={{ transform: `translateX(-${paginaActiva * 100}%)` }}
        >
          {paginasExtendidas.map((pagina, index) => (
            <div key={index} className="productos-page">
              <div className="productos-grid">
                {pagina.map((img, i) => (
                  <div key={i} className="producto-card glass">
                    {/* CONTENIDO SIN CAMBIOS */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PAGINACIÓN */}
      <div className="pagination">
        {paginas.map((_, i) => (
          <span
            key={i}
            className={`dot ${
              paginaActiva === i + 1 ? "active" : ""
            }`}
            onClick={() => setPaginaActiva(i + 1)}
          />
        ))}
      </div>
    </section>
  );
}
