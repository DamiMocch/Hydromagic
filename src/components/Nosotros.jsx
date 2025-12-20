import styles from "../assets/css/Nosotros.module.css";
import toalla from "../assets/img/Toalla.png";
import banera from "../assets/img/Banera.png";
import hospital from "../assets/img/Hospital.png";
import hotel from "../assets/img/Hotel.png";
import fondo from "../assets/img/NosotrosFondo.png";
import linea from "../assets/img/linea.png";
import fondo1 from "../assets/img/art_fondo.png";
import fondo2 from "../assets/img/art_fondo2.png";
import fondo3 from "../assets/img/art_fondo3.png";
import nosotros from "../assets/img/boton_nosotros.png";
import nosotros2 from "../assets/img/nosotros2.png";
import nosotros3 from "../assets/img/nosotros3.jpg";
import nosotros4 from "../assets/img/nosotros.png";
import brand1 from "../assets/img/brand1.png";
import brand2 from "../assets/img/brand2.png";
import brand3 from "../assets/img/brand3.png";
import brand4 from "../assets/img/brand4.png";
import brand5 from "../assets/img/brand5.png";
import brand6 from "../assets/img/brand6.png";
import brand7 from "../assets/img/brand7.png";
import brand8 from "../assets/img/brand8.png";
import brand9 from "../assets/img/brand9.png";
import brand10 from "../assets/img/brand10.png";

export default function Nosotros() {
    const cards = [
        { image: toalla, title: "SPA", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
        { image: banera, title: "RESIDENCIA", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
        { image: hospital, title: "HOSPITAL", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
        { image: hotel, title: "HOTEL", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
    ];

    return (
        <section className={styles.section} id="NOSOTROS">

            {/* Glow */}
            <div className={styles.glow}></div>

            <img src={fondo} alt="Fondo Nosotros" className={styles.backgroundImage} />

            {/* Brands */}
            <div className={styles.brandsWrapper}>
                <div className={styles.brandsCarousel}>
                    <div className={styles.brandsTrack}>
                        {[brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10,
                          brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10
                        ].map((brand, index) => (
                            <img key={index} src={brand} alt={`Brand ${index + 1}`} className={styles.brand} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Línea */}
            <div className={styles.dividerWrapper}>
                <img src={linea} alt="Linea" className={styles.linea} />
            </div>

            {/* Tarjetas */}
            <div className={styles.cards}>
                {cards.map((card, index) => (
                    <div key={index} className={styles.card}>
                        <img src={card.image} alt={card.title} className={styles.cardImage} />
                        <h3 className={styles.cardTitle}>{card.title}</h3>
                        <p className={styles.cardText}>{card.text}</p>
                        <button className={styles.more}>VER MÁS</button>
                    </div>
                ))}
            </div>

            {/* Contenido principal */}
            <div className={styles.nosotrosContainer}>
                {/* IZQUIERDA */}
                <div className={styles.left}>
                    <img src={nosotros4} alt="Nosotros" className={styles.nosotrosTitleImg} />
                    <p className={styles.nosotrosTitleText}>
                        Lorem ipsum dolor sit amet, Consectetur <br /> adipiscing elit, Sed do
                    </p>

                    <div className={styles.imageGroup}>
                        <img src={fondo3} alt="Fondo" className={styles.artFondo3} />
                        <img src={nosotros2} alt="Nosotros 2" className={styles.nosotrosImg2} />
                    </div>

                    <p className={styles.smallText}>
                        Lorem ipsum dolor sit amet
                    </p>
                </div>

                <div className={styles.centerText}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <img src={nosotros} alt="Botón Nosotros" className={styles.nosotrosButton} />
                </div>

                <div className={styles.right}>
                    <img src={fondo1} alt="Decoración" className={styles.artFondo1} />
                    <img src={fondo2} alt="Decoración" className={styles.artFondo2} />

                    <div className={styles.imageWrapperRight}>
                        <img src={nosotros3} className={styles.nosotrosImg3} />
                        <p className={styles.smallText2}>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
