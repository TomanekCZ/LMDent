import heroLeft from '../images/LM_dental_HERO.jpeg';
import heroRight from '../images/LM_dental_HERO2.jpeg';
import heroCenter from '../images/LM_dental_HERO3.jpeg';

const heroPhotos = {
  left: heroLeft,
  right: heroRight,
  center: heroCenter
};

function Hero({ onBook }) {
  return (
    <>
      <section id="home" className="hero" aria-label="Úvodní fotogalerie">
        <div className="hero-media animate-on-scroll">
          <div className="hero-collage">
            <div className="hero-triptych" aria-label="Fotky z ordinace">
              <figure className="hero-triptych-photo">
                <img src={heroPhotos.left} alt="Dentální hygiena v ordinaci" />
              </figure>
              <figure className="hero-triptych-photo is-center">
                <img src={heroPhotos.center} alt="Dentální hygiena v ordinaci" />
              </figure>
              <figure className="hero-triptych-photo">
                <img src={heroPhotos.right} alt="Dentální hygiena v ordinaci" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="section hero-intro" aria-label="Úvodní informace">
        <div className="container hero-intro-grid">
          <div className="hero-copy animate-on-scroll">
            <p className="section-kicker">Dentální hygiena v Kamenici</p>
            <h1 className="hero-title">Péče, po které se budete usmívat častěji.</h1>
            <p className="hero-lead">
              Šetrné ošetření, moderní vybavení a klidný přístup. Každá návštěva je jasně vysvětlená, bez stresu a s
              konkrétním plánem domácí péče.
            </p>

            <div className="hero-actions">
              <button type="button" className="btn btn-primary" onClick={() => onBook?.()}>
                Objednat termín
              </button>
              <a href="#price-list" className="btn btn-secondary">
                Zobrazit ceník
              </a>
            </div>
          </div>

          <ul className="hero-stats animate-on-scroll" aria-label="Hlavní výhody" style={{ transitionDelay: '120ms' }}>
            <li>
              <strong>Šetrná péče</strong>
              <span>komfortní průběh ošetření</span>
            </li>
            <li>
              <strong>Děti i dospělí</strong>
              <span>péče přizpůsobená věku i potřebám</span>
            </li>
            <li>
              <strong>Jasný plán péče</strong>
              <span>doporučení, která zvládnete doma</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Hero;
