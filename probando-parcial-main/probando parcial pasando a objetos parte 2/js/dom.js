function mostrar(){
    let bloques = document.getElementsByClassName('discos')[0];


    for(let disco of discos) {

        let html = `<div class="disco">`;
        html += `<img src="img/disco.jpg" class="discoimg">`;
        html += `
            <h2 class="nombre">${disco.nombre}</h2>
            <p class="autor">${disco.autor}</p>
            <p class="codigo">#${disco.codigo}</p>`;
        
        let pistas = disco.pistas;

        for(let pista of pistas) {
            
            html += `<h3 class="nombrepista">${pista.nombre}</h3>`;
            html += `<p class="duracion">${pista.duracion}</p>`;
           
        }

        html += `</div>`;
        bloques.innerHTML += html;
    }

/*
    for(let i = 0; i < discos.length; i++){
        bloques.innerHTML += `
        <div class="disco">
            <p>Nombre del disco: ${discos[i].nombre}</p>
            <p>Autor: ${discos[i].autor}</p>
            <p>Código del disco: ${discos[i].codigo}</p></div>`;

        for(let n = 0; n < discofor; n++){
            bloques.innerHTML += `<div><p>Canciones: ${discos[n].pistas[n].nombre} ${discos[n].pistas[n].duracion} </p>
            </div>`;
        }
    }
*/
}
/*            
*/