import styles from "../assets/css/Footer.module.css";
import facebook from "../assets/img/facebook.png";
import google from "../assets/img/google.png";
import x from "../assets/img/x.png";
import instagram from "../assets/img/instagram.png";
import linkedin from "../assets/img/in.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      {/* CONTENIDO PRINCIPAL */}
      <div className={styles.footerContent}>

        {/* COLUMNA IZQUIERDA */}
        <div className={styles.left}>
          <p className={styles.description}>
            Will give you a complete account the <br />
            system, and expound the teachings <br />
            of the great explorer the truth, the <br />
            master-builder because ...
          </p>

          <div className={styles.socials}>
            <img src={facebook} alt="Facebook" />
            <img src={google} alt="Google" />
            <img src={x} alt="X" />
            <img src={instagram} alt="Instagram" />
            <img src={linkedin} alt="LinkedIn" />
          </div>
        </div>

        {/* OUR SERVICES */}
        <div className={styles.services}>
          <h3>Our Service</h3>

          <div className={styles.servicesList}>
            <ul>
              <li>Dynamic</li>
              <li>Contact</li>
              <li>Faq</li>
              <li>Fancy</li>
              <li>Maps</li>
              <li>Service</li>
            </ul>

            <ul>
              <li>Team</li>
              <li>About</li>
              <li>Video</li>
              <li>Gallery</li>
              <li>Brand</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>

        {/* QUICK LINK */}
        <div className={styles.quick}>
          <h3>Quick Link</h3>

          <ul>
            <li>What We Do</li>
            <li>About Company</li>
            <li>Team Member</li>
            <li>Our Gallery</li>
            <li>Watch Video</li>
            <li>Latest news</li>
          </ul>
        </div>

      </div>

      {/* BARRA INFERIOR */}
     <div className={styles.bottomBar}>
  <div className={styles.bottomBarContent}>
    <span>Copyright © 2024 Carox. All Rights Reserved.</span>

    <div className={styles.bottomLinks}>
      <span>Privacy</span>
      <span>Policy</span>
      <span>Contact Us</span>
    </div>
  </div>
</div>

    </footer>
  );
}
