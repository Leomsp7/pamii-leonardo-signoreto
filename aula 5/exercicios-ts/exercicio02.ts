let cidades : string[] = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Nova Olinda", "Altaneira", "Juazeiro do Norte"];

function listarCidades(cidades: string[]): void {
    cidades.forEach(cidade => { console.log(cidade); });
}

listarCidades(cidades);