function Movie(title,img,rating,year,tags,description){
  this.title = title;
  this.img = img;
  this.rating = rating;
  this.year = year;
  this.tags = tags;
  this.description = description;
}

Movie.prototype.getRating = function(){
  if(isNaN(parseFloat(this.rating))){
    return null;
  }
  if(parseFloat(this.rating) >= 8.5) {
    return "buena";
  } else if (parseFloat(this.rating) >= 6) {
    return "normal";
  } else {
    return "mala";
  } 
}

Movie.prototype.getTags = function(movie) {  
  if (typeof movie.tags[0] === 'object' && movie.tags[0].hasOwnProperty('name')){
    //let tagsformateadas = "";
    var tagsformateadas = [];
    for (let index = 0; index < movie.tags.length; index++){
      const element = movie.tags[index];
      tagsformateadas.push(element.name);
      /*
      if (index === 0){
        tagsformateadas = element.name;
      }
      else{
        tagsformateadas += ", " + element.name;
      }*/
    }
    return tagsformateadas;
  }
  else{
    return null
  }  
}

Movie.prototype.getHTML = function(){
  return (
    '<li class="movie"><img class="movie__image" src="' +
    this.img +
    '" alt=""><div class="movie__summary"><div><h2 class="movie__title">' +
    this.title +
    '</h2><span class="year">(' +
    this.year +
    ')</span></div><div><img class="movie__star" src="https://img.icons8.com/plasticine/2x/star--v1.png" alt=""><span class="movie__rate">' +
    this.rating +
    '</span><span class="genre"> ' +
    this.tags[0].name +
    '</span></div><p class="movie__description">' +
    this.description +
    "</p></div></li>"
  );
}

Movie.prototype.getMovies = function(){  
  var pelicula = movies.map(movie =>{  
    var tagFormateada = this.getTags(movie);
    return new Movie(movie.title, movie.img, movie.rating, movie.year, tagFormateada, movie.description);
  });
  return pelicula;
}

Movie.prototype.filtrarPorEtiqueta = function(tag){
  var peliculas = this.getMovies();   
  var moviesFiltradas = peliculas.filter(movie =>{
    var tagsFilter = movie.tags.filter(tags =>{
      if(tags === tag){
        return movie;
      }      
    });
    if(tagsFilter != "" && tagsFilter != null){
      return movie;
    }
  });
  return moviesFiltradas;
}

Movie.prototype.filtrarPorTitulo = function(titulo){
  var moviesFiltradas = this.getMovies().filter(movie =>{
    return movie.title === titulo
  });
  return moviesFiltradas;
}

Movie.prototype.filtrarPorRating = function(rate){
  var moviesFiltradas = this.getMovies().filter(movie =>{
    return movie.rating === rate;
  });
  return moviesFiltradas
}



