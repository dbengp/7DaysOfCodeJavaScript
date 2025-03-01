// Função para gerar um número aleatório entre 0 e 22
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 23); // 23 porque Math.random() * 23 gera números de 0 a 22.999...
}

// Função principal do jogo
function jogoAdivinhacao() {
    const numeroAleatorio = gerarNumeroAleatorio();
    let tentativas = 3;
    let acertou = false;

    while (tentativas > 0 && !acertou) {
        let chute = parseInt(prompt(`Você tem ${tentativas} tentativa(s). Chute um número entre 0 e 22:`));

        if (chute === numeroAleatorio) {
            alert("Parabéns! Você acertou o número!");
            acertou = true;
        } else {
            tentativas--;
            if (tentativas > 0) {
                alert("Errou! Tente novamente.");
            }
        }
    }

    if (!acertou) {
        alert(`Suas tentativas acabaram. O número correto era ${numeroAleatorio}.`);
    }
}

// Iniciar o jogo
jogoAdivinhacao();
