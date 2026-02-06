import aboutPhoto from '../images/LM_dental_2.jpeg';

const credentials = [
  'Moderní a šetrné postupy',
  'Péče pro děti i dospělé pacienty',
  'Dostatek času na vysvětlení i prevenci',
  'Důraz na pohodlí a minimální bolestivost'
];

function About() {
  return (
    <section id="about" className="section section-about">
      <div className="container about-layout">
        <figure className="about-photo animate-on-scroll">
          <img
            src={aboutPhoto}
            alt="Dentální hygienistka v ordinaci LM Dental"
            loading="lazy"
          />
        </figure>

        <div className="about-content animate-on-scroll" style={{ transitionDelay: '120ms' }}>
          <p className="section-kicker">O mně</p>
          <h2>Profesionální péče, lidský přístup</h2>

          <blockquote>
            „Mým cílem je vytvořit místo, kde se spojí profesionální dentální péče s příjemným zážitkem a chvílí
            zaslouženého odpočinku.“
          </blockquote>

          <p>
            Jmenuji se Markéta a vedu ordinaci LM Dental. Pracuji pečlivě a s respektem k individuálním potřebám každého
            pacienta. Věřím, že prevence má být srozumitelná, praktická a bez stresu.
          </p>

          <ul className="about-points">
            {credentials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
