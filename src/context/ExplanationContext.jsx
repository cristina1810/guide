// Contexto para abrir/cerrar el drawer de "Ver explicación" desde cualquier
// nivel del árbol (StepCard lanza, ExplanationDrawer escucha).
import { createContext, useContext, useState, useCallback } from "react";

const ExplanationContext = createContext(null);

export function ExplanationProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(null);

  const openExplanation = useCallback((nextStep) => {
    setStep(nextStep);
    setOpen(true);
  }, []);

  const closeExplanation = useCallback(() => setOpen(false), []);

  return (
    <ExplanationContext.Provider
      value={{ open, step, openExplanation, closeExplanation }}
    >
      {children}
    </ExplanationContext.Provider>
  );
}

export function useExplanation() {
  const ctx = useContext(ExplanationContext);
  if (!ctx)
    throw new Error("useExplanation debe usarse dentro de <ExplanationProvider>");
  return ctx;
}
