// Layout raíz: sidebar + main (Outlet) + chatbot flotante + drawer overlay.
// Envuelve la app en ExplanationProvider para que cualquier StepCard pueda
// abrir el drawer.
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import Sidebar from "./Sidebar.jsx";
import Chatbot from "./Chatbot.jsx";
import ExplanationDrawer from "./ExplanationDrawer.jsx";
import { ExplanationProvider } from "../context/ExplanationContext.jsx";

export default function Layout() {
  const scrollRef = useRef(null);
  const { pathname } = useLocation();

  // Al cambiar de ruta, vuelve al principio del scroll del main.
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [pathname]);

  return (
    <ExplanationProvider>
      <div className="app-shell">
        <Sidebar />
        <main className="main">
          <div className="main-scroll" ref={scrollRef}>
            <div className="main-inner">
              <Outlet />
            </div>
          </div>
        </main>
      </div>

      <Chatbot />
      <ExplanationDrawer />
    </ExplanationProvider>
  );
}
