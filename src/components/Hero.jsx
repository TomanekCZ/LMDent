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

      <div className="hero-photo-cta" aria-label="Rychlé akce">
        <button type="button" className="btn btn-primary" onClick={() => onBook?.()}>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              d="M7 3v2H5.8C4.8 5 4 5.8 4 6.8v12.4c0 1 .8 1.8 1.8 1.8h12.4c1 0 1.8-.8 1.8-1.8V6.8C20 5.8 19.2 5 18.2 5H17V3h-2v2H9V3H7Zm11.2 6H5.8v10.2c0 .1.1.2.2.2h12c.1 0 .2-.1.2-.2V9ZM7.5 12.2h3v3h-3v-3Z"
              fill="currentColor"
            />
          </svg>
          Objednat termín
        </button>
        <a href="#price-list" className="btn btn-secondary">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              d="M7 4h10a2 2 0 0 1 2 2v13a1 1 0 0 1-1.5.86L12 16.7l-5.5 3.16A1 1 0 0 1 5 19V6a2 2 0 0 1 2-2Zm0 2v11.3l4.5-2.6a1 1 0 0 1 1 0l4.5 2.6V6H7Zm1.5 2.5h7v2h-7v-2Zm0 4h7v2h-7v-2Z"
              fill="currentColor"
            />
          </svg>
          Zobrazit ceník
        </a>
      </div>
    </section>
  );
}

export default Hero;
