import { useEffect, useRef, useState } from 'react';

const navLinks = [
  { name: 'Domů', href: '#home', id: 'home' },
  { name: 'Služby', href: '#service', id: 'service' },
  { name: 'O mně', href: '#about', id: 'about' },
  { name: 'Ceník', href: '#price-list', id: 'price-list' },
  { name: 'FAQ', href: '#faq', id: 'faq' },
  { name: 'Kontakt', href: '#contact', id: 'contact' }
];

function Header({ onBook }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuToggleRef = useRef(null);
  const navShellRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 28);

      const position = window.scrollY + 140;
      let current = 'home';

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section && section.offsetTop <= position) {
          current = link.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;

    const toggleEl = menuToggleRef.current;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setMobileMenuOpen(false);
        return;
      }

      if (event.key !== 'Tab') return;

      const root = navShellRef.current;
      if (!root) return;

      const focusables = root.querySelectorAll(
        'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      if (!focusables.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      const isShift = event.shiftKey;
      const active = document.activeElement;

      if (!isShift && active === last) {
        event.preventDefault();
        first.focus();
      } else if (isShift && active === first) {
        event.preventDefault();
        last.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      toggleEl?.focus();
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container header-inner">
          <a href="#home" className="brand" onClick={closeMobileMenu} aria-label="LM Dental domovská stránka">
            <img src="/logo.png" alt="LM Dental" className="brand-logo" />
            <span className="brand-copy">Dentální hygiena</span>
          </a>

          <button
            type="button"
            className={`menu-toggle ${mobileMenuOpen ? 'is-open' : ''}`}
            onClick={() => setMobileMenuOpen((value) => !value)}
            aria-label={mobileMenuOpen ? 'Zavřít navigaci' : 'Otevřít navigaci'}
            aria-expanded={mobileMenuOpen}
            aria-controls="primary-navigation"
            ref={menuToggleRef}
          >
            <span />
            <span />
            <span />
          </button>

          <div
            id="primary-navigation"
            ref={navShellRef}
            className={`header-nav-shell ${mobileMenuOpen ? 'is-open' : ''}`}
          >
            <nav aria-label="Hlavní navigace">
              <ul className="header-nav">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className={activeSection === link.id ? 'is-active' : ''}
                      onClick={closeMobileMenu}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              type="button"
              className="btn btn-primary header-cta"
              onClick={() => {
                closeMobileMenu();
                onBook?.();
              }}
            >
              Objednat termín
            </button>
          </div>
        </div>
      </header>

      <div
        className={`header-overlay ${mobileMenuOpen ? 'is-open' : ''}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />
    </>
  );
}

export default Header;
