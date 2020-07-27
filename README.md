# Práctico 2: Llamada a servicio - Carga de datos
## ATENCIÓN: REVISEN EL HTML Y EL JS EXISTENTE ANTES DE EMPEZAR A TRABAJAR, HAY ALGUNAS COSAS YA CREADAS.

### Que deberian tener al finalizar este trabajo: Una pantalla con un botón únicamente. Al hacer click en ese botón, cargar las cards con los comentarios.

#### TAREAS

1. Asociar al botón "Cargar comentarios" el método `getComments`
2. Agregar en `getComments` el `then` y el `catch`
3. En el `catch` solo hacer un `console.log` del error.
4. En el `then` recuperar la respuesta del servidor, y a esa respuesta transformarla con el método `.json()`
5. Recordar que `.json()` nos devuelve una promesa, asi que en el `then` recuperar por parámetro los datos formateados, que ahora si van a ser un array de objetos, donde cada objeto es un comentario.
6. Recorrer el array de objetos usando `.forEach`
7. En cada iteración ejecutar la función `createComment`, recibiendo por parámetro los datos recuperados de la llamada del `fetch`
8. La función `createComment` debe crear las cards de bootstrap y mostrar en cada card un comentario. Usar `createElement` y `appendChild` para crear las card.