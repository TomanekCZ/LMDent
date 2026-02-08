import ownerPhoto749 from '../images/optimized/LM_dental_2_800.jpg';
import ownerPhoto1123 from '../images/optimized/LM_dental_2_1200.jpg';

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
        <div className="about-content animate-on-scroll" style={{ transitionDelay: '120ms' }}>
          <p className="section-kicker">O nás</p>
          <h2>Profesionální péče, lidský přístup</h2>

          <blockquote>
            „Našim cílem je vytvořit místo, kde se spojuje profesionální dentální péče s klidnou a příjmenou atmosférou
            bez stresu.“
          </blockquote>

          <p className="about-paragraph about-paragraph-labeled">
            <span className="about-label">Kdo jsme</span>
            Jsme dentální hygiena pro celou rodinu. Zaměřujeme se na šetrnou, profesionální péči a prevenci, která
            pomáhá dlouhodobě udržet zdravý úsměv u dětí i dospělých.
          </p>

          <p className="about-paragraph about-paragraph-labeled">
            <span className="about-label">Jak pracujeme</span>
            Každý krok vysvětlujeme srozumitelně a dopředu, aby pro vás návštěva byla klidná a předvídatelná.
            Doporučení vždy přizpůsobujeme vašim možnostem, citlivosti a cíli.
          </p>

          <p className="about-paragraph about-paragraph-labeled">
            <span className="about-label">Prostředí a komfort</span>
            Pracuji v moderně vybavené ordinaci, která zajišťuje vysoký komfort i efektivitu ošetření. Mojí největší
            motivací je vaše důvěra, spokojenost a dlouhodobě zdravý úsměv. Těším se na osobní setkání.
          </p>

          <ul className="about-points">
            {credentials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <section className="about-owner" aria-label="Slovo majitelky">
            <img
              className="about-owner-photo"
              src={ownerPhoto749}
              srcSet={`${ownerPhoto749} 749w, ${ownerPhoto1123} 1123w`}
              sizes="(max-width: 900px) 70vw, 420px"
              width="749"
              height="800"
              alt="Markéta Lesinová"
              loading="lazy"
              decoding="async"
            />
            <div className="about-owner-copy">
              <p className="about-owner-kicker">Slovo majitelky</p>
              <p className="about-owner-text">
                Jmenuji se Markéta Lesinová a jsem zakladatelkou LM Dental. Jsem pečlivá, pozitivně naladěná dentální
                hygienistka s několikaletou praxí a svou práci vnímám jako poslání. S radostí se věnuji dětem i dospělým
                a zakládám si na individuálním, lidském přístupu.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default About;
