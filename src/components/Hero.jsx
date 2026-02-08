import heroLeft600 from '../images/optimized/LM_dental_HERO_800.jpg';
import heroLeft900 from '../images/optimized/LM_dental_HERO_1200.jpg';
import heroLeft600Webp from '../images/optimized/LM_dental_HERO_800.webp';
import heroLeft900Webp from '../images/optimized/LM_dental_HERO_1200.webp';
import heroRight600 from '../images/optimized/LM_dental_HERO2_800.jpg';
import heroRight900 from '../images/optimized/LM_dental_HERO2_1200.jpg';
import heroRight600Webp from '../images/optimized/LM_dental_HERO2_800.webp';
import heroRight900Webp from '../images/optimized/LM_dental_HERO2_1200.webp';
import heroCenter600 from '../images/optimized/LM_dental_HERO3_800.jpg';
import heroCenter900 from '../images/optimized/LM_dental_HERO3_1200.jpg';
import heroCenter600Webp from '../images/optimized/LM_dental_HERO3_800.webp';
import heroCenter900Webp from '../images/optimized/LM_dental_HERO3_1200.webp';

const heroPhotos = {
  left: {
    jpgSrc: heroLeft600,
    jpgSrcSet: `${heroLeft600} 600w, ${heroLeft900} 900w`,
    webpSrcSet: `${heroLeft600Webp} 600w, ${heroLeft900Webp} 900w`
  },
  right: {
    jpgSrc: heroRight600,
    jpgSrcSet: `${heroRight600} 600w, ${heroRight900} 900w`,
    webpSrcSet: `${heroRight600Webp} 600w, ${heroRight900Webp} 900w`
  },
  center: {
    jpgSrc: heroCenter600,
    jpgSrcSet: `${heroCenter600} 600w, ${heroCenter900} 900w`,
    webpSrcSet: `${heroCenter600Webp} 600w, ${heroCenter900Webp} 900w`
  }
};

function Hero({ onBook }) {
  return (
    <section id="home" className="hero" aria-label="Úvodní fotogalerie">
      <div className="hero-media animate-on-scroll">
        <div className="hero-collage">
          <div className="hero-triptych" aria-label="Fotky z ordinace">
            <figure className="hero-triptych-photo">
              <picture>
                <source
                  type="image/webp"
                  srcSet={heroPhotos.left.webpSrcSet}
                  sizes="(max-width: 900px) 33vw, 260px"
                />
                <source srcSet={heroPhotos.left.jpgSrcSet} sizes="(max-width: 900px) 33vw, 260px" />
                <img
                  src={heroPhotos.left.jpgSrc}
                  width="600"
                  height="800"
                  alt="Dentální hygiena v ordinaci"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </figure>
            <figure className="hero-triptych-photo is-center">
              <picture>
                <source
                  type="image/webp"
                  srcSet={heroPhotos.center.webpSrcSet}
                  sizes="(max-width: 900px) 33vw, 260px"
                />
                <source srcSet={heroPhotos.center.jpgSrcSet} sizes="(max-width: 900px) 33vw, 260px" />
                <img
                  src={heroPhotos.center.jpgSrc}
                  width="600"
                  height="800"
                  alt="Dentální hygiena v ordinaci"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
            </figure>
            <figure className="hero-triptych-photo">
              <picture>
                <source
                  type="image/webp"
                  srcSet={heroPhotos.right.webpSrcSet}
                  sizes="(max-width: 900px) 33vw, 260px"
                />
                <source srcSet={heroPhotos.right.jpgSrcSet} sizes="(max-width: 900px) 33vw, 260px" />
                <img
                  src={heroPhotos.right.jpgSrc}
                  width="600"
                  height="800"
                  alt="Dentální hygiena v ordinaci"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
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
