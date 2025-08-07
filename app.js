// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let ListaAmigos = [];

function agregarAmigo(){

    let nomAmigo = document.getElementById('amigo').value
    

    if  (nomAmigo.trim().length === 0){

        alert('Por favor, inserte un nombre.');

    } else {

            ListaAmigos.push(nomAmigo);
            limpiarListaAmigos();
            functionListar()
            limpiarCaja();
            


    }
};

function limpiarListaAmigos(){

    const list = document.getElementById("listaAmigos");
    list.innerHTML = "";
};

function limpiarListaSeleccionado(){

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
};

function functionListar() {
  
    let list = document.getElementById("listaAmigos");
        for (i = 0; i < ListaAmigos.length; ++i) {
            
            let li = document.createElement('li');
            li.innerText = ListaAmigos[i];
            list.appendChild(li);
        }

}



function listarAmigosAgregados(){

    ListaAmigos.forEach(function (elemento, indice, array) {
        
        console.log(elemento, indice);
        
        asignarTextoElemento('li',elemento);

    });
    
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value = ''; 
};


function sortearAmigo(){

    limpiarListaSeleccionado();

    let resultado = document.getElementById("resultado");
    let li = document.createElement('li');

    if(ListaAmigos.length === 0 ){
        alert('No hay amigos agregados');
    } else {

        let numeroAmigos = ListaAmigos.length ;
        let numeroAmigoSecreto = Math.floor(Math.random() * numeroAmigos);
        
        li.innerText = `Amigo secreto seleccionado: ${ListaAmigos[numeroAmigoSecreto]} `;
        resultado.appendChild(li);



        

    }
};


