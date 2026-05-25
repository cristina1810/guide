import { useState, useEffect } from "react";
import { X, ZoomIn } from "lucide-react";

function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Cerrar"
      >
        <X size={18} />
      </button>
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

export default function StepImage({ src, alt = "", caption }) {
  const [lightbox, setLightbox] = useState(false);

  return (
    <>
      {lightbox && <Lightbox src={src} alt={alt} onClose={() => setLightbox(false)} />}
      <figure className="flex flex-col gap-2">
        <div
          className="relative rounded-lg border border-gray-200 dark:border-zinc-700 overflow-hidden bg-gray-50 dark:bg-zinc-800/50 group cursor-zoom-in"
          onClick={() => setLightbox(true)}
        >
          <div className="absolute top-3 right-3 z-10 flex items-center justify-center w-7 h-7 rounded-md bg-black/60 dark:bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
            <ZoomIn size={14} className="text-white" />
          </div>
          <img
            src={src}
            alt={alt}
            className="w-full h-auto object-contain block"
            loading="lazy"
          />
        </div>
        {caption && (
          <figcaption className="text-center text-xs text-gray-400 dark:text-zinc-500 italic">
            {caption}
          </figcaption>
        )}
      </figure>
    </>
  );
}
