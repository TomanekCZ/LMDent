import bleachingA from '../images/LM_dental_3.jpeg';
import bleachingB from '../images/LM_dental_4.jpeg';
import bleachingD from '../images/LM_dental_6.jpeg';

const servicePhotos = [
  {
    img: bleachingA,
    title: 'Dentální hygiena',
    caption: 'Šetrné čištění, pigmentace a prevence.'
  },
  {
    img: bleachingB,
    title: 'Konzultace a poradenství',
    caption: 'Jasný plán péče a doporučení na míru.'
  },
  {
    img: bleachingD,
    title: 'Bělení zubů',
    caption: 'Bezpečný postup s přirozeným výsledkem.'
  }
];

const services = [
  {
    icon: '01',
    title: 'Dentální hygiena',
    subtitle: 'pro děti i dospělé',
    content:
      'Profesionální odstranění plaku, pigmentací a zubního kamene včetně instruktáže správné domácí péče.',
    bullets: ['AirFlow a ultrazvukové čištění', 'Výběr mezizubních pomůcek', 'Kontrola stavu dásní a rizik']
  },
  {
    icon: '02',
    title: 'Konzultace a poradenství',
    subtitle: 'plán péče na míru',
    content:
      'Krátká i rozsáhlejší konzultace pro výběr správných pomůcek, nastavení rutiny a řešení citlivosti, krvácení dásní nebo zápachu.',
    bullets: ['Instruktáž techniky čištění', 'Výběr mezizubních pomůcek', 'Doporučení dalšího postupu']
  },
  {
    icon: '03',
    title: 'Bělení zubů',
    subtitle: 'domácí i kombinované',
    content:
      'Bezpečné zesvětlení zubů s důrazem na citlivost, správné načasování a dlouhodobý výsledek.',
    bullets: ['Konzultace vhodnosti postupu', 'Šetrné režimy bělení', 'Doporučení následné péče']
  }
];

function Services() {
  return (
    <section id="service" className="section section-services">
      <div className="container">
        <div className="section-intro animate-on-scroll">
          <div className="section-kickers" aria-label="Štítky sekce">
            <p className="section-kicker">S čím pomáháme</p>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="service-card animate-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="service-head">
                <span className="service-index" aria-hidden="true">
                  {service.icon}
                </span>
                <div>
                  <h3>{service.title}</h3>
                  <p className="service-subtitle">{service.subtitle}</p>
                </div>
              </div>

              <p className="service-text">{service.content}</p>

              <ul className="service-list">
                {service.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <section className="services-photo-grid animate-on-scroll" aria-label="Fotogalerie služeb">
          {servicePhotos.map((item) => (
            <article key={item.title} className="photo-card">
              <img src={item.img} alt={item.title} loading="lazy" />
              <div className="photo-card-overlay" aria-hidden="true" />
              <div className="photo-card-copy">
                <h3>{item.title}</h3>
                <p>{item.caption}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
}

export default Services;
