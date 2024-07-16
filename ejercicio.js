let nombre = "";
let apellido = "";
let confirmaDatos = false;
let aggEstudiante = false;
let contador = 0;
let estudiantes = [];
let asignaturas = ["matematicas", "ingles", "frances"];
let notas = [null, null, null];
let estudiantesResultado = "";

do {        
    nombre = prompt("Ingrese su nombre");
    
    if (nombre == null){
        console.log("El programa ha terminado.");
        break;
    }

    apellido = prompt("Ingrese su apellido");

    if (apellido == null){
        console.log("El programa ha terminado.");
        break;
    }

    notas[contador] = prompt("Ingrese su nota del 1 al 10 de matematicas");
    notas[contador + 1] = prompt("Ingrese su nota del 1 al 10 de ingles");
    notas[contador + 2] = prompt("Ingrese su nota del 1 al 10 de frances");
    
    estudiantes[contador] = nombre + " " + apellido;

    confirmaDatos = confirm("Confirme si sus datos son correctos: " + nombre + " " + apellido);

    aggEstudiante = confirm("Desea agregar otro estudiante?");

    console.log(contador);
    
    if (confirmaDatos){
        contador++;
    }

} while (!confirmaDatos || aggEstudiante);


const muestraEstudiantes = () => {
    for (let i = 0; i < estudiantes.length; i++) {
        estudiantesResultado = estudiantesResultado + estudiantes[i] + " | " + asignaturas[0] + ": " + notas[i] + " | " + asignaturas[1] + ": " + notas[i + 1] + " | " + asignaturas[2] + ": " + notas[i + 2] + "\n";
    }

    alert(estudiantesResultado);
}

muestraEstudiantes();