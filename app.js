// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];
let nombreAmigo = "";
let amigosSorteados = [];



function limpiarCampo() {

    document.querySelector('#amigo').value = '';
    return;
}



function agregarAmigo() {
    nombreAmigo = document.getElementById('amigo').value;
    limpiarCampo();
    if (!validarNombre(nombreAmigo)) {
        alert('El nombre no es válido.');
        return;
    }
    document.getElementById('button-draw').disabled = false;

    listaDeAmigos.push(nombreAmigo);

    asignarTextoAlId('listaAmigos', listaDeAmigos.join(', '));
    console.log(listaDeAmigos);



}

function validarNombre(nombreAmigo) {
    if (!isNaN(nombreAmigo)) {
        return false;
    }

    if (nombreAmigo === null) {
        return false;
    }

    if (nombreAmigo === '') {
        return false
    }

    return true;
}

function asignarTextoAlId(id, texto) {

    let elemento = document.getElementById(id);

    elemento.innerHTML = texto;

    return;

}

function sortearAmigo() {

    if (listaDeAmigos.length < 1) {

        alert('No hay amigos en la lista!😢');

        return;

    }
    let posicion = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[posicion];
    asignarTextoAlId('resultado', `El amigo sorteado es: ${amigoSorteado}`);
    listaDeAmigos = listaDeAmigos.filter(amigo => amigo !== amigoSorteado);
    asignarTextoAlId('listaAmigos', listaDeAmigos.join(', '));
    amigosSorteados.push(amigoSorteado);
    asignarTextoAlId('listaSorteados', amigosSorteados.join(', '));
}

