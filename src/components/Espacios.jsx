import { useState, useRef } from "react";
import "../assets/css/Espacios.css";

import titulo from "../assets/img/titulo_espacios.png";
import fondo from "../assets/img/Espacios.png";
import muestra from "../assets/img/espacios_muestra.png";
import cliente from "../assets/img/client.png";
import comprar from "../assets/img/text.png";

const espaciosData = [
  { id: 1, image: muestra, rating: 5, review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 2, image: muestra, rating: 4, review: "Ut enim ad minim veniam, quis nostrud exercitation ullamco." },
  { id: 3, image: muestra, rating: 3, review: "Duis aute irure dolor in reprehenderit in voluptate." },
  { id: 4, image: muestra, rating: 5, review: "Excepteur sint occaecat cupidatat non proident." },
  { id: 5, image: muestra, rating: 4, review: "Sed ut perspiciatis unde omnis iste natus error." },
];

export default function Espacios() {
  const [active, setActive] = useState(0);
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  const startX = useRef(0);

  /* ===== TOUCH START ===== */
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  /* ===== TOUCH END (MISMO COMPORTAMIENTO QUE PRODUCTOS) ===== */
  const onTouchEnd = (e) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    const total = espaciosData.length;

    if (Math.abs(diff) < 40) return;

    if (diff > 0) {
      setActive((prev) => (prev + 1) % total);
    }

    if (diff < 0) {
      setActive((prev) => (prev - 1 + total) % total);
    }

    // 🔥 se oculta al primer swipe real
    setShowSwipeHint(false);
  };

  return (
    <section
      id="ESPACIOS"
      className="espacios-section"
      style={{ backgroundImage: `url(${fondo})` }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="gradient-top" />
      <div className="gradient-bottom" />

      {/* ===== INDICADOR SWIPE (MISMO QUE PRODUCTOS) ===== */}
      {showSwipeHint && (
        <div className="swipe-indicator mobile-only">
          <div className="swipe-pill">
            <span className="arrow left" />
            <span className="hand" />
            <span className="arrow right" />
          </div>
        </div>
      )}

      <div className="espacios-wrapper">
        <div className="espacios-scale">
          <div className="espacios-container">

            <div className="espacios-title">
              <img src={titulo} alt="Espacios" />
              <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
            </div>

            <div className="espacios-layout">
              <div className="espacios-main">

                <img
                  key={active}
                  src={espaciosData[active].image}
                  alt="Espacio"
                  className="espacios-image fade"
                />

                <div className="white-divider" />

                <div className="espacios-mobile-row">

                  <div className="espacios-description fade">
                    <p>{espaciosData[active].review}</p>
                  </div>

                  <div className="espacios-card fade">
                    <div className="stars-wrapper stars-out">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`star-shape ${
                            i < espaciosData[active].rating ? "filled" : ""
                          }`}
                        />
                      ))}
                    </div>

                    <p className="card-text with-line">
                      Lorem Ipsum Dolor Sit Amet
                    </p>

                    <div className="clients">
                      <img src={cliente} alt="cliente" />
                    </div>

                    <img src={comprar} alt="Comprar" className="buy-btn" />
                  </div>

                </div>
              </div>
            </div>

            {/* ===== PAGINACIÓN SOLO DESKTOP ===== */}
            <div className="pagination desktop-only">
              {espaciosData.map((_, i) => (
                <span
                  key={i}
                  onClick={() => setActive(i)}
                  className={`dot ${active === i ? "active" : ""}`}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
