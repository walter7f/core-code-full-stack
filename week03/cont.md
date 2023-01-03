# <b>Challenges</b>

## <b>Week challenges (Monday) </b>
## Build Search Filter In React
* Descripcion

Código de React para crear una funcionalidad de filtro de búsqueda simple para mostrar una lista filtrada basada en la consulta de búsqueda ingresada por el usuario.
## <b>Ejemplo</b>
<img src="https://camo.githubusercontent.com/bf8f3cb56455725381970003b0d919cf6eda1b545e506001b3951ac24b60d492/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f4c4f4b44683630614376446b364642794c712f67697068792e676966" />

## [Solucion :)](solucion/BuildSearchFilter.jsx)

----
## <b>Week challenges (Tuesday) </b>

## Fetch Random User Data
* Descripcion

Código de React para obtener de [esta API](https://jsonplaceholder.typicode.com/) usuarios aleatorios. Debe mostrar el nombre, el sitio web, el correo electrónico y el teléfono de un usuario aleatorio. También debe haber un botón Restablecer para obtener un nuevo usuario (para esto, debe generar un número aleatorio del 1 al 10).

## <b>Ejemplo</b>
<img src="https://camo.githubusercontent.com/64539ff356879af3dbc52c57918a298a91e2383504c64ecb53c9a73ca702b516/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f4259366445473945426643476278424c496c2f67697068792e676966"/>

## [Solucion :)](solucion/FetchRandomUserData.jsx)
---
## <b>Week challenges (Wednesday) </b>
## React Router Blog 
* Descripcion 
Cree un blog con React Router y obtenga información de las publicaciones de un archivo json.

## <b>Ejemplo</b>
<img src="https://camo.githubusercontent.com/c7797bb074d431d5f29d189b2f2234308b32a2b837ffa90eedd06842cc6ce381/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f7556527833514e3258425376637850634f702f67697068792e676966"/>

## [Solucion :)]()

---
## <b>Week challenges (Thursday) </b>
## Redux

Redux es una biblioteca de gestion de estado. Almacena el estado de su aplicacion y proporciona métos para interactuar con ese estado. Sepuede usar con cualquier marco como React, Angular, Vue, etc.

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--exod_ch1--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e2x8d1a346qmckc9iu16.png" />

<b>CreateStore</b>

Este metodo crea la tienda Redux. Toma como argumento obligatorio un "reducer" y dos argumetnos opcionales "preloadedStare" (conocidos como "initialState")  y "enhancer".

Entonces ¿qué es un reducer ? Reducer es una funcion que toma dos argumentos  "state" y "action" y devuelve un nuevo valor que seria el nuevo "state". El trabajo de los reducer es encontrar la nueva state.

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--NfKoeNBU--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g8oc6punguttqb9ahv0l.png" />


Al crear el metodo "createSotore" devuelve un objeto y este objeto tiene 4 metodos.

1. <b>getState: </b> Se usa para obtener el estado de su aplicacion.

2. <b>subscribe: </b> Se utiliza para suscribirse a los cambios en nuestra tienda.
3. <b>dispatch: </b> Este metodo se utiliza para enviar acciones. Las acciones van dentro de los reducers con el estado actual de su aplicacion  y pueden actualizar el estado.
El reducer toma medidas para actualizar el estado. Es la acción que le dice al reductor que algo acaba de suceder. Las acciones son objetos, que tiene una "type" clave.

4. <b>replaceReducer</b> Este metodo se utiliza para reemplazar la función de reducción de raíz actual por una nueva.


<b>bindActionCreators</b>

Toma dos argumentos:

1. Un objeto con todos los creadores de acción en su interior.

2. El método al que queremos vincular a nuestros creadores de acciones.

Devuelve un objeto, que se ve idéntico al primer argumento que le pasamos. La única diferencia es que ahora podemos llamar a esos métodos directamente, sin llamar explícitamente a dispatch.

"El único caso de uso para bindActionCreators es cuando desea pasar algunos creadores de acciones a un componente que no es consciente de Redux, y no desea pasarle el envío o la tienda de Redux. - Documentos Redux"

<b>combineReducers</b>

Cuando está desarrollando una aplicación enorme en la que puede segregar datos, tiene sentido tener varios reductores para reducir la complejidad. Este método combinará todos esos múltiples reductores pequeños y devolverá un reductor, generalmente llamado reductor raíz, que nuestro createStore puede usar.

<b>Middleware</b>

Los middlewares nos brindan la capacidad de interceptar acciones y hacer algo que queremos antes de que esa acción llegue a los reductores. Podemos registrar acciones, registrar el estado de la tienda, registrar informes de fallas, etc.

[Pagina de referencia](https://dev.to/thesanjeevsharma/just-redux-the-complete-guide-44d5)


