class SerVivo {

    caminar (nombre) {
        return console.log('Ahora esta caminando: ' + nombre);
    }
}
class Persona extends SerVivo{
    
    constructor ( nombre ) {
        super();
        this.nombre = nombre;
    }

    moverse() {
        return this.caminar(this.nombre);
    }   
}



const personaX = new Persona('Juanito');

personaX.moverse();