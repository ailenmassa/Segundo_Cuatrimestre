// Ejercicio para empezar en clase y terminar de tarea sobre clase de deportistas olimpicos:
// --Crear un super clase llamada Deportista (que tenga al menos 3 atributos [al menos 1 atributo 
// en protected] y 2 métodos ademas de los respectivos constructores. 
// --Crear 3 subclases hijas de esa superclase Deportista, cada una con al menos un nuevo método
//  especifico y un atributo extra tambien.

class Deportista {
    protected nombre:string;
    private edad:number;
    private altura:number;

    public constructor (nombre:string, edad:number, altura:number){
          this.nombre = nombre;
          this.edad = edad;
          this.altura = altura;
    }

    public participarEnCompetecia(): void {
     console.log(this.nombre, "participara en la competencia");
    }

    public ganarCompetencia (): void{
     console.log(this.nombre, "es el ganador");
    }
}

class Basquet extends Deportista {
    private peso:number;
    
    public constructor(nombre:string, edad:number, altura:number, peso:number){
        super(nombre, edad, altura);{
        this.peso = peso;
        }
    }

    private robarPelota (): void{
        console.log(this.nombre, "ha robado la pelota")
    }
}


class Footbal extends Deportista {
    private sexo:string;

    public constructor(nombre:string, edad:number, altura:number, sexo:string){
        super(nombre, edad, altura); {
        this.sexo = sexo;
        }
    }

    private patearAlArco (): void{
        console.log(this.nombre, "patea al arco")
    }
}

class Voleyball extends Deportista {
    private capacidadDeSalto:number;

    public constructor(nombre:string, edad:number, altura:number, capacidadDeSalto:number){
        super(nombre, edad, altura);{
            this.capacidadDeSalto = capacidadDeSalto;
        }
    }

    private realizarUnSaque (): void{
        console.log(this.nombre, "realizo un saque")
    }
}