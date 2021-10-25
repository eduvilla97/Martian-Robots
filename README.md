# Martian Robots

## Description

Martian Robots is a Node.js program that helps us to model the Mars' surface and tell us how robots will
be able to move according to instructions given by operators from Earth.

The main target of this program is to determine sequence of robot positions in the grid and report the final
position of each robot

First of all we assume that Mars can be modelled by a rectangular and bounded grid and if a robot moves off
a edge of the grid this is lost forever. Moreover if a robot is lost this one leave a "scent" that helps other
robots to not fall at the same grid point. Then, if a robot will do the same action that make lost a robot previously,
 the robot will ignore this action and continue with its instructions.

For robots description, robot position consist of Cartesian coordinates and an orientation (north, west, east or south), and the
actions it can do are:

- Turn 90 degrees to the left.
- Turn 90 degrees to the right.
- Moves forward one grid point in the current orientation direction maintaining the same orientation.

This actions are represented by a string of letters "L", "R" and "F" (turn left, turn right and move forward) given
in the input next to the initial position of the robot. Besides, the actions' string cannot be larger than 99 instructions.

## The input

So the input we need for our program are:

- The size of the grid that describes Mars' surface.
- The starting positions of the robots in the grid.
- The actions that each robot will do.

**Sample input:**

5 3 (The upper-right coordinates of the grid)  
1 1 E (Robot 1 position)  
RFRFRFRF (Robot 1 actions)  
3 2 N (Robot 2 position)  
FRRFLLFFRRFLL (Robot 2 actions)  
0 3 W (Robot 3 position)  
LLFFFRFLFL (Robot 3 actions)

## The output

The output this program will show indicate the final grid position and orientation of each robot given in the input.
Also, if a robot falls off the grid the word "LOST" is printed after the previous position and orientation.

**Sample output:**

1 1 E (Final position of robot 1)  
3 3 N LOST (Position before robot 2's fall and word LOST)  
4 2 N (Final position of robot 3)  

## Instructions for running Mars Robots

First say that I use Docker to wrap and deploy this program for easy use. So the only thing you need in your computer 
to run this program is Docker. I leave [here](https://docs.docker.com/get-docker/) the official documentation for your help if you need it.

1. Then when you have installed Docker, the first thing you need to do is download the program image. To do this, you need
to start a PowerShell terminal and type:  
docker pull eduvilla97/martian-robots

![image](https://user-images.githubusercontent.com/32673341/138676835-c043231f-9778-4372-ae64-6313b5c68cf5.png)


2. To check if you download the image you should type in your terminal:  
docker images

![image](https://user-images.githubusercontent.com/32673341/138676734-8c337b4c-372c-481f-b812-a2f9ae6f3081.png)

3. Then, we will run and get into a container of this image for using Martian Robots. For this we use the command:  
docker run -it eduvilla97/martian-robots /bin/bash

![image](https://user-images.githubusercontent.com/32673341/138677454-80df56bf-5262-4975-afb8-8888206b1c7c.png)


4. Now we are in the container and we can use the program, for this use:  
node main.js

![image](https://user-images.githubusercontent.com/32673341/138677661-3f441992-fbee-4919-814a-fbc4a787a20b.png)

5. Now just follow the instructions given and write the input for the program.

![image](https://user-images.githubusercontent.com/32673341/138677868-592a9c58-59d1-4522-876b-97d2955ca0c3.png)

6. Now, if you want to exit the container type:  
exit

And now you are out of the container and this one is stopped.

## Testing

I also wrote some unit test following the TDD mindset, these ones are in the folder "tests".
You can also run them following the nexts steps:

1. Follow the steps 1-3 (included) of running instructions.

2. Move to the tests' folder using:  
cd tests

![image](https://user-images.githubusercontent.com/32673341/138679565-f705fc1d-59ba-4294-8a26-b1fc653d756a.png)

3. run the test using:  
node grid.test.js (or)  
node robot.test.js

![image](https://user-images.githubusercontent.com/32673341/138679768-6ed91b04-8cc2-4651-8319-d3bdd3b73e96.png)

If there is no message in the terminal that match the format of "Assertion failed: Problems in test...", it means
that tests were successfully passed.

Thank you for your attention, and I hope you'll enjoy the program.

