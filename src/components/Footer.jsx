function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-block">
          <a href="#home" aria-label="LM Dental" className="footer-logo-link">
            <img src="/logo.png" alt="LM Dental" className="footer-logo" width="192" height="128" decoding="async" />
          </a>
        </div>

        <nav className="footer-col footer-menu" aria-label="Navigace">
          <p className="footer-heading">Menu</p>
          <a href="#service">Služby</a>
          <a href="#price-list">Ceník</a>
          <a href="#about">O nás</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Kontakt</a>
        </nav>

        <div className="footer-col footer-contact">
          <p className="footer-heading">Kontakt</p>
          <a href="tel:123456789">123 456 789</a>
          <a href="mailto:info@lmdental.cz">info@lmdental.cz</a>
          <a
            className="footer-address"
            href="https://www.google.com/maps/search/?api=1&query=Ringhofferova%20422%2C%20Kamenice"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Otevrit adresu v Google Maps"
          >
            Ringhofferova 422, Kamenice u Prahy
          </a>
        </div>

        <div className="footer-col footer-follow">
          <p className="footer-heading">Sledujte nás</p>
          <div className="footer-social">
            <a
              className="footer-social-link"
              href="https://www.instagram.com/lmdental_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm4.5 4.25a5.75 5.75 0 1 1 0 11.5a5.75 5.75 0 0 1 0-11.5Zm0 2a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5Zm6.05-2.65a1.2 1.2 0 1 1-2.4 0a1.2 1.2 0 0 1 2.4 0Z"
                  fill="currentColor"
                />
              </svg>
              <span>Instagram</span>
            </a>
            <a
              className="footer-social-link"
              href="https://www.facebook.com/profile.php?id=61587033856891"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  d="M13.5 22v-8h2.8l.6-3H13.5V9.1c0-.9.3-1.6 1.7-1.6H17V4.7c-.3 0-1.5-.2-2.9-.2c-2.8 0-4.6 1.7-4.6 4.9V11H6.8v3h2.7v8h4Z"
                  fill="currentColor"
                />
              </svg>
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p className="footer-copy">&copy; {new Date().getFullYear()} LM Dental. Všechna práva vyhrazena.</p>
      </div>
    </footer>
  );
}

export default Footer;
