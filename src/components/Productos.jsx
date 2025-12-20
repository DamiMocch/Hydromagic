import { useState, useRef, useEffect } from "react";
import "../assets/css/Productos.css";

/* ===== IMÁGENES ===== */
import titulo from "../assets/img/Productos.png";
import fondo from "../assets/img/Fondo_Productos.png";
import elipseArriba from "../assets/img/Elipse_arriba.png";
import elipseAbajo from "../assets/img/Elipse_abajo.png";

import producto1 from "../assets/img/Producto1.png";
import producto2 from "../assets/img/Producto2.png";
import producto3 from "../assets/img/Producto3.png";
import producto4 from "../assets/img/Producto4.png";
import producto5 from "../assets/img/Producto5.png";
import producto6 from "../assets/img/Producto6.png";

import etiquetaAzul from "../assets/img/Etiqueta_azul.png";
import etiquetaBlanca from "../assets/img/Etiqueta_blanca.png";
import nuevo from "../assets/img/new.png";
import popular from "../assets/img/popular.png";

/* ===== PRODUCTOS ===== */
const productos = [
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
];

/* ===== LOOP INFINITO ===== */
const productosExtendidos = [
  productos[productos.length - 1],
  ...productos,
  productos[0],
];

export default function Productos() {
  const [index, setIndex] = useState(1);
  const trackRef = useRef(null);
  const startX = useRef(0);

  /* ===== TOUCH ===== */
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const diff = startX.current - e.changedTouches[0].clientX;

    if (diff > 50) setIndex((i) => i + 1);
    if (diff < -50) setIndex((i) => i - 1);
  };

  /* ===== LOOP SILENCIOSO ===== */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onTransitionEnd = () => {
      track.style.transition = "none";

      if (index === 0) setIndex(productos.length);
      if (index === productos.length + 1) setIndex(1);

      requestAnimationFrame(() => {
        track.style.transition = "transform 0.6s ease";
      });
    };

    track.addEventListener("transitionend", onTransitionEnd);
    return () => track.removeEventListener("transitionend", onTransitionEnd);
  }, [index]);

  return (
    <section className="productos-section" id="PRODUCTOS">
      {/* FONDOS */}
      <img src={fondo} className="productos-fondo" alt="" />
      <img src={elipseArriba} className="elipse elipse-arriba" alt="" />
      <img src={elipseAbajo} className="elipse elipse-abajo" alt="" />

      {/* HEADER */}
      <div className="productos-header">
        <img src={titulo} alt="Productos" />
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
      </div>

      {/* SLIDER */}
      <div
        className="productos-slider"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={trackRef}
          className="productos-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {productosExtendidos.map((img, i) => (
            <div key={i} className="productos-page">
              <div className="producto-card glass">
                {/* BADGES */}
                <div className="badges">
                  <img src={nuevo} className="badge-img" alt="" />
                  <img src={popular} className="badge-img" alt="" />
                </div>

                {/* IMAGEN */}
                <img src={img} className="producto-img" alt="" />

                {/* INFO */}
                <div className="producto-info">
                  <h3>Tina de hidromasaje</h3>
                  <p className="precio-text">
                    <span className="precio-num">$90,000</span>{" "}
                    <span className="precio-mxn">MXN</span>
                  </p>
                </div>

                {/* FEATURES */}
                <div className="features">
                  <div><img src={etiquetaAzul} /> Lorem ipsum</div>
                  <div><img src={etiquetaAzul} /> Lorem ipsum</div>
                </div>

                {/* MEDIDAS */}
                <div className="medidas">
                  <div><img src={etiquetaBlanca} /> Medidas</div>
                  <span className="divider" />
                  <div><img src={etiquetaBlanca} /> Medidas</div>
                  <span className="divider" />
                  <div><img src={etiquetaBlanca} /> Medidas</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
