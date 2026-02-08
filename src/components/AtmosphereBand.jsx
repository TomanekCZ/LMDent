import bandPhoto800 from '../images/optimized/LM_dental_4_800.jpg';
import bandPhoto1600 from '../images/optimized/LM_dental_4_1600.jpg';
import bandPhoto2400 from '../images/optimized/LM_dental_4_2400.jpg';
import bandPhoto3600 from '../images/optimized/LM_dental_4_3600.jpg';

function AtmosphereBand() {
  return (
    <section className="atmos-band" aria-label="Atmosféra ordinace">
      <img
        className="atmos-band-bg"
        aria-hidden="true"
        alt=""
        src={bandPhoto800}
        srcSet={`${bandPhoto800} 600w, ${bandPhoto1600} 1200w, ${bandPhoto2400} 1800w, ${bandPhoto3600} 2700w`}
        sizes="100vw"
        loading="lazy"
        decoding="async"
      />
      <div className="container atmos-band-inner">
        {/* Intentionally empty: keep photo band without the card content. */}
      </div>
    </section>
  );
}

export default AtmosphereBand;
