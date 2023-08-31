// --Crea una clase Personaje con las propiedades nombre, vida y energia. Agrega los metodos atacar 
// y curar que permitan atacar a otro personaje o curar al propio personaje.
// --Luego, crea dos clases adicionales que hereden de Personaje: Guerrero y Mago.
// Cada clase debe tener propiedades y metodos unicos para su tipo de personaje.

class Personaje {
    private nombre:string;
    private vida:number;
    private energia:number;

    public constructor (nombre:string, vida:number, energia:number){
      this.nombre = nombre;
      this.vida = 100;
      this.energia = 500;
    }

public atacar (enemigo:string):void {
        console.log ( Personaje, "ataco a", enemigo, )
}

public curar (): void {
     console.log(this.vida += 30);
    }
}

class Guerrero extends Personaje{
    private fuerza:number;

    public constructor(nombre:string, vida:number, energia:number, fuerza:number){
        super(nombre, vida, energia);

        this.fuerza = fuerza;
    }

    public usarEscudo (escudo:string) : void {
        console.log (Guerrero, "decidio usar", escudo)
    }
}

class Mago extends Personaje {
    private mana:number;

    public constructor(nombre:string, vida:number, energia:number, mana:number){
        super(nombre, vida, energia);
        this.mana = mana;
    }

    public lanzarHechizo (mana:number): void {
        this.mana -= 30;
       console.log (Mago,"lanzo un hechizo")
    }
}

const personaje1 = new Personaje("Halsey",100,500);
personaje1.atacar("enemigo");
personaje1.curar();
const guerrero1 = new Guerrero("loki",100,500,200);
guerrero1.usarEscudo("escudo");
const mago1 = new Mago("lucas", 100, 500, 400,);
mago1.lanzarHechizo(400);