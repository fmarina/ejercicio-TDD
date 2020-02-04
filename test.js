var expect = chai.expect;
var assert = chai.assert;

//TDD PRACTICE

var testMovie = new Movie('Victoria', "https://pics.filmaffinity.com/Titanic-321994924-mmed.jpg", 8.5, 2000, ["drama", "it's been 84 years..."], "Titanic is a very sad movie, the end.");

describe("Tests para los atributos de Peliculas", function(){
  it("Titulo debe ser string", function(){    
    assert.isString(testMovie.title);
  });

  it("Titulo debe ser igual a Victoria", function(){
    assert.equal(testMovie.title, "Victoria");
  });

  it("Titulo debe ser mayor a dos letras", function(){
    assert.isAbove(testMovie.title.length, 2); 
  });

  it("Pelicula contiene atributo img", function() {
    expect(testMovie).to.have.own.property("img");
  });

  it("Imagen debe ser una url", function(){
    var esperado = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    assert.match(testMovie.img, esperado, "Funciona");
  });  

  it("Test del atributo rating", function(){
    assert.isNumber(testMovie.rating);
    expect(testMovie.rating).to.be.within(0, 10);
  });

  it("Test del atributo year", function(){
    var fecha = new Date().getFullYear();
    expect(testMovie.year).to.be.below(fecha);
    assert.isNumber(testMovie.year);
  });

  it("Test del atributo tags", function(){
    assert.isArray(testMovie.tags);
    expect(testMovie.tags).to.be.instanceOf(Array);
  });
});

describe("Tests para los metodos de Pelicula", function(){
  it("getHTML() devuelve informacion en formato HTML con su estructura definida", function(){
    var resultado = testMovie.getHTML();
    var esperado = 
      '<li class="movie"><img class="movie__image" src="' +
      testMovie.img +
      '" alt=""><div class="movie__summary"><div><h2 class="movie__title">' +
      testMovie.title +
      '</h2><span class="year">(' +
      testMovie.year +
      ')</span></div><div><img class="movie__star" src="https://img.icons8.com/plasticine/2x/star--v1.png" alt=""><span class="movie__rate">' +
      testMovie.rating +
      '</span><span class="genre"> ' +
      testMovie.tags[0].name +
      '</span></div><p class="movie__description">' +
      testMovie.description +
      "</p></div></li>";
    assert.include(resultado, esperado);
  });

  it("getTags() debe devolver string", function(){
    var resultado = typeof testMovie.getTags(testMovie);
    assert.isString(resultado);
  });

  it("getRating() debe devolver 'buena' si el rate es > 8.5", function(){
    var resultado = testMovie.getRating(testMovie);
    assert.equal(resultado, "buena");
  });
});

describe("Tests para las funciones de Peliculas", function(){  
  var movieTest;
  beforeEach(function(){
    movieTest = new Movie();
  });

  it("getMovies(): toma la variable movies y debe devolver un array con objetos movie", function(){
    var resultado = movieTest.getMovies();
    assert.isArray(resultado);      
  });

  it("filtrarPorEtiqueta(Music), devuelve un array con peliculas que tenga el tag 'Science Fiction'", function(){
    var resultado = movieTest.filtrarPorEtiqueta("Science Fiction");
    assert.isArray(resultado, "filtrar por etiqueta no devuelve un Array");
    assert.equal(resultado.length, 10);
  });

  it("filtrarPorTitulo(title): devuelve un array con peliculas que tengan el titulo pasado por parametro", function(){
    var resultado = movieTest.filtrarPorTitulo("The Godfather");
    var esperado = [{
      title: "The Godfather",
      img: "https://image.tmdb.org/t/p/w185/d4KNaTrltq6bpkFS01pYtyXa09m.jpg ",
      rating: "8.1",
      year: "1972",
      tags: ["Crime", "Drama"],
      description: "The story spans the years from 1945 to 1955 and chronicles the fictional Italian-American Corleone crime family. When organized crime family patriarch Vito Corleone barely survives an attempt on his life, his youngest\u2026"
    }];
    assert.isArray(resultado, "filtrar por titulo no devuelve un Array");
    assert.equal(resultado[0].title, esperado[0].title);
  });

  it("filtrarPorRating(8.1): devuelve array con 7 peliculas con el rating 8.1", function(){
    var resultado = movieTest.filtrarPorRating("8.1");
    assert.isArray(resultado, "filtrar por rating no devuelve un Array");
    assert.equal(resultado.length, 7);
  });  
});
