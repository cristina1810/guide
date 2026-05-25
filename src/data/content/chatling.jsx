// Contenido de la sección "Chatling".
import Chatling from "../../components/tags/Chatling.jsx";
import SearchExistRule from "../../components/tags/SearchExistRule.jsx";
import CopyButton from "../../components/tags/UI/CopyButton.jsx";
import { File } from "lucide-react";
export const chatling = {
  title: "Chatling",
  lead: (
    <>
      {" "}
      <p>
        La página de{" "}
        <a
          href="#"
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline underline-offset-2"
        >
          ecommerce de Tealium
        </a>{" "}
        requiere habilitar un chatbot de{" "}
        <span className="font-medium ">Chatling</span>, el cual no está
        disponible en el Marketplace. Este tag carga un chatbot potenciado por
        OpenAI, permitiendo a los clientes consultar sobre los productos
        directamente desde la página.
      </p>
      {/* Condiciones */}
      <div className="bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-800/30 rounded-lg p-3">
        <p className="font-semibold text-amber-800 dark:text-amber-300 mb-2">
          Condiciones de activación
        </p>
        <ul className="list-disc list-inside space-y-1 text-amber-700 dark:text-amber-400">
          <li>Se haya realizado una búsqueda</li>
          <li>Existan resultados disponibles</li>
        </ul>
        <p className="text-amber-600 dark:text-amber-500 mt-2">
          Ambas condiciones deben cumplirse.
        </p>
      </div>
      {/* Snippet */}
      <div>
        <p className="font-semibold text-gray-800 dark:text-zinc-100 mb-2">Tag Snippet</p>
        <div className="border border-slate-200 dark:border-zinc-700 rounded-lg p-3 flex items-center justify-between gap-3 group">
          <code className="text-green-600 dark:text-green-400 text-xs font-mono break-all leading-relaxed">
            {`<script async data-id="2367823816" id="chatling-embed-script" type="text/javascript" src="https://chatling.ai/js/embed.js"></script>`}
          </code>
          <CopyButton
            text={`<script async data-id="2367823816" id="chatling-embed-script" type="text/javascript" src="https://chatling.ai/js/embed.js"></script>`}
          />
        </div>
      </div>
      {/* Documentación */}
      <p className="text-gray-500 dark:text-zinc-400 text-xs inline-flex items-center gap-1">
        <File size={13} className="mr-1" /> Consulta la{" "}
        <a
          href="https://docs.tealium.com/iq-tag-management/tags/tealium-generic-tag/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium underline underline-offset-2"
        >
          documentación oficial de Tealium Generic Tag
        </a>{" "}
        para más detalles.
      </p>
    </>
  ),
  steps: [
    {
      title: "LOAD RULE: search and search exists",
      enunciado:
        "Regla de carga que permite activar el chatbot únicamente en las condiciones elegidas (en este caso, que se haya realizado una búsqueda y existan resultados).",

      component: SearchExistRule,
      explicacion:
        "Para proveedores sin template oficial usa siempre Generic Tag o Tealium Custom Container. Evita pegar el snippet directo en el head de la web — pierdes control de versiones y de cuándo se carga.",
    },
    {
      title: "TAG: Chatling",
      enunciado: (
        <>
          <div className="px-5 py-4 border-t border-gray-100 dark:border-zinc-800 space-y-4">
            {/* Descripción principal */}
            <p className="text-slate-600 dark:text-zinc-300 text-sm leading-relaxed">
              Como Chatling no está disponible en el Marketplace de Tealium, la
              extensión se configura usando un{" "}
              <span className="font-semibold text-slate-800 dark:text-zinc-100">
                Tealium Generic Tag
              </span>
              . Los valores necesarios se extraen directamente del snippet
              proporcionado por el vendor: el atributo{" "}
              <code className="bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 px-1 py-0.5 rounded text-xs font-mono">
                src
              </code>{" "}
              corresponde al{" "}
              <span className="font-medium text-slate-800 dark:text-zinc-100">Base URL</span>, y el
              resto de atributos se mapean según la documentación como{" "}
              <strong>Custom Variable</strong>.
            </p>

            {/* Snippet con anotaciones */}
            <div className="space-y-2">
              <p className="text-xs font-semibold text-slate-500 dark:text-zinc-400 uppercase tracking-wide">
                Snippet:
              </p>

              {/* Bloque de código */}
              <div className="bg-slate-100 dark:bg-zinc-800 rounded-lg p-4 font-mono text-xs leading-relaxed overflow-x-auto">
                <span className="text-slate-500 dark:text-zinc-400">&lt;script </span>
                <span className="text-slate-400 dark:text-zinc-500">async </span>

                {/* data-id highlight */}
                <span className="bg-violet-500/10 dark:bg-violet-500/15 text-violet-600 dark:text-violet-400 rounded px-0.5">
                  data-id=
                  <span className="text-violet-400 dark:text-violet-300 font-semibold">
                    "2367823816"
                  </span>
                </span>
                <span className="text-slate-500 dark:text-zinc-400"> </span>

                {/* id highlight */}
                <span className="bg-blue-500/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 rounded px-0.5">
                  id=
                  <span className="text-blue-400 dark:text-blue-300 font-semibold">
                    "chatling-embed-script"
                  </span>
                </span>

                <span className="text-slate-400 dark:text-zinc-500"> type="text/javascript" </span>

                {/* src / Base URL highlight */}
                <span className="text-slate-500 dark:text-zinc-400">src=</span>
                <span className="text-slate-500 dark:text-zinc-400">"</span>
                <span className="bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 rounded px-0.5 font-semibold">
                  https://chatling.ai/js/embed.js
                </span>
                <span className="text-slate-500 dark:text-zinc-400">"</span>

                <span className="text-slate-500 dark:text-zinc-400">&gt;&lt;/script&gt;</span>
              </div>

              {/* Leyenda */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="flex items-start gap-2 bg-violet-50 dark:bg-violet-950/30 border border-violet-100 dark:border-violet-800/40 rounded-md p-2">
                  <span className="w-2 h-2 rounded-full bg-violet-400 dark:bg-violet-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300">
                      attribute.data_id
                    </p>
                    <p className="text-xs text-violet-500 dark:text-violet-400 font-mono break-all">
                      2367823816
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-blue-50 dark:bg-zinc-800 border border-blue-100 dark:border-zinc-700 rounded-md p-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-blue-700 dark:text-blue-300">
                      attribute.id
                    </p>
                    <p className="text-xs text-blue-500 dark:text-blue-400 font-mono break-all">
                      chatling-embed-script
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-800/40 rounded-md p-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 dark:bg-emerald-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                      Base URL
                    </p>
                    <p className="text-xs text-emerald-500 dark:text-emerald-400 font-mono break-all">
                      chatling.ai/js/embed.js
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
      component: Chatling,

      explicacion:
        "Parametrizar el ID permite usar IDs distintos por entorno o por dominio sin tocar el tag. Es un patrón evaluado en el examen y muy común en producción.",
    },
  ],
};
