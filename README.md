# SAMY

Prueba tecnica para Samy 

## Available Scripts

In the project directory, you can run:

## Para levantar el proyecto
### `npm start`

Para levantar la aplicacion
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Para ejecutar los test unitarios
### `npm test`

Se han incluido test de los siguientes componentes:

- Card 
  - Se comprueba que el componente se rederice
  - Se comprueba que se renderice con los parametros pasados
  - Se comprueba que el boton de like y unlike funciona

- Form
  - Se comprueba que el componente se rederice
  - Se comprueba que el el evento handleChange registra que se ha llamado cuando se introduce un string en el input
  - Se comprueba que el el evento handleSubmit registra una llamada cuando hacemos "enter"

También hay un test para la funcion `filterProducts({ allProducts: [], wordSearched: '' })`

- Se comprueba que:
  - Retorne un array vacio cuando le pasamos como parametro `wordSearched` un string vacío.
  - Retorne un producto cuando le pasamos como parametro `wordSearched: 'Grey'`
  - Retorne un array vacio cuando el tipo de `allProducts` no es un array
  - Retorne un array vacio cuando 1el tipo de `wordSearched` no es un string

## Para ejecutar los test E2E
### `npm run cypress:open`

Se han incluido los siguientes test con Cypress:

- render 
  - Para simular la visualizacion correctamente
- likeAction
  - Para simular la accion de like y unlike de un producto
- search 
  - Para evaluar que hay productos cuando introducimos un titulo existente 
  - Para evaluar que no hay productos cuando introducimos un titulo no existente

