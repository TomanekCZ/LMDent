function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-brand">LM Dental</p>

        <div className="footer-links" aria-label="Rychlé odkazy">
          <a href="#service">Služby</a>
          <a href="#price-list">Ceník</a>
          <a href="#faq">FAQ</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>

        <p className="footer-copy">© {new Date().getFullYear()} LM Dental. Všechna práva vyhrazena.</p>
      </div>
    </footer>
  );
}

export default Footer;
