let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');

}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');

}


document.querySelector('#cart-btn').onclick = () =>{

    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

/*---------------------------------------------------------------------------- */

const fs = require('fs');
const xlsx = require('xlsx');
const fileSaver = require('file-saver');

// Ler o arquivo Excel e converter para CSV
// ... (código anterior) ...

// Ler o arquivo CSV e inserir o conteúdo dinamicamente
fs.readFile('meu_arquivo.csv', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Dividir os dados em linhas
  const rows = data.split('\n');

  // Obter container para inserir os produtos
  const container = document.querySelector('#prods .box-container');

  // Iterar as linhas do CSV e inserir os produtos
  rows.forEach((row, index) => {
    if (index === 0) {
      // Ignorar a primeira linha (cabeçalho)
      return;
    }

    const columns = row.split(',');

    // Criar elementos HTML para o produto
    const box = document.createElement('div');
    box.classList.add('box');

    const image = document.createElement('img');
    image.src = 'images/product-' + index + '.png';

    const content = document.createElement('div');
    content.classList.add('content');

    const h3 = document.createElement('h3');
    h3.textContent = columns[0];

    const price = document.createElement('div');
    price.classList.add('price');
    price.textContent = columns[1];

    // Inserir elementos no container
    content.appendChild(h3);
    content.appendChild(price);
    box.appendChild(image);
    box.appendChild(content);
    container.appendChild(box);
  });
});
