var fixedRect, movingRect;
var square, squareTwo;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 // fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  // movingRect.debug = true;
  square = createSprite(400,100,50,80);
  square.shapeColor = "green";
  squareTwo = createSprite(400,300,30,70);
  squareTwo.shapeColor = "green";

  square.velocityY = -5;
  squareTwo.velocityY = 5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

//  if (collision(movingRect,square)) {
//    movingRect.shapeColor = "red";
//     square.shapeColor = "red";
//   } else {
//     movingRect.shapeColor = "blue";
//    square.shapeColor = "blue";
//   }

  bounce(square,squareTwo);
  drawSprites();
}


