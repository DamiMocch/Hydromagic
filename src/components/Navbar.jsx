import { useState } from "react";
import "../assets/css/Navbar.css";
import logo from "../assets/img/Vector.png";
import menuIcon from "../assets/img/menuham.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "INICIO",
    "NOSOTROS",
    "ESPACIOS",
    "PRODUCTOS",
    "TESTIMONIALES",
    "CONTACTO",
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // scroll suave
    }
    setOpen(false); // cierra menú móvil
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">

          {/* LOGO */}
          <div className="navbar-logo">
            <img
              src={logo}
              alt="Hydromagic"
              onClick={() => handleScroll("INICIO")} // ahora el logo va a inicio
              style={{ cursor: "pointer" }}
            />
          </div>

          {/* NAV DESKTOP */}
          <nav className="navbar-links">
            {links.map((item) => (
              <a
                key={item}
                onClick={() => handleScroll(item)}
                style={{ cursor: "pointer" }}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* BOTÓN MOBILE */}
          <div className="navbar-toggle">
            <button onClick={() => setOpen(!open)} aria-label="Abrir menú">
              <img src={menuIcon} alt="Menú" />
            </button>
          </div>

        </div>
      </div>

      {/* MENÚ MOBILE */}
      <div className={`navbar-mobile ${open ? "open" : ""}`}>
        {links.map((item) => (
          <a key={item} onClick={() => handleScroll(item)}>
            {item}
          </a>
        ))}
      </div>
    </header>
  );
}
