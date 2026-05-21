// Contenido placeholder de cada sección.
// Cada sección tiene: title, lead (intro corta), steps[].
// Cada step: title, enunciado, solucion (array de bullets), explicacion (markdown).
//
// Pega aquí los enunciados reales cuando los tengas.

const CONTENT = {
  "primeros-pasos": {
    title: "Primeros pasos e Interfaz",
    lead:
      "Consejos para afrontar el examen de certificación de Tealium iQ y un recorrido guiado por las áreas de la consola que vas a usar de forma recurrente.",
    steps: [
      {
        title: "Antes del examen",
        enunciado:
          "¿Qué cuenta, perfil y entorno vas a usar durante el examen? Confirma el acceso a la sandbox y comprueba que puedes publicar cambios.",
        solucion: [
          "Inicia sesión en my.tealiumiq.com con la cuenta de pruebas facilitada.",
          "Selecciona el perfil indicado en el enunciado y entra en el entorno Dev.",
          "Comprueba que tienes permisos de publicación abriendo Save / Publish.",
        ],
        explicacion:
          "El examen práctico se realiza sobre una cuenta sandbox compartida. Asegúrate de seleccionar tu perfil propio y nunca tocar el de otros aspirantes. El entorno Dev es el único que debes publicar — Qa y Prod quedan fuera del scope salvo que el enunciado lo pida explícitamente.\n\nTen a mano el navegador con la extensión Tealium Tools instalada; la vas a necesitar para validar tags y data layer durante el examen.",
      },
      {
        title: "Navegación general de la consola",
        enunciado:
          "Identifica las pestañas principales de Tealium iQ y describe qué se configura en cada una.",
        solucion: [
          "Load Rules — condiciones bajo las que se dispara un tag.",
          "Data Layer — variables (UDO, JS, Cookie, URL parameter, etc.).",
          "Tags — etiquetas de proveedores externos (GA4, Meta, etc.).",
          "Extensions — lógica adicional antes/después de los tags.",
          "Save/Publish — ciclo de despliegue por entornos.",
        ],
        explicacion:
          "Tealium iQ separa la lógica en cinco grandes bloques. El orden mental recomendado durante el examen es:\n\n1. Definir Data Sources (qué información necesito).\n2. Crear las Load Rules (cuándo se dispara).\n3. Añadir los Tags (qué proveedor).\n4. Mapear variables del data layer al tag.\n5. Publicar.\n\nSeguir siempre este orden evita olvidos típicos como añadir un tag sin load rule asociada.",
      },
      {
        title: "Herramientas necesarias",
        enunciado:
          "¿Qué herramientas externas debes tener instaladas y configuradas antes de empezar?",
        solucion: [
          "Extensión de navegador Tealium Tools.",
          "Inspector del navegador con la pestaña Network y consola JS.",
          "Tag Assistant / GA Debugger si trabajas con GA4.",
        ],
        explicacion:
          "Tealium Tools permite forzar el entorno (Dev/Qa/Prod) sin desplegar, ver el data layer en vivo y bloquear tags. Es la herramienta más importante del examen — practica el atajo de “Switch environment” hasta que te salga sin mirar.",
      },
      {
        title: "Errores típicos en el examen",
        enunciado:
          "Lista los errores que más se penalizan y cómo evitarlos.",
        solucion: [
          "Publicar en Prod por accidente.",
          "Olvidar asignar una load rule al tag (queda inactivo).",
          "No mapear correctamente las variables del data layer.",
          "Dejar tags duplicados de pruebas anteriores.",
        ],
        explicacion:
          "El error que más penaliza es publicar en un entorno equivocado. Antes de pulsar Save/Publish revisa siempre el selector de entorno en la parte superior derecha. Si dudas, guarda como Save As Draft y vuelve a leer el enunciado.",
      },
    ],
  },

  "config-general": {
    title: "Configuración general",
    lead:
      "Configura el perfil base sobre el que se aplicarán el resto de tags. Estos pasos son comunes a todos los ejercicios.",
    steps: [
      {
        title: "1. Crear el perfil de Tealium iQ",
        enunciado:
          "Crea un perfil nuevo dentro de la cuenta indicada y aplícale el dominio del enunciado.",
        solucion: [
          "Cuenta → New Profile → introduce nombre indicado.",
          "Asigna el dominio (sin protocolo) en la configuración del perfil.",
          "Guarda y entra en el perfil recién creado.",
        ],
        explicacion:
          "El nombre del perfil debe coincidir exactamente con el enunciado (mayúsculas y guiones incluidos). El dominio se introduce sin https:// y sin la barra final. Si el dominio incluye subdominio, decide si quieres trackear solo el subdominio o el dominio raíz — esta decisión afecta a cookies de terceros.",
      },
      {
        title: "2. Definir el Data Layer Object (UDO)",
        enunciado:
          "Crea las variables del data layer necesarias para los siguientes ejercicios: page_name, page_type, user_id, product_id, product_price.",
        solucion: [
          "Data Layer → Add Variable.",
          "Por cada variable: Type = UDO, Name = nombre indicado.",
          "Marca las variables de PII como tales (user_id).",
        ],
        explicacion:
          "Las variables UDO son la fuente de verdad. Nómbralas en snake_case y en minúsculas para consistencia. Marcar correctamente la PII activa los controles de privacidad de Tealium y es uno de los puntos evaluables.",
      },
      {
        title: "3. Configurar Load Rule “All Pages”",
        enunciado:
          "Asegúrate de que existe una load rule “All Pages” que se dispare en cualquier página.",
        solucion: [
          "Load Rules → comprueba si existe All Pages.",
          "Si no, créala con condición “All Pages” (siempre true).",
          "Guarda y asígnale el nombre exacto del enunciado.",
        ],
        explicacion:
          "All Pages viene por defecto en perfiles nuevos pero puede haberse eliminado. Es la load rule base sobre la que se conectarán la mayoría de tags utility (consent, identificación de usuario, etc.).",
      },
      {
        title: "4. Publicar en entorno Dev",
        enunciado:
          "Publica el perfil únicamente en el entorno Dev y valida con Tealium Tools.",
        solucion: [
          "Save / Publish → solo marca Dev.",
          "Añade un mensaje de versión descriptivo.",
          "Valida en la web con Tealium Tools forzando entorno Dev.",
        ],
        explicacion:
          "Nunca publiques en Qa o Prod durante el examen salvo instrucción explícita. El mensaje de versión es evaluable: escribe algo descriptivo como “Setup inicial + UDO” para que el corrector pueda seguir el rastro de tus cambios.",
      },
    ],
  },

  snapchat: {
    title: "Snapchat",
    lead:
      "Integra el Snap Pixel mediante el template oficial de Tealium iQ y mapea los eventos del enunciado.",
    steps: [
      {
        title: "1. Añadir el tag de Snap Pixel",
        enunciado:
          "Añade el tag “Snap Pixel” desde el marketplace de Tealium iQ.",
        solucion: [
          "Tags → Add Tag → busca “Snap Pixel”.",
          "Selecciona el template oficial.",
          "Asigna un Tag Name descriptivo (ej. Snap Pixel — Conversiones).",
        ],
        explicacion:
          "Usa siempre el template oficial del marketplace en lugar de pegar el snippet manualmente. Esto te da el mapping de variables out-of-the-box y se actualiza con las versiones del proveedor.",
      },
      {
        title: "2. Configurar el Pixel ID",
        enunciado:
          "Configura el Pixel ID facilitado en el enunciado.",
        solucion: [
          "En la pestaña Configuration del tag.",
          "Introduce el Pixel ID exacto del enunciado.",
          "Activa Advanced Matching si el enunciado lo indica.",
        ],
        explicacion:
          "El Pixel ID se distingue de un nombre de evento por su formato (UUID o numérico largo). Advanced Matching mejora la atribución enviando email/teléfono hasheados, pero solo actívalo cuando el enunciado lo pide explícitamente.",
      },
      {
        title: "3. Crear la load rule del Pixel",
        enunciado:
          "El Pixel debe cargarse en todas las páginas excepto en /checkout/success.",
        solucion: [
          "Load Rules → New Rule.",
          "Condición 1: url.path != /checkout/success.",
          "Asigna la regla al tag de Snap Pixel.",
        ],
        explicacion:
          "Las exclusiones se modelan con condiciones “!=”. Si hubiese múltiples rutas a excluir, encadena con AND. Evita usar una regla genérica “All Pages” combinada con un extension de bloqueo — es más mantenible la regla directa.",
      },
      {
        title: "4. Mapear el evento Purchase",
        enunciado:
          "Mapea el evento Purchase con el valor y la moneda desde el data layer.",
        solucion: [
          "Pestaña Data Mappings del tag.",
          "page_type → Event (valor PURCHASE cuando page_type = purchase).",
          "product_price → Price.",
          "currency_code → Currency.",
        ],
        explicacion:
          "Los eventos de Snap Pixel se identifican por nombre estandarizado en mayúsculas (PURCHASE, ADD_CART, etc.). Si el data layer no usa esos valores, mapea con una extensión Lookup Table para traducir tu vocabulario al de Snap antes del tag.",
      },
    ],
  },

  chatling: {
    title: "Chatling",
    lead:
      "Integra el widget de Chatling como tag custom y dispáralo solo en las páginas del enunciado.",
    steps: [
      {
        title: "1. Añadir el tag custom de Chatling",
        enunciado:
          "Chatling no tiene template en el marketplace — añade un Tag Generic con el snippet del proveedor.",
        solucion: [
          "Tags → Add Tag → Generic Tag.",
          "Pega el snippet de Chatling en el campo Tag Code.",
          "Nombra el tag Chatling — Widget.",
        ],
        explicacion:
          "Para proveedores sin template oficial usa siempre Generic Tag o Tealium Custom Container. Evita pegar el snippet directo en el head de la web — pierdes control de versiones y de cuándo se carga.",
      },
      {
        title: "2. Parametrizar el Chatbot ID",
        enunciado:
          "El Chatbot ID debe leerse desde una variable UDO chatling_id, no estar hardcodeado en el tag.",
        solucion: [
          "Crea la variable UDO chatling_id si no existe.",
          "En el Tag Code sustituye el ID por ${chatling_id}.",
          "Mapea chatling_id → chatling_id en Data Mappings.",
        ],
        explicacion:
          "Parametrizar el ID permite usar IDs distintos por entorno o por dominio sin tocar el tag. Es un patrón evaluado en el examen y muy común en producción.",
      },
      {
        title: "3. Load rule por tipo de página",
        enunciado:
          "Chatling solo debe cargarse en páginas de producto y de soporte.",
        solucion: [
          "Crea load rule Chatling Pages.",
          "Condición: page_type contains product OR page_type = support.",
          "Asígnala al tag.",
        ],
        explicacion:
          "Usa el operador OR cuando las condiciones son disyuntivas. Si necesitas más de dos OR, plantea una Lookup Table como alternativa más legible.",
      },
      {
        title: "4. Validar carga con Tealium Tools",
        enunciado:
          "Valida que el widget aparece en las páginas de producto y no aparece en home.",
        solucion: [
          "Abre Tealium Tools en una página de producto.",
          "Verifica que el tag Chatling — Widget aparece como Loaded.",
          "Repite en home: debe aparecer como Not Loaded.",
        ],
        explicacion:
          "Tealium Tools muestra el estado de cada tag en tiempo real. Un tag puede aparecer como Loaded pero no haber ejecutado correctamente — comprueba siempre en Network que la request al proveedor se ha enviado.",
      },
    ],
  },

  ga4: {
    title: "Google Analytics 4",
    lead:
      "Configura GA4 vía el template oficial de Tealium y mapea los eventos clave del ecommerce del enunciado.",
    steps: [
      {
        title: "1. Añadir el tag de GA4",
        enunciado:
          "Añade el tag Google Analytics 4 desde el marketplace.",
        solucion: [
          "Tags → Add Tag → Google Analytics 4.",
          "Selecciona la versión más reciente del template.",
          "Tag Name: GA4 — Web Stream.",
        ],
        explicacion:
          "GA4 tiene dos templates en el marketplace (Web y App). Usa siempre Web para sitios. La versión más reciente trae el modelo de consent v2 ya integrado.",
      },
      {
        title: "2. Configurar el Measurement ID",
        enunciado:
          "Configura el Measurement ID indicado en el enunciado.",
        solucion: [
          "Configuration → Measurement ID = G-XXXXXXXXXX.",
          "Send Page View = false (lo dispararemos manualmente).",
          "Activa Debug Mode si el enunciado lo pide.",
        ],
        explicacion:
          "Desactivar el page_view automático te permite controlar exactamente cuándo se envía y con qué parámetros. Es el patrón recomendado para sitios SPA o donde necesites enriquecer el evento.",
      },
      {
        title: "3. Configurar eventos de ecommerce",
        enunciado:
          "Configura los eventos view_item, add_to_cart y purchase con sus parámetros estándar.",
        solucion: [
          "Pestaña Events del tag.",
          "Añade view_item — disparador: page_type = product.",
          "Añade add_to_cart — disparador: tealium_event = add_to_cart.",
          "Añade purchase — disparador: page_type = purchase.",
        ],
        explicacion:
          "GA4 usa el modelo evento-parámetro. Cada evento estándar tiene parámetros recomendados (items, value, currency). Respeta los nombres exactos — un typo en items lo deja fuera del informe de ecommerce.",
      },
      {
        title: "4. Mapear el array items",
        enunciado:
          "Mapea el array de productos del data layer al parámetro items del evento purchase.",
        solucion: [
          "Data Mappings → product_id → items.item_id.",
          "product_name → items.item_name.",
          "product_price → items.price.",
          "product_quantity → items.quantity.",
        ],
        explicacion:
          "GA4 espera items como array de objetos. Tealium gestiona la transformación automáticamente cuando mapeas variables array del UDO a campos items.X. Si tus variables son strings con separador, usa una extensión Split Value Out antes del tag.",
      },
    ],
  },
};

window.CONTENT = CONTENT;
