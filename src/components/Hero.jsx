import styles from "../assets/css/Hero.module.css";
import logoBg from "../assets/img/header2.png";
import logo from "../assets/img/HeaderLogo.png";
import circle from "../assets/img/circle.png";

export default function Inicio() {
  return (
    <section className={styles.header} id="INICIO">

      {/* IMAGEN DE FONDO */}
      <img
        src={logoBg}
        alt="Background"
        className={styles.background}
      />

      {/* OVERLAY OSCURO */}
      <div className={styles.overlay}></div>

      {/* GRADIENTE INFERIOR */}
      <div className={styles.bottomGradient}></div>

      {/* ⬇️ EXTENSIÓN NEGRA (SOLO MOBILE POR CSS) */}
      <div className={styles.mobileBlackExtension}></div>

      {/* CONTENIDO */}
      <div className={styles.content}>

        {/* LOGO */}
        <img
          src={logo}
          alt="Hydromagic Logo"
          className={styles.logo}
        />

        {/* TÍTULO */}
        <h1 className={styles.title}>
          Lorem Ipsum Dolor Sit Amet,
          <br />
          Consectetur Adipiscing Elit
        </h1>

        {/* SUBTÍTULO */}
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>

        {/* BUSCADOR */}
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Buscar"
            className={styles.searchInput}
          />
          <img
            src={circle}
            alt="Buscar"
            className={styles.searchIcon}
          />
        </div>

        {/* BOTONES */}
        <div className={styles.buttons}>
          {["BUTTON TEXT", "BUTTON TEXT", "BUTTON TEXT"].map((text, index) => (
            <button
              key={index}
              className={styles.button}
            >
              {text}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
