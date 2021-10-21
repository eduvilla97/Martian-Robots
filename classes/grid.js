/**
 * Class for the grid that descrive Mars.
 * 
 * The grid mustn't larger than 50x50 or smaller of 1x1.
 * 
 * The grid must record the orientation of a robot if it falls down.
 * 
 */
export class Grid {

  constructor(height, width) {
    // Check the bounds restriction and if it's violated max value is assigned
    if (height > 50 || height < 1) {
      this.height = 50;
    }
    else {
      this.height = height;
    }
    if (width > 50 || width < 1) {
      this.width = 50;
    } else {
      this.width = width;
    }
    this.grid = [];
    // Fill the grid with no orientation
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        if( j == 0 ){
          this.grid[i] = []
        }
        this.grid[i][j] = 'X';
      }
    }
  }
}
