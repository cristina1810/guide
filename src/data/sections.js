// Estructura de navegación. Cada grupo tiene N children que apuntan a una
// ruta `/<id>`. Añade nuevos grupos o ítems aquí — el sidebar los renderiza
// automáticamente.
export const SECTIONS = [
  {
    id: "tealium-iq",
    label: "Tealium iQ",
    children: [
      { id: "primeros-pasos", label: "Primeros pasos e Interfaz" },
      { id: "config-general", label: "Configuración general" },
      { id: "snapchat", label: "Snapchat" },
      { id: "chatling", label: "Chatling" },
      { id: "ga4", label: "Google Analytics 4" },
    ],
  },
];

// El primer ítem se usa como ruta por defecto.
export const DEFAULT_SECTION_ID = SECTIONS[0].children[0].id;
