const livros = require('./listaLivros');
const troca = require('./troca')

function insertionSort(lista) {
  for(let i = 0; i < lista.length; i++) {
    //let analise = atual;
    while(i > 0 && lista[i].preco < lista[i - 1].preco) {
      troca(lista, i)
      i--
    }
  }
  console.log(lista);
}


insertionSort(livros);