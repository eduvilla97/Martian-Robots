/**
 * Class that define how a robot behaves.
 * 
 * A robot has Cartesian coordinates, an orientation and a reference of the grid
 * that it's moving on.
 * 
 * Also a robot can go forward, turn left and turn rigth changing his orientation.
 * 
 * A robot moves given a serie of actions.
 * 
 * A robot can fall off the grid and must leave a scent at the point he fells for
 * help other robots not to fall.
 * 
 * If a robot falls, its position will be (-1,-1), will stop its movement and
 * print the previous position next to the word LOST
 * 
 */
export class Robot {
    constructor(id, xPos, yPos, orientation, grid, moves) {
        this.id = id;
        this.isLost = false;
        this.orientation = orientation;
        this.grid = grid;
        this.moves = moves;
        //If the start position is out the grid's boundaries we limitate it
        if (xPos > this.grid.width - 1) {
            xPos = this.grid.width - 1;
        }
        if (xPos < 0) {
            xPos = 0;
        }
        if (yPos > this.grid.height - 1) {
            yPos = this.grid.height - 1;
        }
        if (yPos < 0) {
            yPos = 0;
        }
        this.xPos = xPos;
        this.yPos = yPos;
    }

    turnLeft() {
        switch (this.orientation) {
            case "N":
                this.orientation = "W";
                break;
            case "E":
                this.orientation = "N";
                break;
            case "S":
                this.orientation = "E";
                break;
            case "W":
                this.orientation = "S";
                break;
        }
    }

    turnRigth() {
        switch (this.orientation) {
            case "N":
                this.orientation = "E";
                break;
            case "E":
                this.orientation = "S";
                break;
            case "S":
                this.orientation = "W";
                break;
            case "W":
                this.orientation = "N";
                break;
        }
    }

    moveForward() {
        let previousPosition = [this.xPos, this.yPos];
        //Checks if any robot fell at the current position and orientation and moves if it cans
        switch (this.orientation) {
            case "N":
                if (!(this.grid.grid[this.xPos][this.yPos]).includes('N')) {
                    this.yPos++;
                    this.#checkIfLost(previousPosition);
                }
                break;
            case "E":
                if (!(this.grid.grid[this.xPos][this.yPos]).includes('E')) {
                    this.xPos++;
                    this.#checkIfLost(previousPosition);
                }
                break;
            case "S":
                if (!(this.grid.grid[this.xPos][this.yPos]).includes('S')) {
                    this.yPos--;
                    this.#checkIfLost(previousPosition);
                }
                break;
            case "W":
                if (!(this.grid.grid[this.xPos][this.yPos]).includes('W')) {
                    this.xPos--;
                    this.#checkIfLost(previousPosition);
                }
                break;
        }
    }

    #checkIfLost(previousPosition) {
        if (this.xPos >= this.grid.width || this.xPos < 0 || this.yPos >= this.grid.height || this.yPos < 0) {
            this.grid.grid[previousPosition[0]][previousPosition[1]] += this.orientation;
            console.log(previousPosition[0] + " " + previousPosition[1] + " " + this.orientation + " LOST");
            this.isLost = true;
            this.xPos = -1;
            this.yPos = -1;
        }
    }

    complexMove() {
        for (let index = 0; index < this.moves.length; index++) {
            let action = this.moves.charAt(index);
            switch (action) {
                case 'F':
                    this.moveForward();
                    break;
                case 'R':
                    this.turnRigth();
                    break;
                case 'L':
                    this.turnLeft();
                    break;
            }
            //If the robot is lost stops the movement
            if (this.isLost) {
                return;
            }
        };
        if (!this.isLost) {
            console.log(this.xPos + " " + this.yPos + " " + this.orientation);
        }
    }

}