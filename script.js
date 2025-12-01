let  pontosHumano = 0; 
let pontosRobo = 0;
 
function escolhacomputador(){
    const numero = Math.random();
    if (numero < 1/3 ){
        
    return "pedra"
    }else if (numero < 2/3){
        return "papel"
    } else {
        return "tesoura"
    }
    
}
console.log(escolhacomputador());



function jogarrodada (humano,computador){
    humano = humano.toLowerCase();
    if (humano == "pedra" || humano == "papel" || humano == "tesoura") {
        if (humano == computador){
        return "empatou ambos escolheram "+ humano 
    }



    if (humano == "pedra" && computador == "tesoura" ||
        humano == "papel" && computador == "pedra" ||
        humano == "tesoura" && computador == "papel"
    ){
        pontosHumano++
        return  "você venceu " + humano + " vence de " + computador;
    } else {
        pontosRobo++ 
        return " você perdeu " + computador + " ganha de " + humano;
    }
    } else {
        return "inválido, escolha pedra papel ou tesoura! "
    }

    
}



document.getElementById("botao").addEventListener("click", function(){




    const jogador = document.getElementById("escolhajogador").value;
    const computador = escolhacomputador();
    const resultado = jogarrodada(jogador, computador);


    if (pontosHumano >= 3) {
        document.getElementById("resultado").textContent = "voce ganhou. reiniciando a partida.";
        document.getElementById("pontoshumano").textContent = 3;
        pontosHumano = 0;
        pontosRobo = 0;
    } else if (pontosRobo >= 3) {
        document.getElementById("resultado").textContent = "voce perdeu. reiniciando a partida";
        document.getElementById("pontoscomputador").textContent = 3;
        pontosHumano = 0;
        pontosRobo = 0;
    }   else {
        document.getElementById("resultado").textContent = resultado;
        document.getElementById("pontoshumano").textContent = pontosHumano;
        document.getElementById("pontoscomputador").textContent = pontosRobo;
    }
    
})
