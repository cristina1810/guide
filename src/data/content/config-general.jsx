import DataLayer from "../../components/tags/DataLayer.jsx";
import StepCarousel from "../../components/UI /StepCarousel.jsx";
import ProductBrandEvent from "../../components/tags/ProductBrandEvent.jsx";
import SearchLowercase from "../../components/tags/SearchLowecase.jsx";
import DiscountBanner from "../../components/tags/DiscountBanner.jsx";
import AddVariable from "../../assets/general config/GC- data layer add variable.png";
import AddCommonVariable from "../../assets/general config/GC- data layer add variable built in.png";
import Category from "../../assets/general config/GC- data layer category.png";
import Home from "../../assets/general config/GC-data layer home.png";
import Product from "../../assets/general config/GC- data layer product.png";
import Cart from "../../assets/general config/GC- data layer shopping cart.png";
import Checkout from "../../assets/general config/GC- data layer checkout.png";
import Confirmation from "../../assets/general config/GC - data layer order confirmation.png";

// Contenido de la sección "Configuración general".
export const configGeneral = {
  title: "Configuración general",
  lead: {
    intro: "Se pide revisar:",
    pages: [
      "Home",
      "Categoría",
      "Producto",
      "Carrito",
      "Checkout",
      "Página de confirmación del pedido",
    ],
    outro:
      "Una vez revisado el data layer y añadidas las variables, se crearán extensiones. Más abajo encontramos la información con los detalles.",
  },
  steps: [
    {
      title: "Configurar Data Layer",
      solucion: [
        "Mediante la extensión de Tealium Tools podemos revisar el data Layer de todas las páginas que se nos indican en el enunciado para poder añadirlas al data Layer desde la interfaz de Tealium iQ.",
      ],
      callout: {
        type: "warning",
        text: (
          <>
            Para copiar todas las variables directamente y pegarlas, copia el
            CSV con el botón de abajo. Luego, en Tealium iQ →{" "}
            <strong>Data Layer</strong>, haz clic en{" "}
            <code className="px-1 py-0.5 rounded bg-amber-100 dark:bg-amber-900/40 font-mono text-[11px]">
              + Add Variable
            </code>{" "}
            y despliega la flecha para ver la opción{" "}
            <code className="px-1 py-0.5 rounded bg-amber-100 dark:bg-amber-900/40 font-mono text-[11px]">
              Bulk import from CSV…
            </code>{" "}
            donde pegarás el CSV copiado.
          </>
        ),
      },
      component: DataLayer,
      explicacion: (
        <div className="flex flex-col gap-4">
          <p>
            El data layer es la base de toda la implementación. Antes de añadir
            variables en Tealium iQ, revisa cada página con{" "}
            <strong>Tealium Tools – UTAG Debugger</strong>: verás todas las
            variables disponibles en el data layer de esa página.
          </p>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-sm">Añadir variables de página</p>
            <ol className="flex flex-col gap-1.5 text-sm list-decimal list-inside">
              <li>
                Ve a <strong>Data Layer</strong> en el sidebar de Tealium iQ.
              </li>
              <li>
                Haz clic en <strong>Add Variable</strong>.
              </li>
              <li>
                Tipo:{" "}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-xs">
                  UDO Variable
                </code>
                .
              </li>
              <li>
                Source: el mismo nombre exacto de la variable que aparece en el
                debugger.
              </li>
            </ol>
            <img
              src={AddVariable}
              alt="Añadir variable en Tealium iQ"
              className="rounded-lg border border-gray-200 dark:border-gray-700 max-w-xs"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-sm">Añadir variables comunes</p>
            <ol className="flex flex-col gap-1.5 text-sm list-decimal list-inside">
              <li>
                Despliega la flecha de <strong>Add Variable</strong> y elige{" "}
                <strong>Add common variables</strong>.
              </li>
              <li>
                En el menú lateral izquierdo selecciona{" "}
                <strong>Team built data</strong>.
              </li>
              <li>
                Haz clic en <strong>Import this bundle</strong>.
              </li>
            </ol>
            <img
              src={AddCommonVariable}
              alt="Añadir variables comunes en Tealium iQ"
              className="rounded-lg border border-gray-200 dark:border-gray-700 max-w-xs"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="font-semibold text-sm">Variables por página</p>
            <StepCarousel
              images={[
                { src: Home,         alt: "Data layer — Home",                   caption: "Home" },
                { src: Category,     alt: "Data layer — Categoría",              caption: "Categoría" },
                { src: Product,      alt: "Data layer — Producto",               caption: "Producto" },
                { src: Cart,         alt: "Data layer — Carrito",                caption: "Carrito" },
                { src: Checkout,     alt: "Data layer — Checkout",               caption: "Checkout" },
                { src: Confirmation, alt: "Data layer — Confirmación de pedido", caption: "Confirmación del pedido" },
              ]}
            />
          </div>
        </div>
      ),
    },
    {
      title: "EXTENSIÓN: product brand and event",
      enunciado: (
        <div className="flex flex-col gap-3">
          <p className="text-slate-600 text-sm leading-relaxed">
            Con una única extensión se actualizan automáticamente los siguientes
            valores cada vez que el usuario accede a una página de detalle de
            producto:
          </p>
          <div className="flex flex-col gap-2">
            {[
              { key: "product_brand", value: "teal_ecomm" },
              { key: "tealium_event", value: "product_view" },
            ].map(({ key, value }) => (
              <div key={key} className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100 font-mono text-xs text-blue-600 font-medium">
                  {key}
                </span>
                <span className="text-slate-300 text-sm">→</span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-100 font-mono text-xs text-emerald-600 font-medium">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      ),
      callout: {
        type: "info",
        text: (
          <>
            Se utiliza la opción <strong>Set Data Values</strong> al configurar
            la extensión, con la condición de que los valores se actualicen
            únicamente cuando el usuario se encuentre en una{" "}
            <strong>página de detalle de producto</strong>.
          </>
        ),
      },
      component: ProductBrandEvent,
      explicacion: (
        <div className="flex flex-col gap-4 text-sm">
          <p>
            Usa <strong>Set Data Values</strong> para sobreescribir variables
            del data layer bajo una condición concreta. Aquí queremos que dos
            variables se actualicen solo cuando el usuario esté en una página de
            detalle de producto:
          </p>

          <div className="flex flex-col gap-1.5">
            <p className="font-semibold">Valores a asignar</p>
            <div className="flex flex-col gap-1.5">
              {[
                { variable: "tealium_event", valor: "product_view" },
                { variable: "product_brand", valor: "teal_ecomm" },
              ].map(({ variable, valor }) => (
                <div key={variable} className="flex items-center gap-2">
                  <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-xs font-mono">
                    {variable}
                  </code>
                  <span className="text-gray-400">→</span>
                  <span className="text-gray-500">to text</span>
                  <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-xs font-mono">
                    {valor}
                  </code>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <p className="font-semibold">Condición de activación</p>
            <p>
              Para que la extensión solo se ejecute en páginas de producto,
              añade la condición:
            </p>
            <div className="flex items-center gap-2">
              <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-xs font-mono">
                page_type
              </code>
              <span className="text-gray-400">=</span>
              <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-xs font-mono">
                product
              </code>
            </div>
          </div>

          <p className="text-gray-500 dark:text-gray-400 text-xs border-t border-gray-100 dark:border-gray-800 pt-3">
            <strong className="text-gray-700 dark:text-gray-300">
              ¿Por qué <code className="font-mono">page_type</code>?
            </strong>{" "}
            En el UTAG Debugger, esta variable vale{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded font-mono">
              product
            </code>{" "}
            únicamente en páginas de detalle y cambia en el resto — es la señal
            más fiable para acotar la extensión sin que se dispare donde no
            debe.
          </p>
        </div>
      ),
    },
    {
      title: "EXTENSIÓN: search lowercase",
      enunciado:
        "Con una única extensión se pide modificar a lower case todas las búsquedas realizadas en la caja de busqueda de la parte de arriba dela página.",
      callout: {
        type: "info",
        text: (
          <>
            Se utiliza la opción{" "}
            <span className="font-semibold ">Lower-Casing</span> al configurar
            la extensión, para que todas las búsquedas se transformen a lower
            case.
          </>
        ),
      },
      component: SearchLowercase,
      explicacion: (
        <div className="flex flex-col gap-4 text-sm">
          <p>
            <strong>Lower-Casing</strong> convierte el valor de una variable a
            minúsculas antes de enviarlo. Sin esta transformación,{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded font-mono text-xs">Zapatos rojos</code>
            {" "}y{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded font-mono text-xs">zapatos rojos</code>
            {" "}contarían como dos búsquedas distintas, inflando los datos.
          </p>

          <div className="flex flex-col gap-1.5">
            <p className="font-semibold">Variable a transformar</p>
            <div className="flex items-center gap-2">
              <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-xs font-mono">search_keyword</code>
              <span className="text-gray-400 text-xs">→ lowercase</span>
            </div>
          </div>

          <p className="text-gray-500 dark:text-gray-400 text-xs border-t border-gray-100 dark:border-gray-800 pt-3">
            <strong className="text-gray-700 dark:text-gray-300">
              {"¿Cómo identificar la variable?"}
            </strong>{" "}
            Realiza una búsqueda en la web y abre el UTAG Debugger. Busca la
            variable que recoge el término introducido — en este caso es{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded font-mono">search_keyword</code>.
          </p>
        </div>
      ),
    },
    {
      title: "EXTENSIÓN: discount banner",
      enunciado:
        "Mostrar un banner de descuento en la pagina de detalle de un producto cuando el precio de dicho producto sea superior a 130.00. Usar el código mostrado en a continuación.",
      callout: {
        type: "info",
        text: (
          <>
            Se utiliza la opción{" "}
            <span className="font-semibold ">Content Modification</span> al
            configurar la extensión, para inyectar el código que nos mostrará el
            banner. Además lo condicionamos a que aparezca únicamente en las
            páginas de detalle de producto y cuando el precio sea superior a
            130.00.
          </>
        ),
      },
      component: DiscountBanner,
      explicacion:
        `Nunca publiques en Qa o Prod durante el examen salvo instrucción explícita. El mensaje de versión es evaluable: escribe algo descriptivo como "Setup inicial + UDO" para que el corrector pueda seguir el rastro de tus cambios.`,
    },
  ],
};
