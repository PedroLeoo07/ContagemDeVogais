function contarVogais(texto) {
    texto = texto.toLowerCase();
    // Primeiro iniciamos pedindo a função para a contagem de vogais e incluimos toLowerCase que é usado para deixar todas as letras minusculas  
    let vogais = ['a', 'e', 'i', 'o', 'u'];
    // Nessa parte criamos uma "let" com todas as vogais
    let detectordevogais = {};
    //Já nessa parte colocamos outra variável let para detectarmos o que é vogal dentro da frase
    vogais.forEach(texto => {
        detectordevogais[texto] = 0;
    });
    //O forEach foi usado para iterar o elemento, para não precisarmos usar um laço de repetição tradicional
    texto.split('').every(char => {
    if (vogais.includes(char)) {
            detectordevogais[char]++;
        }
        //Nesse "if" utilizamos o "include" para determinarmos se temos um elemento especifico no código, o que pode retornar verdadeiro ou falso. Já o "char" é apenas uma variável para acrescentarmos mais um elemento
        return detectordevogais;
    });
    //armazena a contagem de cada vogal encontrada no texto

    console.log("Contagem de Vogais:");
    //No console temos uma mensagem que será exibida no terminal
    vogais.forEach(vogal => {
        console.log(vogal + ": " + detectordevogais[vogal]);
    });
}
//itera o array vogais e imprime a contagem de cada vogal
const texto = "Thiago"
const totaldevogais =
    contarVogais(texto);"# ContagemDeVogais" 
