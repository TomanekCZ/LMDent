function Map() {
  const addressLabel = 'Ringhofferova 422, Kamenice';
  const addressQuery = encodeURIComponent('Ringhofferova 422, 251 68 Kamenice');
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;
  const mapyCzUrl = `https://mapy.cz/zakladni?q=${addressQuery}`;

  return (
    <section id="contact" className="section section-contact">
      <div className="container">
        <div className="section-intro animate-on-scroll">
          <p className="section-kicker">Kontakt</p>
          <h2>Domluvíme termín, který vám sedí</h2>
          <p>
            Ordinace se nachází na adrese Ringhofferova 422, Kamenice. Zavolejte, napište e-mail nebo se stavte po
            předchozí domluvě.
          </p>
        </div>

        <div className="contact-layout">
          <aside className="contact-card animate-on-scroll" style={{ transitionDelay: '90ms' }}>
            <div className="contact-info" aria-label="Kontaktní údaje">
              <a href="tel:123456789" className="contact-info-row">
                <span className="contact-info-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path
                      d="M6.6 3.8l2.4-.9c.4-.1.8 0 1 .4l2 4.8c.2.4.1.8-.2 1.1L10.4 10c.9 2 2.5 3.6 4.5 4.5l1-1.4c.2-.3.7-.4 1.1-.2l4.8 2c.4.2.6.6.4 1l-.9 2.4c-.2.4-.6.6-1 .6C12.3 19.1 4.9 11.7 6 4.4c0-.4.2-.8.6-1z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="contact-info-text">
                  <span className="contact-info-label">Telefon</span>
                  <span className="contact-info-value">123 456 789</span>
                </span>
              </a>

              <a href="mailto:info@lmdental.cz" className="contact-info-row">
                <span className="contact-info-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path
                      d="M4 6.8C4 5.8 4.8 5 5.8 5h12.4C19.2 5 20 5.8 20 6.8v10.4c0 1-.8 1.8-1.8 1.8H5.8C4.8 19 4 18.2 4 17.2V6.8zm1.9-.3l6.1 4.4 6.1-4.4H5.9zm12.6 1.3l-6 4.3c-.3.2-.7.2-1 0l-6-4.3v9.4c0 .2.2.4.4.4h12.4c.2 0 .4-.2.4-.4V7.8z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="contact-info-text">
                  <span className="contact-info-label">E-mail</span>
                  <span className="contact-info-value">info@lmdental.cz</span>
                </span>
              </a>

              <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="contact-info-row">
                <span className="contact-info-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path
                      d="M12 2.6c3.4 0 6.1 2.7 6.1 6.1 0 4.4-4.7 10.8-5.6 12-.2.3-.6.3-.8 0-.9-1.2-5.6-7.6-5.6-12 0-3.4 2.7-6.1 6-6.1zm0 3.2a3 3 0 100 6 3 3 0 000-6z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="contact-info-text">
                  <span className="contact-info-label">Adresa</span>
                  <span className="contact-info-value">{addressLabel}</span>
                </span>
              </a>
            </div>

            <div className="contact-block">
              <h3>Ordinační hodiny</h3>
              <dl className="hours-grid">
                <div>
                  <dt>Po</dt>
                  <dd>8:00–14:00</dd>
                </div>
                <div>
                  <dt>Út</dt>
                  <dd>8:00–14:00</dd>
                </div>
                <div>
                  <dt>St</dt>
                  <dd>8:00–14:00</dd>
                </div>
                <div>
                  <dt>Čt</dt>
                  <dd>8:00–14:00</dd>
                </div>
                <div>
                  <dt>Pá</dt>
                  <dd>8:00–14:00</dd>
                </div>
              </dl>
            </div>

            <div className="contact-actions">
              <div className="contact-actions-primary">
                <a href="tel:123456789" className="btn btn-primary">
                  Zavolat
                </a>
                <a href="mailto:info@lmdental.cz" className="btn btn-secondary">
                  Napsat e-mail
                </a>
              </div>
            </div>

          </aside>

          <div className="contact-map-wrap">
            <div className="contact-map animate-on-scroll" style={{ transitionDelay: '140ms' }}>
              <iframe
                title="Mapa LM Dental"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.0!2d14.5833!3d49.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRinghofferova+422%2C+Kamenice!5e0!3m2!1scs!2scz"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="map-under animate-on-scroll" style={{ transitionDelay: '170ms' }}>
              <div className="contact-actions-subtitle" aria-hidden="true">
                Otevřít v mapách
              </div>

              <div className="contact-actions-maps" aria-label="Otevřít mapu">
                <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
                  <span className="contact-mini-badge" aria-hidden="true">
                    G
                  </span>
                  Google Maps
                </a>
                <a href={mapyCzUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
                  <span className="contact-mini-badge" aria-hidden="true">
                    <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                      <path
                        d="M12 2.6c3.4 0 6.1 2.7 6.1 6.1 0 4.4-4.7 10.8-5.6 12-.2.3-.6.3-.8 0-.9-1.2-5.6-7.6-5.6-12 0-3.4 2.7-6.1 6-6.1zm0 3.2a3 3 0 100 6 3 3 0 000-6z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  Mapy.cz
                </a>
              </div>

              <div className="contact-parking" aria-label="Parkování">
                <div className="contact-parking-head">
                  <span className="contact-parking-icon" aria-hidden="true">
                    P
                  </span>
                  <strong>Parkování</strong>
                </div>
                <p>Pohodlné parkování je k dispozici přímo před budovou kliniky.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Map;
