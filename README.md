# Robot Semilla 🌱🤖

**Autoría: TIME Codeman** · Código con propósito · @timecodeman

Identidad gráfica y personaje suministrados por TIME Codeman.

Juego web de introducción al pensamiento algorítmico para niños de 5–10 años. Incluye seis misiones, dos niveles de apoyo, huerta de logros y material docente separado.

## Publicar en GitHub Pages

1. Sube **el contenido de esta carpeta** a la raíz de tu repositorio: `index.html` debe quedar en la raíz.
2. En GitHub abre **Settings → Pages**, selecciona publicación desde una rama, elige tu rama principal y la carpeta raíz.
3. Abre la dirección que GitHub indique cuando termine la publicación.

No requiere instalación de paquetes ni compilación. Las rutas son relativas y permiten alojarlo en una subcarpeta. El archivo `.nojekyll` evita procesamiento adicional.

## Uso

Abre `index.html` para una prueba básica. Para probar almacenamiento sin conexión o instalación, utiliza un servidor local o GitHub Pages con HTTPS. Visita primero la app completa con conexión. La voz depende del navegador y puede requerir conectividad; no es necesaria para jugar.

Se añade cada bloque tocándolo. Toca un bloque del programa para eliminarlo. Los giros cambian la orientación sin avanzar. Las seis misiones están disponibles; no se bloquean por edad. Exploradores ofrece pistas concretas y ejecución más pausada; Inventores usa preguntas más generales. No hay cronómetro ni penalización por intentos.

El progreso se guarda en el navegador, sin cuentas ni envío de datos a servidores. Si varias personas usan el mismo navegador, comparten ese progreso. En Para profes → Evaluación se descarga un registro de las últimas soluciones completadas; el docente debe recoger la explicación del estudiante.

## Entrega académica

El espacio docente incluye tema, contexto, problema planteado como hipótesis, un resultado, una evidencia, secuencia de tres momentos, evaluación formativa, rúbrica y seis wireframes. Antes de entregar, adapta el contexto y completa las referencias verificadas en APA 7 con los materiales del curso. Se declara apoyo de ChatGPT/Codex; la revisión y autoría académica corresponden al estudiante.

## Verificación

Con Node.js: `node --test tests/missions.test.cjs`. Comprobaciones de sintaxis: `node --check app.js`, `node --check levels.js` y `node --check sw.js`.

## Idiomas / Languages

La interfaz presenta español e inglés juntos: inicio, misiones, pistas, retroalimentación y material docente. Las traducciones se incluyen en el proyecto y no necesitan un servicio externo. Los conceptos cuentan con lectura en inglés y español; las demás indicaciones de voz siguen en español.

The interface displays Spanish and English together: home, missions, hints, feedback and teacher resources. Translations are bundled locally. Concept narration supports English followed by Spanish; other spoken instructions remain in Spanish.
