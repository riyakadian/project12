var garden,rabbit,apple,orange,red;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   drawSprites();
   
  
  
   var Orange = Math.round(random(1,3));

    var Apple = Math.round(random(1,3));
    
    var Red = Math.round(random(1,3));


     if (frameCount % 80 === 0) {
       if (Orange === 1) {
         createApples();
       } else if (Apple === 2) {
        createOrange();
       }else {
         createRed();
       }
      }



}

function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
  
}

function createOrange() {
orange = createSprite(random(50, 350),40, 10, 10);
orange.addImage(orangeImg);
orange.scale=0.08;
orange.velocityY = 3;
orange.lifetime = 150;
}

function createRed() {
red = createSprite(random(50, 350),40, 10, 10);
red.addImage(redImg);
red.scale=0.06;
  red.velocityY = 3;
  red.lifetime = 150;
}
