abstract class Creator {
    public abstract factoryMethod(): Product;

    public someOperation(): string {
       
//Llamar el método factory para crear un objeto Producto
       const product = this.factoryMethod();
       // ahora, use el producto
       return `Creator: The same creator's code has just worked ${product.operation()}`;
   }
}

class ConcreteCreator1 extends Creator {
   public factoryMethod(): Product {
       return new ConcreteProduct1();
   }
}

class ConcreteCreator2 extends Creator {
   public factoryMethod(): Product {
       return new ConcreteProduct2();
   }
}

/*La interfaz de producto declara todas las operaciones que los productos deben implementar*/

interface Product {
   operation(): string;
}


class ConcreteProduct1 implements Product {
   public operation(): string {
       return '{Result of the ConcreteProduct1}';
   }
}

class ConcreteProduct2 implements Product {
   public operation(): string {
       return '{Result of the ConcreteProduct2}';
   }
}

function clientCode(creator: Creator) {

   console.log('No conozco la clase del creador, pero a un asi funciona');
   console.log(creator.someOperation());
   
}

console.log('App: Lanzada con la clase del  ConcreteCreator1.');
clientCode(new ConcreteCreator1());
console.log('');

console.log('App: App: Lanzada con la clase del ConcreteCreator2.');
clientCode(new ConcreteCreator2());

