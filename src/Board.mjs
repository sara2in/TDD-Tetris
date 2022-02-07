export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.matrixTable = []
    this.isStart = true;
    this.hasBlock = false;
  }
  toString() {  
    if (!!this.isStart) {
      this.matrixTable.push([ '...' ])
      this.matrixTable.push([ '...' ])
      this.matrixTable.push([ '...' ])
    }

    return this.matrixTable.flat().join('\n') + `\n`
  }

  drop (block) {
    this.isStart =false;
    this.matrixTable = [];
    if (!!this.hasBlock) {
      throw `already falling`
    }
    this.matrixTable.push([ '.X.' ])
    this.matrixTable.push([ '...' ])
    this.matrixTable.push([ '...' ])
    this.hasBlock = true;
  }

  tick() {
    this.matrixTable = [];
    this.matrixTable.push([ '...' ])
    this.matrixTable.push([ '.X.' ])
    this.matrixTable.push([ '...' ])
  }
}
