//requisito 4 e 5

let tamanhoTabelaPixels = 5;
const pixelsSquare = document.body.querySelector('#pixel-board');

function createPixelBoard(lineNumbersF, columnsNumbersF) {
  /* const removePixels = document.getElementsByClassName('pixelsLine');
  removePixels.parentNode.removeChild(removePixels); */
  for (let index = 0; index < lineNumbersF; index += 1) {
    const pixelsLineDiv = document.createElement('div');
    pixelsLineDiv.className = 'pixelsLine';
    pixelsSquare.appendChild(pixelsLineDiv);
  }

  const pixelsLLine = document.getElementsByClassName('pixelsLine')
  
  for (let index = 0; index < lineNumbersF; index += 1) {
    
    for (let index = 0; index < columnsNumbersF; index += 1) {
      
      let pixelsColumnsDiv = document.createElement('div');
      pixelsColumnsDiv.className = 'pixel';
      pixelsLLine[index].appendChild(pixelsColumnsDiv);
    }
  }
}

createPixelBoard(tamanhoTabelaPixels, tamanhoTabelaPixels);

// requisito 7

document.querySelectorAll('.color').forEach((item) => {
  item.addEventListener('click', (recebeClick) => {
    const pixelPalette = recebeClick;
    const pixel = document.getElementsByClassName('color');
    
    for (let index = 0; index < pixel.length; index += 1) {
      if (pixel[index].className === 'color selected') {
        pixel[index].className = 'color';
      }
    }
    
    pixelPalette.target.className += ' selected';
  });
});

// requisito 8

document.querySelectorAll('.pixel').forEach((item) => {
  item.addEventListener('click', (recebeClick) => {
    let pixelSquare = recebeClick.target;
    const colorPixel = document.getElementsByClassName('selected')[0];
    const propertyColorPixel = window.getComputedStyle(colorPixel, null);
    let bgColor = propertyColorPixel.getPropertyValue("background-color");
    pixelSquare.style.backgroundColor = bgColor;
  });
});

// requisito 9

const clearBoard = document.getElementById('clear-board')

clearBoard.addEventListener('click', () => {
  const pixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}); 


// funcao deletar
function deletePreviousBoard() {
  const pixelTable = document.getElementsByClassName('pixelsLine')[0];
  while (pixelTable.firstChild) {
    pixelTable.removeChild(pixelTable.firstChild);
  }
}

// requisito 10



const buttonNumber = document.getElementById('generate-board');
buttonNumber.addEventListener('click', () => {
  const qntPixels = document.getElementById('board-size').value;
  //console.log(qntPixels);
  if (qntPixels < 5) {
    alert('Valor incorreto, o número deve estar entre 5 e 50');
    tamanhoTabelaPixels = 5;    
    deletePreviousBoard();
    createPixelBoard(tamanhoTabelaPixels, tamanhoTabelaPixels);
  } else if (qntPixels > 50) {
    alert('Valor incorreto, o número deve estar entre 5 e 50');
    tamanhoTabelaPixels = 50;    
    deletePreviousBoard();
    createPixelBoard(tamanhoTabelaPixels, tamanhoTabelaPixels);
  } else {
    tamanhoTabelaPixels = parseInt(qntPixels);
    deletePreviousBoard();
    createPixelBoard(tamanhoTabelaPixels, tamanhoTabelaPixels);
    //tamanhoTabelaPixels = qntPixels;
  }
});

console.log(tamanhoTabelaPixels);

