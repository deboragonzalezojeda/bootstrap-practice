let data = [
    {
        mainTitle: 'Introducción a Bootstrap: Principios Básicos y Fundamentales',
        topics: [
            {
                title: "Descripción general de qué es Bootstrap y por qué es popular.",
                paragraphs:
                    ["Bootstrap es un potente marco de diseño que ha revolucionado la forma en que se construyen y diseñan los sitios web. Su popularidad radica en su capacidad para simplificar y agilizar el proceso de desarrollo, proporcionando a los desarrolladores y diseñadores una serie de herramientas predefinidas y estilos que facilitan la creación de interfaces atractivas y responsivas.",
                    "Desde su lanzamiento, Bootstrap se ha convertido en la opción preferida para muchos profesionales del desarrollo web debido a su enfoque centrado en la eficiencia y la consistencia. Con una cuadrícula flexible y componentes reutilizables, Bootstrap permite construir interfaces de usuario de manera rápida y sin la necesidad de escribir código CSS desde cero.",
                    "La flexibilidad de Bootstrap no se limita solo a su capacidad de respuesta. Ofrece una amplia gama de componentes, como botones, formularios, navegación y más, que siguen las mejores prácticas de diseño, lo que resulta en sitios web modernos y visualmente atractivos. La documentación exhaustiva de Bootstrap facilita a los desarrolladores la comprensión y la implementación de estas características.",
                    "Además, Bootstrap fomenta la modularidad y la personalización. A través de su sistema de cuadrícula y clases de utilidad, es posible adaptar cada elemento para satisfacer las necesidades específicas de un proyecto sin sacrificar la coherencia visual. Esta capacidad de personalización sin esfuerzo ha sido clave para su popularidad, ya que permite a los desarrolladores crear diseños únicos sin perder la eficiencia.",
                    "La comunidad activa que respalda Bootstrap también juega un papel fundamental en su éxito. La participación de la comunidad ha llevado a actualizaciones regulares y a la incorporación de nuevas características basadas en la retroalimentación y las tendencias emergentes en el desarrollo web.",
                    "En resumen, Bootstrap se destaca como un marco de diseño líder gracias a su combinación de simplicidad, flexibilidad y capacidad de respuesta. Al simplificar el proceso de desarrollo y proporcionar herramientas robustas, Bootstrap ha allanado el camino para la creación de experiencias web de alta calidad y ha ganado su lugar como una herramienta esencial en el arsenal de cualquier desarrollador web moderno."
                ]
            },
            {
                title: "Explicación de la cuadrícula (grid) de Bootstrap y cómo crear un diseño básico.",
                paragraphs: [
                    "La cuadrícula (grid) de Bootstrap es un sistema fundamental que facilita la creación de diseños flexibles y responsivos en páginas web. Su popularidad se debe a la capacidad de simplificar la disposición de elementos en filas y columnas, proporcionando una estructura coherente para adaptarse a diferentes tamaños de pantalla.",
                    "En el corazón de la cuadrícula de Bootstrap se encuentran las clases `container`, `row`, y `col`. El contenedor (`container`) envuelve todo el contenido y establece los márgenes laterales, mientras que las filas (`row`) actúan como contenedores para las columnas. Las columnas (`col`) definen la estructura del diseño y se pueden distribuir según las necesidades del diseño.",
                    "Para crear un diseño básico con la cuadrícula de Bootstrap, comienza con un contenedor principal utilizando la clase `container`. Dentro de este contenedor, agrega filas (`row`) para organizar tu contenido. Luego, utiliza las clases `col` para especificar el ancho de cada columna en la fila.",
                    "Bootstrap utiliza un sistema de 12 columnas, lo que significa que puedes dividir una fila en hasta 12 columnas. Por ejemplo, puedes tener una columna de tamaño 6 (`col-6`) que ocupa la mitad del ancho disponible.",
                    "La cuadrícula de Bootstrap también es completamente responsiva. Puedes definir diferentes tamaños de columnas para diferentes tamaños de pantalla utilizando clases como `col-sm`, `col-md`, o `col-lg`. Esto permite que tu diseño se adapte de manera eficiente a dispositivos móviles, tabletas y pantallas más grandes.",
                    "La simplicidad y flexibilidad de la cuadrícula de Bootstrap la convierten en una herramienta esencial para el diseño web moderno. Al entender cómo usarla, puedes crear diseños atractivos y funcionales con facilidad, sin la necesidad de escribir extenso código CSS personalizado.",
                    "En conclusión, la cuadrícula de Bootstrap es una herramienta clave para el diseño web responsivo. Su sistema modular y fácil de usar proporciona a los desarrolladores una base sólida para construir diseños efectivos y adaptables a diversas plataformas.",
                    "Experimenta con la cuadrícula de Bootstrap y descubre cómo su enfoque simplificado puede mejorar significativamente tu flujo de trabajo de diseño y desarrollo."
                ]
            },
            {
                title: "Introducción a los componentes comunes como botones, formularios y barra de navegación.",
                paragraphs: [
                    "En Bootstrap, la creación de interfaces atractivas y funcionales se simplifica mediante el uso de componentes comunes. Estos elementos, como botones, formularios y barras de navegación, proporcionan una base sólida para el diseño web moderno y responsivo.",
                    "Los botones en Bootstrap son más que simples elementos de interacción. Con clases predefinidas, puedes aplicar estilos atractivos y variados a los botones, adaptándolos a diferentes contextos y acciones. La consistencia visual que ofrecen asegura una experiencia de usuario uniforme en todo el sitio.",
                    "Los formularios son una parte esencial de muchas páginas web, y Bootstrap los hace más manejables. Con clases específicas, puedes personalizar la apariencia de campos de entrada, áreas de texto y botones de envío. Además, la validación y la disposición de los formularios se simplifican con las herramientas incorporadas de Bootstrap.",
                    "La barra de navegación es clave para la navegación eficiente entre páginas. Bootstrap facilita la creación de barras de navegación responsivas y atractivas. Puedes personalizar la apariencia y el comportamiento de la barra de navegación para adaptarse a diferentes tamaños de pantalla, garantizando una experiencia de usuario consistente.",
                    "La versatilidad de estos componentes se refleja en su capacidad para adaptarse a las necesidades de diseño específicas. Bootstrap ofrece clases y opciones de personalización que permiten a los desarrolladores ajustar cada componente según los requisitos de su proyecto sin sacrificar la coherencia visual.",
                    "La introducción a estos componentes comunes es un paso crucial para aprovechar al máximo Bootstrap. Comprender cómo incorporar y personalizar botones, formularios y barras de navegación abre las puertas a la creación de interfaces web atractivas y altamente funcionales.",
                    "En resumen, la riqueza de componentes comunes en Bootstrap proporciona una base robusta para el diseño web. Al incorporar estos elementos en tus proyectos, puedes agilizar el desarrollo y mejorar la experiencia del usuario de manera significativa.",
                    "Explora la variedad de componentes que Bootstrap ofrece y descubre cómo pueden elevar la calidad y la eficiencia de tus proyectos web."
                ]
            }
        ]
    },
    {
        mainTitle: 'Creación de un Sitio Web Simple con Bootstrap',
        topics: [
            {
              title: "Pasos prácticos para comenzar un proyecto desde cero con Bootstrap.",
              paragraphs: [
                "Iniciar un proyecto con Bootstrap es sencillo y eficiente. Comienza por integrar la biblioteca en tu proyecto utilizando el CDN de Bootstrap o instalándolo a través de un gestor de paquetes.",
                "Configura la estructura básica del documento HTML, incluyendo las etiquetas necesarias y enlazando los archivos CSS y JS de Bootstrap. Esto establecerá la base para tu proyecto.",
                "Explora la documentación oficial de Bootstrap para familiarizarte con las clases, componentes y utilidades disponibles. Esto te permitirá aprovechar al máximo las características de Bootstrap.",
                "Utiliza la cuadrícula de Bootstrap para organizar y distribuir el contenido de tu página de manera efectiva. Aprovecha las clases como 'container' y 'row' para crear una estructura sólida.",
                "Personaliza el aspecto de tu proyecto utilizando temas y variables de Bootstrap. Modifica colores, fuentes y otros estilos para que se alineen con la identidad visual de tu marca.",
                "Añade componentes específicos según las necesidades de tu proyecto. Puedes incorporar elementos como navegación, tarjetas y formularios fácilmente utilizando las clases de Bootstrap.",
                "Realiza pruebas en diferentes tamaños de pantalla para garantizar que tu proyecto sea completamente responsivo. Bootstrap facilita la adaptación a dispositivos móviles y tablets.",
                "Optimiza el rendimiento de tu proyecto eliminando cualquier componente o estilo no utilizado. Bootstrap te permite personalizar tu compilación para incluir solo lo necesario.",
              ],
            },
            {
              title: "Ejemplos de cómo estructurar la página usando la cuadrícula de Bootstrap.",
              paragraphs: [
                "La cuadrícula de Bootstrap es esencial para crear diseños flexibles y responsivos. Comienza creando un contenedor principal con la clase 'container' para establecer los márgenes laterales.",
                "Dentro del contenedor, utiliza filas ('row') para dividir el contenido en secciones lógicas. Cada fila puede contener hasta 12 columnas, proporcionando flexibilidad en la disposición del contenido.",
                "Aplica las clases 'col' para definir el ancho de cada columna. Por ejemplo, 'col-6' ocupará la mitad del ancho disponible, y 'col-12' ocupará el ancho completo.",
                "Experimenta con clases adicionales como 'offset' para crear márgenes y 'order' para cambiar el orden de las columnas en dispositivos específicos.",
                "Utiliza clases de tamaño específico, como 'col-sm' o 'col-md', para definir diferentes tamaños de columna según el dispositivo. Esto garantizará una experiencia de usuario coherente en todas las pantallas.",
                "Combina la cuadrícula con componentes como tarjetas, listas y encabezados para estructurar el contenido de manera efectiva. La cuadrícula proporciona una base sólida para cualquier diseño.",
                "Recuerda que la cuadrícula es completamente responsiva. Los elementos se ajustarán automáticamente según el tamaño de la pantalla, facilitando la creación de diseños adaptables.",
                "Explora ejemplos de la documentación de Bootstrap para obtener inspiración y comprender cómo aplicar la cuadrícula en diversos contextos.",
              ],
            },
            {
              title: "Implementación de componentes básicos y personalización simple.",
              paragraphs: [
                "Bootstrap ofrece una amplia variedad de componentes básicos que puedes implementar fácilmente. Comienza con botones utilizando las clases predefinidas para estilos atractivos.",
                "Incorpora formularios utilizando las clases de Bootstrap para campos de entrada, áreas de texto y botones. La validación y la disposición del formulario se simplifican gracias a las herramientas integradas de Bootstrap.",
                "Añade una barra de navegación utilizando la clase 'navbar'. Personaliza la apariencia y el comportamiento de la barra de navegación según tus necesidades, garantizando una experiencia de usuario intuitiva.",
                "Explora otros componentes como tarjetas, alertas y listas. Cada componente tiene clases específicas que te permiten personalizar su apariencia de manera sencilla.",
                "Utiliza temas y variables de Bootstrap para personalizar el aspecto global de tu proyecto. Modifica colores, fuentes y otros estilos para adaptar Bootstrap a la identidad visual de tu marca.",
                "Experimenta con las clases de utilidad de Bootstrap para ajustar el espaciado, la alineación y otros estilos en tiempo real. Esto facilita la personalización y la optimización del diseño.",
                "Recuerda que puedes anidar y combinar componentes para crear diseños más complejos. Bootstrap proporciona una estructura modular que facilita la construcción de interfaces ricas y atractivas.",
                "Consulta la documentación de Bootstrap para obtener detalles sobre cada componente y clase disponible. La documentación es una valiosa fuente de información para personalizar y expandir tus habilidades con Bootstrap.",
              ],
            },
          ]
    },
    {
        mainTitle: 'Resolución de Problemas Comunes para Principiantes en Bootstrap',
        topics: [
            {
              title: "Identificación y solución de problemas frecuentes que los principiantes pueden encontrar al usar Bootstrap.",
              paragraphs: [
                "Al comenzar con Bootstrap, es común enfrentar desafíos. Problemas con la importación de archivos CSS o JS pueden surgir; asegúrate de tener los enlaces correctos en tu documento HTML.",
                "Errores de sintaxis en las clases de Bootstrap pueden afectar el diseño. Revisa cuidadosamente tus clases para detectar posibles errores tipográficos o mal uso de las mismas.",
                "La versión de Bootstrap que estás utilizando puede afectar la disponibilidad de algunas clases. Asegúrate de seguir la documentación de la versión específica que estás utilizando.",
                "Problemas con la cuadrícula pueden ocurrir si no se utilizan las clases 'container', 'row' y 'col' correctamente. Verifica que estén anidadas de manera adecuada y sigan la estructura recomendada.",
                "La personalización excesiva puede llevar a conflictos en los estilos. Evita modificar estilos directamente si no es necesario y utiliza clases de Bootstrap siempre que sea posible.",
                "Problemas de visualización en dispositivos móviles pueden surgir si no se utiliza la cuadrícula de manera adecuada. Asegúrate de que las clases de tamaño ('col-sm', 'col-md', etc.) estén configuradas correctamente.",
                "Consulta la consola del navegador para identificar errores JavaScript que puedan afectar el funcionamiento de los componentes interactivos. La consola proporciona información valiosa para la solución de problemas.",
                "Explora la comunidad de Bootstrap en foros y sitios de preguntas y respuestas. Muchos problemas ya han sido abordados por otros desarrolladores, y puedes encontrar soluciones útiles.",
              ],
            },
            {
              title: "Explicación de conceptos como la responsividad y cómo abordar problemas de diseño en dispositivos diferentes.",
              paragraphs: [
                "La responsividad en Bootstrap se logra mediante el uso de clases que se adaptan a diferentes tamaños de pantalla. Entiende cómo funcionan las clases 'sm', 'md', 'lg' y 'xl' para personalizar el diseño según el dispositivo.",
                "Problemas de diseño en dispositivos pequeños pueden surgir si no se prioriza el contenido. Utiliza clases de visibilidad de Bootstrap para controlar qué elementos se muestran u ocultan en diferentes dispositivos.",
                "Las imágenes y otros elementos multimedia pueden afectar la velocidad de carga en dispositivos móviles. Optimiza tus recursos multimedia y utiliza la propiedad 'img-fluid' para imágenes responsivas.",
                "Prueba tu diseño en diferentes navegadores para identificar problemas de compatibilidad. Algunos estilos pueden comportarse de manera diferente en navegadores específicos, y es importante asegurar una experiencia consistente.",
                "El uso excesivo de fuentes personalizadas puede afectar la legibilidad en dispositivos móviles. Asegúrate de elegir fuentes que sean legibles y se escalen adecuadamente en diferentes tamaños de pantalla.",
                "Aborda problemas de diseño específicos para dispositivos táctiles. Asegúrate de que los elementos interactivos sean lo suficientemente grandes y tengan espacio suficiente para evitar toques accidentales.",
                "Utiliza las herramientas de desarrollo del navegador para simular diferentes tamaños de pantalla y ajustar el diseño en consecuencia. Esto facilita la identificación y solución de problemas de diseño responsivo.",
                "Mantente actualizado con las prácticas recomendadas de diseño responsivo. La web evoluciona constantemente, y estar al tanto de las tendencias y técnicas actuales es clave para un diseño efectivo.",
              ],
            },
            {
              title: "Consejos para depurar y entender errores comunes.",
              paragraphs: [
                "Familiarízate con las herramientas de desarrollo del navegador, especialmente la consola. Las mensajes de error en la consola pueden proporcionar pistas valiosas sobre problemas en tu código.",
                "Utiliza la validación HTML para identificar posibles errores de sintaxis en tu documento. Un HTML válido es fundamental para evitar problemas de renderizado.",
                "Habilita el modo de desarrollo en Bootstrap para obtener mensajes de error más detallados. Esto puede ayudarte a identificar rápidamente problemas específicos relacionados con Bootstrap.",
                "Divide tu código en fragmentos más pequeños y prueba cada sección por separado. Esto facilita la identificación de la causa de los problemas y acelera el proceso de depuración.",
                "Aprovecha las funciones de autocompletado del editor de código. Evita errores tipográficos y asegúrate de utilizar nombres de clases y atributos correctos.",
                "Consulta la documentación de Bootstrap regularmente. Las actualizaciones pueden introducir cambios en las clases o en el comportamiento de los componentes, y es crucial mantenerse informado.",
                "Comparte tu código con la comunidad para obtener retroalimentación. Otros desarrolladores pueden ofrecer perspectivas útiles y soluciones a problemas que puedas encontrar.",
                "No tengas miedo de experimentar y probar nuevas cosas. La experiencia es la mejor maestra, y la resolución de problemas es una parte integral del proceso de aprendizaje.",
              ],
            },
          ]
    }
];

