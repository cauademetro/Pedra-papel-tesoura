let pontosHumano = 0;
let pontosRobo = 0;
let escolhahumano = "";

let pedra = document.getElementById("pedra");
let papel = document.getElementById("papel");
let tesoura = document.getElementById("tesoura");

function escolhacomputador() {
    const numero = Math.random();
    if (numero < 1 / 3) {
        return "pedra";
    } else if (numero < 2 / 3) {
        return "papel";
    } else {
        return "tesoura";
    }
}

function jogarrodada(humano, computador) {
    if (humano === computador) {
        return "empatou! ambos escolheram " + humano;
    }

    if (
        (humano === "pedra" && computador === "tesoura") ||
        (humano === "papel" && computador === "pedra") ||
        (humano === "tesoura" && computador === "papel")
    ) {
        pontosHumano++;
        return "você venceu! " + humano + " vence " + computador;
    } else {
        pontosRobo++;
        return "você perdeu! " + computador + " vence " + humano;
    }
}

function jogar(evento) {

    const clicou = evento.target;

    if (clicou.id === "pedra") escolhahumano = "pedra";
    else if (clicou.id === "papel") escolhahumano = "papel";
    else if (clicou.id === "tesoura") escolhahumano = "tesoura";

    const computador = escolhacomputador();

    const resultado = jogarrodada(escolhahumano, computador);

    document.getElementById("resultado").textContent =
        "Você: " + escolhahumano + " | Computador: " + computador + " → " + resultado;

    document.getElementById("pontoshumano").textContent = pontosHumano;
    document.getElementById("pontoscomputador").textContent = pontosRobo;

    if (pontosHumano === 5) {
        document.getElementById("resultado").textContent = "GAME OVER — Você venceu!";
    }

    if (pontosRobo === 5) {
        document.getElementById("resultado").textContent = "GAME OVER — Você perdeu!";
    }
}

const botoes = document.querySelectorAll("button");
botoes.forEach((button) => {
    button.addEventListener("click", jogar);
});
