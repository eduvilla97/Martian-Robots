import { Robot } from '../classes/robot.js';
import { Grid } from '../classes/grid.js';

/**
 * File to test the features of the grid that describes Mars
 */
function gridBoundsTest() {
    let mars;
    mars = new Grid(-3, 10);
    console.assert(
        (mars.height == 50 && mars.width == 11)
        , "Problems in test 1 of gridBoundsTest, 50 11 was expected but received " + mars.height + " " + mars.width);

    mars = new Grid(10, -3);
    console.assert(
        (mars.height == 11 && mars.width == 50)
        , "Problems in test 2 of gridBoundsTest, 11 50 was expected but received " + mars.height + " " + mars.width);

    mars = new Grid(-2, -3);
    console.assert(
        (mars.height == 50 && mars.width == 50)
        , "Problems in test 3 of gridBoundsTest, 50 50 was expected but received " + mars.height + " " + mars.width);

    mars = new Grid(1, 1);
    console.assert(
        (mars.height == 2 && mars.width == 2)
        , "Problems in test 4 of gridBoundsTest, 2 2 was expected but received " + mars.height + " " + mars.width);

    mars = new Grid(100, 100);
    console.assert(
        (mars.height == 50 && mars.width == 50)
        , "Problems in test 5 of gridBoundsTest, 50 50 was expected but received " + mars.height + " " + mars.width);
}

function robotsNeverFallAtTheSamePointAndOrientationTest() {
    let mars = new Grid(5, 5);
    let robot1 = new Robot(1, 0, 0, 'W', mars, "");
    robot1.moveForward();//Robot1 falls in point (1,1) West Orientation
    let robot2 = new Robot(2, 0, 0, 'W', mars, "");
    robot2.moveForward();//Robot2 tries to fall in point (1,1) West Orientation but he can't
    console.assert(
        (robot2.xPos == 0 && robot2.yPos == 0)
        && (robot1.xPos == -1 && robot1.yPos == -1)
        , "Problems in test 1 of robotsNeverDropAtTheSamePointTest, Robot1 at (-1, -1) and Robot2 at (0, 0) was expected but received Robot1 at (" + robot1.xPos + ", " + robot1.yPos + ") and Robot2 at (" + robot2.xPos + ", " + robot2.yPos + ")");
    //Now robot2 tries to fall in the same point but different orientation so it falls
    robot2.turnLeft();
    robot2.moveForward();
    console.assert(
        robot2.xPos == -1 && robot2.yPos == -1
        , "Problems in test 2 of robotsNeverDropAtTheSamePointTest, Robot2 at (-1, -1) was expected but received Robot2 at (" + robot2.xPos + ", " + robot2.yPos + ")"
    );
}


//RUNNING ZONE
gridBoundsTest();
robotsNeverFallAtTheSamePointAndOrientationTest();
