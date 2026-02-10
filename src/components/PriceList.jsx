const pricingSections = [
  {
    title: 'Dospělí a mladiství od 17 let',
    featured: true,
    items: [
      {
        name: 'Vstupní dentální hygiena',
        price: '1 990 Kč',
        desc: ['Kompletní ošetření při první návštěvě']
      },
      {
        name: 'Recall (udržovací hygiena)',
        price: '1 690 Kč',
        desc: ['Pravidelná péče']
      },
      {
        name: 'Dočištění',
        price: 'od 1 000 Kč',
        desc: ['Krátké navazující ošetření']
      },
      {
        name: 'Zvýšená náročnost ošetření',
        price: '+ 500 Kč',
        desc: ['Dle množství zubního kamene, pigmentací, apod.']
      }
    ]
  },
  {
    title: 'Děti',
    items: [
      { name: 'Děti do 6 let', price: '1 090 Kč' },
      { name: 'Děti 7–16 let', price: '1 590 Kč' }
    ]
  },
  {
    title: 'Specifická péče',
    items: [
      {
        name: 'Konzultace maminky & miminka',
        price: '800–1 000 Kč',
        desc: ['Instruktáž péče, vývoj chrupu, návyky', 'Délka 45–60 min., cena může být upravena dle času ošetření']
      },
      { name: 'Rovnátka – hygienický balíček DOSPĚLÝ', price: '6 000 Kč' },
      { name: 'Rovnátka – hygienický balíček DĚTI (do 16 let)', price: '5 000 Kč' },
      {
        name: 'Domácí bělení zubů',
        price: '5 000 Kč',
        desc: ['Individuální noční bělení – sada bělícího gelu']
      }
    ]
  }
];

function PriceList({ onBook }) {
  return (
    <section id="price-list" className="section section-pricing">
      <div className="container">
        <div className="section-intro animate-on-scroll">
          <p className="section-kicker">Ceník</p>
          <h2>Ceník ošetření a balíčků</h2>
          <p>Základní ceník pro dospělé, děti a specifickou péči.</p>
        </div>

        <div className="pricing-grid">
          {pricingSections.map((section, index) => (
            <article
              key={section.title}
              className={`pricing-card animate-on-scroll ${section.featured ? 'is-featured' : ''}`}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <h3>{section.title}</h3>
              <div className="pricing-lines" role="list">
                {section.items.map((item) => (
                  <div key={`${section.title}-${item.name}`} className="pricing-line" role="listitem">
                    <span className="pricing-line-name">{item.name}</span>
                    <strong className="pricing-line-price">{item.price}</strong>

                    {item.desc?.length ? (
                      <div className="pricing-line-desc">
                        {item.desc.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="pricing-note animate-on-scroll" style={{ transitionDelay: '190ms' }}>
          Platbu je možné provést v hotovosti nebo pohodlně pomocí QR kódu.
        </p>

        <div className="pricing-actions animate-on-scroll" style={{ transitionDelay: '220ms' }}>
          <button type="button" className="btn btn-primary" onClick={() => onBook?.()}>
            Objednat termín
          </button>
        </div>
      </div>
    </section>
  );
}

export default PriceList;
