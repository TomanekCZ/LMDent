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
            alt="Ordinace dentální hygieny LM Dental"
            loading="lazy"
          />
        </figure>

        <div className="about-content animate-on-scroll" style={{ transitionDelay: '120ms' }}>
          <p className="section-kicker">O nás</p>
          <h2>Profesionální péče, lidský přístup</h2>

          <blockquote>
            „Mým cílem je vytvořit místo, kde se spojuje profesionální dentální péče s klidnou a příjemnou atmosférou
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
            <span className="about-label">Kdo vás přivítá</span>
            Jmenuji se Markéta Lesinová a jsem zakladatelkou LM DENTAL. Jsem pečlivá, pozitivně naladěná dentální
            hygienistka s několikaletou praxí a svou práci vnímám jako poslání. S radostí se věnuji dětem i dospělým a
            zakládám si na individuálním, lidském přístupu.
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
        </div>
      </div>
    </section>
  );
}

export default About;
