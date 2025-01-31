# Markdown Links Extractor 

## Índice

* [1. Objetivo](#1-objetivo)
* [2. Diagrama de flujo](#2-diagrama-de-flujo)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Descripción del módulo](#4-descripción-del-módulo)
* [5. Tutoriales](#5-tutoriales)

***

## 1. Objetivo

Crear una herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato [Markdown](https://es.wikipedia.org/wiki/Markdown) para verificar los links 
que contengan y reportar algunas estadísticas como links totales, únicos y rotos.  

Esta herramienta se ejecuta con una línea de comando (CLI) que permite dar acceso a la
librería o paquetería en Javascript. 

## 2. Diagrama de flujo 

Se creó un diagrama de flujo donde se juntan los procesos a seguir en la API y en el CLI para
cumplir con el objetivo del proyecto. Adicionalmente, en distinto formato, se inserta una post 
note donde se describen igualmente los pasos pensando en el/la usuaria.



![alt text](/readMeAssets/diagFlujo1.png)
![alt text](/readMeAssets/diagFlujo4.png)

## 3. Objetivos de aprendizaje

JavaScript  

Node.js  

Control de Versiones (Git y GitHub)  

HTTP  

Jest

## 4. Descripción del módulo

### Instalación
![alt text](/readMeAssets/npmi.png)
### Documentación del API
**mdLinks(path, {options})**  

**Parámetros**  

**path:** el nombre del path del archivo en formato markdown donde se encuentran los links o directorio que contiene archivos markdown en string ej. './pathTo'  

**options:** las opciones válidas puestas al lado del path que devuelven un booleano (true/false) son las siguientes:  

*--validate* para validar los links imprimiendo en consola el statusCode del HTTP request más un mensaje de 'ok' si el link tiene un statusCode de '200' o 'fail' si el link tiene un statusCode diferente a '200'.  

*--stats* para imprimir en consola el número total de links y el número total de links únicos o no repetidos.  

*--validate --stats* que combina el retorno de la opción --validate junto con el de --stats imprimiendo además el número total de links rotos. 

### Ejemplos  
Después de haber instalado la paquetería, en el package.json file se verá de esta manera:
![alt text](/readMeAssets/npmipackagejson.png)

**Creación de archivo de prueba**
Se crea un archivo con extensión md de prueba en cuyo contenido vienen links para validar a forma de ejemplo. 
![alt text](/readMeAssets/npmdocs.png)

**Llamar la función mdLinks importada por npm**
Con la función importada se crea otra función que usará mdLinks con los parámetros necesarios: el path(file o folder) y la opcion { validate:false } en este caso. 
![alt text](/readMeAssets/npmvalidatefalse.png)

Lo que se verá como resultado será una promesa con el href, file y text correspondientes a cada link:
![alt text](/readMeAssets/npmdocsfalse.png)

Con la opción { validate:true } se agregará a la promesa la petición a http con el statusCode y el statusMessage. Será statusCode:200 y statusMessage 'ok' si el link es correcto; statusCode:'NA' y statusMessage 'fail' si el link presenta algún fallo o error. 
![alt text](/readMeAssets/npmdocstrue.png)  
 

## 5. Tutoriales 

### NodeSchool workshoppers

* [learnyounode](https://github.com/workshopper/learnyounode)
* [how-to-npm](https://github.com/workshopper/how-to-npm)
* [promise-it-wont-hurt](https://github.com/stevekane/promise-it-wont-hurt)

### Otros recursos

* [Acerca de Node.js - Documentación oficial](https://nodejs.org/es/about/)
* [Node.js file system - Documentación oficial](https://nodejs.org/api/fs.html)
* [Node.js http.get - Documentación oficial](https://nodejs.org/api/http.html#http_http_get_options_callback)
* [Node.js - Wikipedia](https://es.wikipedia.org/wiki/Node.js)
* [What exactly is Node.js? - freeCodeCamp](https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5)
* [¿Qué es Node.js y para qué sirve? - drauta.com](https://www.drauta.com/que-es-nodejs-y-para-que-sirve)
* [¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube](https://www.youtube.com/watch?v=WgSc1nv_4Gw)
* [¿Simplemente qué es Node.js? - IBM Developer Works, 2011](https://www.ibm.com/developerworks/ssa/opensource/library/os-nodejs/index.html)
* [Node.js y npm](https://www.genbeta.com/desarrollo/node-js-y-npm)
* [Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?](http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175)
* [Asíncronía en js](https://carlosazaustre.es/manejando-la-asincronia-en-javascript)
* [NPM](https://docs.npmjs.com/getting-started/what-is-npm)
* [Publicar packpage](https://docs.npmjs.com/getting-started/publishing-npm-packages)
* [Crear módulos en Node.js](https://docs.npmjs.com/getting-started/publishing-npm-packages)
* [Leer un archivo](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)
* [Leer un directorio](https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback)
* [Path](https://nodejs.org/api/path.html)
* [Linea de comando CLI](https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e)
