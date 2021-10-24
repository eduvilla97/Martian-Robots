/**
 * Class for the grid that descrive Mars.
 * 
 * The grid mustn't be larger than 50x50 or smaller of 1x1.
 * 
 * The grid must record the orientation of a robot if it falls down.
 * 
 */
export class Grid {

  constructor(maxX, maxY) {
    // Check the bounds restriction and if it's violated max value is assigned
    if (maxY > 50 || maxY < 1) {
      this.height = 50;
    }
    else {
      this.height = maxY+1;
    }
    if (maxX > 50 || maxX < 1) {
      this.width = 50;
    } else {
      this.width = maxX+1;
    }
    this.grid = [];
    // Fill the grid with no orientation
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        if (j == 0) {
          this.grid[i] = []
        }
        this.grid[i][j] = "";
      }
    }
  }
}
