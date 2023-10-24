## Singleton

Es un patrón de diseño creacional que nos permite asegurarnos de que una clase tenga una única instancia, a la vez que proporciona un punto de acceso global a dicha instancia.

**Problema**

El patron singleton resuelve dos problema al mismo tiempo
Garantizar que una clase tenga una unica instanciaProporcionar uin punto de acceso global a dicha instancia: nos permite acceder a un objeto desde cualquoier parte del programa, no obstante, tambien evita que otro codigo sobreescriba esa instgancia.

**Solucion**
Hacer privado el constructor por defecto para evitar que otros objetos utilicen el operador new con la clase Singleton.Crear un metodo de creacion estatico que actue como constructor. Este metodo invoca al constructor privado para crear un objeto y lo guarda en un campo estatico. Las siguientes llamadas a este metodo devuelven el objeto almacenado en cache.
Si tu código tiene acceso a la clase Singleton, podrá invocar su método estático. De esta manera, cada vez que se invoque este método, siempre se devolverá el mismo objeto.

**Ventajas y desventajas**

**Ventajas:**

- Puedes tener la certeza de que una clase tiene una única instancia.

- Obtienes un punto de acceso global a dicha instancia.

- El objeto Singleton solo se inicializa cuando se requiere por primera vez.

  

  **Desventajas**

- Vulnera el *Principio de responsabilidad única*. ç

- El patrón resuelve dos problemas al mismo tiempo.

- El patrón Singleton puede enmascarar un mal diseño, por ejemplo, cuando los componentes del programa saben demasiado los unos sobre los otros.

- El patrón requiere de un tratamiento especial en un entorno con múltiples hilos de ejecución, para que varios hilos no creen un objeto Singleton varias veces.



## **Patron Factory**

Es un patron de diseño creacional que proporciona una interfaz para crear objetos en una superclase, mientras permite a las subclases alterar el tipo de objeto que se crearan.

**Ventajas y desventajas**

**Ventajas:**

- Evitas un acoplamiento fuerte entre el creador y los productos concretos.
- *Principio de responsabilidad única*. 
- Puedes mover el código de creación de producto a un lugar del programa, haciendo que el código sea más fácil de mantener.
- *Principio de abierto/cerrado*. 
- Puedes incorporar nuevos tipos de productos en el programa sin descomponer el código cliente existente.



- **Desventajas**
  Puede ser que el código se complique, ya que debes incorporar una multitud de nuevas subclases para implementar el patrón. 
- La situación ideal sería introducir el patrón en una jerarquía existente de clases creadoras.



## Patron Prototype

Nos permite copiar objetos existentes sin que el codigo dependa de sus clases.

El proceso se basa en tener un objeto prototipo (el original) y crear copias (clones) de ese objeto. Cuando necesitas un nuevo objeto similar, simplemente clonas el objeto prototipo en lugar de construirlo desde cero. Esto es especialmente útil cuando necesitas múltiples objetos similares en tu aplicación.



**Implementacion**

Utiliza el patrón cuando quieras reducir la cantidad de subclases que solo se diferencian en la forma en que inicializan sus respectivos objetos. Puede ser que alguien haya creado estas subclases para poder crear objetos con una configuración específica.



**Ventajas y desventajas**

**Ventajas:**

- Puedes clonar objetos sin acoplarlos a sus clases concretas.
- Puedes evitar un código de inicialización repetido clonando prototipos prefabricados.
- Puedes crear objetos complejos con más facilidad.
- Obtienes una alternativa a la herencia al tratar con preajustes de configuración para objetos complejos.



**Desventajas**

- Clonar objetos complejos con referencias circulares puede resultar complicado.