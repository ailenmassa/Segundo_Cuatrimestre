// Imagina que estás desarrollando un sistema de gestión de una biblioteca 
// que mantiene un registro de libros. Cada libro tiene un título, un autor y
//  un estado (disponible o prestado). 
//  --Diseña una clase Book que encapsule esta información y proporcione métodos para 
//  gestionar el estado del libro. Titulo y autor se integran por el mecanismo de composición.

enum titulosEnum {
    HarryPotter = "harry potter",
    LaSirenita = "la sirenita",
    Dracula = "dracula",
}

enum autoresEnum {
    JoanneRowling = "Joanne Rowling ",
    HansCristian = " Hans Christian Andersen",
    BramStoker = "Abraham Bram Stoker",
}

class Titulo{
    private tituloLibro: titulosEnum;
    
    public constructor (tituloLibro: titulosEnum){
        this.tituloLibro = tituloLibro;
    }
}

class Autor{
    private autorLibro: autoresEnum;
    public constructor ( autorLibro: autoresEnum ){
        this.autorLibro = autorLibro;
    }
}

class Book{
    private titulo:Titulo;
    private autor: Autor;
    private estado:boolean;

    public constructor ( titulo: titulosEnum, autor:autoresEnum, disponible:boolean = true){

      this.titulo = new Titulo(titulo);
      this.autor = new Autor(autor);
      this.estado = disponible;

    }

    public CambiarEstado (): void{
        console.log(this.estado = !this.estado);
    }
}

const libro1 = new Book (titulosEnum.HarryPotter, autoresEnum.JoanneRowling);
libro1.CambiarEstado();
