// Router raíz. Envuelve la app en ThemeProvider para gestionar light/dark
// y aplicar la paleta inicial.
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import SectionPage from "./pages/SectionPage.jsx";
import { DEFAULT_SECTION_ID } from "./data/sections.js";
import { DEFAULT_PALETTE } from "./data/palettes.js";
import { ThemeProvider } from "./context/ThemeContext.jsx";

export default function App() {
  return (
    <ThemeProvider palette={DEFAULT_PALETTE}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to={`/${DEFAULT_SECTION_ID}`} replace />} />
          <Route path=":sectionId" element={<SectionPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
