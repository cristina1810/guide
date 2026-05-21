// Chatbot flotante, siempre visible en la esquina inferior derecha.
// Estilo elegido: burbuja oscura compacta que al pulsar expande un panel
// con mensajes mock. No hay lógica real de OpenAI — se cablea luego.
const { useState: useStateBot, useRef: useRefBot, useEffect: useEffectBot } = React;

const MOCK_INITIAL = [
  {
    role: "bot",
    text:
      "Hola 👋 Soy tu asistente para la certificación de Tealium iQ. Pregúntame sobre cualquier paso de la guía o sobre la consola.",
  },
];

function Chatbot() {
  const [open, setOpen] = useStateBot(false);
  const [messages, setMessages] = useStateBot(MOCK_INITIAL);
  const [draft, setDraft] = useStateBot("");
  const bodyRef = useRefBot(null);

  useEffectBot(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, open]);

  const send = (e) => {
    e?.preventDefault?.();
    const text = draft.trim();
    if (!text) return;
    const next = [
      ...messages,
      { role: "user", text },
      {
        role: "bot",
        text:
          "Esta es una respuesta de ejemplo. Cuando conectes la API de OpenAI desde /api/chat el bot responderá con contexto real.",
      },
    ];
    setMessages(next);
    setDraft("");
  };

  return (
    <div className="chatbot-root">
      {open && (
        <div className="chatbot-panel" role="dialog" aria-label="Asistente">
          <header className="chatbot-head">
            <div className="chatbot-head-left">
              <div className="chatbot-avatar">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div>
                <div className="chatbot-title">Asistente Tealium</div>
                <div className="chatbot-sub">
                  <span className="chatbot-dot" /> En línea
                </div>
              </div>
            </div>
            <button
              type="button"
              className="chatbot-close"
              onClick={() => setOpen(false)}
              aria-label="Cerrar chat"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </header>

          <div className="chatbot-body" ref={bodyRef}>
            {messages.map((m, i) => (
              <div key={i} className={`chatbot-msg is-${m.role}`}>
                <div className="chatbot-bubble">{m.text}</div>
              </div>
            ))}
          </div>

          <form className="chatbot-input" onSubmit={send}>
            <input
              type="text"
              placeholder="Pregunta lo que necesites…"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
            />
            <button type="submit" aria-label="Enviar">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        className={`chatbot-fab ${open ? "is-open" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Cerrar chat" : "Abrir chat"}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>
    </div>
  );
}

window.Chatbot = Chatbot;
