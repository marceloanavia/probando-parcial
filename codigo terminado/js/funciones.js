function cargarDisco(){
    
    let nombre = validarString("DISCO?");
    let autor = validarString("AUTOR?");
    let codigo = validarCodigo("codigo del disco? (1 a 999)");

    disco.nombre = nombre;
    disco.autor = autor;
    disco.codigo = codigo;

    let pistaNombre;
    let pistaDuracion;

    let confirmar;

    do {

        pistaNombre = validarString("nombre de la cancion?");
        pista.nombre = pistaNombre

        pistaDuracion = validarCancion("duracion? (0 a 7200)");
        pista.duracion = pistaDuracion;
        
        pistas.push(pista);
        
        pista = {};
        
        confirmar = confirm("¿Seguir introduciendo pistas?");
    } while(confirmar == true);
    
    disco.pistas = pistas;
    discos.push(disco);
    disco = {};
    pista = {};
    disco.cantidad = pistas.length;
    pistas = [];
    
    alerta.innerHTML = `<p>${discos.length}</p>`;
}

function resetear(){
    discos = [];
    disco = {};
    pistas = [];
    pista = {};

    let bloques = document.getElementsByClassName('discos')[0];
    bloques.innerHTML = "";

    alerta.innerHTML = `<p>${discos.length}</p>`;
    cambiar = 1;
    cambiarIcono();
}

function resetearAlerta(){
    if (discos.length == 0){
        return alert("No hay discos guardados");
    }

    let confirmar = confirm("¿Seguro querés refrescar la cantidad de discos?");
    if(confirmar == false){
        return;
    }

    alert(`Se refrescaron ${discos.length} discos`);
    resetear();
}

function guardarBusqueda(){
    guardarDiscos = discos;
    return guardarDiscos;
}

function buscar(){
    guardarBusqueda();
    busqueda = [];

    let buscar = parseInt(prompt("ingresar codigo"));

    for(let disco of discos) {
        if(buscar == disco.codigo){
            busqueda.push(disco);
        }
    }

    if (busqueda.length == 0){
        return alert("no se encontro");
    }

    resetear();

    let bloques = document.getElementsByClassName('discos')[0];

    for(let disco of busqueda) {

        let html = `<div class="disco ${disco.codigo}">`;
        html += `<img src="img/disco.png" class="discoimg" id="img${disco.codigo}"> <img src="img/editar.png" class="editar"  onclick="cambiarImagen('img${disco.codigo}')")`;
        html += `
            <h2 class="nombre">${disco.nombre}</h2>
            <p class="autor">${disco.autor}</p>
            <p class="codigo">#${disco.codigo}</p>`;
        
        let pistas = disco.pistas;
        
        let pistasCantidad = 0;
        let discoDuracion = 0;
        let duracionMax = 0;


        for(let pista of pistas) {
            html += `<div class="row">`;
            html += `<p class="nombrepista">${pista.nombre}</p>`;

            info();
            if(pista.duracion == pistaMax){
                html += `<p class="duracion mas-largo">${pista.duracion} seg</p>`;
            } else if(pista.duracion > 180){
                html += `<p class="duracion largo">${pista.duracion} seg</p>`;
            } else {
                html += `<p class="duracion">${pista.duracion} seg</p>`;
            }

            html += `</div>`;
        
            if(pista.duracion > duracionMax) {
                duracionMax = pista.duracion;
            } 

            pistasCantidad++
            discoDuracion += pista.duracion;

            
        }
    
        //extra

        html += `<p class="pistas">Pistas: (${pistasCantidad}) </p>`;

        html += `<div class="contenedor-datos" id="dato${disco.codigo}" onclick="verEstadistica()"> `;
        html += `<p>Cantidad de pistas: ${pistasCantidad} </p><hr>`;
        html += `<p>Duración del disco: ${discoDuracion} seg </p><hr>`;
        html += `<p>Mayor duración: ${duracionMax} seg </p> <hr>`;
        html += `<p class="ultimo-dato">Promedio de duración del disco: ${(discoDuracion / pistasCantidad).toFixed(1)} seg </p>`;
        html += `</div>`;

        html += `</div>`;
        bloques.innerHTML += html;

    }
    discos = guardarDiscos;
    alerta.innerHTML = `<p>${discos.length}</p>`;
}

function limpiar(){
    let bloques = document.getElementsByClassName('discos')[0];
    bloques.innerHTML = "";
}

function info(){

    for(let disco of discos) {
        let pistas = disco.pistas;

        for(let pista of pistas) {
            if(pista.duracion > pistaMax) {
                pistaMax = pista.duracion;
            } 
        }
    }

    return pistaMax;

}

function ocultar(){
    let bloques = document.getElementsByClassName('discos')[0];
    bloques.innerHTML = "";
}

function cambiarImagen(imagen){
    document.getElementById(`${imagen}`).src = prompt("introducir URL de la imágen");
}

function verEstadistica(tipo){
    let estadistica = document.getElementById(`${tipo}`);
    estadistica.style.display = "none";
}