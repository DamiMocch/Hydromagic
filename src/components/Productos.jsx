import { useState, useRef } from "react";
import "../assets/css/Productos.css";

import titulo from "../assets/img/Productos.png";
import fondo from "../assets/img/Fondo_Productos.png";

import producto1 from "../assets/img/Producto1.png";
import producto2 from "../assets/img/Producto2.png";
import producto3 from "../assets/img/Producto3.png";
import producto4 from "../assets/img/Producto4.png";
import producto5 from "../assets/img/Producto5.png";
import producto6 from "../assets/img/Producto6.png";

import elipseArriba from "../assets/img/Elipse_arriba.png";
import elipseAbajo from "../assets/img/Elipse_abajo.png";

import etiquetaAzul from "../assets/img/Etiqueta_azul.png";
import etiquetaBlanca from "../assets/img/Etiqueta_blanca.png";

import nuevo from "../assets/img/new.png";
import popular from "../assets/img/popular.png";

/* ===== PAGINAS DESKTOP ===== */
const paginas = [
  [producto1, producto2, producto3, producto4, producto5, producto6],
  [producto6, producto5, producto4, producto3, producto2, producto1],
  [producto2, producto4, producto6, producto1, producto3, producto5],
  [producto3, producto1, producto5, producto2, producto4, producto6],
  [producto4, producto6, producto2, producto5, producto1, producto3],
];

/* ===== LISTA MOBILE ===== */
const productosMobile = [
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
];

export default function Productos() {
  const [paginaActiva, setPaginaActiva] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const startX = useRef(0);

  /* ===== SWIPE MOBILE ===== */
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const diff = startX.current - e.changedTouches[0].clientX;

    if (diff > 50 && mobileIndex < productosMobile.length - 1) {
      setMobileIndex(mobileIndex + 1);
    }

    if (diff < -50 && mobileIndex > 0) {
      setMobileIndex(mobileIndex - 1);
    }
  };

  return (
    <section id="PRODUCTOS" className="productos-section">

      {/* Fondo */}
      <img src={fondo} className="productos-fondo" alt="" />
      <img src={elipseArriba} className="elipse elipse-arriba" alt="" />
      <img src={elipseAbajo} className="elipse elipse-abajo" alt="" />

      {/* Header */}
      <div className="productos-header">
        <img src={titulo} alt="Productos" />
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
      </div>

      {/* ===== DESKTOP ===== */}
      <div className="productos-desktop">
        <div
          className="productos-track"
          style={{ transform: `translateX(-${paginaActiva * 100}%)` }}
        >
          {paginas.map((pagina, index) => (
            <div key={index} className="productos-page">
              <div className="productos-grid">
                {pagina.map((img, i) => (
                  <ProductoCard key={i} img={img} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          {paginas.map((_, i) => (
            <span
              key={i}
              className={`dot ${paginaActiva === i ? "active" : ""}`}
              onClick={() => setPaginaActiva(i)}
            />
          ))}
        </div>

      </div>

      {/* ===== MOBILE ===== */}
      <div
        className="productos-mobile"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="productos-track"
          style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
        >
          {productosMobile.map((img, i) => (
            <div key={i} className="productos-page">
              <ProductoCard img={img} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== CARD REUTILIZABLE ===== */
function ProductoCard({ img }) {
  return (
    <div className="producto-card glass">
      <div className="badges">
        <img src={nuevo} alt="" />
        <img src={popular} alt="" />
      </div>

      <img src={img} className="producto-img" alt="" />

      <div className="producto-info">
        <h3>Tina de hidromasaje</h3>
        <p className="precio-text">
          <span className="precio-num">$90,000</span>{" "}
          <span className="precio-mxn">MXN</span>
        </p>
      </div>

      <div className="features">
        <div><img src={etiquetaAzul} alt="" /> Lorem ipsum</div>
        <div><img src={etiquetaAzul} alt="" /> Lorem ipsum</div>
      </div>

      <div className="medidas">
        <div><img src={etiquetaBlanca} alt="" /> Medidas</div>
        <span className="divider" />
        <div><img src={etiquetaBlanca} alt="" /> Medidas</div>
        <span className="divider" />
        <div><img src={etiquetaBlanca} alt="" /> Medidas</div>
      </div>
    </div>
  );
}
