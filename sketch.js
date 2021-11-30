var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "#00FFFF";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "#EE7600";
    

    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "#EE0000";

    block4 = createSprite(725,580,200,30);
    block4.shapeColor = "#00EE00";

    

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 5
    ball.velocityY = 8

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    ball.bounceOff(block1);
    if(ball.isTouching(block1)){
       // ball.bounceOff(block1)
        music.play();
        ball.shapeColor = "#E0FFFF";
       
    }


    ball.bounceOff(block2);
    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "#EE7600";


        music.stop();
        
    }

    ball.bounceOff(block3);
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        music.play();
        ball.shapeColor = "#EE0000";
    }

    ball.bounceOff(block4);
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        music.play();
        ball.shapeColor = "#00EE00";
    }

    drawSprites();
}
