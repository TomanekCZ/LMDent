import bandPhoto600 from '../images/optimized/LM_dental_4_800.jpg';
import bandPhoto900 from '../images/optimized/LM_dental_4_1200.jpg';

function AtmosphereBand() {
  return (
    <section className="atmos-band" aria-label="Atmosféra ordinace">
      <div
        className="atmos-band-bg"
        style={{
          '--atmos-band-1x': `url(${bandPhoto600})`,
          '--atmos-band-2x': `url(${bandPhoto900})`
        }}
        aria-hidden="true"
      />
      <div className="container atmos-band-inner">
        {/* Intentionally empty: keep photo band without the card content. */}
      </div>
    </section>
  );
}

export default AtmosphereBand;
