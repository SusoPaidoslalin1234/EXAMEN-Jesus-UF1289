class Pelicula{
    #titulo;
    #genero;
    autor;
    director; 
  // Constructor Clase Entregable---
    constructor(titulo,genero,entregado=true){
        this.#titulo=titulo;
        this.#genero=genero;
        this.autor=autor;
        this.director=director
    
    }
  // Metodos Set---
  set setTitulo(titulo){
    this.#titulo=titulo;
  } 

  set setGenero(genero){
    this.#genero=genero;
  } 

  set setAutor(autor){
    this.autor=autor;
  }
  set setDirector(director){
    this.director=director
  }

  // Metodos Get---

  get getTitulo(){
    return `Èl titulo es ${this.#titulo}`
  }

  get getGenero(){
    return `Èl genero es ${this.#genero}`
  }

  get getAutor(){
    return (`Èl autor es ${this.autor}` )
  }
  get director(){
    return (`Èl director es ${this.director}` )
  }

}// Fin clase Pelicula


class Audio extends Pelicula{  //Audio hija de Pelicula

    #musica;
    #doblador;

    //Constructor Clase Audio

    constructor(titulo,genero,autor,director,musica,doblador){
        super(titulo,genero,autor,director);
        
        this.#musica=musica;
        this.#doblador=doblador;
    }
  
  // Metodos set---

  set setMusica(musica){
    this.#musica=musica;
  } 

  set setDoblador(doblador){
    this.#doblador=doblador;
  }

  // Metodos Get---



  get getMusica(){
    return `La musica  es ${this.#musica}`
  }

  get getDoblador(){
    return `Èl doblador es ${this.doblador}`
  }


}// Fin Clase Audio



class Grafismos extends Pelicula{   /7 Grafismos hija de Pelicula

  #graficos;
  #portada;

  //Constructor Clase Videojuego

 constructor (titulo,genero,autor,director,graficos,portada){

    super(titulo,genero,autor,director)
    this.#graficos=graficos;
    this.#portada=portada;
 }
  // Metodos set---

 set setGraficos(graficos){
    this.#graficos=graficos;
 } 

 set setPortada(portada){
    this.#portada=portada;
 }

  // Metodos Get---



  get getGraficos(){
    return `Llos graficos son ${this.#graficos}`
  }

  get getPortada(){
    return `La portada es ${this.#portada}`
  }

}//fin clase Grafismos


