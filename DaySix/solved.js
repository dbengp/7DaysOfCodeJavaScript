let listaDeCompras = [];

function adicionarItem(item) {
    listaDeCompras.push(item);
    console.log(`"${item}" foi adicionado à lista de compras.`);
}

function removerItem(item) {
    const index = listaDeCompras.indexOf(item);
    if (index !== -1) {
        listaDeCompras.splice(index, 1);
        console.log(`"${item}" foi removido da lista de compras.`);
    } else {
        console.log(`"${item}" não foi encontrado na lista de compras.`);
    }
}

function exibirLista() {
    if (listaDeCompras.length > 0) {
        console.log("Lista de compras atual:");
        listaDeCompras.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    } else {
        console.log("A lista de compras está vazia.");
    }
}

function menu() {
    while (true) {
        const acao = prompt(`O que você deseja fazer?
1. Adicionar um item à lista de compras
2. Remover um item da lista de compras
3. Ver lista de compras
4. Sair`);

        switch (acao) {
            case "1":
                const itemParaAdicionar = prompt("Digite o nome do item que deseja adicionar:");
                adicionarItem(itemParaAdicionar);
                break;
            case "2":
                if (listaDeCompras.length > 0) {
                    exibirLista();
                    const itemParaRemover = prompt("Digite o nome do item que deseja remover:");
                    removerItem(itemParaRemover);
                } else {
                    console.log("A lista de compras está vazia. Não há itens para remover.");
                }
                break;
            case "3":
                exibirLista();
                break;
            case "4":
                console.log("Saindo...");
                return;
            default:
                console.log("Opção inválida. Por favor, escolha uma opção válida.");
        }
    }
}

menu();
