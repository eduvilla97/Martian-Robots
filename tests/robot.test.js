import { Grid } from "../classes/grid";
import { Robot } from "../classes/robot";

/**
 * File to test the features a robot can do by itself
 */
function turnLeftTest() {
    let mars = new Grid(10,10);
    let robot = new Robot(1,1,'N',mars);

    robot.turnLeft();
    console.assert(
        robot.orientation == 'W',
        "Problems in test 1 of turnLeftTest, W was expected but received "+ robot.orientation
    );
    
    robot.turnLeft();
    console.assert(
        robot.orientation == 'S',
        "Problems in test 2 of turnLeftTest, S was expected but received "+ robot.orientation
    );
    
    robot.turnLeft();
    console.assert(
        robot.orientation == 'E',
        "Problems in test 3 of turnLeftTest, E was expected but received "+ robot.orientation
    );

    robot.turnLeft();
    console.assert(
        robot.orientation == 'N',
        "Problems in test 4 of turnLeftTest, N was expected but received "+ robot.orientation
    );
}

function turnRigthTest() {
    let mars = new Grid(10,10);
    let robot = new Robot(1,1,'N',mars);

    robot.turnRigth();
    console.assert(
        robot.orientation == 'E',
        "Problems in test 1 of turnRigthTest, E was expected but received "+ robot.orientation
    );
    
    robot.turnRigth();
    console.assert(
        robot.orientation == 'S',
        "Problems in test 2 of turnRigthTest, S was expected but received "+ robot.orientation
    );
    
    robot.turnRigth();
    console.assert(
        robot.orientation == 'W',
        "Problems in test 3 of turnRigthTest, W was expected but received "+ robot.orientation
    );

    robot.turnRigth();
    console.assert(
        robot.orientation == 'N',
        "Problems in test 4 of turnRigthTest, N was expected but received "+ robot.orientation
    );
}

function goForwardTest() {}

function leaveScentIfDropsTest() {
    let mars = new Grid(5,5);
    let robot1 = new Robot(1,1,'W',mars);
    robot1.moveForward();//Robot falls in point (1,1) West Orientation
    console.assert(
        mars.grid[1][1] == 'W'
        ,"Problems in test 1 of robotsNeverDropAtTheSamePointTest, W was expected but "+ mars.grid[1][1]+" was received");
    
    let robot2 = new Robot(1,1,'S',mars);
    robot2.moveForward();//Robot falls in point (1,1) South Orientation
    console.assert(
        mars.grid[1][1] == 'WS'
        ,"Problems in test 2 of robotsNeverDropAtTheSamePointTest, WS was expected but "+ mars.grid[1][1]+" was received");
}

function complexMovingTest() {}


//RUNNING ZONE
turnLeftTest();
turnRigthTest();
goForwardTest();
leaveScentIfDropsTest();
complexMovingTest();