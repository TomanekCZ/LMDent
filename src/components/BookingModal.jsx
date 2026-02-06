import { useEffect } from 'react';

function BookingModal({ open, url, onClose }) {
  useEffect(() => {
    if (!open) return undefined;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-overlay" role="presentation" onClick={onClose}>
      <div
        className="modal-shell"
        role="dialog"
        aria-modal="true"
        aria-label="Rezervace termínu"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-head">
          <div className="modal-title">
            <strong>Rezervace termínu</strong>
            <span>Rezervační systém se otevře přímo na stránce.</span>
          </div>

          <div className="modal-actions">
            <a href={url} target="_blank" rel="noreferrer" className="btn btn-secondary">
              Otevřít v novém okně
            </a>
            <button type="button" className="modal-close" onClick={onClose} aria-label="Zavřít">
              ×
            </button>
          </div>
        </div>

        <div className="modal-body">
          <iframe title="Rezervace" src={url} className="modal-iframe" loading="lazy" />
        </div>
      </div>
    </div>
  );
}

export default BookingModal;

