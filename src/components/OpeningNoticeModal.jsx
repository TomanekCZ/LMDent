import { useEffect, useRef } from 'react';

import mapsIcon from '../images/maps.webp';

const STORAGE_KEY = 'lmdental_opening_notice_v1_dismissed';

function OpeningNoticeModal({ open, onClose }) {
  const ctaRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    // focus the primary action so keyboard users can continue immediately
    const t = window.setTimeout(() => ctaRef.current?.focus(), 0);

    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const dismiss = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // ignore
    }
    onClose();
  };

  return (
    <div className="modal-overlay notice-overlay" role="presentation" onClick={dismiss}>
      <div
        className="modal-shell notice-shell"
        role="dialog"
        aria-modal="true"
        aria-label="Oznámení o plánovaném otevření"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="notice-head">
          <img className="notice-logo" src="/logo.png" alt="LM Dental" width="192" height="128" decoding="async" />
          <p className="notice-kicker" aria-label="Oznámení: Nově v Kamenici">
            Nově v Kamenici
          </p>
          <button type="button" className="modal-close" onClick={dismiss} aria-label="Zavřít">
            ×
          </button>
        </div>

        <div className="notice-body" role="document">
          <h2 className="notice-title">Otevíráme dentální hygienu</h2>
          <p className="notice-lead">
            Připravujeme novou dentální hygienu v Kamenici u Prahy. Jakmile budeme mít přesný termín otevření a
            spuštěné objednávání, dáme vědět.
          </p>

          <dl className="notice-facts">
            <div>
              <dt>Plánované otevření</dt>
              <dd>Během jara 2026</dd>
            </div>
            <div>
              <dt>Adresa</dt>
              <dd>
                <a
                  className="notice-address-link"
                  href="https://www.google.com/maps/search/?api=1&query=Ringhofferova%20422%2C%20251%2068%20Kamenice"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="notice-address-icon" src={mapsIcon} alt="" aria-hidden="true" decoding="async" />
                  Ringhofferova 422, Kamenice u Prahy
                </a>
              </dd>
            </div>
          </dl>

          <div className="notice-actions">
            <button ref={ctaRef} type="button" className="btn btn-primary" onClick={dismiss}>
              Pokračovat na web
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { STORAGE_KEY };
export default OpeningNoticeModal;
