class Persona {
    constructor(public nombre: string, public edad: number) {}
  
    // Método para clonar la persona
    clone(): Persona {
      return new Persona(this.nombre, this.edad);
    }
  }
  
  
  const personaPrototipo = new Persona("Juan", 30);
  
  // Creamos clones a partir del prototipo
  const persona1 = personaPrototipo.clone();
  const persona2 = personaPrototipo.clone();
  
  // Modificamos atributos de los clones
  persona1.nombre = "María";
  persona2.edad = 25;
  
  // Imprimimos la información de las personas
  console.log(persona1); // Debería mostrar { nombre: 'María', edad: 30 }
  console.log(persona2); // Debería mostrar { nombre: 'Juan', edad: 25 }
  