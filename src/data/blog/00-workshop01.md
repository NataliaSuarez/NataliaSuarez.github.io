# que necesitas pa codear?

**muchas ganitas y un editor de texto**

- [vs code](https://code.visualstudio.com/) es un editor de texto, que es lo que vamos a utilizar para poder escribir el codigo y esta pioli porque tiene un monton de extensiones y chiches que nos ayudan a no ser unos cochinos cuando codeamos. > Algunas extensiones basicas: [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2), [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [JavaScript (ES6) code snippets
  ](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)

---

## javascript keloke?

> Lenguaje de programación de alto nivel, orientado a objetos, multiparadigma :boom:

1. lenguaje de programacion: o sea que le dice a la maquina qué hacer.
2. hight level => no hay que preocuparse por complejidades como manejo de memoria, nos 'abstraemos' de eso (\*hay lenguajes en los que se toca la memoria directamente)
3. orientado a objetos: basicamente se usan `objetos` para guardar datita.
4. multiparadigma: se banca diferentes estilos de programacion( a grandes rasgos hay lenguajes puros que permiten 1 estilo muy marcado y otros mas abiertos, como el caso de javascript)

---

## weno y que hago con javascript? paginas web dinamicas

> paginas web dinamicas en principio, pueden ser aplicaciones web, mobile apps, incluso desktop.

**y como hago una pagina web dinamica?**

