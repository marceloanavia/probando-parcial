let discos = [];
let disco = {};
let pistas = [];
let pista = {};

let busqueda = [];
let guardarDiscos = [];

let pistaMax = 0; 

disco.nombre = "muta";
disco.autor = "morbo y mambo";
disco.codigo = 1;
pista.nombre = "la cancion 1";
pista.duracion = 100;
pistas.push(pista);
pista = {};
pista.nombre = "la cancion 2";
pista.duracion = 200;
pistas.push(pista);
pista = {};
pista.nombre = "la cancion 3";
pista.duracion = 300;
pistas.push(pista);
pista = {};
disco.pistas = pistas;
discos.push(disco);
disco = {};
pista = {};
disco.cantidad = pistas.length;
pistas = [];

disco.nombre = "El sur";
disco.autor = "Girl ultra";
disco.codigo = 2;
pista.nombre = "Cosas que nadie ve";
pista.duracion = 453;
pistas.push(pista);
pista = {};
pista.nombre = "Para que te acuerdes de mi";
pista.duracion = 123;
pistas.push(pista);
pista = {};
pista.nombre = "Amores de droga";
pista.duracion = 241;
pistas.push(pista);
pista = {};
pista.nombre = "Jungla de locos";
pista.duracion = 125;
pistas.push(pista);
pista = {};
pista.nombre = "Punk";
pista.duracion = 743;
pistas.push(pista);
pista = {};
pista.nombre = "BOMBAY";
pista.duracion = 233;
pistas.push(pista);
pista = {};
pista.nombre = "Nada que hacer";
pista.duracion = 236;
pistas.push(pista);
pista = {};
disco.pistas = pistas;
discos.push(disco);
disco = {};
pista = {};
disco.cantidad = pistas.length;
pistas = [];

let alerta = document.getElementsByClassName('alerta')[0];
alerta.innerHTML = `<p>${discos.length}</p>`;

let cambiar = 0;

let cambiarDatos = 0;