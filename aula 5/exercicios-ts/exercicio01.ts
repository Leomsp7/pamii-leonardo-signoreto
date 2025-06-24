let produto: string = "Teclado";
let preco: number = 199.90;
let disponivel : boolean = true;

function exibirProduto(produto: string, preco: number, disponivel: boolean): void {
    console.log (`Produto: ${produto} - Preço: R$${preco} - Disponível: ${disponivel ? 'Sim' : 'Não'}`);
}

exibirProduto(produto, preco, disponivel);
