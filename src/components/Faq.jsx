import { useState } from 'react';

const faqData = [
  {
    question: 'Jak probíhá vstupní dentální hygiena?',
    answer:
      'První návštěva zahrnuje krátký dotazník, vyšetření zubů a dásní, detekci plaku, profesionální čištění a doporučení vhodných pomůcek pro domácí péči.'
  },
  {
    question: 'Jak dlouho ošetření trvá?',
    answer: 'Vstupní návštěva trvá přibližně 75 minut, opakovaná zpravidla do 60 minut, dětské ošetření do 45 minut.'
  },
  {
    question: 'Jak často chodit na dentální hygienu?',
    answer:
      'Nejčastěji 2x ročně. U ortodontických pacientů nebo při parodontitidě bývá vhodný kratší interval podle doporučení hygienistky.'
  },
  {
    question: 'Je ošetření bolestivé?',
    answer:
      'Postup je navržený co nejšetrněji. Citlivost je individuální, proto během návštěvy průběžně upravujeme intenzitu ošetření.'
  },
  {
    question: 'Co si mám vzít s sebou?',
    answer:
      'Přineste si prosím své zubní pomůcky. Máte-li doporučení od zubního lékaře nebo RTG snímky, vezměte je s sebou také. Pomůže nám to lépe posoudit stav chrupu.'
  },
  {
    question: 'Přispívá na dentální hygienu pojišťovna?',
    answer:
      'Většina zdravotních pojišťoven nabízí příspěvky v rámci preventivních programů. Konkrétní výši je potřeba ověřit u vaší pojišťovny.'
  },
  {
    question: 'Kdy je lepší hygienu zrušit?',
    answer:
      'Prosíme o zrušení termínu v případě oparu či nemoci z důvodu bezpečnosti Vás, ostatních pacientů i dentálního týmu.'
  }
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="faq" className="section section-faq">
      <div className="container">
        <div className="section-intro animate-on-scroll">
          <p className="section-kicker">FAQ</p>
          <h2>Nejčastější dotazy před první návštěvou</h2>
          <p>Pokud potřebujete něco upřesnit, ozvěte se. Rádi vám s výběrem vhodného termínu i typu ošetření poradíme.</p>
        </div>

        <div className="faq-list animate-on-scroll" style={{ transitionDelay: '90ms' }}>
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            const panelId = `faq-panel-${index}`;

            return (
              <article key={item.question} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                <h3>
                  <button
                    type="button"
                    className="faq-button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span>{item.question}</span>
                    <span className="faq-button-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                        <path
                          d="M9 18l6-6-6-6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>

                <div id={panelId} className={`faq-panel ${isOpen ? 'is-open' : ''}`}>
                  <div className="faq-panel-inner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="faq-note animate-on-scroll" style={{ transitionDelay: '160ms' }}>
          Při zrušení termínu méně než 24 hodin předem může být účtován storno poplatek.
        </p>
      </div>
    </section>
  );
}

export default Faq;
