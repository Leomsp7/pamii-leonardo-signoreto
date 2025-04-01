let pala = prompt("Digite qualquer palavra");

let letras = prompt("Digite uma letra dessa palavras");

for (let char of pala)
{
    if (char === letras) contar++;
}
alert(`A letra '${letras}' tem ${contar} vezes na palavra '${pala}'.`);

 