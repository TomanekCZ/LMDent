import heroMain from '../images/LM_dental_1.jpeg';

const heroPhotos = {
  main: heroMain
};

function Hero({ onBook }) {
  return (
    <section id="home" className="section hero">
      <div className="container hero-grid">
        <div className="hero-copy animate-on-scroll">
          <p className="section-kicker">Dentální hygiena v Kamenici</p>
          <h1 className="hero-title">Péče, po které se budete usmívat častěji.</h1>
          <p className="hero-lead">
            Šetrné ošetření, moderní vybavení a klidný přístup.
            Každá návštěva je jasně vysvětlená, bez stresu a s konkrétním plánem domácí péče.
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

        <div className="hero-visual animate-on-scroll" style={{ transitionDelay: '120ms' }}>
          <div className="hero-collage">
            <figure className="hero-photo hero-photo-main">
              <img src={heroPhotos.main} alt="Moderní dentální ordinace" />
            </figure>
          </div>

          {/* Intentionally removed: floating trust card content */}
        </div>

        <ul
          className="hero-stats animate-on-scroll"
          aria-label="Hlavní výhody"
          style={{ transitionDelay: '180ms' }}
        >
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

      <a href="#service" className="hero-scroll" aria-label="Přejít na služby">
        <span />
      </a>
    </section>
  );
}

export default Hero;
