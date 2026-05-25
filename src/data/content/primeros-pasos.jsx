// Contenido de la sección "Primeros pasos e Interfaz".
import dashboardImg from "../../assets/university/Dashboard.png";
import ExamsPracticalsCertifications from "../../assets/university/ExamsPracticalsCertifications.png";
import PlanAprendizaje from "../../assets/university/PlanAprendizaje.png";
import PracticalCredentials from "../../assets/practical/Credentials.png";
import EcommerceModal from "../../assets/practical/EcommerceModal.png";
import PublisedDate from "../../assets/practical/PublishedDate.png";
import Rubrica from "../../assets/Rubrica.png";

export const primerosPasos = {
  title: "Primeros pasos e Interfaz",
  lead: "Consejos para afrontar el examen de certificación de Tealium iQ y un recorrido guiado por las áreas de la herramienta que vas a usar de forma recurrente.",
  steps: [
    {
      title: "Antes del examen",
      texto: (
        <>
          Para poder comenzar las pruebas para obtener la certificación es
          necesario crear una cuenta en{" "}
          <a
            href="https://university.tealium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-teal-600 hover:underline"
          >
            Tealium University
          </a>
          . Es importante que esta cuenta sea creada con el correo corporativo
          porque en caso contrario estaremos limitados al acceso a algunas
          pruebas necesarias.
        </>
      ),
      callout: {
        type: "warning",
        text: "Ten en cuenta que el usuario tarda en activarse 24h aproximadamente, así que no dejes este paso para el último momento.",
      },
    },
    {
      title: "Herramientas necesarias y documentación",
      texto:
        "Esta es la lista de herramientas recomendadas y/o necesarias para completar el examen práctico con éxito. Asegúrate de tenerlas instaladas y configuradas antes de comenzar.",
      lista: [
        "Extensión de navegador Tealium Tools.",
        "Inspector del navegador con la pestaña Network y consola JS.",
        "Tag Assistant / GA Debugger si trabajas con GA4.",
      ],
      texto2:
        "Además, ten a mano la documentación oficial de Tealium iQ, especialmente la sección de Data Layer y la de Tags & Extensions, ya que te serán útiles para resolver las pruebas del examen.",
      lista2: [
        "Documentación oficial de Tealium iQ.",
        "Guías de implementación de proveedores clave (Google, Meta, etc.).",
      ],
    },
    {
      title: "Procedimiento para obtener la certificación y pruebas necesarias",
      lista: [
        'Dentro de Tealium University veremos el dashboard con un catálogo de contenidos donde seleccionaremos el que se llama "Exams, Practicals and Certifications".',
        "Una vez seleccionado veremos un listado de todas las certificaciones que ofrece Tealium. En este caso nos interesa Tealium iQ, la cual tenemos disponible ahora en 3 idiomas. ",
        "Al elegir el idioma navegaremos a otra pantalla con el listado de cursos que debemos de completar para obtener la certificación. Este plan consta de dos cursos teóricos: básico y avanzado; y un curso práctico.",
      ],
      imagen: [
        { src: dashboardImg, alt: "Dashboard de Tealium University" },
        {
          src: ExamsPracticalsCertifications,
          alt: "Exámenes, prácticas y certificaciones",
        },
        { src: PlanAprendizaje, alt: "Plan de aprendizaje" },
      ],
    },
    {
      title: "Dentro del curso: cosas a tener en cuenta",
      texto:
        "Completaremos el curso de formación de teoría tanto básico como avanzado con normalidad. Para facilitar el proceso, disponemos de un chatbot que nos podemos usar para obtener las respuestas de los tests. Una vez terminados nos darán credenciales para poder realizar la prueba práctica.",
      lista: [
        'Al obtener las credenciales podemos acceder con estas a la interfaz de Tealium iQ para realizar el examen práctico. Encontraremos estas credenciales en el apartado "Practical Credentials" y dentro veremos dos apartados: uno con las credenciales para la herramienta en si y otras credenciales para usar en el ecommerce de Training',
        "Para acceder al ecommerce y hacer las pruebas de manera más certera optaremos por acceder en modo incógnito. Una vez dentro veremos un modal donde introduciremos las credenciales mencionadas antes junto con el entorno al que queremos acceder",
        "Antes de hacer cualquier prueba y debuggear nos aseguramos de que la versión en la que nos encontramos es la más reciente ya que a veces puede dar fallos. Esto lo comprobaremos mediante la extensión Tealium Tools en la sección Web Companion",
        "Al finalizar el examen práctico y entregarlo, el examinador nos enviará un correo con todos los detalles de los errores en la prueba, en caso de tenerlos (ver imagen 4). Tener en cuenta que hay muchas maneras de hacer bien un mismo apartado y que puede discrepar de un examinador a otro",
      ],
      imagen: [
        {
          src: PracticalCredentials,
          alt: "Credenciales prácticas",
        },
        { src: EcommerceModal, alt: "Modal del ecommerce" },
        { src: PublisedDate, alt: "Comprobar versión publicada" },
        { src: Rubrica, alt: "Detalles de la prueba" },
      ],
    },
    {
      title: "Interfaz de Tealium iQ: áreas clave",
      texto:
        "Completaremos el curso de formación de teoría tanto básico como avanzado con normalidad. Para facilitar el proceso, disponemos de un chatbot que nos podemos usar para obtener las respuestas de los tests. Una vez terminados nos darán credenciales para poder realizar la prueba práctica.",
      lista: [
        "Dashboard: vista general de la cuenta, accesos rápidos a perfiles, tags, extensiones, etc.",
        "Data Layer: sección para configurar y gestionar las variables que alimentan los tags.",
        "Load Rules: aquí se definen las reglas de carga que determinan cuándo se disparan los tags.",
        "Events: sección para configurar eventos personalizados y su relación con el data layer.",
        "Tags: área donde se gestionan los tags, tanto los del marketplace como los custom.",
        "Extensions: sección para configurar extensiones que modifican o enriquecen el comportamiento de los tags.",
        "Consent Integrations: área para gestionar integraciones relacionadas con la gestión del consentimiento de cookies.",
      ],
      // imagen: pendiente de añadir capturas de: Dashboard, DataLayer, LoadRules, Events, Tags, Extensions, ConsentIntegrations
    },
  ],
};
