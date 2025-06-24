interface livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

let novo_livro : livro = {
    titulo: "Menino do raio na testa",
    autor: "K.J. Roulingue",
    anoPublicacao: 1998
};

function exibirLivro(livro: livro): void {
    console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}, Ano de Publicação: ${livro.anoPublicacao}`);
}

exibirLivro(novo_livro)