import { useState } from "react";
import "../assets/css/Navbar.css";
import logo from "../assets/img/Vector.png";

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

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">

          {/* LOGO */}
          <div className="navbar-logo">
            <a href="#">
              <img src={logo} alt="Hydromagic" />
            </a>
          </div>

          {/* NAV DESKTOP */}
          <nav className="navbar-links">
            {links.map((item) => (
              <a key={item} href={`#${item}`}>
                {item}
              </a>
            ))}
          </nav>

          {/* BOTÓN MOBILE */}
          <div className="navbar-toggle">
            <button onClick={() => setOpen(!open)} aria-label="Abrir menú">
              <img src="/img/menuham.png" alt="menu" />
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ MOBILE */}
      <div className={`navbar-mobile ${open ? "open" : ""}`}>
        {links.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={() => setOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>
    </header>
  );
}
