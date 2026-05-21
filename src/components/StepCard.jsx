// Tarjeta de un paso. Lanza el drawer de explicación a través del contexto.
import { Info } from "lucide-react";
import { useExplanation } from "../context/ExplanationContext.jsx";
import Callout from "./UI /Callout.jsx";
import StepImage from "./UI /StepImage.jsx";
import StepCarousel from "./UI /StepCarousel.jsx";

export default function StepCard({ index, step }) {
  const { openExplanation } = useExplanation();

  return (
    <article className="step-card">
      <header className="step-card-head">
        <div className="step-card-head-left">
          <div className="step-index">
            <span>{String(index).padStart(2, "0")}</span>
          </div>
          <h3 className="step-title">{step.title}</h3>
        </div>
        {step.explicacion && (
          <button
            type="button"
            className="step-explain-btn"
            onClick={() => openExplanation(step)}
          >
            <Info size={14} />
            Ver explicación
          </button>
        )}
      </header>

      <div className="step-card-body">
        {step.enunciado && (
          <div className="step-block">
            <div className="step-block-label">Enunciado</div>
            {typeof step.enunciado === "string" ? (
              <p className="step-block-text">{step.enunciado}</p>
            ) : (
              <div className="step-block-text">{step.enunciado}</div>
            )}
          </div>
        )}

        {step.solucion && (
          <div className="step-block">
            <div className="step-block-label">Solución</div>
            <ol className="step-solution">
              {step.solucion.map((s, i) => (
                <li key={i}>
                  <span className="step-solution-num">{i + 1}</span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {step.texto && (
          typeof step.texto === "string"
            ? <p className="step-block-text">{step.texto}</p>
            : <div className="step-block-text">{step.texto}</div>
        )}

        {step.lista && (
          <ol className="step-solution">
            {step.lista.map((s, i) => (
              <li key={i}>
                <span className="step-solution-num">{i + 1}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        )}

        {step.texto2 && (
          typeof step.texto2 === "string"
            ? <p className="step-block-text">{step.texto2}</p>
            : <div className="step-block-text">{step.texto2}</div>
        )}

        {step.lista2 && (
          <ol className="step-solution">
            {step.lista2.map((s, i) => (
              <li key={i}>
                <span className="step-solution-num">{i + 1}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        )}

        {step.imagen && (
          Array.isArray(step.imagen)
            ? <StepCarousel images={step.imagen} />
            : <StepImage {...step.imagen} />
        )}

        {step.callout && (
          <Callout type={step.callout.type} title={step.callout.title}>
            {step.callout.text}
          </Callout>
        )}

        {step.component && (() => {
          const StepComponent = step.component;
          return (
            <div className="step-block">
              <div className="step-block-label">Referencia visual</div>
              <div className="step-component-wrap">
                <StepComponent />
              </div>
            </div>
          );
        })()}
      </div>
    </article>
  );
}
