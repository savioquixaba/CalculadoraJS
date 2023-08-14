const resultado = document.getElementById("resultado");
const botaoresult = document.querySelector(".igual");


function insert(valor){
    resultado.innerHTML += valor;
}

function clean(){
    resultado.innerHTML= " ";
}

function deletar(){
    if (resultado.textContent){
        let result = document.getElementById("resultado").innerHTML
        resultado.innerHTML = result.substring(0, result.length -1);
    }
}

function botaoResultado(){
   if (resultado.textContent) {
       document.getElementById("resultado").innerHTML = eval(resultado.innerHTML)
   }
}