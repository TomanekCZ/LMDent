import bandPhoto from '../images/LM_dental_4.jpeg';

function AtmosphereBand() {
  return (
    <section className="atmos-band" aria-label="Atmosféra ordinace">
      <div className="atmos-band-bg" style={{ backgroundImage: `url(${bandPhoto})` }} aria-hidden="true" />
      <div className="container atmos-band-inner">
        {/* Intentionally empty: keep photo band without the card content. */}
      </div>
    </section>
  );
}

export default AtmosphereBand;
