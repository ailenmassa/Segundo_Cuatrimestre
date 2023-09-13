class Profesores {
    private profesores : Profesores[];

    public constructor (profesores: Profesores[]) {
    this.profesores = profesores;
    }
}

class Alumnos {
    private alumnos : Alumnos[];

    public constructor (alumnos: Alumnos[]) {
    this.alumnos = alumnos;
    }
}

class Facultad {
   private alumnos: Alumnos;
   private profesores: Profesores;

   public constructor (alumnos:Alumnos, profesores:Profesores) {
    this.alumnos = alumnos;
    this.profesores = profesores;
   }
}

class Universidad {
    private facultad:Facultad;

    public constructor (facultad:Facultad) {
        this.facultad = facultad;
    }
}