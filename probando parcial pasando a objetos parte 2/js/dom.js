function mostrar(){
    let bloques = document.getElementsByClassName('discos')[0];


    for(let disco of discos) {

        bloques.innerHTML += `
        <div class="disco">
            <h2>Nombre del disco: ${disco.nombre}</h2>
            <p>Autor: ${disco.autor}</p>
            <p>Código del disco: ${disco.codigo}</p>`;
        
        let pistas = disco.pistas;
        
        for(let pista of pistas) {
        
            bloques.innerHTML += `\n    <h3>${pista.nombre}</h3>`;
            bloques.innerHTML += `\n    <p>${pista.duracion}</p>`;
        }

        bloques.innerHTML += `</div>`;
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