// Drawer overlay derecho con backdrop oscurecido. Renderiza la explicación
// extendida como Markdown (soporta GFM gracias a remark-gfm).
import { useEffect } from "react";
import { X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useExplanation } from "../context/ExplanationContext.jsx";

export default function ExplanationDrawer() {
  const { open, step, closeExplanation } = useExplanation();

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeExplanation();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeExplanation]);

  return (
    <>
      <div
        className={`drawer-backdrop ${open ? "is-open" : ""}`}
        onClick={closeExplanation}
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
            onClick={closeExplanation}
            aria-label="Cerrar"
          >
            <X size={18} />
          </button>
        </header>

        <div className="drawer-body">
          {step?.explicacion && (
            <div className="prose">
              {typeof step.explicacion === "string" ? (
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {step.explicacion}
                </ReactMarkdown>
              ) : (
                step.explicacion
              )}
            </div>
          )}
        </div>

        <footer className="drawer-foot">
          <div className="drawer-foot-hint">
            <kbd>Esc</kbd>
            <span>para cerrar</span>
          </div>
        </footer>
      </aside>
    </>
  );
}
