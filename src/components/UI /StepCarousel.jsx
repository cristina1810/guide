import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

function Lightbox({ src, alt, onClose }) {
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") { if (zoomed) setZoomed(false); else onClose(); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, zoomed]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-sm ${zoomed ? "overflow-auto" : "flex items-center justify-center p-4"}`}
      onClick={() => { if (zoomed) setZoomed(false); else onClose(); }}
    >
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="fixed top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
        aria-label="Cerrar"
      >
        <X size={18} />
      </button>
      <img
        src={src}
        alt={alt}
        className={`rounded-lg shadow-2xl transition-all duration-200 ${zoomed ? "w-auto max-w-none m-8 cursor-zoom-out" : "max-w-full max-h-[90vh] object-contain cursor-zoom-in"}`}
        style={zoomed ? { minWidth: "150%" } : {}}
        onClick={(e) => { e.stopPropagation(); setZoomed((z) => !z); }}
      />
    </div>
  );
}

export default function StepCarousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrent((i) => (i + 1) % images.length);

  const { src, alt = "", caption } = images[current];

  return (
    <>
      {lightbox && <Lightbox src={src} alt={alt} onClose={() => setLightbox(false)} />}

      <div className="flex flex-col gap-3 max-w-lg mx-auto">
        <div className="relative rounded-lg border border-gray-200 dark:border-zinc-700 overflow-hidden bg-gray-50 dark:bg-zinc-800/50 group cursor-zoom-in"
          onClick={() => setLightbox(true)}
        >
          {/* Número de paso */}
          <div className="absolute top-3 left-3 z-10 flex items-center justify-center w-7 h-7 rounded-md bg-black/60 dark:bg-black/70 backdrop-blur-sm">
            <span className="font-mono text-xs font-bold text-white leading-none">
              {String(current + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Icono zoom */}
          <div className="absolute top-3 right-3 z-10 flex items-center justify-center w-7 h-7 rounded-md bg-black/60 dark:bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
            <ZoomIn size={14} className="text-white" />
          </div>

          {/* Imagen */}
          <img
            key={current}
            src={src}
            alt={alt}
            className="w-full h-auto object-contain block"
            loading="lazy"
          />

          {/* Flechas — detienen la propagación para no abrir el lightbox */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 dark:bg-black/60 text-white hover:bg-black/60 dark:hover:bg-black/80 transition-colors backdrop-blur-sm"
                aria-label="Anterior"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 dark:bg-black/60 text-white hover:bg-black/60 dark:hover:bg-black/80 transition-colors backdrop-blur-sm"
                aria-label="Siguiente"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}
        </div>

        {caption && (
          <p className="text-center text-xs text-gray-400 dark:text-zinc-500 italic">{caption}</p>
        )}

        {images.length > 1 && (
          <div className="flex items-center justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Ir a imagen ${i + 1}`}
                className={`flex items-center justify-center rounded-full transition-all duration-200 font-mono font-bold ${
                  i === current
                    ? "w-4.5 h-4.5 text-[10px] bg-gray-700 dark:bg-zinc-200 text-white dark:text-zinc-900"
                    : "w-1.5 h-1.5 bg-gray-300 dark:bg-zinc-600 hover:bg-gray-400 dark:hover:bg-zinc-500 text-transparent text-[0px]"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
