var backgroundImg;
var iss, issImg, spaceCraft, spaceCraftImg1, spaceCraftImg2, spaceCraftImg3, spaceCraftImg4;
var hasDocked = false;

function preload(){

    backgroundImg = loadImage("Docking-undocking/spacebg.jpg");
    spaceCraftImg1 = loadImage("Docking-undocking/spacecraft1.png");
    spaceCraftImg2 = loadImage("Docking-undocking/spacecraft2.png");
    spaceCraftImg3 = loadImage("Docking-undocking/spacecraft3.png");
    spaceCraftImg4 = loadImage("Docking-undocking/spacecraft4.png");
    issImg = loadImage("Docking-undocking/iss.png");

}

function setup() {

  createCanvas(800,600);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage("iss", issImg);
  

  spaceCraft = createSprite(width/2, height/2+100);
  spaceCraft.addImage("spaceCraft1", spaceCraftImg1);
  spaceCraft.addImage("spaceCraft2", spaceCraftImg2);
  spaceCraft.addImage("spaceCraft3", spaceCraftImg3);
  spaceCraft.addImage("spaceCraft4", spaceCraftImg4);
  spaceCraft.scale = 0.2;
 

}

function draw() {

  background(backgroundImg);  

  if(!hasDocked){

    spaceCraft.x = Math.round(random(width/2-5, width/2+5));

    if(keyDown("left")){
      spaceCraft.changeImage("spaceCraft3");
      spaceCraft.x = spaceCraft.x-10;
    }
    if(keyDown("right")){
      spaceCraft.changeImage("spaceCraft4");
      spaceCraft.x = spaceCraft.x+10;
    }
    if(keyDown("down")){
      spaceCraft.changeImage("spaceCraft2");
    }
    if(keyDown("up")){
      spaceCraft.y = spaceCraft.y - 10;
    }

    if(spaceCraft.y <= (iss.y+70) && spaceCraft.x <= (iss.x-10)){
      hasDocked = true;
      textSize(25);
      fill("white")
      text("Docking Successful!", 200, 300);
    }

  }

  drawSprites();

}