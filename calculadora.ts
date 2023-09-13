class Calculadora {
    public sumar(a: number, b : number): number {
        return a + b;
    }

    public restar(a: number, b : number): number {
        return a - b;
    }

    public multiplicar(a: number, b : number): number {
        return a * b;
    }   

    public dividir(a: number, b : number): number | string {
       if (b===0) {
       return "error";
       }
       else {
        return a / b;
       }    
}
}