import { Auto } from "./auto";
import { Motor } from "./auto";

class RegistroAutomotor {
  private autos:Auto[];
  private estado: boolean = false;

  public constructor(){
   this.autos = [];
  };

  public agregarAuto(auto:Auto): void{
   this.autos.push(auto)
    console.log("Auto aniadido a la lista\n");
  };

  public buscarAuto(auto:Auto): Auto | undefined {
   return this.autos.find((i) => i === auto);
  };

  public actualizarAuto(indice: number, nuevosDatos: Auto):void{
  if (indice >= 0 && indice < this.autos.length) {
      this.autos[indice] = nuevosDatos;
      console.log("Los datos se actualizaron")
    } else {
      console.log("Auto no encontrado.El índice está fuera de los límites del array.\n");
    }
  };

  public borrarAuto(array: Auto, indice: number): void {
    if (indice >= 0 ) {
      this.autos.splice(indice, 1);
      console.log("Auto eliminado.\n") 
    } else {
      console.log("Auto no encontrado.El índice está fuera de rango.\n");
    }
  };

  public darDeAlta():boolean {
    return this.estado = true;
  };
}

const regA = new RegistroAutomotor();
const motor01 : Motor = new Motor (".....");
const motor02 : Motor = new Motor ("-----");
const auto01 = new Auto("xxxx", "xxxx", 123, motor01);
const auto02 = new Auto("xxxxxx", "xxxxxx", 456, motor02);
regA.agregarAuto(auto01);
regA.agregarAuto(auto02);
console.log(regA.buscarAuto(auto01));
regA.actualizarAuto(1,new Auto("kkk", "lll", 99999, motor02));
regA.borrarAuto(auto02,1);
