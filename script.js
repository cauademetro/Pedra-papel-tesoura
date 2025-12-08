let  pontosHumano = 0; 
let pontosRobo = 0;
 let escolhahumano="";
let pedra = document.getElementById("pedra");
let papel = document.getElementById("papel");
let tesoura = document.getElementById("tesoura");
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



function jogar (evento){
    function jogarrodada (humano,computador){
    humano = humano.toLowerCase();
    if (humano == "pedra" || humano == "papel" || humano == "tesoura") {
        const clicou= evento.target;

        if (clicou.id=="pedra") {
            escolhahumano="pedra";
        }else if (clicou.id=="papel") {
            escolhahumano="papel";
        }else if (clicou.id=="tesoura") {
            escolhahumano="tesoura";
        }

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
        return "inválido, escolha pedra papel ou tesoura! ";
    }

    const jogador = escolhahumano;
    const computador = escolhacomputador();
    const resultado = jogarrodada(jogador, computador);

if (pontosHumano ==5){
        return "game over, você venceu";
    } else if (pontosRobo ==5){
        return "game over, você perdeu";
    }
    
    if ((pontosHumano>5) || (pontosRobo>5)){
        return "atualiza a pagina";
    }





}
}

const botao = document.querySelectorAll("button");

botao.forEach((button) => {
    button.addEventListener ("click", jogar);
})
