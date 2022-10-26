let discos = [];
let disco = {};
let pistas = [];
let pista = {};


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
    //pistas = [];
    pista = {};

    disco.cantidad = pistas.length;
    pistas = [];


}


function mostrar(){
    console.log(discos);
}



//recorrer el indice codigo

function validarCodigo(msg){

    let codigo;
    do {
        codigo = parseInt(prompt(msg));
        var flagCodigo = true;

        if (isNaN(codigo)){
            alert("debe ser numero");
            flagCodigo = false;
        } else if (codigo < 1 || codigo > 999) {
            alert("debe estar entre 1 y 999");
            flagCodigo = false;
        }

        for(let i = 0; i < discos.length; i++){
            if(discos[i].codigo == codigo){
                alert("codigo repetido");
                flagCodigo = false;
            }
        }

        
    } while (!flagCodigo);

    return codigo;
}

/*
function validarCodigo(msg){

    let codigo;
    do {
        codigo = parseInt(prompt(msg));
        var flagCodigo = true;

        if (isNaN(codigo)){
            alert("debe ser numero");
            flagCodigo = false;
        } else if (codigo < 1 || codigo > 999) {
            alert("debe estar entre 1 y 999");
            flagCodigo = false;
        }

        for(let i = 0; i < discos.length; i++){
            if(discos[i][INDEX_CODIGO] == codigo){
                alert("codigo repetido");
                flagCodigo = false;
            }
        }
    } while (!flagCodigo);

    return codigo;
}
*/





function validarString(msg){
    let string;
    do {

        string = prompt(msg);
        var flagString = true;

        if(string.length == 0){
            alert("pone algo");
            flagString = false;
        }

    } while (!flagString);

    return string;
}

function validarCancion(msg){
    let cancion;
    do {

        cancion = parseInt(prompt(msg));

        var flagCancion = true;
        if (isNaN(cancion)){

            alert("debe ser numero");
            flagCancion = false;
        } else if (cancion < 0 || cancion > 7200){

            alert("debe estar entre 0 y 7200");
            flagCancion = false;
        }
    } while (!flagCancion);

    return cancion;
}

//funciona, guardo en un array los codigos

/*
    let codigos = [];

function validarCodigo(msg){

    let codigo;
    do {

        codigo = parseInt(prompt(msg));
        var flagCodigo = true;

        for(let i of codigos){
            if(i == codigo){
                alert("codigo repetido");
                flagCodigo = false;
            } else if (isNaN(codigo)){
                alert("debe ser numero");
                flagCodigo = false;
            }
        }

    } while (!flagCodigo);

    codigos.push(codigo);
    return codigo;
}
*/