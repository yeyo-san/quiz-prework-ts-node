// 1. Describe qué es una función en JavaScript y cómo se declara.

//R: Es un conjunto de instrucciones que realiza una tarea, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida

//Ejemplo de como se declara y se llama una funcion
function holaMundo(){
    return console.log('Hola mundo');
}

holaMundo()

//2. Explica cómo seleccionar un elemento del DOM y cambiar su contenido.

//R:
//Aqui estamos seleccionando el DOM del html que queremos en base al id, pero tambien existen otros como querySelector, classTagName entre otros.
const R2 = document.getElementById('pregunta2');


// Aqui lo que hacemos con la palabra reservada 'innerHtml' es cambiarle el contenido al DOM que seleccionaos, este previamente tenia otro contenido en su interior
R2.innerHTML =  /*html*/ `
    <p>Contenido de DOM ya cambiado</p>
`


//3. ¿Qué es una clase en JavaScript y cómo se define una?

//R: Una clase se define utilizando la palabra clave class seguida por el nombre de la clase. Dentro de la clase, se define un constructor (opcional) que es un método especial para inicializar objetos. Además, se pueden definir otros métodos dentro de la clase.
//Aqui un ejemplo de como definiriamos una clase

class Persona {
    constructor(nombre, apodo){
        this.nombre = nombre
        this.apodo = apodo
    }

    //Aca le asignamos un metodo
    saludar(){
        console.log(`Hola clan ritchie, mi nombre es ${this.nombre} y me han llamado ${this.apodo} toda mi vida`);
    }
}

//Aca la utilizaremos 
const PruebaClase = new Persona('Alejandro', 'Yeyo');

PruebaClase.saludar()

//4. Como se le agrega un evento click a un boton

const R4 = document.getElementById('boton');

R4.addEventListener('click', () =>{
    alert('Hola profe')
})

//5. Explica las diferencias entre var, let, y const en JavaScript.

// Una variable tipo 'var' es aquella que este en scope que este, puede cambiar
// Una variable tipo 'let', es aquella que sera mutable, pero esta es de bloque, osea, significa que solo existe dentro del bloque {} en el que se declara
// Una variable tipo 'const' es quella que nunca cambiara el contenido que se le asigne de manera inicial y tambien es de bloque.

//6. ¿Qué son las estructuras de control de flujo y cuáles son algunas de las más comunes en JavaScript?
// R: ‌Las estructuras de control de flujo, son intrucciones que nos permiten evaluar si se puede cumplir una condición o no, incluso nos puede ayudar a evaluarla n cantidad de veces.
// La mas usada a opnion personal es el IF ELSE

//7. Describe qué es una función de flecha en JavaScript y proporciona un ejemplo de cómo se usa.
// es una funcion anonima, o expresada.

//Ejemplo de una funcion flecha
const multiplicacion = (a,b) => { 
    return (a*b) }


//8. ¿Qué es JSON y cómo se utiliza en JavaScript?
//R: el Json es muy parecido a los objetos de Javascript, son archivos de texto Que pueden ser interpretados por javascript
// usualmente los utilizamos cuando Queremos traer datos con fetch, donde la promesa Que trae la convertimos a formato JSON para ser mas legible

//9. Explica qué es una promesa en JavaScript y proporciona un ejemplo de su uso.
//R: Una Promesa (Promise) es un proxy de un valor que no necesariamente se conoce cuando se crea la promesa. Le permite asociar controladores con el valor eventual de éxito o el motivo de falla de una acción asíncrona.

//Aqui declaramos nuestra promesa en esta funcion
function ejemploPromesa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true; // Cambiar a false para simular un error
            if (exito) {
                resolve({ nombre: "Juan", edad: 30 });
            } else {
                reject("No se pudieron obtener los datos.");
            }
        }, 2000); // Simula una operación que tarda 2 segundos
    });
}

//Aqui se ejecuta la funcion y la promesa, con el '.then' iremos a los resultados donde la promesa sea exitosa, con el '.catch' atrapara el error que hayamos tenido y lo mostrara por consola
ejemploPromesa()
    .then((datos) => {
        console.log(`Nombre: ${datos.nombre}, Edad: ${datos.edad}`);
    })
    .catch((error) => {
        console.error(error);
    });

//10. ¿Cuáles son algunas de las herramientas o métodos que se pueden usar para depurar código JavaScript?
//R: A modo personal y lo que he odio de diferentes classmates desarrolladores y profesores, el conloge.log() es la manera mas eficiente de depurar un error