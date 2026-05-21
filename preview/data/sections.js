// Estructura de navegación del sidebar.
// El sidebar muestra grupos colapsables. Por ahora hay un único grupo
// (Tealium iQ) pero el componente soporta N grupos para crecer luego.
const SECTIONS = [
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

window.SECTIONS = SECTIONS;
