const tamanhoTabelaPixels = 5;
const lineNumbers = tamanhoTabelaPixels;
const columnsNumbers = tamanhoTabelaPixels;
const pixelsSquare = document.body.querySelector('#pixel-board');
const pixelsSunSquare = pixelsSquare;


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
