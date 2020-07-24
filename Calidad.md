# Calidad código
# Objetivos
## A quién beneficia el código bien escrito?
El código bien escrito beneficia a todos los involucrados en el proyecto.

- A tí: Cuando retomemos un proyecto después de un largo tiempo nos beneficiará ya que sabremos cómo está ordenado y cómo está escrito todo.
- A cualquiera: Cualquier persona que deba modificar el código después de tí.
- A tu cliente: Aunque nunca lo sabrá, su negocio estará mejor atendido.

## Ejes que hacen a la calidad del código
### Características externas
Cosas que observan los usuarios al interactuar con el Software

### Caracteristicas internas
- **Legibilidad:** qué tan fácil es interpretar lo que el código dice.
- **Mantenibilidad:** cuánto esfuerzo supondrá adaptar el código a nuevos requerimientos.
- **Testeabilidad:** cuánto esfuerzo supondrá realizar pruebas sobre este código.

# Código legible
## Código detallado
El código fuente lo escribimos para personas como tú y yo, para las computadoras tenemos las versiones compiladas.

Debemos seguir un estándar de codificación, el cual nos ayuda a:

- Generar código claro y consistente.
- Evitar perder tiempo en decisiones triviales.

### Tips para mejorar la legibilidad de nuestro código:
- **Define un estándar:** Piénsalo una vez y déjalo por escrito.
- **Respétalo:** Haz un esfuerzo por adherir al estándar durante tu día a día.
- **Apóyate en algún linter:** Esta sencilla herramienta te ayudará a incorporar buenas prácticas.

## Problemas difíciles:
- Invalidar cachés
- Nombrar cosas

## Identificadores mnemotécnicos, específicos y precisos
Los identificadores son variables, funciones, clases, módulos, componentes, etc. Elementos a los que nosotros debamos crearles un nombre propio. ej: variables, funciones, clases

Ejemplo sin un identificador mnemotécnico una función se vería así:
```typescript
function f( b: num, a: num ): num {
  return ( b * a ) / 2;
}
```
Al leer este código no sabemos para qué funciona y hasta podríamos borrarlo por equivocación.

Ahora utilizando un identificador mnemotécnico se vería así:
```typescript
function areaTriangulo( base: num, altura: num ): num {
  return ( base * altura ) / 2;
}
```
Ahora gracias a que el código es más legible sabemos para qué funciona esta función.

Atención a los identificadores que estableces.

# Código mantenible
## Código Modular
El código modular son pedazos de códigos divididos que pueden ser utilizados en cualquier lugar para evitar tener un solo archivo con un bloque de código gigante.

## Código reutilizable
Escribir código reutilizable nos va a ayudar a que en lugar de copiar y pegar una misma línea de código pero con diferentes parámetros lo hagamos a través de una función que retorne los valores que necesitamos y luego la podremos llamar en cualquier lugar del código que necesitemos pasándole los parámetros que deseamos.

## Código Organizado
El código organizado se refiere a cómo tenemos distribuido nuestros archivos en la raíz (root) del proyecto. A mayor organización, mayor entendimiento del código.

# Código libre de vicios
## Evitar el hardcoding
El hardcoding es la práctica de escribir valores literales en lugar de identificadores. No debe de usarse, ya que si el día de mañana debemos cambiar los valores eso significa que debemos cambiar el código en los lugares que esté ese valor estático por completo y luego mandar a producción, cuándo podríamos hacer el cambio más orgánico en una variable que afecte a todos los lugares que es llamada. También al crear variables con los valores, en lugar de hacer Hardcoding le agregamos semantica al código.

```javascript
  const precioInicial = '900'
  const precioConIva = precioInicial * 1.19;

  console.log(`El valor del IVA: 19%`);
  console.log(`Sin IVA: ${precioInicial}, con IVA: ${precioConIva}`);

  // Evitar hardcoding
  const iva = 0.19; // Pero sería mucho mejor sacarlo a un archivo externo de configuración
  const precioInicial = '900'
  const precioConIva = precioInicial * (1 + iva);

  console.log(`El valor del IVA: ${iva * 100}%`);
  console.log(`Sin IVA: ${precioInicial}, con IVA: ${precioConIva}`);

```

## Evitar efectos colaterales
Debemos analizar muy bien nuestro código para evitar efectos colaterales y evitar que nuestro código deje de funcionar. Cómo cuando una función modifica algo externo, que no le pertenece. Porque no sólo debes entender la función, si no también el contexto. ** No uses variables globales. **

