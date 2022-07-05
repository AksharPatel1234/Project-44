var p1Group,p2Group;
var edges;
var p1,p2;
var bird;
var GameState = 1;
var score = 0;
touching = true;

function setup(){
  createCanvas(500,500)

   p1Group = createGroup()
   p2Group = createGroup()
   p3Group = createGroup()

  bird = createSprite(100,250,20,20);

  edges = createEdgeSprites()
  leftEdge = createEdgeSprites()
  rightEdge = createEdgeSprites()
  
}

function createPlatforms(){
  if(frameCount%70 == 0){
    p1 = createSprite(500,random(400,500),20,random(300,200))
    p1.velocityX = -3
    p1Group.add(p1)
    p2 = createSprite(500,random(100,0),20,random(200,300))
    p2.velocityX = -3
    p2Group.add(p2)

    p3 = createSprite(500,random(100,0),1,random(500,1000))
    p3.velocityX = -3
    p3.visible = 0
    p3Group.add(p3)


  }
  
}







function draw(){
  background(40)

text("score:"+score,150,10)

  if(GameState == 1){
    createPlatforms();

   if(bird.isTouching(p3Group) && touching){
    touching = false;
    score = score + 1/4
 
    
   }
   else if(!touching){
    touching = true;
   }

    if(bird.collide(p1Group) || bird.collide(p2Group) || bird.collide(edges) ){
      GameState = 0;
      }
     

  }
  if(GameState == 0){
    text("GAME OVER",250,250)
    p1Group.setVelocityXEach(0);
    p2Group.setVelocityXEach(0);
    bird.velocityY = 0;
    bird.velocityX = 0;
  }
 
   


 
 

if(keyDown("UP_ARROW")){
  bird.velocityY = -5
}

bird.velocityY = bird.velocityY + 0.3






drawSprites();


}