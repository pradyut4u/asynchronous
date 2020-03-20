var ball;
var database,ballposition,position
function setup(){
    createCanvas(500,500);
    database=firebase.database()
    ballposition=database.ref('Ball/Position')
    ballposition.on("value",readpositon,showerror)
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}
function readpositon(data){
     position= data.val(); 
     ball.x= position.x;
      ball.y = position.y; 
}
function showerror(){
    console.log("ERROR")
}
function changePosition(x,y){
    database.ref('Ball/Position').set({
        'x' : position.x+x, 
        'y' : position.y+y
    })
}
