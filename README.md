# TecniHub

## Problema
Problema concreto: En la Unidad Educativa Técnico Salesiano (UETS) los estudiantes manejamos múltiples materias teóricas y talleres técnicos, pero nuestros apuntes, fechas de entrega de proyectos, listas de materiales y deberes suelen quedar dispersos entre cuadernos físicos, hojas sueltas y grupos de chat.
Personas beneficiarias: Estudiantes de Bachillerato Técnico de la UETS (especialmente de Informática) que necesitan organizar sus asignaturas, apuntes rápidos y entregas académicas de forma práctica en su teléfono móvil.
Evidencia inicial: En el día a día en los cursos y laboratorios técnicos se observa con frecuencia que los compañeros olvidan materiales específicos para prácticas o pierden apuntes importantes revisando mensajes antiguos de WhatsApp antes de una evaluación.

## Solución
Centralizando la organización académica de los estudiantes de la UETS en una app móvil offline-first, permitiendo guardar apuntes por materia y gestionar tareas pendientes sin depender de internet.

## Objetivos
- Permitir registrar y listar hasta 10 materias técnicas en una pantalla principal funcional sin conexión a internet.
- Implementar un gestor de apuntes por materia que permita crear, editar y eliminar notas guardadas localmente en el dispositivo.
- Desarrollar una lista de tareas vinculadas a cada materia con cambio de estado binario (pendiente/completada) y contador visible.
- Garantizar la persistencia local de los datos guardados para que el 100% de registros se mantengan al reiniciar la aplicación.

## Habilidades
- React Native con Expo y TypeScript
- Componentes reutilizables y props tipadas
- Estado local y hooks (useState / custom hooks)
- Navegación entre pantallas (Expo Router / Tabs)
- Estilos, temas y diseño adaptable
- Otras destrezas indicadas por el docente: Persistencia local con AsyncStorage

## Alcance inicial
Sí incluiré en el MVP: Navegación inferior por pestañas (Materias y Tareas), registro de materias, CRUD básico de apuntes de texto por materia, lista de tareas con estado completado/pendiente y guardado 100% local en el dispositivo usando AsyncStorage.
No incluiré todavía: Sincronización en la nube, bases de datos externas, inicio de sesión con cuentas institucionales, notificaciones push, inteligencia artificial, tableros Kanban complejos ni colaboración multiusuario en tiempo real.

## Restricciones
- Riesgo y plan: Sincronizar correctamente el estado en memoria (React) con el almacenamiento persistente en AsyncStorage al crear o eliminar elementos sin perder datos → Crear un custom hook (useStorage) con interfaces estrictas en TypeScript y probar cerrando y reabriendo la app en Expo Go.
