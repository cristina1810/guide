import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Zap, User, Sparkles, ArrowUp, Loader2 } from 'lucide-react';

const PRIMARY = '#095fae';
const PRIMARY_DIM = '#00539b';

const WELCOME =
  '¡Hola! 👋 Bienvenido a tu **Tealium Assistant**. Estoy aquí para ayudarte con dudas técnicas sobre:\n\n' +
  '- 🎯 **Tealium iQ** - Implementación y configuración\n' +
  '- 📊 **EventStream** - Recolección y procesamiento de eventos\n' +
  '- 👥 **AudienceStream** - Gestión de audiencias y CDP\n' +
  '- 🔧 **Certificación Profesional** - Preparación y exámenes\n\n' +
  '¿En qué aspecto de la implementación necesitas profundizar hoy?';

function BotAvatar() {
  return (
    <div
      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-lg"
      style={{ backgroundColor: PRIMARY }}
    >
      <Zap size={14} className="text-white" />
    </div>
  );
}

function UserAvatar() {
  return (
    <div
      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-md"
      style={{ backgroundColor: PRIMARY }}
    >
      <User size={14} className="text-white" />
    </div>
  );
}

function MessageBubble({ message }) {
  if (message.sender === 'system') {
    return (
      <div className="text-center text-xs text-slate-500 uppercase tracking-widest py-4">
        {message.text}
      </div>
    );
  }

  const isUser = message.sender === 'user';

  return (
    <div className={`flex flex-col gap-2 ${isUser ? 'items-end' : 'items-start'}`}>
      <div className={`flex items-center gap-3 ${isUser ? 'mr-4' : 'ml-4'}`}>
        {isUser ? (
          <>
            <span className="text-[0.625rem] font-bold tracking-widest text-slate-500 uppercase">Tú</span>
            <UserAvatar />
          </>
        ) : (
          <>
            <BotAvatar />
            <span className="text-[0.6875rem] font-bold tracking-widest text-slate-500 uppercase">
              Tealium Assistant
            </span>
          </>
        )}
      </div>

      <div
        className={`p-4 rounded-2xl max-w-full transition-all duration-200 ${
          isUser
            ? 'text-white shadow-md'
            : 'bg-white shadow-[0px_8px_24px_rgba(40,52,57,0.08)] border border-slate-100'
        }`}
        style={{
          backgroundColor: isUser ? PRIMARY : 'white',
          color: isUser ? 'white' : '#1e293b',
        }}
      >
        {message.loading ? (
          <div className="flex items-center gap-2">
            <Loader2 size={16} className="animate-spin" />
            <span className="text-sm">Analizando tu pregunta...</span>
          </div>
        ) : isUser ? (
          <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
        ) : (
          <div className="prose prose-sm max-w-none prose-p:my-1 prose-ul:my-1 prose-li:my-0.5">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.text}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}

function ChatInput({ value, setValue, onSubmit, disabled, compact }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && value.trim()) {
      e.preventDefault();
      onSubmit(value.trim());
      setValue('');
    }
  };

  return (
    <footer className={`shrink-0 bg-white border-t border-slate-100 ${compact ? 'p-3' : 'p-6'}`}>
      <div className="relative flex items-center bg-white rounded-2xl shadow-[0px_4px_16px_rgba(9,95,174,0.1)] overflow-hidden border border-slate-100 focus-within:ring-2 focus-within:ring-blue-300 transition-all duration-200">
        <input
          className={`w-full bg-transparent border-none focus:ring-0 text-slate-800 placeholder:text-slate-400 font-medium outline-none ${
            compact ? 'py-3 px-4 text-[0.8125rem]' : 'py-4 px-5 text-sm'
          }`}
          placeholder="Escribe tu consulta técnica aquí..."
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
        />
        <div className={`flex items-center ${compact ? 'pr-2' : 'pr-3'}`}>
          <button
            className={`rounded-xl flex items-center justify-center hover:scale-110 transition-all active:scale-95 shadow-md text-white disabled:opacity-50 disabled:cursor-not-allowed ${compact ? 'w-9 h-9' : 'w-10 h-10'}`}
            style={{
              background: disabled ? '#cbd5e1' : `linear-gradient(135deg, ${PRIMARY} 0%, ${PRIMARY_DIM} 100%)`,
            }}
            onClick={() => {
              if (value.trim() && !disabled) {
                onSubmit(value.trim());
                setValue('');
              }
            }}
            disabled={disabled}
          >
            {disabled ? (
              <Loader2 size={compact ? 16 : 18} className="animate-spin" />
            ) : (
              <ArrowUp size={compact ? 16 : 18} />
            )}
          </button>
        </div>
      </div>
    </footer>
  );
}

export default function Chat({ compact = false }) {
  const [messages, setMessages] = useState([
    { id: 'welcome', sender: 'bot', text: WELCOME },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (text) => {
    if (!text.trim()) return;
    const messageId = `user-${Date.now()}`;
    const respId = `bot-${Date.now()}`;

    setMessages((prev) => [
      ...prev,
      { id: messageId, sender: 'user', text },
      { id: respId, sender: 'bot', text: '', loading: true },
    ]);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, sessionId: 'default' }),
      });
      if (!res.ok) {
        const errorBody = await res.json().catch(() => ({}));
        throw new Error(errorBody?.error || 'Error en el servidor');
      }
      const data = await res.json();
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === respId
            ? { ...msg, text: data.reply || 'No se obtuvo respuesta', loading: false }
            : msg,
        ),
      );
    } catch (error) {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === respId
            ? {
                ...msg,
                text: `❌ **Error de conexión**\n\nNo se pudo conectar al asistente.\n\n**Detalles:** ${error.message}`,
                loading: false,
              }
            : msg,
        ),
      );
    } finally {
      setLoading(false);
    }
  };

  const resetSession = async () => {
    await fetch('/api/chat/reset', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId: 'default' }),
    }).catch(() => null);

    setMessages([{ id: 'welcome', sender: 'bot', text: WELCOME }]);
    setInputValue('');
  };

  return (
    <div
      className="flex flex-col h-full"
      style={{ backgroundColor: '#ffffff' }}
    >
      <header
        className={`flex items-center justify-between shrink-0 border-b border-slate-100 ${compact ? 'h-12 px-4' : 'h-16 px-6'}`}
        style={{ backgroundColor: 'rgba(255,255,255,0.95)' }}
      >
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg" style={{ backgroundColor: `${PRIMARY}15` }}>
            <Sparkles size={compact ? 14 : 16} style={{ color: PRIMARY }} />
          </div>
          <div>
            <h2 className={`font-bold tracking-tight text-slate-900 ${compact ? 'text-xs' : 'text-sm'}`}>
              Tealium Assistant
            </h2>
            <p className="text-[0.625rem] text-slate-500 font-medium">Powered by OpenAI</p>
          </div>
        </div>

        <button
          onClick={resetSession}
          disabled={loading}
          className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Nueva Sesión
        </button>
      </header>

      <section className={`flex-1 overflow-y-auto ${compact ? 'px-4 py-4' : 'px-6 py-6'}`}>
        <div className="flex flex-col gap-4 w-full">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          <div ref={bottomRef} className="h-2" />
        </div>
      </section>

      <ChatInput
        value={inputValue}
        setValue={setInputValue}
        onSubmit={sendMessage}
        disabled={loading}
        compact={compact}
      />
    </div>
  );
}
