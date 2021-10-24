import { Grid } from "./classes/grid.js";
import { Robot } from "./classes/robot.js";

/**
 * Main file for the system of martian robots
 */
let input = [];
let marsSizeString;
let marsSize;
let mars;
//Print instructions
process.stdout.write("Write the input for the Martian Robots program.\n\
First of all, mars grid size: e.g. 5 5\n\
And then each robot, one line for position and orientation (N, W, E or S), and other line for actions (F, R and L) e.g. :\n\
1 1 E\n\
RFRFRFRLLRF\n\
When you finish with robots' input, press enter for start the program\n\
INPUT:\n")
//Getting the inputs
process.stdin.on('data', function (data) {
    //If input line is empty then start the program
    let d = (data.toString().trim());
    if (d.length == 0) {
        moveRobots();
        process.exit();
    }
    input.push(data.toString().trim());
});

function moveRobots() {
    //Parse and check the mars' size input and then create the grid
    marsSize = input[0].split(' ');
    if (marsSize.length != 2) {
        console.error("Error with the size of the grid, please try again");
        process.exit();
    }
    mars = new Grid(parseInt(marsSize[0]), parseInt(marsSize[1]));

    //Read the robots' input
    let robots = [];
    let numberOfRobots = 0;
    let movesFormat = /(RFL)*/
    let inputIndex = 1;
    while (inputIndex < input.length) {
        //Take the position of the robot from the input
        let robotPositionString;
        robotPositionString = input[inputIndex];
        //Take the moves the robot will try to do from the input
        let robotMovesString;
        robotMovesString = input[inputIndex + 1]
        //Parse the position and the moves
        let robotPosition;
        robotPosition = robotPositionString.split(' ');
        //If there is a problem with the input's format try again
        if (robotPosition.length != 3) {
            console.error("Error with robot " + numberOfRobots + 1 + " position, please try again.");
            process.exit();
        }
        //The max moves string length is 99, if there is a problem try again
        if (robotMovesString.length > 99) {
            console.error("Error with robot " + numberOfRobots + 1 + " moves, a robot can't process more than 99 actions, please try again.");
            process.exit();
        }
        //F, R and L are the only characters allowed in the moves' input
        if (!movesFormat.test(robotMovesString)) {
            console.error("Error with robot " + numberOfRobots + 1 + " moves, a robot can't process some characters you use, please try again.");
            process.exit();
        }
        let newRobot = new Robot(numberOfRobots + 1, parseInt(robotPosition[0]), parseInt(robotPosition[1]), robotPosition[2], mars, robotMovesString);
        robots.push(newRobot);
        numberOfRobots++;
        inputIndex += 2;
    }

    //Start moving robots
    robots.forEach(robot => {
        robot.complexMove();
    });
}
