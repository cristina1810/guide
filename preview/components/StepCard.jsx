// Tarjeta de un paso dentro de una sección.
// Recibe: index, step { title, enunciado, solucion[], explicacion }, onExplain.
function StepCard({ index, step, onExplain }) {
  return (
    <article className="step-card">
      <header className="step-card-head">
        <div className="step-card-head-left">
          <div className="step-index">
            <span>{String(index).padStart(2, "0")}</span>
          </div>
          <h3 className="step-title">{step.title}</h3>
        </div>
        <button
          type="button"
          className="step-explain-btn"
          onClick={() => onExplain(step)}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          Ver explicación
        </button>
      </header>

      <div className="step-card-body">
        <div className="step-block">
          <div className="step-block-label">Enunciado</div>
          <p className="step-block-text">{step.enunciado}</p>
        </div>

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
      </div>
    </article>
  );
}

window.StepCard = StepCard;
