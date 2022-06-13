//Menu
var menu = document.querySelector('.h-menu');

menu.addEventListener('click', function (){
    document.querySelector('.container').classList.toggle('show-menu');
})

//Efeito Maquina de Escrever
const titulo = document.querySelector('.paragrafo')

function escreverAuto (e) {
    const textoArray = e.innerHTML.split((''));
    e.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => e.innerHTML += letra, 75 * i);}) 
    }

    escreverAuto(titulo)


// Mostrar conteúdo do Menu de Informações

function mostrar(id) {
    if (document.getElementById(id).style.display == 'block'){
        document.getElementById(id).style.display = 'none';
    } else { document.getElementById(id).style.display = 'block';}
    
};


    