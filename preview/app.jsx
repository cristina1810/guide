// App raíz: layout con sidebar fijo + main + chatbot flotante.
// Maneja el routing por hash, la paleta y el modo claro/oscuro.
const { useState: useStateApp, useEffect: useEffectApp } = React;

const DEFAULT_SECTION = "primeros-pasos";

function applyPalette(name, mode) {
  const p = window.PALETTES[name];
  if (!p) return;
  const vars = (mode === "dark" ? p.dark : p.light) || p.light;
  const root = document.documentElement;
  Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
  root.dataset.theme = mode;
}

function getInitialSection() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  const allIds = window.SECTIONS.flatMap((g) => g.children.map((c) => c.id));
  return allIds.includes(hash) ? hash : DEFAULT_SECTION;
}

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "mono",
  "dark": false
}/*EDITMODE-END*/;

function App() {
  const [activeId, setActiveId] = useStateApp(getInitialSection);
  const [t, setTweak] = window.useTweaks(DEFAULTS);
  const mode = t.dark ? "dark" : "light";

  useEffectApp(() => {
    applyPalette(t.palette, mode);
  }, [t.palette, mode]);

  useEffectApp(() => {
    const onHash = () => setActiveId(getInitialSection());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const handleSelect = (id) => {
    setActiveId(id);
    window.location.hash = `/${id}`;
    const main = document.querySelector(".main-scroll");
    if (main) main.scrollTop = 0;
  };

  const toggleDark = () => setTweak("dark", !t.dark);

  const section = window.CONTENT[activeId];

  return (
    <React.Fragment>
      <div className="app-shell">
        <window.Sidebar
          sections={window.SECTIONS}
          activeId={activeId}
          onSelect={handleSelect}
          dark={t.dark}
          onToggleDark={toggleDark}
        />

        <main className="main">
          <div className="main-scroll">
            <div className="main-inner">
              <window.SectionPage section={section} />
            </div>
          </div>
        </main>
      </div>

      <window.Chatbot />

      <window.TweaksPanel title="Tweaks">
        <window.TweakSection title="Paleta de color">
          <div className="tweak-palette-grid">
            {Object.entries(window.PALETTES).map(([key, p]) => {
              const isActive = t.palette === key;
              const swatches = (t.dark ? p.dark : p.light);
              return (
                <button
                  key={key}
                  type="button"
                  className={`tweak-palette ${isActive ? "is-active" : ""}`}
                  onClick={() => setTweak("palette", key)}
                  aria-pressed={isActive}
                >
                  <div className="tweak-palette-swatches">
                    <span style={{ background: swatches["--sidebar-bg"] }} />
                    <span style={{ background: swatches["--bg"], border: "1px solid var(--border)" }} />
                    <span style={{ background: swatches["--accent"] }} />
                  </div>
                  <span className="tweak-palette-label">{p.label}</span>
                </button>
              );
            })}
          </div>
        </window.TweakSection>

        <window.TweakSection title="Tema">
          <window.TweakToggle
            label="Modo oscuro"
            value={t.dark}
            onChange={(v) => setTweak("dark", v)}
          />
        </window.TweakSection>
      </window.TweaksPanel>
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
