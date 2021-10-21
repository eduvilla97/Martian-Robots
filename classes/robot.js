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
    constructor(xPos, yPos, orientation, grid){
        this.xPos = xPos;
        this.yPos = yPos;
        this.orientation = orientation;

    }

    turnLeft(){
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

    turnRigth(){
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

    moveForward(){}

    complexMove(moves){}

    #leaveScent(){}

}