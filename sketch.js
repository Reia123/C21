var canvas;
var music;
var block1, block2, block3, block4;
var ball, edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1000,600);

    //create 4 different surfaces
    block1 = createSprite(0, 580, 249, 7);
    block1.shapeColor = "green";
    block2 = createSprite(250, 580, 249, 7);
    block2.shapeColor = "red";
    block3 = createSprite(500, 580, 249, 7);
    block3.shapeColor = "blue";
    block4 = createSprite(750, 580, 249, 7);
    block4.shapeColor = "yellow";



    //create box sprite and give velocity
    ball = createSprite(random(20, 750), 100, 40, 40);
    ball.shapeColour = "lightblue";
    ball.velocityX = 6;
    ball.velocityY = 6;

}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites();
    ball.bounceOff(edges);
    //create edgeSprite
if(ball.isTouching(block1)&& ball.bounceOff (block1)){
    ball.shapeColor = "green";
    music.play();
}
if(ball.isTouching(block2)&& ball.bounceOff (block2)){
    ball.shapeColor = "red";
    music.play();
}
if(ball.isTouching(block3)&& ball.bounceOff (block3)){
    ball.shapeColor = "blue";
    music.play();
}
if(ball.isTouching(block4)&& ball.bounceOff (block4)){
    ball.shapeColor = "yellow";
    music.play();
}


    //add condition to check if box touching surface and make it box

    drawSprites();
}
