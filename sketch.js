var canvas;
var music;
var board1, board2, board3, board4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
     createCanvas(700,600);

     ball = createSprite(350,100,30,30);
    ball.shapeColor = "white" ;
    ball.velocityX = 6;
    ball.velocityY = 10;

    board1 = createSprite(610,600,150,50);
    board1.shapeColor = "green";

    board2 = createSprite(430,600,150,50);
    board2.shapeColor = "purple" ;

    board3 = createSprite(250,600,150,50);
    board3.shapeColor = "orange" ;

    board4 = createSprite(70,600,150,50);
    board4.shapeColor = "blue" ;

}

function draw() {
    background(169,169,169);

    if(ball.isTouching(board1)){
        ball.shapeColor = "green"; 
    }

    if(ball.isTouching(board2)){
        ball.shapeColor = "purple"; 
    }

    if(ball.isTouching(board3)){
        ball.shapeColor = "orange"; 
    }

    if(ball.isTouching(board4)){
        ball.shapeColor = "blue";
        music.play(); 
    }

    ball.bounceOff(board1);
    ball.bounceOff(board2);
    ball.bounceOff(board3);
    ball.bounceOff(board4);

    edges= createEdgeSprites();
    ball.bounceOff(edges);

      drawSprites();
}
