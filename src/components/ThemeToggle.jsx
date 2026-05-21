// Toggle de tema claro/oscuro. Segmented control con dos iconos.
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";

export default function ThemeToggle() {
  const { isDark, setMode } = useTheme();

  return (
    <div className="theme-toggle" role="group" aria-label="Tema">
      <button
        type="button"
        className={`theme-toggle-btn ${!isDark ? "is-active" : ""}`}
        onClick={() => setMode("light")}
        aria-pressed={!isDark}
        aria-label="Modo claro"
        title="Modo claro"
      >
        <Sun size={13} />
      </button>
      <button
        type="button"
        className={`theme-toggle-btn ${isDark ? "is-active" : ""}`}
        onClick={() => setMode("dark")}
        aria-pressed={isDark}
        aria-label="Modo oscuro"
        title="Modo oscuro"
      >
        <Moon size={13} />
      </button>
    </div>
  );
}