// Bring the array of links that contain each theme name
let firstTopic = document.getElementsByClassName('first-theme');
let secondTopic = document.getElementsByClassName('second-theme');
let thirdTopic = document.getElementsByClassName('third-theme');

let themesTitles = [firstTopic, secondTopic, thirdTopic];

// Display the Titles in their respective options buttons
const titleDisplayer = (n) => {
    for(let i = 0; i < themesTitles.length; i++) {
        for(let theme of themesTitles[i]) {
            theme.innerHTML = data[n].topics[i].title;
        }
        //console.log(data[n]);
    }
}


let container = document.getElementById('text-container');

// Displays the text on the container
const textDisplayer = (n, t) => {
    container.innerHTML = '';
    for(let i = 0; i < data[n].topics[t].paragraphs.length; i++) {
      container.innerHTML += `
        <p class="col-lg-4 col-md-6 col-sm-12 bg-light mt-2">
          ${data[n].topics[t].paragraphs[i]}
        </p>
        `;
    }
}


let title = document.getElementById('title');
let topicTitles = document.getElementsByClassName('topic-title');

let currentTitle = 0;
let currentTopic = 0;

let mainTitleBtns = document.getElementsByClassName('main-title');

let lgSearchInput = document.getElementById('lg-search-input');


// Sets the class of 'active' to the current title
const handleActiveTitle = () => {
  for (let i = 0; i < mainTitleBtns.length; i++) {
    mainTitleBtns[i].classList.remove('active');
  }
  mainTitleBtns[currentTitle].classList.add('active');
}

// Sets the topic titles in the carousel
const carouselTextSetter = () => {
  for(let i = 0; i < topicTitles.length; i++) {
    topicTitles[i].innerHTML = data[currentTitle].topics[i].title;
  }
}

// Function that handle title changes
const handleTitleChange = (n) => {
  currentTitle = n;
  titleDisplayer(currentTitle);
  textDisplayer(currentTitle, 0);
  handleActiveTitle();
  title.innerHTML = data[currentTitle].mainTitle;
}

// Function that handle topic changes
const handleTopicChange = (n) => {
  currentTopic = n;
  textDisplayer(currentTitle, currentTopic);
}


// Event Listener that show the first content in the page
document.addEventListener('DOMContentLoaded', () => {
    titleDisplayer(currentTitle);
    textDisplayer(currentTitle, currentTopic);
    carouselTextSetter();
    mainTitleBtns[0].classList.add('active');
    title.innerHTML = data[currentTitle].mainTitle;
});