let tamanho = document.querySelector('#tamanho');
let botaoTamanho = document.querySelector('#botaoTamanho');
let botaoGerar = document.querySelector('#botaoGerar');
let valor = document.querySelector('#valor');

let possibilidades = 'abcdefghijlmnopqrstuvxz123456789ASDFGHJKLOIUYTREWQZXXC@#%¨&*()';


tamanho.oninput = function(){
    valor.innerHTML= this.value;
}

function gerador(){
    let senha='';

    for(let i=0, n=possibilidades.length;i<tamanho.value; ++i){
        senha += possibilidades.charAt(Math.floor(Math.random()*n));
    }
    resultado.textContent=senha;
}

botaoGerar.onclick=function(){
    gerador()
}