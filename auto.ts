class Motor {
    private tipo:string;

    public constructor (tipo:string){
        this.tipo = tipo;
    }
}

class Auto {
   private marca:string;
   private color:string;
   private año:number;
   private motor:Motor;

public constructor (marca:string, color:string, año:number, motor:Motor,){
    this.marca = marca;
    this.color = color;
    this.año = año;
    this.motor = motor;
}
}

let motor1 : Motor = new Motor ("nafta");
let auto1 : Auto = new Auto ("toyota", "negro", 1999, motor1);