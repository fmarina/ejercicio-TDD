# TDD - Practicas

Analiza los requerimientos para las nuevas "features" de nuestra aplicacion e implementa TDD.

### Analiza los requerimientos y crea sus correspondientes tests (RED):

#### 1) Modela una clase "pelicula" que en su metodo contructor tome la informacion de las peliculas alojadas en movies.js y devuelva un objeto con los siguientes atributos y metodos:

**Atributos:**
- `title`: titulo de la pelicula.
- `img`: url hacia la imagen de la pelicula.
- `rating`: clasificacion de la pelicula.
- `year`: año de la pelicula.
- `tags`: array con los tags de las peliculas.
- `description`: descripcion de la pelicula.

**Metodos:**
- `getHTML()`: devuelve la informacion en formato HTML con la estructura definida en `crearPeliculaenHtmlConJquery()`.
- `getTags()`: devuelve los tags de la pelicula en formato string y separadas por coma. Ver ejemplo en `formatearMovieTagsToString()`.
- `getRating()`: devuelve la clasificacion de la pelicula como buena, mala o normal. Ver bases en `calificarPelicula()`.

#### 2)Crea las siguientes funciones: 
- `getMovies()`: Deberia tomar la variable movies y devolver un array con objetos de la clase "pelicula". (usar el metodo map)
- `filtrarPorEtiqueta()`: esta funcion deberia filtrar un array de peliculas y devolver un array con peliculas que tengan los tags determinados. (usar el metodo filter)
- `filtrarPorTitulo()`: esta funcion deberia filtrar un array de peliculas y devolver un array con peliculas que tengan un titulo similar al ingresado. (usar el metodo filter y expresiones regulares)
- `filtrarPorRating()`: esta funcion deberia filtrar un array de peliculas y devolver un array con peliculas in rating igual al ingresado (bueno, normal o malo). (usar el metodo filter)

### Crea la funcionalidad para completar los tests(GREEN):

### Analiza el codigo y realiza los cambios que consideres necesarios (REFACTOR):