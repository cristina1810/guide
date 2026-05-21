// Página de sección. Lee el slug desde la ruta y muestra el contenido
// asociado. Si el slug no existe, redirige a la primera sección.
import { useParams, Navigate } from "react-router-dom";
import { CONTENT } from "../data/content/index.js";
import { DEFAULT_SECTION_ID } from "../data/sections.js";
import StepCard from "../components/StepCard.jsx";

export default function SectionPage() {
  const { sectionId } = useParams();
  const section = CONTENT[sectionId];

  if (!section) {
    return <Navigate to={`/${DEFAULT_SECTION_ID}`} replace />;
  }

  return (
    <div className="section">
      <header className="section-head">
        <div className="section-eyebrow">Tealium iQ</div>
        <h1 className="section-title">{section.title}</h1>
        {typeof section.lead === "string" ? (
          <p className="section-lead">{section.lead}</p>
        ) : section.lead?.pages ? (
          <div className="section-lead">
            <p className="font-medium text-gray-900 mb-2">{section.lead.intro}</p>
            <ul className="grid grid-cols-2 gap-1.5 mb-3">
              {section.lead.pages.map((page) => (
                <li
                  key={page}
                  className="flex items-center gap-2 bg-white rounded-md px-3 py-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  {page}
                </li>
              ))}
            </ul>
            <p className="pt-1 border-t border-gray-100">{section.lead.outro}</p>
          </div>
        ) : (
          <div className="section-lead">{section.lead}</div>
        )}
      </header>

      <div className="section-steps">
        {section.steps.map((step, i) => (
          <StepCard key={i} index={i + 1} step={step} />
        ))}
      </div>
    </div>
  );
}
