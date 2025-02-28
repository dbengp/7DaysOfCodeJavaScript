function iniciarJogo() {
    // Passo 1: Escolher entre Front-End e Back-End
    let area = prompt("Você quer seguir para a área de Front-End ou Back-End? Digite 'Front' para Front-End ou 'Back' para Back-End.");

    if (area === "Front") {
        // Passo 2: Escolher entre React, Vue, Angular ou Svelte
        let framework = prompt("Você quer aprender React, Vue, Angular ou Svelte? Digite 'React', 'Vue', 'Angular' ou 'Svelte'.");
        if (framework === "React") {
            alert("Ótima escolha! React é muito popular e tem uma grande comunidade.");
        } else if (framework === "Vue") {
            alert("Vue é uma excelente escolha! É conhecido por sua simplicidade e flexibilidade.");
        } else if (framework === "Angular") {
            alert("Angular é uma ótima opção! É um framework robusto e mantido pelo Google.");
        } else if (framework === "Svelte") {
            alert("Svelte é uma escolha moderna! Ele compila o código em JavaScript puro, resultando em alta performance.");
        } else {
            alert("Escolha inválida. Reinicie o jogo.");
            return;
        }
    } else if (area === "Back") {
        // Passo 2: Escolher entre C#, Java, Python ou Node.js
        let linguagem = prompt("Você quer aprender C#, Java, Python ou Node.js? Digite 'C#', 'Java', 'Python' ou 'Node.js'.");
        if (linguagem === "C#") {
            alert("C# é uma linguagem poderosa, especialmente para desenvolvimento de aplicações Windows.");
        } else if (linguagem === "Java") {
            alert("Java é uma linguagem versátil e amplamente utilizada em grandes empresas.");
        } else if (linguagem === "Python") {
            alert("Python é uma linguagem incrível! É fácil de aprender e muito usada em ciência de dados e automação.");
        } else if (linguagem === "Node.js") {
            alert("Node.js é uma ótima escolha! Permite usar JavaScript no Back-End e é altamente escalável.");
        } else {
            alert("Escolha inválida. Reinicie o jogo.");
            return;
        }
    } else {
        alert("Escolha inválida. Reinicie o jogo.");
        return;
    }

    // Passo 3: Escolher entre se especializar ou se tornar Fullstack
    let especializacao = prompt("Você quer se especializar na área escolhida ou se tornar Fullstack? Digite 'Especializar' ou 'Fullstack'.");

    if (especializacao === "Especializar") {
        alert("Ótimo! Focar em uma área pode te tornar um expert no assunto.");
    } else if (especializacao === "Fullstack") {
        alert("Fullstack é uma ótima escolha! Você terá um conhecimento amplo e poderá trabalhar em diversas partes de um projeto.");
    } else {
        alert("Escolha inválida. Reinicie o jogo.");
        return;
    }

    // Passo 4: Listar tecnologias que o usuário quer aprender
    let tecnologias = [];
    let continuar = true;

    while (continuar) {
        let tecnologia = prompt("Qual tecnologia você gostaria de aprender? Digite o nome da tecnologia.");
        tecnologias.push(tecnologia);
        alert(`Você adicionou ${tecnologia} à sua lista de aprendizado.`);

        let resposta = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'sim' ou 'não'.");
        if (resposta.toLowerCase() !== "sim") {
            continuar = false;
        }
    }

    // Exibir a lista de tecnologias
    alert("Aqui está a lista de tecnologias que você quer aprender:");
    tecnologias.forEach((tech, index) => {
        alert(`${index + 1}. ${tech}`);
    });

    alert("Obrigado por jogar! Boa sorte na sua jornada de aprendizado!");
}

// Iniciar o jogo
iniciarJogo();
