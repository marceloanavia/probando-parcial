function resetear(){
    discos = [];
    disco = {};
    pistas = [];
    pista = {};

    let bloques = document.getElementsByClassName('discos')[0];
    bloques.innerHTML = "";

    alerta.innerHTML = `${discos.length}` ;
}

let busqueda = [];
let guardarDiscos = [];

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
            alert("lo encontre");
            busqueda.push(disco);
        }
    }

    if (busqueda.length == 0){
        return alert("no se encontro");
    }

    //deberia poner display none para poder VOLVER A BUSCAR
    resetear();

    let bloques = document.getElementsByClassName('discos')[0];

    for(let disco of busqueda) {

        let html = `<div class="disco ${disco.codigo}">`;
        html += `<img src="img/disco.jpg" class="discoimg">`;
        html += `
            <h2 class="nombre">${disco.nombre}</h2>
            <p class="autor">${disco.autor}</p>
            <p class="codigo">#${disco.codigo}</p>`;
        
        let pistas = disco.pistas;
        

  
        for(let pista of pistas) {
            html += `<div class="row">`;
            html += `<p class="nombrepista">${pista.nombre}</p>`;
            html += `<p class="duracion">${pista.duracion}</p>`;
            html += `</div>`;

        }


        html += `</div>`;
        bloques.innerHTML += html;
    }
    discos = guardarDiscos;
    alerta.innerHTML = `${discos.length}` ;
}