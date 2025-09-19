function capitalizarPalavras(str) {
    return str.replace(/\b\w/g, function(letra) {
        return letra.toUpperCase();
    });
}

let frase = "olá, como você está?";
console.log(capitalizarPalavras(frase));  // "Olá, Como Você Está?"
