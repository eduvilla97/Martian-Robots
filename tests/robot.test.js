import { Grid } from "../classes/grid.js";
import { Robot } from "../classes/robot.js";

/**
 * File to test the features a robot can do by itself
 */
function turnLeftTest() {
    let mars = new Grid(10, 10);
    let robot = new Robot(1, 1, 1, 'N', mars, "");

    robot.turnLeft();
    console.assert(
        robot.orientation == 'W',
        "Problems in test 1 of turnLeftTest, W was expected but received " + robot.orientation
    );

    robot.turnLeft();
    console.assert(
        robot.orientation == 'S',
        "Problems in test 2 of turnLeftTest, S was expected but received " + robot.orientation
    );

    robot.turnLeft();
    console.assert(
        robot.orientation == 'E',
        "Problems in test 3 of turnLeftTest, E was expected but received " + robot.orientation
    );

    robot.turnLeft();
    console.assert(
        robot.orientation == 'N',
        "Problems in test 4 of turnLeftTest, N was expected but received " + robot.orientation
    );
}

function turnRigthTest() {
    let mars = new Grid(10, 10);
    let robot = new Robot(1, 1, 1, 'N', mars, "");

    robot.turnRigth();
    console.assert(
        robot.orientation == 'E',
        "Problems in test 1 of turnRigthTest, E was expected but received " + robot.orientation
    );

    robot.turnRigth();
    console.assert(
        robot.orientation == 'S',
        "Problems in test 2 of turnRigthTest, S was expected but received " + robot.orientation
    );

    robot.turnRigth();
    console.assert(
        robot.orientation == 'W',
        "Problems in test 3 of turnRigthTest, W was expected but received " + robot.orientation
    );

    robot.turnRigth();
    console.assert(
        robot.orientation == 'N',
        "Problems in test 4 of turnRigthTest, N was expected but received " + robot.orientation
    );
}

function goForwardTest() {
    let mars = new Grid(10, 10);
    let robot = new Robot(1, 1, 1, 'N', mars, "");
    robot.moveForward();
    console.assert(
        robot.xPos == 1 && robot.yPos == 2,
        "Problems in test 1 of goForwardTest, robot at position (1, 2) was expected but received robot at position: (" + robot.xPos + ", " + robot.yPos + ")."
    )
    robot.turnRigth();
    robot.moveForward();
    console.assert(
        robot.xPos == 2 && robot.yPos == 2,
        "Problems in test 2 of goForwardTest, robot at position (2, 2) was expected but received robot at position: (" + robot.xPos + ", " + robot.yPos + ")."
    )
}

function leaveScentIfDropsTest() {
    let mars = new Grid(5, 5);
    let robot1 = new Robot(1, 0, 0, 'W', mars, "");
    robot1.moveForward();//Robot falls in point (1,1) West Orientation
    console.assert(
        mars.grid[0][0] == 'W'
        , "Problems in test 1 of leaveScentIfDropsTest, W was expected but " + mars.grid[0][0] + " was received");

    let robot2 = new Robot(2, 0, 0, 'S', mars, "");
    robot2.moveForward();//Robot falls in point (1,1) South Orientation
    console.assert(
        mars.grid[0][0] == 'WS'
        , "Problems in test 2 of leaveScentIfDropsTest, WS was expected but " + mars.grid[0][0] + " was received");
}

function complexMovingTest() {
    let mars = new Grid(5, 3);
    let robot1 = new Robot(1, 1, 1, 'E', mars, "RFRFRFRF");
    let robot2 = new Robot(2, 0, 2, 'W', mars, "LLFFFRFLFL");
    robot1.complexMove();
    console.assert(
        robot1.xPos == 1 && robot1.yPos == 1 && robot1.orientation == 'E',
        "Problems in test 1 of complexMovingTest, robot1 at position (1, 1) E was expected but received robot at position: (" + robot1.xPos + ", " + robot1.yPos + ") " + robot1.orientation + "."
    )
    robot2.complexMove();
    console.assert(
        robot2.xPos == 4 && robot2.yPos == 1 && robot2.orientation == 'N',
        "Problems in test 1 of complexMovingTest, robot1 at position (1, 1) N was expected but received robot at position: (" + robot2.xPos + ", " + robot2.yPos + ") " + robot2.orientation + "."
    )
}


//RUNNING ZONE
turnLeftTest();
turnRigthTest();
goForwardTest();
leaveScentIfDropsTest();
complexMovingTest();