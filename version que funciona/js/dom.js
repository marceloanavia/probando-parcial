function limpiar(){
    let bloques = document.getElementsByClassName('discos')[0];
    bloques.innerHTML = "";
}
let pistaMax = 0; 

//mostrar discos
function mostrar(){

    if(discos.length == 0){
        alert("nada que mostrar");
    }
    limpiar();
    let bloques = document.getElementsByClassName('discos')[0];

    for(let disco of discos) {

        let html = `<div class="disco ${disco.codigo}">`;
        html += `<img src="img/disco.jpg" class="discoimg">`;
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
                html += `<p class="duracion mas-largo">${pista.duracion}</p>`;
            } else if(pista.duracion > 180){
                html += `<p class="duracion largo">${pista.duracion}</p>`;
            } else {
                html += `<p class="duracion">${pista.duracion}</p>`;
            }
            html += `</div>`;
        
            if(pista.duracion > duracionMax) {
                duracionMax = pista.duracion;
            } 

            pistasCantidad++
            discoDuracion += pista.duracion;

            
        }
    
        //extra

        html += `<p>Pistas: (${pistasCantidad}) </p>`;

        html += `<div class="contenedor-datos">`;
        html += `<p>Cantidad de pistas: ${pistasCantidad} </p>`;
        html += `<p>Duración del disco: ${discoDuracion} </p>`;
        html += `<p>Pista con mayor duración: ${duracionMax} </p>`;
        html += `<p>Promedio de duración del disco: ${(discoDuracion / pistasCantidad).toFixed(2)} </p>`;
        html += `</div>`;

        html += `</div>`;
        bloques.innerHTML += html;

    }

     
    }



function info(){

    for(let disco of discos) {
        let pistas = disco.pistas;

        for(let pista of pistas) {
            if(pista.duracion > pistaMax) {
                pistaMax = pista.duracion;
            } 
        }
        /* pistas = disco.pistas;
       for(let pista of pistas) {
            if(pista.duracion == pistaMax) {
                alert(`lo encontre ${pistaMax}`);
            } 

        }
        */
    }

    return pistaMax;

}