![](https://i.imgur.com/gAfFi7l.gif)

_AZUCAR, FLORES Y MUCHOS COLORES_
**digo, HTML, CSS Y JAVASCRIPT.**

fin de la analogia

---

## so, HTML

es el esqueleto y estructura de una pagina web. En sí, vamos a definir los elementos de nuestro HTML con etiquetas como por ej `<p></p>`(paragraph), `<button></button>`, `<a></a>` (link).

```htmlembedded=
<html>
    <head></head>
    <body>
        <h1>un titulo</h1>
        <button>un boton</button>
    </body>
</html>
```

- [aca cursito de HTML gratarola](https://www.w3schools.com/html/)

## CSS

es la parte visual que vamos a definir para cada elemento del HTML. pooor ejemplo, puedo especificar las propiedades que van a tener los elementos `<h1></h1>`, lo que va a hacer que todo se vea mas lindo y bello

```css=
  h1 {
    font-family: sans-serif;
    font-size: 50px;
    line-height: 1.3;
    width: 100%;
    padding: 30px;
    text-align: center;
    color: white;
  }
```

- [aca cursito de CSS gratarola](https://www.w3schools.com/css/default.asp)

## javascript, finally

es lo que le da el **comportamiento** a cada uno de estos elementos de HTML.

dentro de nuestra pagina, vamos a tener elementos como por ej, un botón al cual le vamos a querer dar un comportamiento, es decir, vamos a querer que genere un cambio al hacer click.

![](https://i.imgur.com/OuQtvo4.gif)

click sobre botón de <3 ===> efecto visual del corazncito relleno + llamado al servidor para agregar ese megusta en la base de datossss.

## en conclusion

HTML es el esqueleto que vamos a tener como base, CSS son los estilos que vamos a aplicar visualmente y Javascript otorga la capa de acciones y dinamismo a los elementos de HTML.

![](https://i.imgur.com/O5idu55.gif)

---

# pero como junto todo eso?

> una pagina web, es en sí un conjunto de archivos que van a estar guardados en una maquina que los va a hostear, o sea, los va a servir cuando sean pedidos por alguna personilla a traves de la interneteee. (opiamente no vamos a pagar un hosting ni nada, para aprender y en general vamos a trabajar de manera local, es decir, servimos nuestros archivos en nuestra maquina).

para arrancar, vamos a laburar con 2 archivos que van a tener lo que mencionabamos antes: HTML + CSS y Código JAVASCRIPT.

el primer archivo lo podemos llamar `index.html`(usamos index por convencion mas que nada, en general se usa ese nombre para el html root) y vamos a copipastear el sig contenido

```htmlembedded=
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>arrancanding con javascript</title>
    <style>
      body {
        height: 100vh;
        display: flex;
        align-items: center;
        background: linear-gradient(to top left, #337, purple);
      }
      h1 {
        font-family: sans-serif;
        font-size: 50px;
        line-height: 1.3;
        width: 100%;
        padding: 30px;
        text-align: center;
        color: white;
      }
    </style>
    <!-- <script src="script.js"></script> -->
  </head>
  <body>
    <h1>arrancanding con javascript</h1>
  </body>
</html>
```

y ahi nama, guardas, y lo abris con el navegador, es decir, pones abrir con Chrome ponele.

### ahora la explicación

> hay etiquetas que son genéricas y van a estar en todas las pags web, como `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" />`. En general no le vamos a dar bola, pero sí son necesarias y definen algunas cositas para el browser como el idioma de la pagina, algunas cosas de estilos segun dispositivos, el titulo, etc.

Las que nos importan:

- Etiqueta `<style></style>`
  Dentro de este bloque vamos a definir los _estilos CSS_ que corresponden a los elementos de HTML.
  Cuando especificamos `body { ... }`, estamos definiendo los estilos para los elementos con etiqueta `<body>` y lo mismo para `<h1>` cuando definimos `h1 { ... }`

      *body*
      - `height: 100vh;`
      Definimos una altura de `100vh` que seria algo asi como el 100% del dispositivo en el que se este viendo la pagina ([mas datita sobre unidades de altura](https://www.w3schools.com/cssref/css_units.asp))
      - `display: flex; align-items: center;`
      El display flex lo usamos para poder **alinear los elementos hijos (en eeeste caso solo el H1)** en el centro. Esta prop align se da en el eje Y.
      - `background: linear-gradient(to top left, #337, purple);`
      Con esta prop definimos el fondo, hay bocha de datita para ver y jugar [aca](https://www.w3schools.com/css/css_background.asp).

      *header*
      - `font-family: sans-serif; font-size: 50px; line-height: 1.3;`
      Estas son propiedades de la fuente y el espacio entre las letras del texto. En general las vamos a usar en elementos que contengan textos o que sus **children** tengan texto.
      - `width: 100%;`
      Definimos un ancho que sea del 100%, es decir, todo lo que haya definido su nodo padre.
      - `padding: 30px;`
      El padding es un espacio que rodea al texto. Aca mucha [datita](https://www.w3schools.com/css/css_padding.asp), porque es medio bardo explicarlo

  :thinking_face:
  y una imagen porlas:
  ![](https://i.imgur.com/p0lmPNB.jpg) - `text-align: center;`
  finalmente, text align lo que hace es centrar el texto dentro del width definido anteriormente, por eso, en este caso queda en el medio.

### datos que seran de vital importancia

1. Uso de Devtools
   las devtools son herramientas para que podamos jugar y debugear el codigo mientras que vamos desarrollando. son super importantes, en este caso porque nos dejan manipular CSS y ver como queda sin tener que modificar el código real, nos ayuda a jugar un poco y ver como van quedando nuestros estilos.

para acceder podemos darle al Inspeccionar elemento (no se como se accede en windows xd)
![](https://i.imgur.com/2iPHGac.png)

las devtools tienen bocha de cosas interesantes, no solo para css.

2. El html del ejemplo es sencillo pero ya se puede ver la _estructura de arbol_ que se maneja y que viene a marcar un poco la forma en la que definimos los estilos.

---

### ahora si, le agregamos Javascript

creamos otro archivito que se va a llamar `script.js`, podria llamarse de otra forma pero le pusimos ese nombre because se me canto. y vamos a agregar este codiguito.

```javascript=
/** Console Log */
console.log(40 + 8 + 23);

// STARTING
const js = "some text";
if (js === "some text")
  alert("una alerta para chequear que linkeamos el archivo script!");

// VALUES & VARIABLES

const firstName = "Monty"; // camelCase is the standard
// console.log("firstName:", firstName);

// declarative code
const myFirstJob = "Nurse";
const myCurrentJob = "Designer";

// not declarative
const job1 = "Programmer";
const job2 = "Teacher";
```

y vamos a Descomentar la línea 25 del archivo index.html, es decir tiene que quedar asi`<script src="script.js"></script>`

> en html comentamos con `<!-- the comment -->`

## Consola + console.log

te acordas de las Devtools? que hicimos Inspect y eso? vamos a volver a las devtools, pero ahora a la parte de `Console`.

la consola nos permite ver el resultado de la ejecucion de javascript en el browser, ponele.

en nuestro script ya tenemos en la linea 2 un _console.log(...)_ que nos va a imprimir un resultado que le enviamos, es decir, lo que esta dentro de los parentesis, en la consola del browser.

lo que estamos haciendo es 'loggear' lo que queremos ver en las devtools, en este caso es el resultado de una operacion de suma y resta.

lo interesante es que el console.log nos permite ir viendo resultados de lo que vamos calculando en nuestra aplicacion. ver el resultado de una suma es trivial, pero a medida que vayamos desarrollando nuestra pagina vamos a hacer calculos mas complejos y desp nos vamos a perder y ~~vamos a querer shorar~~, digo vamos a querer consologear todo.

## alert

algo que agregamos al script es una Alerta. la **función** `alert(..)` toma como **parámetro** un mensaje, que en sí es un texto.

_wait, what're u talking about?_

En javascript hacemos uso de **Funciones** que podriamos definir como una instrucción para hacer algo.
En este caso la funcion `alert` al ser ejecutada, dispara una alerta en el navegador, que es en sí un cartel con un mensaje.

Pero qué mensaje? bueno, la función por si sola no sabe qué mensaje tiene que mostrar en el cartel de alerta, es necesario que al usar la funcion `alert` le pasemos además como **parámetro** el mensaje que quiero mostrar en el cartel.

**alert("una alerta para chequear que linkeamos el archivo script!");**

### function(parameter);

en este ejemplo, podemos distinguir ademas que este mensaje es un **String**, es decir, un conjunto o _cadena_ de _caracteres_ que podemos decir que es un texto.

---

<!--
## VALUES & VARIABLES

en resumen, ya vimos funciones que pueden recibir parametros y vimos strings, pero hay más:

1. Funciones
2. Strings
3. Numbers
-->
