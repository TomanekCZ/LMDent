import { useEffect, useRef, useState } from 'react';

const INSTAGRAM_URL = 'https://www.instagram.com/lmdental_/';
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61587033856891';

const navLinks = [
  { name: 'Domů', href: '#home', id: 'home' },
  { name: 'Služby', href: '#service', id: 'service' },
  { name: 'O nás', href: '#about', id: 'about' },
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

          <div className="header-actions">
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

              <div className="header-drawer-footer" aria-label="Rychlé akce">
                <div className="mobile-menu-divider" aria-hidden="true" />
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

                <div className="mobile-menu-divider" aria-hidden="true" />
                <div className="drawer-social" aria-label="Sociální sítě">
                  <div className="drawer-social-title">Sledujte nás</div>
                  <div className="drawer-social-links">
                    <a
                      className="drawer-social-link"
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram LM Dental"
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
                      className="drawer-social-link"
                      href={FACEBOOK_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook LM Dental"
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
            </div>

            <a
              className="header-social-link"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram LM Dental"
              title="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm4.5 4.25a5.75 5.75 0 1 1 0 11.5a5.75 5.75 0 0 1 0-11.5Zm0 2a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5Zm6.05-2.65a1.2 1.2 0 1 1-2.4 0a1.2 1.2 0 0 1 2.4 0Z"
                  fill="currentColor"
                />
              </svg>
            </a>
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
