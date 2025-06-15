document.addEventListener('DOMContentLoaded', () => {

    const preguntasQuiz = [
        {
            texto: "¿Qué habilidad de la inteligencia emocional es más crucial para un estudiante al manejar la frustración después de recibir una calificación baja en un examen, y cómo la aplica?",
            opciones: [
                {
                    texto: "Empatía, al entender que el profesor solo intenta ayudar con la calificación.",
                    esCorrecta: false,
                    retroalimentacion: "Si bien la empatía con el profesor es valiosa, no es la habilidad principal para manejar tu propia frustración. La empatía se enfoca en comprender las emociones de los demás, no en regular las tuyas directamente."
                },
                {
                    texto: "Habilidades sociales, al buscar apoyo de sus compañeros en la misma situación.",
                    esCorrecta: false,
                    retroalimentacion: "Buscar apoyo es una habilidad social útil, pero no aborda directamente el manejo de la frustración personal. Primero, necesitas entender y regular tu propia emoción antes de buscar soluciones externas de forma efectiva."
                },
                {
                    texto: "Autoconciencia, al identificar el origen de la frustración para transformarla en motivación.",
                    esCorrecta: true,
                    retroalimentacion: "¡Correcto! La autoconciencia te permite entender que la frustración es una señal. Reconocer su origen es el primer paso para transformarla en una fuerza para mejorar y seguir adelante, en lugar de dejarte paralizar por ella."
                },
                {
                    texto: "Motivación, al simplemente ignorar la emoción negativa y concentrarse en el siguiente tema.",
                    esCorrecta: false,
                    retroalimentacion: "La motivación es importante, pero ignorar las emociones negativas no es una estrategia efectiva de inteligencia emocional. Es importante reconocer la frustración para poder gestionarla; de lo contrario, podría reaparecer o afectar tu rendimiento a largo plazo."
                }
            ]
        },
        {
            texto: "Durante un trabajo en equipo escolar, un conflicto surge porque dos miembros tienen ideas muy diferentes. ¿Qué acción demuestra mejor la autorregulación emocional para resolver este problema?",
            opciones: [
                {
                    texto: "Argumentar con firmeza su propia posición para convencer a los demás de que es la mejor opción.",
                    esCorrecta: false,
                    retroalimentacion: "Argumentar con firmeza puede ser contraproducente en un conflicto emocional. Si bien es válido expresar tu opinión, priorizar 'convencer' sobre 'comprender' puede escalar la tensión y dificultar la autorregulación de las emociones de todos los involucrados."
                },
                {
                    texto: "Tomar un respiro, escuchar activamente a ambos lados sin juzgar, y proponer una solución integradora.",
                    esCorrecta: true,
                    retroalimentacion: "¡Muy bien! Esto demuestra autorregulación al controlar la propia reacción inicial, y luego aplicar la empatía y habilidades sociales para buscar una solución colaborativa. Es la base para un diálogo constructivo."
                },
                {
                    texto: "Dejar que los demás resuelvan el conflicto para evitar tensiones personales.",
                    esCorrecta: false,
                    retroalimentacion: "Evitar el conflicto no es una señal de autorregulación emocional efectiva en un equipo. Implica eludir la responsabilidad y puede dejar que el problema persista o que otros se sientan abandonados. La autorregulación implica enfrentar el problema con calma."
                },
                {
                    texto: "Decidir unilateralmente cuál es la solución más rápida para poder avanzar con el proyecto.",
                    esCorrecta: false,
                    retroalimentacion: "Tomar una decisión unilateral, aunque sea para avanzar, ignora las emociones y perspectivas de los otros miembros del equipo. Esto no solo demuestra falta de autorregulación (al no manejar la impaciencia), sino que también puede generar resentimiento y futuras fricciones."
                }
            ]
        },
        {
            texto: "Un profesor observa a un estudiante que habitualmente participa mucho, pero hoy está callado y aislado. ¿Qué enfoque refleja mejor la empatía del profesor en esta situación?",
            opciones: [
                {
                    texto: "Acercarse discretamente al estudiante después de clase para preguntarle cómo se siente y si necesita algo.",
                    esCorrecta: true,
                    retroalimentacion: "¡Exacto! Esta acción muestra una genuina preocupación y empatía. Permite al estudiante sentirse visto y ofrece un espacio seguro para expresar sus emociones, sin presionarlo ni avergonzarlo en público."
                },
                {
                    texto: "Ignorar el comportamiento, ya que considera que es un problema personal del estudiante.",
                    esCorrecta: false,
                    retroalimentacion: "Ignorar la situación demuestra una falta de empatía y puede hacer que el estudiante se sienta solo o incomprendido. El rol del educador va más allá de lo académico; implica también el bienestar emocional de los alumnos."
                },
                {
                    texto: "Preguntarle en voz alta frente a toda la clase si le ocurre algo, para que sepa que lo notó.",
                    esCorrecta: false,
                    retroalimentacion: "Preguntar en voz alta puede avergonzar al estudiante y hacer que se cierre aún más. La empatía implica considerar la comodidad y privacidad de la otra persona, especialmente en situaciones emocionales sensibles."
                },
                {
                    texto: "Asignarle una tarea individual extra para forzarlo a concentrarse y dejar de estar distraído.",
                    esCorrecta: false,
                    retroalimentacion: "Asignar una tarea extra sin entender la raíz del problema puede agravar la situación emocional del estudiante y no aborda la falta de participación desde una perspectiva empática. Podría interpretarse como un castigo, no como apoyo."
                }
            ]
        },
        {
            texto: "¿Cómo puede un estudiante usar la autoconciencia emocional para mejorar su preparación ante un examen?",
            opciones: [
                {
                    texto: "Identificando sus patrones de ansiedad y estrés, para aplicar técnicas de relajación antes y durante la prueba.",
                    esCorrecta: true,
                    retroalimentacion: "¡Correcto! La autoconciencia permite al estudiante reconocer sus señales internas (ansiedad, estrés) y entender cómo estas afectan su rendimiento. Así puede tomar medidas proactivas como técnicas de relajación para manejarlas eficazmente."
                },
                {
                    texto: "Comparando sus niveles de ansiedad con los de sus compañeros para sentirse menos solo.",
                    esCorrecta: false,
                    retroalimentacion: "Si bien la comparación puede ofrecer consuelo, la autoconciencia es una habilidad interna. No se trata de comparar, sino de reconocer y entender tus propias emociones para manejarlas, independientemente de los demás."
                },
                {
                    texto: "Consultando con el profesor sobre qué emociones son aceptables sentir antes de un examen.",
                    esCorrecta: false,
                    retroalimentacion: "La autoconciencia no se trata de buscar aprobación externa sobre las emociones. Se trata de una autoexploración para entender lo que sientes, independientemente de si es 'aceptable' o no, para luego gestionarlo."
                },
                {
                    texto: "Asegurándose de no sentir ninguna emoción antes del examen para estar totalmente concentrado.",
                    esCorrecta: false,
                    retroalimentacion: "Es irreal y poco saludable intentar no sentir emociones. La autoconciencia nos enseña a aceptar nuestras emociones (positivas o negativas) y a entender su mensaje, no a suprimirlas. Incluso la ansiedad puede ser una señal para prepararse."
                }
            ]
        },
        {
            texto: "Si un grupo de estudiantes debe colaborar en un proyecto complejo, ¿qué acción demuestra habilidades sociales en el contexto de la inteligencia emocional?",
            opciones: [
                {
                    texto: "Designar un líder que tome todas las decisiones para evitar discusiones.",
                    esCorrecta: false,
                    retroalimentacion: "Si bien un líder puede ser útil, tomar decisiones unilaterales no fomenta las habilidades sociales del grupo. Limita la participación y la oportunidad de aprender a trabajar juntos a través del diálogo y el compromiso."
                },
                {
                    texto: "Evitar cualquier tema personal y enfocarse estrictamente en la tarea académica.",
                    esCorrecta: false,
                    retroalimentacion: "Las habilidades sociales no se limitan a lo profesional; también implican construir un rapport y entender la dinámica del grupo. Excluir completamente lo personal puede limitar la confianza y la cohesión del equipo."
                },
                {
                    texto: "Compartir la frustración del grupo en redes sociales para desahogarse de forma anónima.",
                    esCorrecta: false,
                    retroalimentacion: "Desahogarse anónimamente en redes sociales es una forma poco constructiva de manejar la frustración y no contribuye a las habilidades sociales del equipo. La comunicación directa y el manejo interno del conflicto son clave."
                },
                {
                    texto: "Establecer canales de comunicación claros, escuchar activamente las ideas de todos y negociar los desacuerdos.",
                    esCorrecta: true,
                    retroalimentacion: "¡Perfecto! Las habilidades sociales en IE implican una comunicación efectiva, escucha empática y la capacidad de negociar y resolver conflictos de manera constructiva, esenciales para la colaboración en equipo."
                }
            ]
        },       
        {
            texto: "¿Cuál es el beneficio principal de que un profesor desarrolle su autorregulación emocional en el aula?",
            opciones: [
                {
                    texto: "Lograr que todos los estudiantes le teman para mantener la disciplina.",
                    esCorrecta: false,
                    retroalimentacion: "La autorregulación no busca generar miedo, sino respeto y un ambiente de aprendizaje seguro. El miedo es una emoción negativa que no fomenta la colaboración ni el desarrollo emocional saludable en el aula."
                },
                {
                    texto: "Evitar sentir cualquier emoción negativa durante el día de clase.",
                    esCorrecta: false,
                    retroalimentacion: "Es irreal y poco saludable intentar suprimir todas las emociones. La autorregulación se trata de gestionar adecuadamente las emociones, no de eliminarlas. Sentir frustración o estrés es normal; lo importante es cómo se manejan."
                },
                {
                    texto: "Mantener la calma y tomar decisiones racionales incluso bajo presión o ante comportamientos desafiantes de los estudiantes.",
                    esCorrecta: true,
                    retroalimentacion: "¡Correcto! Un profesor con autorregulación emocional puede controlar sus reacciones impulsivas, lo que le permite mantener un ambiente de clase estable y tomar decisiones pedagógicas más efectivas, incluso en momentos de estrés."
                },
                {
                    texto: "Solo reaccionar emocionalmente cuando la situación es muy grave.",
                    esCorrecta: false,
                    retroalimentacion: "La autorregulación es una práctica constante, no solo para situaciones extremas. Practicarla en el día a día ayuda a prevenir que las situaciones se escalen y a mantener un control emocional general."
                }
            ]
        },
        {
            texto: "¿Qué impacto tiene la motivación intrínseca (componente de la IE) en el aprendizaje de un estudiante?",
            opciones: [
                {
                    texto: "Impulsa al estudiante a aprender por interés propio y satisfacción personal, lo que lleva a un aprendizaje más profundo y duradero.",
                    esCorrecta: true,
                    retroalimentacion: "¡Acertado! La motivación intrínseca nace del propio deseo de aprender y la satisfacción de hacerlo. Esto genera un compromiso mucho mayor con el estudio y un aprendizaje más significativo y sostenible en el tiempo."
                },
                {
                    texto: "Depende exclusivamente de las recompensas externas, como buenas calificaciones o premios.",
                    esCorrecta: false,
                    retroalimentacion: "Esto describe la motivación extrínseca. La motivación intrínseca, clave en la IE, surge del interior del individuo, no de factores externos. Aunque las recompensas externas pueden ser un plus, no son el motor principal."
                },
                {
                    texto: "Solo es relevante para los estudiantes con altas capacidades intelectuales.",
                    esCorrecta: false,
                    retroalimentacion: "La motivación intrínseca es un factor universal en el aprendizaje humano, aplicable a estudiantes de todas las capacidades. Fomentarla puede mejorar el rendimiento y la actitud de cualquier alumno."
                },
                {
                    texto: "Disminuye la necesidad de interactuar con el profesor y los compañeros.",
                    esCorrecta: false,
                    retroalimentacion: "La motivación intrínseca impulsa el aprendizaje, pero no aísla al estudiante. De hecho, un estudiante motivado puede sentirse más inclinado a buscar conocimiento y colaborar con otros, enriqueciendo su experiencia."
                }
            ]
        },
        {
            texto: "Si un estudiante demuestra habilidades sociales desarrolladas, ¿cómo se manifestaría en la vida escolar?",
            opciones: [
                {
                    texto: "Evitando el contacto con otros para concentrarse mejor en sus estudios.",
                    esCorrecta: false,
                    retroalimentacion: "Evitar el contacto social iría en contra del desarrollo de habilidades sociales. La inteligencia emocional busca precisamente mejorar la interacción y la conexión con los demás, no el aislamiento."
                },
                {
                    texto: "Comunicándose efectivamente, resolviendo desacuerdos de forma pacífica y colaborando bien en proyectos grupales.",
                    esCorrecta: true,
                    retroalimentacion: "¡Correcto! Las habilidades sociales son la base para una interacción positiva. Se manifiestan en una comunicación clara, la capacidad de mediar o resolver conflictos y la cooperación, lo que facilita el trabajo en equipo y las relaciones interpersonales."
                },
                {
                    texto: "Siendo el más popular de la clase y siempre teniendo la razón en las discusiones.",
                    esCorrecta: false,
                    retroalimentacion: "La popularidad no es un indicador directo de buenas habilidades sociales. Ser siempre el que 'tiene la razón' puede indicar falta de flexibilidad y escucha, habilidades esenciales para la colaboración y el respeto mutuo."
                },
                {
                    texto: "Prefiriendo hacer todos los trabajos en solitario para asegurar un buen resultado.",
                    esCorrecta: false,
                    retroalimentacion: "Aunque algunos trabajos se hagan individualmente, preferir siempre el trabajo solitario no demuestra habilidades sociales desarrolladas, especialmente en un entorno educativo donde la colaboración es frecuente y valorada."
                }
            ]
        },
        {
            texto: "Un estudiante está tomando una decisión importante sobre su futuro académico (ej. elegir carrera). ¿Qué aspecto de la Inteligencia Emocional le ayudaría más a tomar una decisión consciente?",
            opciones: [
                {
                    texto: "La autoconciencia, al entender sus propios intereses, pasiones, fortalezas y limitaciones emocionales.",
                    esCorrecta: true,
                    retroalimentacion: "¡Acertado! La autoconciencia es clave para una decisión importante. Al entender tus propias emociones, intereses y lo que realmente te motiva, puedes alinear tu elección académica con tu bienestar personal y futuro éxito."
                },
                {
                    texto: "La capacidad de copiar las decisiones de sus amigos o de sus compañeros.",
                    esCorrecta: false,
                    retroalimentacion: "Copiar decisiones, aunque te haga sentir parte del grupo, no es una manifestación de inteligencia emocional. Una decisión consciente debe ser personal y alineada con tus propias emociones y metas, no con las de los demás."
                },
                {
                    texto: "La gestión del tiempo, al organizar sus horarios para investigar todas las opciones posibles.",
                    esCorrecta: false,
                    retroalimentacion: "La gestión del tiempo es una habilidad importante, pero es una habilidad cognitiva/ejecutiva, no directamente de inteligencia emocional. Es una herramienta que ayuda, pero no es la capacidad emocional que guía la decisión fundamental."
                },
                {
                    texto: "Ignorar sus sentimientos y basar la decisión únicamente en datos objetivos de empleabilidad.",
                    esCorrecta: false,
                    retroalimentacion: "Basar una decisión importante únicamente en datos objetivos e ignorar los sentimientos puede llevar a una elección insatisfactoria. La IE nos enseña a integrar la emoción con la razón para tomar decisiones más completas y satisfactorias a largo plazo."
                }
            ]
        },
        {
            texto: "¿Cómo puede un docente aplicar la empatía para mejorar la dinámica de un aula con estudiantes de diversos orígenes culturales y emocionales?",
            opciones: [
                {
                    texto: "Tratando a todos los estudiantes exactamente igual, sin considerar sus diferencias individuales.",
                    esCorrecta: false,
                    retroalimentacion: "Tratar a todos 'exactamente igual' puede parecer justo, pero ignora las diferencias individuales y las necesidades emocionales y culturales de cada estudiante. La verdadera equidad a menudo requiere un enfoque diferenciado y empático."
                },
                {
                    texto: "Evitando temas sensibles o controvertidos para no generar emociones negativas.",
                    esCorrecta: false,
                    retroalimentacion: "Evitar temas importantes puede limitar la profundidad del aprendizaje y la oportunidad de desarrollar habilidades de discusión. La empatía nos permite abordar temas complejos con sensibilidad y guiar a los estudiantes a través de las emociones que puedan surgir."
                },
                {
                    texto: "Escuchando activamente las perspectivas individuales, validando las emociones de los estudiantes y adaptando su enseñanza para conectar con sus experiencias.",
                    esCorrecta: true,
                    retroalimentacion: "¡Exacto! La empatía en un contexto diverso implica ir más allá de la simpatía. Significa esforzarse por entender las realidades emocionales y culturales de cada estudiante, validar sus sentimientos y ajustar las estrategias para crear un ambiente inclusivo y de apoyo."
                },
                {
                    texto: "Consultando únicamente a los estudiantes más participativos sobre sus sentimientos en clase.",
                    esCorrecta: false,
                    retroalimentacion: "Esto limitaría la aplicación de la empatía solo a un subgrupo. Un docente empático busca comprender a todos sus estudiantes, incluidos los más callados o aquellos que puedan tener dificultades para expresarse."
                }
            ]
        },        
    ];

    
    const numeroPreguntaSpan = document.getElementById('numero-pregunta');
    const textoPreguntaH2 = document.getElementById('texto-pregunta');
    const opcionesPreguntaDiv = document.getElementById('opciones-pregunta');
    const retroalimentacionDiv = document.getElementById('retroalimentacion');
    const botonSiguiente = document.getElementById('boton-siguiente');
    const botonReiniciar = document.getElementById('boton-reiniciar');
    const resultadoFinalDiv = document.getElementById('resultado-final');
    const puntuacionFinalSpan = document.getElementById('puntuacion-final');
    const mensajeResultadoP = document.getElementById('mensaje-resultado');

    let indicePreguntaActual = 0;
    let puntuacion = 0;
    let respuestaSeleccionada = null; 

    
    function cargarPregunta() {
        if (indicePreguntaActual <= (preguntasQuiz.length)) {
            const pregunta = preguntasQuiz[indicePreguntaActual];
            numeroPreguntaSpan.textContent = indicePreguntaActual + 1;
            textoPreguntaH2.textContent = pregunta.texto;
            opcionesPreguntaDiv.innerHTML = ''; 
            retroalimentacionDiv.innerHTML = ''; 
            retroalimentacionDiv.className = 'quiz-retroalimentacion'; 
            botonSiguiente.textContent = 'Siguiente Pregunta'; 
            botonSiguiente.disabled = true; 

            pregunta.opciones.forEach((opcion, index) => {
                const botonOpcion = document.createElement('button');
                botonOpcion.classList.add('quiz-opciones__boton');
                botonOpcion.textContent = opcion.texto;
                botonOpcion.dataset.index = index; 
                botonOpcion.addEventListener('click', () => seleccionarOpcion(botonOpcion, opcion));
                opcionesPreguntaDiv.appendChild(botonOpcion);
            });
            respuestaSeleccionada = null; 
        } else {
            mostrarResultadoFinal();
        }
    }
    
    function seleccionarOpcion(botonClicado, opcionSeleccionadaObj) {
        
        const todosLosBotones = opcionesPreguntaDiv.querySelectorAll('.quiz-opciones__boton');
        todosLosBotones.forEach(btn => {
            btn.disabled = true;
            btn.classList.remove('quiz-opciones__boton--seleccionado');
        });

        botonClicado.classList.add('quiz-opciones__boton--seleccionado');
        respuestaSeleccionada = opcionSeleccionadaObj; 

        mostrarRetroalimentacion(opcionSeleccionadaObj);
        botonSiguiente.disabled = false; 
    }

    
    function mostrarRetroalimentacion(opcion) {
        retroalimentacionDiv.textContent = opcion.retroalimentacion;

        if (opcion.esCorrecta) {
            retroalimentacionDiv.classList.add('quiz-retroalimentacion--correcta');
            puntuacion++;
        } else {
            retroalimentacionDiv.classList.add('quiz-retroalimentacion--incorrecta');
        }

        
        const preguntaActual = preguntasQuiz[indicePreguntaActual];
        const botonesOpcion = opcionesPreguntaDiv.querySelectorAll('.quiz-opciones__boton');

        botonesOpcion.forEach(btn => {
            const opcionCorrespondiente = preguntaActual.opciones[btn.dataset.index];
            if (opcionCorrespondiente.esCorrecta) {
                btn.classList.add('quiz-opciones__boton--correcto');
            } else if (btn === document.querySelector('.quiz-opciones__boton--seleccionado') && !opcionCorrespondiente.esCorrecta) {
                btn.classList.add('quiz-opciones__boton--incorrecto');
            }
        });
    }

    
    botonSiguiente.addEventListener('click', () => {
        indicePreguntaActual++;
        if (indicePreguntaActual < preguntasQuiz.length) {
            cargarPregunta();
        } else {
            mostrarResultadoFinal();
        }
    });

    
    function mostrarResultadoFinal() {
        document.getElementById('pregunta-actual').classList.add('quiz-pregunta--oculto'); 
        botonSiguiente.classList.add('quiz-controles__boton--oculto'); 
        retroalimentacionDiv.classList.add('quiz-retroalimentacion--oculto'); 

        resultadoFinalDiv.classList.remove('quiz-resultado--oculto'); 
        puntuacionFinalSpan.textContent = `${puntuacion} de ${preguntasQuiz.length}`;

        if (puntuacion === preguntasQuiz.length) {
            mensajeResultadoP.textContent = "¡Felicidades! Eres un experto/a en Inteligencia Emocional aplicada a la educación. ¡Excelente trabajo!";
            mensajeResultadoP.style.color = "#2E7D32";
            et = 'Mu4tR8xXyUlBrtZDfzZHvg=='; 
        } else if (puntuacion >= preguntasQuiz.length / 2) {
            mensajeResultadoP.textContent = "¡Buen esfuerzo! Tienes una buena base en Inteligencia Emocional. ¡Sigue practicando para mejorar!";
        } else {
            mensajeResultadoP.textContent = "Sigue explorando Aurea para profundizar tus conocimientos en Inteligencia Emocional. ¡Cada paso cuenta!";
            mensajeResultadoP.style.color = "#C62828"; 
        }

        botonReiniciar.classList.remove('quiz-controles__boton--oculto'); 
    }

    
    botonReiniciar.addEventListener('click', () => {
        indicePreguntaActual = 0;
        puntuacion = 0;
        respuestaSeleccionada = null;

        document.getElementById('pregunta-actual').classList.remove('quiz-pregunta--oculto');
        botonSiguiente.classList.remove('quiz-controles__boton--oculto');
        retroalimentacionDiv.classList.remove('quiz-retroalimentacion--oculto');
        resultadoFinalDiv.classList.add('quiz-resultado--oculto');
        botonReiniciar.classList.add('quiz-controles__boton--oculto');

        cargarPregunta();
    });

    
    cargarPregunta();
});