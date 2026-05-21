// Contenido de la sección "Google Analytics 4".
import GA4Tag from "../../components/tags/GA4Tag.jsx";
import GA4ID from "../../components/tags/GA4ID.jsx";

export const ga4 = {
  title: "Google Analytics 4",
  lead:
    "Configura GA4 vía el template oficial de Tealium y mapea los eventos clave del ecommerce del enunciado.",
  steps: [
    {
      title: "1. Añadir el tag de GA4",
      enunciado: "Añade el tag Google Analytics 4 desde el marketplace.",
      solucion: [
        "Tags → Add Tag → Google Analytics 4.",
        "Selecciona la versión más reciente del template.",
        "Tag Name: GA4 — Web Stream.",
      ],
      component: GA4ID,
      explicacion:
        "GA4 tiene dos templates en el marketplace (Web y App). Usa siempre Web para sitios. La versión más reciente trae el modelo de consent v2 ya integrado.",
    },
    {
      title: "2. Configurar el Measurement ID",
      enunciado: "Configura el Measurement ID indicado en el enunciado.",
      solucion: [
        "Configuration → Measurement ID = G-XXXXXXXXXX.",
        "Send Page View = false (lo dispararemos manualmente).",
        "Activa Debug Mode si el enunciado lo pide.",
      ],
      component: GA4Tag,
      explicacion:
        "Desactivar el page_view automático te permite controlar exactamente cuándo se envía y con qué parámetros. Es el patrón recomendado para sitios SPA o donde necesites enriquecer el evento.",
    },
    
  ],
};
