//Seleciona os itens clicado
var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)

//Expandir o menu

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})

// Parte do Js.html

const para = document.querySelector("h2");

para.addEventListener("click", atualizarNome);

function atualizarNome() {
  var nome = prompt("Insira um novo nome");
  para.textContent = "Jogador 1: " + nome;
}