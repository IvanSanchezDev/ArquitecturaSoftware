## **Proxy**

Es un patrón estructural que proporciona un objeto que actúa como sustituto de un objeto real. El proxy recibe solicitudes del cliente, realiza parte del trabajo (control de acceso, almacenamiento en caché, etc.) y después pasa la solicitud al objeto real.



#### Aplicabilidad

**Control de acceso:** El proxy puede utilizarse para controlar el acceso a un objeto real, por ejemplo, para verificar la autenticación del usuario antes de permitir que el objeto real se utilice.

**Almacenamiento en caché:** El proxy puede utilizarse para almacenar en caché los resultados de las solicitudes a un objeto real, lo que puede mejorar el rendimiento.

**Protección:** El proxy puede utilizarse para proteger un objeto real, por ejemplo, para evitar que se modifique o se elimine.



**Ventajas**

- **Flexibilidad:** El proxy puede utilizarse para añadir funcionalidad adicional a un objeto real sin cambiar el código del cliente.
- **Eficiencia:** El proxy puede mejorar el rendimiento al almacenar en caché los resultados de las solicitudes o al retrasar la creación del objeto real hasta que sea necesario.
- **Seguridad:** El proxy puede utilizarse para proteger un objeto real de acceso no autorizado.
- 

**Desventajas**

- **Complejidad:** El patrón proxy puede ser complejo de implementar.
- **Rendimiento:** El proxy puede añadir una sobrecarga de rendimiento al realizar tareas adicionales antes o después de llamar al objeto real.



## **Patron de diseño Facade**

Es un patrón estructural que proporciona una interfaz simplificada a un sistema complejo. La fachada oculta la complejidad del sistema al cliente, proporcionando una interfaz que es más fácil de entender y usar.

#### Aplicabilidad

- **Simplificar la interfaz de un sistema complejo:** La fachada puede proporcionar una interfaz simplificada que oculta la complejidad del sistema subyacente.
- **Delegar responsabilidades:** La fachada puede delegar responsabilidades a otros objetos, lo que puede simplificar el código del cliente.
- **Unificar la interfaz de un sistema heterogéneo:** La fachada puede proporcionar una interfaz unificada para un sistema que consta de diferentes subsistemas.

**Ventajas y desventajas**

**Ventaja:**

- Puedes aislar tu código de la complejidad de un subsistema.

**Desventaja:**

- Una fachada puede convertirse en[ un objeto todopoderoso](https://refactoring.guru/es/antipatterns/god-object) acoplado a todas las clases de una aplicación.