var fixedrect, movingrect;

var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);

  fixedrect = createSprite(600, 400, 50, 80);
  fixedrect.shapeColor = "green";
  fixedrect.debug = true;
 
  movingrect = createSprite(400, 200, 80, 30);
  movingrect.shapeColor = "green";
  movingrect.debug = true;

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";

  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";
  
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  

  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  console.log(movingrect.x - fixedrect.x);

  
if(isTouching(movingrect, gameObject1)){
  movingrect.shapeColor = "red";
  gameObject1.shapeColor = "red";
}
else{
  movingrect.shapeColor = "green";
  gameObject1.shapeColor = "green";
}


  drawSprites();
}