# Principios Solid:
SOLID son cinco principios básicos de la programación orientada a objetos (by Robert C.Martin) que ayudan a crear software mantenible en el tiempo. Este acrónimo tiene bastante relación con los patrones de diseño, en especial, con la alta cohesión y el bajo acoplamiento.

El objetivo de tener un buen diseño de programación es abarcar la fase de mantenimiento de una manera más legible y sencilla así como conseguir crear nuevas funcionalidades sin tener que modificar en gran medida código antiguo. Los costes de mantenimiento pueden abarcar el 80% de un proyecto de software por lo que hay que valorar un buen diseño.

SOLID significa:

- **S: Single Reponsibility Principle (Alta coeción)**
- - Una clase que debe tener sólo una razón para cambiar. Ya que hace más fácil detectar bugs, y es más reutilizable. Principalmente evitar el hombre orquesta
- - Este principio trata de destinar cada clase a una finalidad sencilla y concreta. En muchas ocasiones estamos tentados a poner un método reutilizable que no tienen nada que ver con la clase simplemente porque lo utiliza y nos pilla más a mano. En ese momento pensamos “Ya que estamos aquí, para que voy a crear una clase para realizar esto. Directamente lo pongo aquí”
- **O: Open/Closed Principle (Abierto/Cerrado)**
- - Una entidad de software debe quedarse abierta para su extensión, pero cerrada para su modificación.
- - Principio atribuido a Bertrand Meyer que habla de crear clases extensibles sin necesidad de entrar al código fuente a modificarlo. Es decir, el diseño debe ser abierto para poderse extender pero cerrado para poderse modificar. Aunque dicho parece fácil, lo complicado es predecir por donde se debe extender y que no tengamos que modificarlo. Para conseguir este principio hay que tener muy claro como va a funcionar la aplicación, por donde se puede extender y como van a interactuar las clases.”
- **L: Liskov Substitution Principle**
- - Cada clase que hereda de otra puede usarse como su padre sin necesidad de conocer las diferencias entre ellas. Para que pueda darse este principio debe cumplir con dos puntos:
- - - El cliente debe usar métodos de la clase padre únicamente.
- - - La clase hija no debe alterar el comportamiento de los métodos de la clase padre.
- - Para aplicar poliformismo, hay que tener en cuenta que al sobreescribir metodos del padre, retornemos el mismo tipo de dato. O sea que al sobre escribir metodos, no podemos hacer que varie el comportamiento con relación al padre. Si eso ocurre, debemos preguntarnos si la relación si es de herencia.
- - Este principio fue creado por Barbara Liskov y habla de la importancia de crear todas las clases derivadas para que también puedan ser tratadas como la propia clase base. Cuando creamos clases derivadas debemos asegurarnos de no reimplementar métodos que hagan que los métodos de la clase base no funcionases si se tratasen como un objeto de esa clase base.
- **I: Interface Segregation Principle (Segregacion del interfaces)**
- - Los clientes de un programa sólo deberían conocer de éste los métodos que realmente usan.
- - Este principio fue formulado por Robert C. Martin y trata de algo parecido al primer principio. Cuando se definen interfaces estos deben ser específicos a una finalidad concreta. Por ello, si tenemos que definir una serie de métodos abstractos que debe utilizar una clase a través de interfaces, es preferible tener muchos interfaces que definan pocos métodos que tener un interface con muchos métodos.
- **D: Dependency Inversion Principle (Inversión de dependencias)**
- - Los módulos de alto nivel no deben depender de los de bajo nivel, ambos deben depender de abstracciones
- - Las abstracciones no deben depender de los detalles, los detalles deben depender de las abstracciones.
- - También fue definido por Robert C. Martin. El objetivo de este principio conseguir desacoplar las clases. En todo diseño siempre debe existir un acoplamiento pero hay que evitarlo en la medida de lo posible. Un sistema no acoplado no hace nada pero un sistema altamente acoplado es muy difícil de mantener.”

# Conocer los conceptos de Patrones de diseño y su aplicación
Los patrones de diseño son soluciones de arquitectura de software aplicables a diferentes problemas. Siempre evitar paternitis.

- **Creacion:** Como se deben crear nuevas instancias de objetos
- **Estructurales:** Como se deben estructurar las clases
- **Comportamiento:** Como se deben comportar los objetos

