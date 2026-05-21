// Sidebar fijo con grupos colapsables. Usa NavLink para marcar la ruta activa.
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { NavLink } from "react-router-dom";
import { ChevronDown, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { SECTIONS } from "../data/sections.js";
import ThemeToggle from "./ThemeToggle.jsx";
import Logo from "../assets/logo.png";

export default function Sidebar() {
  const [open, setOpen] = useState(() =>
    Object.fromEntries(SECTIONS.map((g) => [g.id, true])),
  );
  const [isVisible, setIsVisible] = useState(true);
  const [sent, setSent] = useState(false);
  const textareaRef = useRef(null);

  const toggle = (id) => setOpen((o) => ({ ...o, [id]: !o[id] }));

  const handleSend = () => {
    const text = textareaRef.current?.value?.trim();
    if (!text) return;
    emailjs
      .send(
        "service_qb2ru4g",
        "template_c8yr34o",
        { message: text },
        "enVLjm5cSn10-fxfZ",
      )
      .then(() => {
        textareaRef.current.value = "";
        setSent(true);
        setTimeout(() => setSent(false), 3000);
      })
      .catch(() => {
        alert("No se pudo enviar. Inténtalo de nuevo.");
      });
  };

  return (
    <>
    <aside className={`sidebar${isVisible ? "" : " sidebar-collapsed"}`}>
      <div className="sidebar-brand">
        <div className="">
          <img src={Logo} alt="Tealium Cert Logo" className="w-6 h-6" />
        </div>
        <div className="sidebar-brand-text">
          <div className="sidebar-brand-title">Tealium Certification</div>
          <div className="sidebar-brand-sub">Guía de estudio</div>
        </div>
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          className="sidebar-collapse-btn"
          title="Ocultar sidebar"
          aria-label="Ocultar sidebar"
        >
          <PanelLeftClose size={16} />
        </button>
      </div>

      <nav className="sidebar-nav">
        {SECTIONS.map((group) => (
          <div key={group.id} className="sidebar-group">
            <button
              type="button"
              className="sidebar-group-header"
              onClick={() => toggle(group.id)}
              aria-expanded={open[group.id]}
            >
              <span>{group.label}</span>
              <ChevronDown
                size={14}
                style={{
                  transform: open[group.id] ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 180ms ease",
                  opacity: 0.6,
                }}
              />
            </button>

            <div
              className="sidebar-group-items"
              style={{
                maxHeight: open[group.id]
                  ? `${group.children.length * 40 + 8}px`
                  : "0px",
                opacity: open[group.id] ? 1 : 0,
              }}
            >
              {group.children.map((item) => (
                <NavLink
                  key={item.id}
                  to={`/${item.id}`}
                  className={({ isActive }) =>
                    `sidebar-item ${isActive ? "is-active" : ""}`
                  }
                >
                  <span className="sidebar-item-dot" />
                  <span className="sidebar-item-label">{item.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="sidebar-suggestions">
        <p className="sidebar-suggestions-label">
          ¿Tienes sugerencias de mejora?<br />Escríbemelas aquí
        </p>
        <textarea
          ref={textareaRef}
          className="sidebar-suggestions-input"
          placeholder="Tu sugerencia..."
          rows={3}
        />
        <button
          type="button"
          className={`sidebar-suggestions-btn${sent ? " sidebar-suggestions-btn--sent" : ""}`}
          onClick={handleSend}
        >
          {sent ? "¡Enviado!" : "Enviar"}
        </button>
      </div>

      <div className="sidebar-footer">
        <ThemeToggle />
        <div className="sidebar-footer-meta">v1.0</div>
      </div>
    </aside>

    <button
      type="button"
      onClick={() => setIsVisible(true)}
      className={`sidebar-open-btn${isVisible ? " sidebar-open-btn--hidden" : ""}`}
      title="Mostrar sidebar"
      aria-label="Mostrar sidebar"
    >
      <PanelLeftOpen size={18} />
    </button>
    </>
  );
}
