// requisito 4 e 5

let tamanhoTabelaPixels = 5;

function createPixelBoard(lineNumbersF, columnsNumbersF) {
  const pixelsSquare = document.getElementById('pixel-board');
  while (pixelsSquare.firstChild) {
    pixelsSquare.removeChild(pixelsSquare.firstChild);
  }

  for (let i = 0; i < lineNumbersF; i++) {
    const line = document.createElement('div');
    line.className = 'pixelsLine';
    pixelsSquare.appendChild(line);

    for (let j = 0; j < columnsNumbersF; j++) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      line.appendChild(pixel);
      pixel.addEventListener('click', setColor);
    }
  }
}

function setColor(e) {
  const colorPixel = document.querySelector('.color.selected');
  const propertyColorPixel = getComputedStyle(colorPixel);
  const bgColor = propertyColorPixel.getPropertyValue('background-color');
  e.target.style.backgroundColor = bgColor;
}

createPixelBoard(tamanhoTabelaPixels, tamanhoTabelaPixels);

// Criar cor aleatória

const randomColors = document.getElementById('random-colors');

randomColors.addEventListener('click', () => {
  const colorPalette = document.querySelectorAll('.color2');
  colorPalette.forEach((color) => {
    color.style.backgroundColor = getRandomColor();
  });
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

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
    const pixelSquare = recebeClick.target;
    const colorPixel = document.getElementsByClassName('selected')[0];
    const propertyColorPixel = window.getComputedStyle(colorPixel, null);
    const bgColor = propertyColorPixel.getPropertyValue('background-color');
    pixelSquare.style.backgroundColor = bgColor;
  });
});

// requisito 9

const clearBoard = document.getElementById('clear-board');

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
  let qntPixels = document.getElementById('board-size').value;
  qntPixels = parseInt(qntPixels);
  if (isNaN(qntPixels)) {
    alert('Valor incorreto, digite um número entre 5 e 50');
    tamanhoTabelaPixels = 5;
  } else {
    tamanhoTabelaPixels = qntPixels;
  }
  deletePreviousBoard();
  createPixelBoard(tamanhoTabelaPixels, tamanhoTabelaPixels);
});

console.log(tamanhoTabelaPixels);
