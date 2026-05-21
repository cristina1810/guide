// Drawer overlay derecho con backdrop oscurecido.
// Recibe: open, onClose, step (puede ser null mientras se cierra).
const { useEffect: useEffectDrawer } = React;

function ExplanationDrawer({ open, onClose, step }) {
  useEffectDrawer(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <React.Fragment>
      <div
        className={`drawer-backdrop ${open ? "is-open" : ""}`}
        onClick={onClose}
        aria-hidden={!open}
      />
      <aside
        className={`drawer ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Explicación extendida"
      >
        <header className="drawer-head">
          <div>
            <div className="drawer-eyebrow">Explicación</div>
            <h2 className="drawer-title">{step?.title || ""}</h2>
          </div>
          <button
            type="button"
            className="drawer-close"
            onClick={onClose}
            aria-label="Cerrar"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </header>

        <div className="drawer-body">
          {step?.explicacion?.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <footer className="drawer-foot">
          <div className="drawer-foot-hint">
            <kbd>Esc</kbd>
            <span>para cerrar</span>
          </div>
        </footer>
      </aside>
    </React.Fragment>
  );
}

window.ExplanationDrawer = ExplanationDrawer;
