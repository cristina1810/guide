// Sidebar fijo a la izquierda con grupos colapsables.
// Recibe: sections, activeId, onSelect, dark, onToggleDark.
const { useState } = React;

function Sidebar({ sections, activeId, onSelect, dark, onToggleDark }) {
  const [open, setOpen] = useState(() =>
    Object.fromEntries(sections.map((g) => [g.id, true]))
  );

  const toggle = (id) => setOpen((o) => ({ ...o, [id]: !o[id] }));

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-brand-mark">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="8" height="8" rx="1.5" fill="currentColor" />
            <rect x="13" y="3" width="8" height="8" rx="1.5" fill="currentColor" opacity="0.5" />
            <rect x="3" y="13" width="8" height="8" rx="1.5" fill="currentColor" opacity="0.5" />
            <rect x="13" y="13" width="8" height="8" rx="1.5" fill="currentColor" />
          </svg>
        </div>
        <div className="sidebar-brand-text">
          <div className="sidebar-brand-title">Tealium Cert</div>
          <div className="sidebar-brand-sub">Guía de estudio</div>
        </div>
      </div>

      <nav className="sidebar-nav">
        {sections.map((group) => (
          <div key={group.id} className="sidebar-group">
            <button
              type="button"
              className="sidebar-group-header"
              onClick={() => toggle(group.id)}
              aria-expanded={open[group.id]}
            >
              <span>{group.label}</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transform: open[group.id] ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 180ms ease",
                  opacity: 0.6,
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            <div
              className="sidebar-group-items"
              style={{
                maxHeight: open[group.id] ? `${group.children.length * 40 + 8}px` : "0px",
                opacity: open[group.id] ? 1 : 0,
              }}
            >
              {group.children.map((item) => {
                const active = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`sidebar-item ${active ? "is-active" : ""}`}
                    onClick={() => onSelect(item.id)}
                  >
                    <span className="sidebar-item-dot" />
                    <span className="sidebar-item-label">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="theme-toggle" role="group" aria-label="Tema">
          <button
            type="button"
            className={`theme-toggle-btn ${!dark ? "is-active" : ""}`}
            onClick={() => onToggleDark && dark && onToggleDark()}
            aria-pressed={!dark}
            aria-label="Modo claro"
            title="Modo claro"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          </button>
          <button
            type="button"
            className={`theme-toggle-btn ${dark ? "is-active" : ""}`}
            onClick={() => onToggleDark && !dark && onToggleDark()}
            aria-pressed={dark}
            aria-label="Modo oscuro"
            title="Modo oscuro"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
        </div>
        <div className="sidebar-footer-meta">2026</div>
      </div>
    </aside>
  );
}

window.Sidebar = Sidebar;
