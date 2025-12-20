import { useState } from "react";
import "../assets/css/Espacios.css";

import titulo from "../assets/img/titulo_espacios.png";
import fondo from "../assets/img/Espacios.png";
import muestra from "../assets/img/espacios_muestra.png";
import cliente from "../assets/img/client.png";
import comprar from "../assets/img/text.png";

const espaciosData = [
  {
    id: 1,
    image: muestra,
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    image: muestra,
    rating: 4,
    review:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    image: muestra,
    rating: 3,
    review:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 4,
    image: muestra,
    rating: 5,
    review:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 5,
    image: muestra,
    rating: 4,
    review:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
];

export default function Espacios() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="ESPACIOS"
      className="espacios-section"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="gradient-top" />
      <div className="gradient-bottom" />

      <div className="espacios-wrapper">
        <div className="espacios-scale">
          <div className="espacios-container">

            {/* ===== TÍTULO ===== */}
            <div className="espacios-title">
              <img src={titulo} alt="Espacios" />
              <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
            </div>

            <div className="espacios-layout">
              <div className="espacios-main">

                {/* ===== IMAGEN ===== */}
                <img
                  key={active}
                  src={espaciosData[active].image}
                  alt="Espacio"
                  className="espacios-image fade"
                />

                <div className="white-divider" />

                {/* ===== BLOQUE INFERIOR (MOBILE) ===== */}
                <div className="espacios-mobile-row">

                  {/* RECTÁNGULO AZUL */}
                  <div className="espacios-description fade">
                    <p>{espaciosData[active].review}</p>
                  </div>

                  {/* CARD */}
                  <div className="espacios-card">
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

                    <img
                      src={comprar}
                      alt="Comprar"
                      className="buy-btn"
                    />
                  </div>

                </div>
              </div>
            </div>

            {/* ===== PAGINACIÓN ===== */}
            <div className="pagination">
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
