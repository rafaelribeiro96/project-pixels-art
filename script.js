//requisito 4 e 5
const tamanhoTabelaPixels = 5;
const lineNumbers = tamanhoTabelaPixels;
const columnsNumbers = tamanhoTabelaPixels;
const pixelsSquare = document.body.querySelector('#pixel-board');

function createPixelBoard(lineNumbersF, columnsNumbersF) {
  for (let index = 0; index < lineNumbersF; index += 1) {
    const pixelsLineDiv = document.createElement('div');
    pixelsLineDiv.className = 'pixelsLine'
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

createPixelBoard(lineNumbers, columnsNumbers);

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