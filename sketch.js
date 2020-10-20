function setup() {
  createCanvas(800,400);
  block1 = createSprite(400, 200, 50, 50);
  block2 = createSprite(400,200,50,50);

}

function draw() {
  background(0); 
  
  block1.x=mouseX;
  block1.y=mouseY;

  if(block1.x-block2.x < block1.width/2 + block2.width/2 &&
    block2.x-block1.x < block2.width/2 + block1.width/2 &&
    block1.y-block2.y < block1.height/2 + block2.height/2 &&
    block2.y-block1.y < block2.height/2 + block1.height/2){
    block1.shapeColor="turquoise";
    block2.shapeColor="turquoise";
  } 
  else{
    block1.shapeColor="pink";
    block2.shapeColor="pink";
  }
  
  drawSprites();
}