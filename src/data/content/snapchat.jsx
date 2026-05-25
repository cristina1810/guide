// Contenido de la sección "Snapchat".
import AddToCartExtension from "../../components/tags/AddToCartExtension.jsx";
import AddToCart from "../../components/tags/AddToCart.jsx";
import SnapPixel from "../../components/tags/SnapPixel.jsx";
import CopyButton from "../../components/tags/UI/CopyButton.jsx";

export const snapchat = {
  title: "Snapchat",
  lead: (
    <>
      <p>Configurar los siguientes eventos en el píxel de Snapchat:</p>

      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-zinc-300">
        <li>Page Views</li>
        <li>Searches</li>
        <li>Add to Cart</li>
      </ul>

      {/* Pixel ID */}
      <div className="flex items-center justify-between gap-2 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded px-3 py-1 my-3">
        <div>
          <span className="text-xs font-medium text-gray-400 dark:text-zinc-500 uppercase tracking-wide">
            Pixel ID
          </span>
          <p className="text-xs text-gray-700 dark:text-zinc-200 font-mono mt-0.5">
            3130cbed-9440-4af6-9184-9c6ca93b8a02
          </p>
        </div>
        <CopyButton text="3130cbed-9440-4af6-9184-9c6ca93b8a02" />
      </div>

      <p>
        La acción de añadir un producto al carrito debe disparar un evento en{" "}
        <strong>Tealium iQ</strong> antes de configurar el tag de Snapchat.
      </p>

      <p>
        Se recomienda instalar la extensión{" "}
        <a
          href="https://chromewebstore.google.com/detail/snap-pixel-helper/hnlbfcoodjpconffdbddfglilhkhpdnf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 dark:text-blue-400 hover:underline"
        >
          Snap Pixel Helper
        </a>{" "}
        para verificar que los eventos se estén enviando correctamente.
      </p>

      <p>
        Al configurar el evento <em>Add to Cart</em>, la cantidad se obtiene
        directamente desde el DOM mediante el siguiente selector:
      </p>

      {/* Código */}
      <div className="bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded overflow-hidden">
        <div className="flex items-center justify-between px-3 py-1.5 border-b border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800">
          <span className="text-xs text-gray-400 dark:text-zinc-500 font-medium">JavaScript</span>
          <CopyButton text="document.querySelector('#qty').value" />
        </div>
        <pre className="px-3 py-2 text-xs text-gray-700 dark:text-zinc-200 font-mono overflow-x-auto">
          {`document.querySelector('#qty').value`}
        </pre>
      </div>
    </>
  ),
  steps: [
    {
      title: "EXTENSIÓN: Add to cart",

      component: AddToCartExtension,
      explicacion:
        "Usa siempre el template oficial del marketplace en lugar de pegar el snippet manualmente. Esto te da el mapping de variables out-of-the-box y se actualiza con las versiones del proveedor.",
    },
    {
      title: "EVENTO: add to cart",
      enunciado: (
        <>
          Este evento se encarga de disparar el evento{" "}
          <strong>Add to Cart</strong> cuando el usuario hace clic en el botón
          de añadir al carrito. Para identificar dicho botón se utiliza su clase
          CSS correspondiente, y se mapean las variables necesarias que serán
          enviadas junto al evento.
        </>
      ),

      component: AddToCart,
      explicacion:
        "El Pixel ID se distingue de un nombre de evento por su formato (UUID o numérico largo). Advanced Matching mejora la atribución enviando email/teléfono hasheados, pero solo actívalo cuando el enunciado lo pide explícitamente.",
    },
    {
      title: "TAG: Snap Pixel",
      enunciado: "FALTA ENUNCIADO!!!",

      component: SnapPixel,
      explicacion:
        "Las exclusiones se modelan con condiciones “!=”. Si hubiese múltiples rutas a excluir, encadena con AND. Evita usar una regla genérica “All Pages” combinada con un extension de bloqueo — es más mantenible la regla directa.",
    },
  ],
};
