function mostrar(){

    if(discos.length == 0){
        alert("nada que mostrar");
        cambiar = 0;
        cambiarIcono();
    }
    limpiar();
    let bloques = document.getElementsByClassName('discos')[0];

    for(let disco of discos) {

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

     
    }

function cambiarIcono(){

    if (cambiar == 0){
        let mostrarIcono = document.getElementsByClassName('switch')[0];
        mostrarIcono.innerHTML = `<div class="boton ocultar"><a onclick="ocultar(), cambiarIcono()">ocultar</a></div>`;
        cambiar = 1;
    } else {
        let mostrarIcono = document.getElementsByClassName('switch')[0];
        mostrarIcono.innerHTML = `<div class="boton mostrar"><a onclick="mostrar(), cambiarIcono()">mostrar</a></div>`;
        cambiar = 0;
    }

}

function datos(){

    if(cambiarDatos == 1){
                document.getElementsByClassName('datos-cursada')[0].style.display = "none";
                cambiarDatos = 0;
        return;
    } else{
            document.getElementsByClassName('datos-cursada')[0].style.display = "block";
            cambiarDatos = 1;
    }
}



