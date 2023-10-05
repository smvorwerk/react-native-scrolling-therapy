import { Platform } from "react-native";

export const spanish = {
  shared: {
    cta_continue: "Continuar",
    cta_skip_tutorial: "Saltear tutorial",
    connect_with: "Connectar a {{socialMedia}}",
    statistics: "Estadísticas",
    terms_and_conditions: "Términos y Condiciones",
    privacy_policy: "Política de Privacidad",
    //TUTORIAL STEPS
    actions_scroll_down: "Ir hacia abajo",
    actions_scroll_up: "Ir hacia arriba",
    actions_like: "Like",
    actions_play: "Play",
    actions_swipe: "Deslizar",
    suprised_message:
      "Pon cara de sorpresa para ir hacia abajo\nConsejo: abre la boca y levanta las cejas",
    disgusted_message:
      "Pon cara de disgusto para ir hacia arriba\nConsejo: saca la punta de la lengua y frunce el ceño como si olieras algo extraño",
    smile_message:
      "Sonríe para dar like\nConsejo: mostrar los dientes ayuda con la detección de sonrisas.",
    sad_message:
      "Pon cara triste para dar Play\nConsejo: levanta un poco las cejas mientras haces este gesto.",
    angry_message:
      "Pon cara de enojado para deslizar\nConsejo: frunce el ceño y muestra los dientes con fuerza",
    scroll_down_success: "¡Excelente!",
    scroll_up_success: "¡Muy bien!",
    like_success: "¡Buen trabajo!",
    play_success: "¡Increíble!",
    swipe_success: "¡Impresionante!",
    loading: "Cargando",
    english: "Inglés",
    portuguese: "Portugués",
    spanish: "Español",
  },
  language: {
    title: "Seleccione su idioma preferido",
    subtitle:
      "Una vez DENTRO la aplicación, puede cambiar su elección de idioma en CONFIGURACIÓN",
  },
  home: {
    welcome_title: "Binvenid@ a\nScrolling Therapy",
    subtitle:
      "Convierte tu tiempo en redes sociales en ejercicios para síntomas de Parkinson.",
  },
  tutorial_start: {
    title: "Empecemos",
    subtitle:
      "Hay 5 expresiones faciales que deberá practicar para navegar con éxito a través de sus redes sociales. Asegúrate de estar en un ambiente iluminado, sin objetos ni personas en el fondo. ¡Probemos!",
    cta_next: "Siguiente",
  },
  tutorial: {
    cannot_skip_message:
      "Por favor, completa el tutorial para aprender los ejercicios que te ayudaran con tu terapia física.",
    //TUTORIAL MESSAGE
    initial_message:
      "Ahora coloca tu cara dentro del área y comencemos el tutorial.",
    repeat_message:
      "Por favor, repite el gesto 3 veces para confirmar que lo detectamos",
    //RESTART POP-UP
    try_again_title: "¿Probamos de nuevo?",
    try_again_description:
      "No pudimos detectar ningún gesto. ¿Quieres realizar el tutorial nuevamente?",
    try_again_yes_cta: "Sí",
    try_again_no_cta: "No",
    //NO FACE DETECTED POP-UP
    no_face_detection_title: "No detectamos tu rostro",
    no_face_detection_description: "Por favor coloca tu cara dentro del área",
  },
  tutorial_completed: {
    title: "¡Bien hecho!",
    subtitle:
      "Ahora solo necesitas iniciar sesión en tus redes sociales y empezar a navegar.",
    checkbox_prefix: "Acepto los ",
    checkbox_disclaimer:
      "Acepto el siguiente descargo de responsabilidad: La aplicación Scrolling Therapy está destinada a solamente usos de bienestar general y no provee ningún tipo de cuidado clínico ni de consulta o guía médica. Tampoco está destinada ni directa ni indirectamente para la prevención, diagnóstico, tratamiento o rehabilitación de ninguna enfermedad, estado o condición. Los contenidos de Scrolling Therapy como textos, videos, gráficos e imágenes son solamente con fines informativos y no han sido evaluados por la U.S. Food and Drug Administration ni ninguna otra entidad regulatoria. El contenido no intenta ser un sustituto de consulta médica profesional, prevención, diagnóstico, tratamiento o rehabilitación o para la cura o prevención de cualquier condición médica. No intente auto-diagnosticarse y ante cualquier duda, busque siempre el asesoramiento de su médico de cabecera o algún otro profesional de la salud calificado sin importar su condición médica. Confiar en cualquiera de la información brindada en la aplicación queda solamente bajo su propio riesgo.",
    and: " y ",
  },
  social: {
    face_detection: "Detectar rostro",
    align_camera:
      "Por favor, posicione su rostro con la cámara moviéndolo hacia la izquierda/derecha.",
    congrats: "¡Felicitaciones!",
    exercise_completed_title:
      "Terminaste tu práctica de hoy. Pero puedes continuar... No hay tal cosa como hacer mucho ejercicio.",
    //FACEBOOK FEED
    new_award_title: "¡Recompensa!",
    new_award_description:
      "Alcanzaste {{count}} minuto de práctica. Mira tus métricas para saber más acerca de tu actividad.",
    new_award_description_plural:
      "Alcanzaste XXX minutos de práctica. Mira tus métricas para saber más acerca de tu actividad.",
    cta_new_award: "IR A MÉTRICAS",
  },
  menu: {
    connect_with_facebook: "Connectar a Facebook",
    title: "Menu",
    switch_accounts: "Cambiar de cuenta",
    //MENU ITEMS
    dashboard: "Info del usuario",
    tutorial: "Tutoriales",
    statistics: "Estadísticas",
    settings: "Configuración",
    how_it_works: "Cómo funciona",
    logout: "Salir",
  },
  dashboard: {
    section_welcome: "Bienvenid@ a tu información",
    explore: "Explora tus redes sociales",
    about_title: "Acerca de Scrolling Therapy",
    about_description:
      Platform.OS === "ios"
        ? "Scrolling Therapy es una app que le permite a las personas diagnosticadas con Parkinson realizar ejercicios faciales mientras navegan por sus redes sociales. Scrolling Therapy no es, ni pretende ser, una cura para la enfermedad de Parkinson y no reemplaza ningún otro tratamiento para esta enfermedad. Si tiene alguna duda sobre su efecto, consulte a su médico."
        : "Scrolling Therapy es una aplicación móvil que ayuda a las personas que han sido diagnosticadas con la enfermedad de Parkinson a realizar ejercicios faciales, sugeridos como parte de su tratamiento físico diario, mediante el uso de tecnología de reconocimiento facial que les permite usar gestos del rostro para navegar por sus redes sociales.\nScrolling Therapy no es, y nunca pretenderá serlo, una cura para la enfermedad de Parkinson y no reemplaza a ningún otro tratamiento para la misma.\nSi tiene alguna duda sobre su efecto, por favor consulte a su médico.",
  },
  stats: {
    weekly: "Semanal",
    no_data: "No tienes suficientes datos para mostrar",
    minute: "{{count}} minuto",
    minute_plural: "{{count}} minutos",
    second: "{{count}} segundo",
    second_plural: "{{count}} segundos",
    average_time: "Uso diario promedio",
    most_used_actions: "Interacciones más utilizadas",
    chart_time_middle_label: "Min",
    //WEEK CONSTANTS
    sunday: "D",
    monday: "L",
    tuesday: "M",
    wednesday: "M",
    thursday: "J",
    friday: "V",
    saturday: "S",
  },
  settings: {
    title: "Configuración",
    front_camera_view: "Vista de cámara frontal",
    language: "Idioma",
  },
  terms_and_conditions: {
    title: "Términos de Uso",
    date: "Fecha de la última actualización: 28/03/2023",
    paragraph:
      'Sea bienvenido a la aplicación Scrolling Therapy de Eurofarma ("Aplicación"). Esta Aplicación es controlada y operada por Eurofarma Laboratorios S.A. ("Eurofarma"), empresa con sede en Rodovia Presidente Castelo Branco, 3565, Cuadra GL/Lote A – Ingahi / Itapevi - SP, CP 06696-000, inscrita en la Clave Fiscal bajo el n° 61.190.096/0001-92.\n\nPor favor, lea atentamente los términos y condiciones estipulados a continuación ("Términos de Uso") para que usted pueda disfrutar de nuestra Aplicación y de todos los servicios suministrados por medio de la misma.\n',
    bold_paragraph:
      "En el caso que usted no concuerde con cualesquiera disposiciones de los Términos de Uso, no acceda ni utilice nuestra Aplicación. Su acceso y utilización representa su aceptación integral e incondicional a los Términos de Uso. La Política de Privacidad de la Aplicación integra los presentes Términos de Uso.",
    last_paragraph:
      'Para los fines de estos Términos de Uso, "Usuarios" son todas las personas físicas registradas o no registradas, que de cualquier forma interactúan, entran o utilizan la Aplicación.',
    topics: [
      {
        title: "Objetivo de la Aplicación",
        description:
          "Eurofarma desarrolló y mantiene esta Aplicación para apoyo al tratamiento de pacientes diagnosticados con Enfermedad de Parkinson. Esta Aplicación se destina al público en general.\n\nSi usted tiene un problema de salud, usted deberá consultar a su médico o a un profesional de salud.",
      },
      {
        title: "Su Participación en la Aplicación",
        description:
          "El acceso a la Aplicación es ofrecido de forma gratuita y podrá ser hecho desde cualquier dispositivo con acceso a la red mundial de computadoras.\n\nUsted puede libremente utilizar la Aplicación así como hacer el download del contenido disponible en la Aplicación, siempre que tal uso sea para fines no comerciales. Usted no podrá distribuir, modificar, transmitir, reutilizar, republicar o usar cualquier contenido para finalidades comerciales sin el expreso consentimiento por escrito de Eurofarma.\n\nTodos los avisos de derechos autorales y de propiedad intelectual contenidos en el contenido copiado deben ser mantenidos y preservados. Los derechos autorales de todo el contenido de la Aplicación pertenecen a Eurofarma, sus afiliadas o proveedores, salvo si es diferentemente informado en la Aplicación.\n\nLas imágenes de personas o lugares publicadas en la Aplicación son de propiedad o debidamente licenciadas a Eurofarma. Está rigurosamente prohibido el uso de estas imágenes por cualquier Usuario. El uso indebido de las imágenes podrá infringir derechos de Eurofarma y de terceros.\n\nLa aplicación se conecta con la cámara del dispositivo para capturar las expresiones faciales del usuario. Esto le permite al usuario controlar su experiencia de navegación usando señales faciales específicas que le indican a la aplicación que se desplace, haga clic en Me gusta, comparta y más. La aplicación se basa en la plataforma TensorFlow AI de código abierto, desarrollada por Google, lo que garantiza una base sólida y confiable para la tecnología.",
      },
      {
        title: "Registro de Usuarios",
        description:
          "La aplicación no posee el registro de usuario, la funcionalidad de login a través de Instagram y Facebook no almacena la información personal del usuario.",
      },
      {
        title: "Obligaciones y Restricciones",
        description:
          "A los Usuarios está prohibido:\n\n(i) cometer fraude o estimular la práctica de conductas ilícitas;\n\n(ii) diseminar o intentar enviar virus de computadora, incluyendo, pero no limitándose a, caballos de Troya, worms, keyboard loggers, bombas reloj, spywares, adwares, cancelbots o cualquier otro código o programa invasivo o malicioso;\n\n(iii) diseminar o intentar enviar spams o cualquier otro material que pueda modificar, interrumpir o interferir en el funcionamiento, operación o mantenimiento de la Aplicación, de las redes de comunicación, o, de cualquier forma, perjudicar el uso y calidad ofrecida;\n\n(iv) utilizar la Aplicación para fines comerciales;\n\n(v) retirar, esconder o perjudicar cualquier nota, banner o signo distintivo o marca de la Aplicación;\n\n(vi) utilizar herramientas o proxy anónimo con la finalidad de tornar su dirección de IP anónima;\n\n(vii) interferir o violar cualquier sistema de seguridad de la Aplicación, especialmente aquellos con la finalidad de limitar y controlar el acceso y uso de la Aplicación y sus respectivos contenidos;\n\n(viii) solicitar información de login y/o de acceso de cuenta perteneciente a otro Usuario;\n\nEl Usuario reconoce y concuerda que toda la información y contenidos publicados en la Aplicación por Eurofarma son de propiedad o fueron debidamente licenciados a Eurofarma y, por eso, no podrán ser suministradas a terceros.\n\nSalvo si es diferentemente previsto en estos Términos de Uso, el Usuario concuerda en no reproducir, duplicar, copiar, vender, revender o explotar cualquier parte de la información y contenidos de la Aplicación, así como se obliga a utilizar todo el contenido de la Aplicación de forma lícita, estando prohibida la reproducción, distribución, transformación, comercialización o modificación del contenido, sin la previa y expresa autorización de Eurofarma, así como queda prohibido el suministro de login y contraseña para terceros no registrados.",
      },
      {
        title: "Enlaces de Terceros",
        description:
          "La Aplicación podrá suministrar enlaces para otras aplicaciones de Internet u otros recursos, incluso enlaces de publicaciones médicas, órganos públicos de salud y de sociedades médicas. Así, estos enlaces serán suministrados como una conveniencia al Usuario y, como Eurofarma no tiene control sobre tales aplicaciones o recursos externos, el Usuario reconoce y concuerda que Eurofarma no es responsable por la disponibilidad de estos y no endosa ni se responsabiliza por cualquier contenido, propaganda, productos, servicios u otros materiales contenidos o suministrados por medio de tales aplicaciones o recursos. En este sentido, sugerimos que el usuario se informe sobre la política de aplicaciones de terceros antes de usarlos o suministrar cualquier tipo de información.\n\nEurofarma podrá almacenar información sobre sus accesos a los referidos enlaces de terceros.",
      },
      {
        title: "Propiedad Intelectual",
        description:
          "Los derechos autorales de todo el contenido publicado por Eurofarma, por los usuarios y terceros pertenecen a sus respectivos titulares, salvo si es diferentemente informado.\n\nTodos los derechos de propiedad intelectual relativos a esta Aplicación están reservados a Eurofarma. Todas las marcas presentadas en esta Aplicación son de propiedad de Eurofarma, de sus empresas afiliadas o fueron debidamente licenciadas a Eurofarma.\n\nNinguna disposición será interpretada como concesión a los usuarios de cualquier derecho, título o interés en cualquier propiedad intelectual y marcas de Eurofarma.",
      },
      {
        title: "Limitación de Responsabilidad",
        description:
          'EL USO DE ESTE WEBSITE POR EL USUARIO CORRE POR SU CUENTA Y RIESGO. EN NINGUNA CIRCUNSTANCIA EUROFARMA O CUALQUIER OTRA PARTE INVOLUCRADA EN LA CREACIÓN, PRODUCCIÓN Y DIVULGACIÓN DEL WEBSITE SERÁ RESPONSABLE POR CUALESQUIERA DAÑOS (INCLUYENDO, ENTRE OTROS, DAÑOS DE CUALQUIER NATURALEZA, LUCROS CESANTES Y DAÑOS EMERGENTES) DERIVADOS DE SU ACCESO Y USO, O INCAPACIDAD DE ACCESO Y USO DEL WEBSITE.\n\nEUROFARMA NO SUMINISTRA CUALQUIER GARANTÍA CON RELACIÓN A LOS ARCHIVOS DISPONIBLES PARA DOWNLOAD. SIN CUALQUIER LIMITACIÓN, TODO CONTENIDO Y FUNCIONALIDADES DEL WEBSITE SON DISPUESTOS "EN EL ESTADO EN QUE SE ENCUENTRAN", SIN GARANTÍAS DE NINGUNA ESPECIE, YA SEAN EXPRESAS O IMPLÍCITAS, INCLUYENDO, ENTRE OTRAS, GARANTÍAS DE ADECUACIÓN PARA UN OBJETIVO EN PARTICULAR.\n\nEUROFARMA NO GARANTIZA QUE EL WEBSITE ESTARÁ DISPONIBLE DE FORMA CONSTANTE O LIBRE DE CUALESQUIERA ERRORES O FALLAS Y TAMPOCO ASEGURA LA IMPOSIBILIDAD DE QUE SU SISTEMA Y SERVIDORES PUEDAN SER ATACADOS, INVADIDOS, MODIFICADOS O VIOLADOS, DE CUALQUIER FORMA, POR TERCEROS.\n\nEUROFARMA NO ES NI SERÁ RESPONSABLE (I) POR LA CALIDAD O DISPONIBILIDAD DE LA CONEXIÓN DEL DISPOSITIVO DEL USUARIO A INTERNET EN CUALQUIER CIRCUNSTANCIA, (II) POR LA IMPOSIBILIDAD DE UTILIZACIÓN DE CUALESQUIERA INFORMACIÓN O SERVICIOS DISPONIBLES EN RAZÓN DE LA INCOMPATIBILIDAD DE LA CONFIGURACIÓN TÉCNICA DEL APARATO DE CONEXIÓN DE LOS USUARIOS, (III) POR LA DESOBEDIENCIA DE OTROS USUARIOS A LOS TÉRMINOS DE USO AQUÍ ESTABLECIDOS, (IV) POR CUALESQUIERA DAÑOS SUFRIDOS POR LOS USUARIOS EN RAZÓN DE LA UTILIZACIÓN DEL WEBSITE, Y (V) POR LA REPARACIÓN DE DAÑOS DE CUALQUIER NATURALEZA CAUSADOS POR LA VIOLACIÓN DE PRIVACIDAD O SEGURIDAD DE DATOS DE LOS USUARIOS DURANTE LA CONEXIÓN DE SU APARATO A INTERNET A TRAVÉS DE TERCEROS.\n\nEurofarma les recuerda a los Usuarios de esta Aplicación que es de entera responsabilidad de estos mantener el ambiente de su computadora seguro, con el uso de herramientas disponibles como antivirus y firewall, entre otras, para contribuir en la prevención de riesgos electrónicos.\n\nPOR ESO, EUROFARMA TAMPOCO RESPONDERÁ POR DAÑOS O VIRUS QUE PUEDAN INFECTAR LA COMPUTADORA O EQUIPO U OTROS BIENES DERIVADOS DEL ACCESO DEL USUARIO AL WEBSITE O POR DESCARGAR CUALESQUIERA MATERIALES, DATOS, TEXTOS, IMÁGENES, VÍDEOS O JUDÍOS PUBLICADOS EN EL WEBSITE.\n\nEl Usuario reconoce y concuerda que Eurofarma tendrá derecho de suspender el acceso del Usuario a la Plataforma en cualquier momento y sin notificación previa, incluso, como medidas prudentes o técnicas o como consecuencia de cualquier actividad de fiscalización realizada, en el caso que determine que las obligaciones del Usuario previstas en estos Términos no están siendo cumplidas o en el caso de problemas técnicos relevantes que afecten el desempeño de la Aplicación.',
      },
      {
        title: "Infracciones",
        description:
          "El Usuario que infrinja los presentes Términos de Uso y/o la Política de Privacidad será responsabilizado por los daños y perjuicios de cualquier naturaleza que Eurofarma sufra o aquellos causados a terceros, sin limitación.\n\nEn la hipótesis de que cualquier Usuario considere que la Aplicación esté siendo utilizada de forma indebida, el Usuario deberá enviarle una comunicación a la administración de la Aplicación, a través de la dirección electrónica euroatende@eurofarma.com.br, suministrando los siguientes datos: (i) datos personales: nombre, dirección, número de teléfono y dirección de correo electrónico del reclamante; (ii) especificación de la supuesta actividad irregular ocurrida en la Aplicación, incluyendo, sin limitación, la descripción de los hechos o circunstancias que revelan el carácter irregular de tal actividad; (iii) identificación precisa de donde la violación puede ser encontrada en la Aplicación (con respectiva URL); y (iv) declaración expresa, clara y bajo la responsabilidad del reclamante de que la información contenida en la comunicación está correcta y precisa.\n\nUna vez recibida tal comunicación, Eurofarma, a su exclusivo criterio y sin necesidad de notificación, se reserva el derecho de retirar el contenido supuestamente infractor de la Aplicación o excluir a los Usuarios infractores.",
      },
      {
        title: "Modificaciones en los Términos",
        description:
          "Eurofarma se reserva el derecho de, en cualquier momento y a su exclusivo criterio, modificar, cambiar o de otra forma actualizar los presentes Términos de Uso. En el caso de modificación, Eurofarma dará un aviso en la Aplicación y los nuevos términos de uso entrarán inmediatamente en vigor. En el caso que no concuerde con los términos modificados, el Usuario deberá dejar de usar la Aplicación. El acceso y utilización de la Aplicación después de la publicación de las modificaciones representa la aceptación integral e incondicional de los nuevos Términos de Uso.\n\nEl suministro de la Aplicación tiene duración indeterminada y Eurofarma se reserva el derecho de terminar, suspender o interrumpir unilateralmente y en cualquier momento, sin necesidad de aviso previo o posterior, el suministro de la Aplicación, o su entera transformación y modificación.\n\nCualesquiera dudas, críticas, sugerencias y /o reclamaciones podrán ser hechas por el e-mail",
      },
    ],
    brazil: "Brasil",
    other_countries: "Demás países de América Latina",
  },
  privacy_policy: {
    title: "POLÍTICA DE PRIVACIDAD",
    date: "Fecha de la última actualización: 28/03/2023",
    intro:
      'Eurofarma Laboratorios S.A., empresa con sede en Rodovia Presidente Castelo Branco, 3565, Cuadra GL/Lote A – Ingahi / Itapevi - SP, CP 06696-000, inscrita en la Clave Fiscal bajo el n° 61.190.096/0001-92, (“Eurofarma”) tiene el compromiso de respetar su privacidad y creó esta política de privacidad ("Política de Privacidad") para proporcionarle a usted un claro entendimiento de cómo funciona la aplicación Scrolling Therapy (“Aplicación”), y cómo son tratados sus datos personales. \n\nEsta Política de Privacidad presenta, de forma sencilla, objetiva y transparente, las prácticas adoptadas por Eurofarma en relación al tratamiento de datos personales de los Usuarios de la Aplicación. \n\nPara los efectos de esta Política de Privacidad, Eurofarma no recolecta datos personales sobre el uso de la aplicación Scrolling Therapy.',
    topics: [
      {
        title: "Cuáles Datos Personales Recolectamos",
        description_prefix:
          "No hay información de identificación personal almacenada en nuestros servidores. Los inicios de sesión de Facebook e Intragram no son almacenados por nosotros en nuestros servidores. \n\nLas estadísticas se almacenan en nuestro servidor y se vinculan al usuario a través de una identificación de usuario anónima. \n\nSolo por el momento, faceApi.js reconoce las expresiones faciales (alrededor de 200 ms) y devuelve sus comentarios a la aplicación sin almacenar información personal.",
        subtopics: [
          {
            title: "\n\n• Información de navegación. ",
            text: "Es la información que recolectamos de los Usuarios que navegan en la Aplicación: dirección de IP, información sobre el dispositivo utilizado, fecha y hora de acceso, fecha de instalación de la aplicación, idioma de preferencia, entre otras.",
          },
          {
            title: "\n\n• Otra información suministrada por los Usuarios. ",
            text: "Es la demás información voluntariamente suministrada por los Usuarios, como por ejemplo en comunicaciones con Eurofarma por medio de la Central de Atención.",
          },
        ],
      },
      {
        title: "Cómo Utilizamos los Datos Personales",
        description_prefix:
          "No hay recolección de datos de los usuarios identificados en la aplicación, por lo que Eurofarma utiliza los Datos Personales de forma anónima para las finalidades descritas en esta Política de Privacidad y demás finalidades previamente informadas. \nNosotros utilizamos los Datos Personales para: \n\n(i) Diagnosticar y solucionar eventuales problemas técnicos de la Aplicación. \n(ii) Perfeccionar y desarrollar una mejor experiencia para los Usuarios en el uso de la Aplicación. \n(iii) Cumplir obligaciones legales y regulatorias, incluso en la comunicación a las autoridades competentes de evento adversos o cuestiones relacionadas a la seguridad y calidad de nuestros productos. \n(iv) Investigar e instruir eventuales procesos judiciales, administrativos o arbitrales y proteger los derechos e intereses de Eurofarma, nuestras afiliadas o terceros. \n(v) Identificar y disponer materiales informativos de interés de los Usuarios. \n(vi) Realizar análisis estadísticos sobre los Usuarios para mejorar y desarrollar nuevos productos y servicios.",
      },
      {
        title: "Con Quién Podemos Compartir los Datos Personales",
        description_prefix:
          "Salvo lo previsto en esta Política de Privacidad, los Datos Personales recopilados de forma anónima no serán proporcionados a terceros que no sean socios de Eurofarma, ni expuestos al público, vendidos o comercializados. \n\nEn algunas situaciones, podremos operar en conjunto con otras empresas en diversas actividades, incluso para hospedaje de datos, analytics e inteligencia de mercado. De esta forma, nos reservamos el derecho de compartir su información, incluyendo Datos Personales, tan solamente con las empresas indicadas a continuación. Adoptaremos, siempre que sea posible, mecanismos de anonimización de estos datos, buscando preservar al máximo su privacidad. \n\nEn este sentido, podremos compartir sus Datos Personales con las siguientes empresas:",
        subtopics: [
          {
            title: "\n(i) Empresas del Grupo Eurofarma: ",
            text: "Podemos transferir los Datos entre las empresas de Eurofarma, dentro o fuera de Brasil, para realizar la debida atención a nuestros clientes y consumidores, además de garantizar el cumplimiento de las obligaciones legales y regulatorias de Eurofarma, especialmente cuando estos fueren únicos y/o integrados, entre otros motivos.",
          },
          {
            title: "\n(ii) Nuestros proveedores: ",
            text: "Tenemos una serie de proveedores que debemos contratar para operar nuestros servicios, y algunos de ellos pueden tratar los Datos Personales que recolectamos. Por ejemplo, empresas que prestan servicios de hospedaje de datos, de atención al consumidor, de autenticación y validación de registros, empresas de publicidades, entre otros. En la medida de lo posible, buscamos evaluar cuidadosamente a nuestros proveedores y firmar con ellos obligaciones contractuales de seguridad de la información y protección de Datos Personales, con el objetivo de minimizar riesgos para los Titulares, pero desgraciadamente no podemos garantizar la correcta manipulación por terceros, que utilizan, divulgan y protegen los datos personales de acuerdo con sus respectivas políticas de privacidad.",
          },
          {
            title:
              "\n(iii) Autoridades judiciales, policiales o administrativas: ",
            text: "En Brasil o en el exterior, en cumplimiento de orden judicial u obligación legal o regulatoria.",
          },
          {
            title: "\n(iv) Terceros: ",
            text: "En conexión con cualquier reorganización, fusión, venta, joint venture, cesión, transferencia u otra disposición de toda o parte de nuestros negocios, activos o acciones (incluso en proceso de quiebra o semejante).",
          },
          {
            title: "\n(v) Para resguardar y proteger derechos de Eurofarma: ",
            text: "Nos reservamos el derecho de acceder, leer, preservar y divulgar datos que creemos que son necesarios para cumplir una obligación legal o una orden judicial; cumplimiento de demandas regulatorias con Anvisa o otras entidades; proteger los derechos, propiedad o seguridad de Eurofarma, de nuestros colaboradores y clientes.",
          },
        ],
        description_sufix:
          "\n\nInformes estadísticos creados a partir de datos agregados, que no revelen la identidad de los titulares, podrán también ser compartidos con terceros, tales como afiliadas, subcontratados y/o asociados comerciales de Eurofarma.",
      },
      {
        title: "Cómo Recolectamos los Datos Personales",
        description_prefix:
          "Además de la información que los Usuarios voluntariamente nos envían, utilizamos ciertas tecnologías como “cookies”, “web beacons” e “IPs” para la recogida de información en la Aplicación. \n\nAl navegar en la Aplicación o al utilizar cualquiera de sus recursos o herramientas, un cookie podrá ser enviado para el dispositivo. Un cookie es un fragmento de dato que le identifica como un Usuario único, reconociendo, siguiendo y almacenando su información de navegación. La Aplicación inserta cookies en su dispositivo conteniendo un identificador exclusivo usado para comprender mejor el uso de la Aplicación, posibilitando que Eurofarma identifique cuáles funcionalidades son preferidas por los Usuarios (por ejemplo, con base en el número de visitas a estas funcionalidades). \n\nAl iniciar sesión a través de Facebook e Instagram, se puede proporcionar una cookie, que será mantenida por la Aplicación y contendrá un identificador anónimo. Este tipo de cookie se utiliza para identificar al Usuario y brindar acceso a áreas de la Aplicación que están limitadas a Usuarios registrados. \n\nAdemás de los cookies, podremos utilizar o autorizar la utilización de otras tecnologías de recogida de datos e identificación, tales como “beacons” (también conocidos como “pixel tags” o “clear gifs”). Los beacons sirven para ayudar a gestionar y perfeccionar nuestros servicios, sistemas, publicidad y anuncios online y demás herramientas. Ellos son pequeños bloques de código insertados en la Aplicación que pueden recolectar información sobre su dispositivo, incluyendo, por ejemplo: modelo de dispositivo, sistema operativo, versión de navegador, horario de acceso, dirección IP y otra información similar. \n\nSitios, contenidos y aplicaciones de terceros, así como afiliados, subcontratados o asociados comerciales de Eurofarma podrán utilizar sus propias cookies o beacons, los cuales pueden no operar en los mismos términos de esta Política de Privacidad. De esta forma, Eurofarma no se responsabiliza por estos sitios y contenidos y, además, no comparte, subscribe, monitorea, valida ni acepta la forma como esos sitios o herramientas de almacenamiento de contenido recolectan, procesan y transfieren su información personal y privada. Recomendamos que los Usuarios consulten las respectivas políticas de privacidad de tales sitios para informarse adecuadamente al respecto del uso de su información personal por otros sitios u otras herramientas. \n\nRecolectamos también la dirección IP (Protocolo de Internet), un número automáticamente atribuido al equipo por su proveedor de conexión a Internet siempre que se conecta a Internet. Eurofarma podrá también usar las direcciones IP para recolectar información anónima y agregada sobre el número de visitantes y uso de la Aplicación.",
      },
      {
        title: "Comunicaciones",
        description_prefix:
          "Eurofarma no solicita información personal por e-mail. Por este motivo, Eurofarma no se responsabiliza por cualesquiera comunicaciones electrónicas fraudulentas que recolecten sus datos personales (técnica comúnmente conocida como phishing).",
      },
      {
        title: "Derechos de los Titulares de los Datos Personales",
        description_prefix:
          "Los datos recopilados en la aplicación no son identificables, pero puede solicitar más información a través del correo electrónico privacy@eurofarma.com.br \n\nIntentamos responder a todas las solicitudes legítimas dentro de 10 días hábiles. Ocasionalmente, puede demorar más de 10 días hábiles si su solicitud es particularmente compleja o si Usted ha hecho varias solicitudes. En este caso, le notificaremos y le mantendremos actualizado sobre la marcha de su solicitud.",
      },
      {
        title: "Modificaciones a Esta Política de Privacidad",
        description_prefix:
          "La presente Política de Privacidad podrá ser modificada en cualquier momento por Eurofarma, a su exclusivo criterio. Recomendamos que ella sea revisada periódicamente. \n\nTodas las modificaciones serán comunicadas por medio de un aviso en destaque en la pantalla inicial de la Aplicación o cualquier otra forma de comunicación con los Usuarios.",
      },
      {
        title: "Entre en Contacto Con Nosotros",
        description_prefix:
          "En el caso de dudas, comentarios, sugerencias o reclamaciones relacionados a esta Política de Privacidad o a las prácticas de protección de datos de Eurofarma, entre en contacto con nosotros por medio de nuestros Canales de Atención disponibles en la aplicación.",
      },
    ],
  },
  help: {
    title: "Cómo funciona",
    faq: [
      {
        question: "¿Puedo usar cualqueir red social con The Scrolling Therapy?",
        answer:
          "Hasta ahora, The Scrolling Therapy funciona únicamente con Facebook e Instagram.",
      },
      {
        question: "¿Cómo me conecto a mis redes sociales?",
        answer:
          "Tanto en la pantalla de bienvenida como en la sección de información de usuario encontrarás el enlace para conectarte con Facebook e Instagram.",
      },
      {
        question:
          "¿Cuáles son los gestos que puedo ejercitar con The Scrolling Therapy?",
        answer:
          "Las expresiones incluidas hasta ahora son Smile, Disgusted, Angry, Surprise y Sad.",
      },
      {
        question:
          "¿Cómo puedo aprender a usar mis gestos faciales para controlar la aplicación?",
        answer:
          "Por favor, ve a la sección Tutoriales y te guiaremos a través del proceso.",
      },
      {
        question: "¿Qué pasa si la cámara no detecta mis expresiones faciales?",
        answer:
          "La aplicación mostrará un mensaje tanto en el Tutorial como en tu navegación de redes sociales si no se detectan tus gestos.",
      },
      {
        question: "¿Cómo sé cuánto tiempo he dedicado a hacer ejercicio?",
        answer:
          Platform.OS === "ios"
            ? "Scrolling Therapy realiza un seguimiento diario del tiempo que pasa navegando por su feed de redes sociales con expresiones faciales en la parte superior de la app.\nLa información detallada sobre los gestos que ha utilizado y el tiempo de ejercicio semanal se muestran en la sección de Estadísticas."
            : "Scrolling Therapy realiza un seguimiento del tiempo que pasas navegando en las redes sociales con tus expresiones faciales y te mostrará qué tan cerca estás de tu objetivo diario en la parte superior de la aplicación. Por otro lado, la información detallada sobre tus objetivos y el uso de la aplicación se muestra en la sección de Métricas.",
      },
      {
        question: "¿Graba The Scrolling Therapy lo que hago con la cámara?",
        answer:
          "NO. La aplicación solo usa la cámara de tu celular cuando y si le das acceso y solo cuando estás haciendo ejercicio.",
      },
    ],
  },
  header: {
    daily_goal_achieved: "¡Felicitaciones!\nAlcanzaste tu objetivo diario",
    minute_to_go:
      Platform.OS === "ios"
        ? "1 minuto más"
        : "1 minuto para tu objetivo diario",
    minute_to_go_plural:
      Platform.OS === "ios"
        ? "{{count}} minutos más"
        : "{{count}} minutos para tu objetivo diario",
  },
};
