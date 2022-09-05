const livros = require('./listaLivros');
const menorValor = require('./menorValor');

for(let atual = 0; atual < livros.length - 1; atual++) {
  let menor = menorValor(livros, atual);

  let livroAtual = livros[atual];
  let livroMenorPreco = livros[menor];
  
  livros[atual] = livroMenorPreco;
  livros[menor] = livroAtual;
}

console.log(livros);


let num = 0; 
//console.log(num);

for(let i = 0; i <= 5; i++) {
  console.log(i);
}