# Regex
(1960) - (1980 be strong) (perl and c help to be strong)
[small](https://static.platzi.com/media/public/uploads/cheatsheet-2_4f782ad2-92c3-4878-882f-f2bedcef75d8.jpg)
[Cheat Sheet](https://cheatography.com/davechild/cheat-sheets/regular-expressions/)
Son un lenguaje estructurado. No deberían validar data, si no estructura.
“Si tienes un problema y lo intentas solucionar con expresiones regulares, entonces tienes dos problemas”

## ¿Qué son las expresiones regulares?
Las expresiones regulares son patrones de caracteres que te permiten ir seleccionando o descartando datos en un archivo de texto como por ejemplo csv, o en una línea o un input, según coincidan o nó con este patrón.

Prácticamente todos los lenguajes de programación tienen librerías o módulos para manejar expresiones regulares.

Las expresiones regulares pueden ser muy complejas pero no son nada difíciles de entender.

Sin tecnicismos y con ejemplos puntuales, vamos a aprender a utilizarlas para que sean esa herramienta que siempre nos ayude, y sea la primera para solucionar problemas de grandes cantidades de datos en string.

## Aplicaciones de las expresiones regulares
- Las expresiones regulares sirven para buscar información de diferentes maneras y estas búsquedas pueden ser tan complejas como uno mismo quiera.
- Con las expresiones regulares es posible hacer búsquedas basados en patrones, que permiten ser utilizados en lotes de texto no ordenado.
- Permiten también configurar un formato de texto como validación, para verificar que una cadena texto ingresada sea un correo electrónico, o unas coordenadas, etc.


Con las expresiones regulares vamos a solucionar problemas reales. Con los patrones buscamos la forma con la que ciertos datos son presentados.
Un uso también es cambiar un carácter por otro.
Primero vamos haciendo un patrón con lo que queremos buscar, para después darle la forma en la que se presentan los datos que queremos buscar.
Ejemplo:
- `\d` (**digit**) es para buscar dígitos, números del 0 al 9.
- `\w` (**word**) es para buscar caracteres de la “a” a la “z”, del 0 al 9, de la “A” a la “Z”, incluso _ (underscore). Importante ver que no es el mismo carácter la a minúscula y la A mayúscula.
También importante que no es lo mismo \d minúscula, que \D mayúscula.

# El lenguaje: Caracteres, operadores, y construcciones.
## Archivo de texto.
Serie de cadenas de caracteres. Una sucesión de líneas.

## Cadena de caracteres.
Un carácter seguido de otro carácter, seguido de otro carácter.

## Caracter.
Representación gráfica en bits de algún código, en mayor de los casos ASCII. Es la unidad mínima que se puede abstraer de una cadena de caracteres.

## El Caracter (.)
Punto (.) Encuentra todo lo que sea un carácter. Uno a uno.
## Punto mas espacio (. )
Punto + espacio (. ) Encuentra todos los caracteres que tengan un espacio subsecuente.

## Puntos consecutivos (………….)
Resalta el número de caracteres de acuerdo al número de puntos especificados.

NOTA: Dado el último ejemplo de puntos consecutivos donde el programa (en este caso Atom) resalta los caracteres contenidos en cada línea en grupos de acuerdo al número de puntos especificados; he podido inferir que la razón por la cual cuando colocamos un único punto se resaltan todos los caracteres (primer ejemplo del uso del punto) es que, Atom resalta en grupos de uno el conjunto de caracteres de cada línea. Lo que nos da un idea de la lógica que se aplica en el uso de los puntos.



## Las clases predefinidas y construídas
Del punto ’ . ’ nace 3 clases predefinidas por sintaxis de expresiones regulares, las cuales son:
- Dígitos
- Palabra (cualquier carácter que pueda ir en una palabra incluido en guion bajo)
- Espacios (incluidos el espacio común, doble espacio y el tab)

- `.` = Busca caracteres (cualquiera)
- `\` = Se usa para escapar caracteres reservados
- `\d` = Selecciona dígitos. Equivalente construida: `[0-9]`.
- - `\D` = en mayus la negará, o sea todo lo que no sea un digito.
- - `\d\d\D\d\d` buscará dos digitos separados por un no-digito, y seguidos por otros 2 digitos. ej: `11-22`
- `\w` = Resalta caracteres (letras, numeros y underscore). Equivalente: `[a-zA-Z0-9_]`
- - `\W` = en mayus la negará, o sea todo lo que no sea un caracter.
- `\s` = Muestra los espacios en blanco. Equivalente: [ ]
- - (`\n` (salto de linea) o `\r` (retorno de carro) unix, `\t` tabulador, cambio de linea es un espacio en blanco)
- - `\S` = en mayus la negará, o sea todo lo que no sea un espacio.
- `[0-9]` = Busca en un rango, Equivalente: `[0123456789]`
- `[\.]` = Busca el símbolo de punto (o cualquier otro), se le antepone `\` para escapar el caracter que sigue.
- `*` = Buscar 0 o más, TODO - Greedy. Ejemplo: `\d*` buscaría todos los digitos, señalados juntos.
- - `\d*[a-z]` =  Hace match con: `123a`, y con `abc`, porque los digitos pueden ser cero.
- `+` = Buscar 1 o más. TODO Ejemplo: `\d+` buscaría todos los digitos
- - `\d+[a-z]` =  Hace match con: `123a`, pero no con `abc`, porque pide 1 o más digitos.
- `?` = Buscar 0 o 1. Cuando está al final de una expresión. Ya que tiene dos usos.
- `s` = Buscar la letra `s`, si dejamos un caracter (cualquiera) sin corchetes ni nada, irá a buscar exactamente ese.
- `{2,2}` = Contador `{min,max}`, cantidad de veces que aparecerá para evitar escribir: `\d\d` ejemplo: `\d{2,2}`
- - `\d{2,}` = 2 o más digitos. (in javascript (v8) not work this)
- - algunos lenguajes permiten que sea sólo 1 `{num}`
- `^` = Negará. Buscará todo lo que no esté en mi expresión. `[^0-5]` Buscará todo menos los números del 0 al 5
- `^` = Comienzo de una línea ej: `^[^\d].+$` `^[\D].+$`, todas las lineas que no inicien por 1 digito
- `$` = Final de una línea
- `()` = Agrupar, (ayuda mucho a la hora de hacer un reeplace, podemos tomar lo agrupado con $n)
- - `^\d+::([\w\s&!':,\)\(\.\-\/\?]+)\s\(\d\d\d\d\)::.*$` replace: `{title:"$1", year:"$2"}`
- - dentro del parentesis si usamos un pipe `|`, funciona como un OR ej: `(este|oeste|norte|sur)`

1::Toy Story (1995)::Adventure|Animation|Children|Comedy|Fantasy
2::Jumanji (1995)::Adventure|Children|Fantasy
3::Grumpier Old Men (1995)::Comedy|Romance
4::Waiting to Exhale (1995)::Comedy|Drama|Romance
5::Father of the Bride Part II (1995)::Comedy
6::Heat (1995)::Action|Crime|Thriller


- `.,` ultimo 1 caracter antes de la coma.
- `.+,` 1 o más caracteres antes de la coma. ej: `123,123,123,` pero cómo es Greedy, señala todo en 1 linea. con `?` cómo delimitador (lazy), podemos evitarlo.
- `.+?,` 1 o más caracteres antes de la coma. ej: `123,123,123,` pero cómo es Lazy, señala todo de la manera más pequeña posible. (o sea 3 match en ese ejemplo)
- `.+?[,\n]{1,1}` 1 o más caracteres antes de la coma. ej: `123,123` pero también pueden terminar en una linea nueva.


### Ejemplo:
5556581111
568-58-11-128
302-345-9876
302.345.9876
302.345.98.76
302 3458769
55-56-58-11-11

`\d{2,3}[\-\.\s]?\d{2,3}[\-\.\s]?\d{2,4}[\-\.]?\d{2,2}?\d?[\-]?\d?{0,2}`

555555
55-55-55
55.55.55
55 55 55
55 55 55#123
55 55 55p123
55 55 55e123
55.55-55
+555555

55y44r32

`^\+?\d{2,3}[^\da-z]?\d{2,3}[^\da-z]?\d{2,3}[#pe]?\d*$`

url // la s será opcional
`https?:\/\/[\w\-\.]+\.\w{2,6}\/?\S*`


mail
`^[\w\.\-]{1,40}\+?[\w]{0,10}@[\w\.\-]{3,}?\.\w{2,5}$`

latitud y longitud

//hace match
-99.205646,19.429707,2275.10
-99.205581, 19.429652,2275.10
-99.204654,19.428952,2275.58
//no hace match
-99,204654,19.428952,2275.58
-99-204654,19.428952,2275.58
s99.204654,19.428952,2275.58

`^[\-]?\d{1,3}\.\d{1,6},\s?[\-]?\d{1,3}\.\d{1,6},.*$`

//VALIDAMOS LINEAS COMPLETAS
//hace match
-99 12' 34.08"W, 19 34' 56.98"N
-34 54' 32.00"E, -3 21' 67.00"S
//no hace match
-99 12' 34.08"W, 19 34' 56.98"Nsddddd

`^[\-]?\d{1,3}\s\d{1,2}' \d{1,2}\.\d{2,2}"[WE],\s?[\-]?\d{1,3}\s\d{1,2}' \d{1,2}\.\d{2,2}"[SN]$`

gravel.notes.handbag
reaming.embeds.rats
`^[a-z]{3,}\.[a-z]{3,}\.[a-z][a-z][a-z]+`


GET querys
http://xd.com/?s=fotografia&mode=search&xd=lol
`[\?&]\w+=.*&` // match
`[\?&]\w+=[^&\n]+` // match
`[\?&](\w+)=([^&\n]+)` // match agrupando el nombre de la variable en $1 y el valor en $2
Find: `[\?&](\w+)=([^&\n]+)`
Replace: `\n - $1=$2`


in javascript strings, you can use `.match(/regex/)`


terminal
**cat:** imprime el archivo en consola

**grep:** Nos ayuda a buscar dentro de los archivos, textos muy puntuales utilizando una versión muy reducida de expresiones regulares.

**pipe:** `|` el standard output del primer comando, lo manda al standar input del segundo. Se puede encadenar

`cat file.csv | grep ^2012` Lineas que comiencen por 2012
`cat file.csv | grep ,3[0-9].` Lineas que contengan ,30 (un número de 30 a 39) y un caracter
`cat file.csv | grep SE$` Todo lo que termine en SE

`cat file.csv | grep brazil | grep uruguay | grep ^1952` buscará todas las lineas que tengan brazil, y a esas buscará las que tengan uruguay, y sobre esas buscaria los que inicien por 1952

**find:** Se utiliza para encontrar archivos en un determinado directorio a partir de diversas reglas de búsqueda que incluyen expresiones regulares.