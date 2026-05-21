// Contexto del tema (light / dark). Persiste en localStorage y aplica
// la paleta correspondiente cada vez que cambia.
import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { applyPalette, DEFAULT_PALETTE } from "../data/palettes.js";

const STORAGE_KEY = "tealium-cert:theme";
const ThemeContext = createContext(null);

function getInitialMode() {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  // Fallback: respeta la preferencia del sistema en la primera visita.
  if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) return "dark";
  return "light";
}

export function ThemeProvider({ children, palette = DEFAULT_PALETTE }) {
  const [mode, setMode] = useState(getInitialMode);

  // Aplica la paleta + modo cada vez que cambia cualquiera de los dos.
  useEffect(() => {
    applyPalette(palette, mode);
  }, [palette, mode]);

  // Persiste el modo.
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // ignore (storage deshabilitado, modo privado, etc.)
    }
  }, [mode]);

  const toggle = useCallback(
    () => setMode((m) => (m === "dark" ? "light" : "dark")),
    []
  );

  return (
    <ThemeContext.Provider value={{ mode, setMode, toggle, isDark: mode === "dark" }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme debe usarse dentro de <ThemeProvider>");
  return ctx;
}