![relacion-patrones](https://i.imgur.com/uJovsFt.jpg)

## Singleton
Permite restringir la creación de objetos pertenecientes a una clase o al valor de un tipo a un único objeto.
Por ejemplo: tenemos una clase singletón, con el constructor privado para que sólo pueda ser invocado por si mismo, con un attributo estatico y privado. y un meto estatico que crea la instancia o al retorna. EJ: Los logs de errores,

¿Por qué aplicar un diseño singleton si puedo hacerlo a través de una clase estática (Ej… en C#)?. En mi experiencia un motivo es que los objetos singleton se pueden pasar como parámetros a métodos y otro es que las clases en diseño singleton pueden implementar interfaces, lo cual no es posible con las clases estáticas.

## Factory
Es un patrón creacional es decir nos ayuda a la creación de nuevos objetos. El patrón se utiliza cuando la creación del objeto es un proceso muy completo, es decir recibe muchos parámetros o realiza funciones complejas al realización de la creación del objeto, con todo estamos logrando un código un poco más abstracto, reutilizable y sobre todo que podemos cambiar las formas en que creamos los modelos y a través de factory no nos afectan estos cambios estamos ganando mas logica y la otra cosa que podría afectar es que si cambiamos una clase con el factory no nos afecta.

## Command
Permite solicitar una operación a un objeto sin conocer realmente el contenido de esta operación, ni el receptor real de la misma. Para ello se encapsula la petición como un objeto, con lo que además facilita la parametrización de los métodos.

# Introducción al Testing
Una parte importante del desarrollo de SW es la corrección de los errores que siempre va estar ahí y es imposible de evitarlos. Para eso es identificarlos lo mas pronto posible y para eso existen muchas formas de encontrar estos problemas en el código. Pero hay una que nunca debe dejarse de lado y son las pruebas, pruebas manuales, y estas pruebas son realizadas por personas que están probando el nuevo sistema lo cual consume tiempo y esfuerzo, costoso y poco confiable. Otra técnica que se utiliza bastante es el testing automatizado es decir escribir programas que sean capazas de probar los programas y reportar los fallos, esto es mas rápido, menos costoso y mas confiable, pero ahí cosas que no se pueden testear en forma automatizada como es fácil de manejar, si tiene buen diseño, esto se tiene que realizar de manera manual.

## Problemas testing Manual:
- Costo
- Lento
- Poco confiable

## Tipos de Testing Automatizado
- **Unit Testing:** Evaluamos el funcionamiento de los componentes individualmente.
- **Integration Testing:** Es el complemento de los unitarios, validar la interacción entre los componentes y el sistema completo.

## Test Driven Development
TDD, desarrollo guiado por las pruebas, es decir escribir primero el código de las pruebas y después desarrollar el código del sistema por medio de las pruebas escritas.

1. Primero Escribimos los test para que falle y después escribimos las funciones con lo mínimo de código para que el código sea un existo, es decir pasar de rojo a verde,
2. después refactorizamos las funciones y volvemos a correr las pruebas para que pasen de nuevo con éxito todas, realizamos esto con todas las funcionalidades de nuestro sistema.
3. Por ultimo podemos decir que el TDD nos obliga a escribir el mínimo de código en nuestras funciones.

## Pull requests
Los pull request es una herramienta creada por git hub, git hub es un repositorio  que utiliza el sistema de versiones de git. Básicamente son pedidos de mejora a archivos de un proyecto generalmente open source. Sirve para que la comunidad ayude a mejorar el código que ha sido escrito por ti, tu equipo o una empresa; luego de que realizamos un cambio generamos un pull request para ofrecer un cambio a mejora y solo queda esperar a que el dueño del repositorio lo pruebe y lo agregue a el código principal. También se pueden hacer preguntas de modo de foro que no se la única decisión de única del dueño del repositorio si no tomando en cuenta la opinión de los demás.

### Forks
Un Fort es una bifurcación donde lo que se hace es tomar una copia del repositorio y para trabajar en ella sin molestar a los demás y después se crea un pull requests, avisar al dueño del repositorio de las mejoras y así el puede tomar la decisión.

## Documentación
Documentar es una de las mejores prácticas que podemos hacer cuando estamos en un equipo de trabajo. Dejar por escrito cómo hemos hecho algunas funcionalidades, cómo podría ser mejorado el código y por sobretodo debemos dejar comentarios en el código que ayuden a las personas a ubicarse en qué parte de la aplicación están y qué hacen esas líneas de código.

### ¿Qué documentar?
Como implementar nueva funcionalidad.
Como se realizan las pruebas.
Lo mínimo que necesita las personas que quieren colaborar o heredar tu proyecto.

### ¿Como documentar?
UML como documentación.

### ¿Dónde documentar?
- Propio código.
- Sistema de documentación.
- Wiki
- Ficheros externos.
- README

### ¿Cuándo documentar?
Documentar inmediatamente después de codear.
Cuando se resuelve un problema, documentar la solución.