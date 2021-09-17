
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,50,50);
}

function draw() 
{
  background(40,30,67);
  if(keyDown(RIGHT_ARROW)) {
    box.x = box.x +3
  }
  if(keyDown(LEFT_ARROW)) {
    box.x = box.x -3
  }
  if(keyDown(UP_ARROW)) {
    box.y = box.y -3
  }
  if(keyDown(DOWN_ARROW)) {
    box.y = box.y +3
  }
  drawSprites();
}