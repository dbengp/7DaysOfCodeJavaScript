// Função principal do programa
function listaDeCompras() {
    // Objeto para armazenar os itens por categoria
    const lista = {
        Frutas: [],
        Laticínios: [],
        Congelados: [],
        Doces: [],
        Outros: []
    };

    while (true) {
        // Pergunta se o usuário deseja adicionar um item
        const adicionarItem = prompt("Deseja adicionar uma comida na lista de compras? (sim/não)").toLowerCase();

        // Se o usuário não quiser adicionar mais itens, sair do loop
        if (adicionarItem !== "sim") {
            break;
        }

        // Pergunta o nome do item
        const item = prompt("Qual comida você deseja adicionar?");

        // Pergunta a categoria do item
        const categoria = prompt(`Em qual categoria "${item}" se encaixa? (Frutas, Laticínios, Congelados, Doces, Outros)`);

        // Adiciona o item à categoria correspondente
        if (lista[categoria]) {
            lista[categoria].push(item);
        } else {
            lista.Outros.push(item); // Se a categoria não existir, adiciona em "Outros"
        }
    }

    // Exibe a lista de compras organizada
    console.log("Lista de compras:");
    for (const categoria in lista) {
        if (lista[categoria].length > 0) {
            console.log(`    ${categoria}: ${lista[categoria].join(", ")}`);
        }
    }
}

// Iniciar o programa
listaDeCompras();
