class System {
    public doSomethingComplex() {
      // ...
    }
  }
  
  // Fachada
  class Facade {
    constructor(private system: System) {}
  
    public doSomething() {
      // Llamar al sistema complejo
      system.doSomethingComplex();
    }
  }
  
  // Cliente
  const system = new System();
  const facade = new Facade(system);
  facade.doSomething();
  