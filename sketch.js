var points=0,rand,badguy,bhea=5,bimg,symbol,gameState,chcange,yaay,rand2,change,ming,n1,n2,input,button,check;
function preload() {
  bimg=loadImage("bad guy.png");
  ming=loadImage("x.png");
}
function setup() {
  createCanvas(800,400);
  if(gameState===0){
  console.log(bhea);
  badguy=createSprite(700, 340, 50, 50);
  badguy.addImage(bimg);
  badguy.scale=2/3;
  symbol=createSprite(300, 340, 50, 50);
  symbol.addImage(ming);
  symbol.scale=1/3;
  rand=random(50);
  rand2=random(50);
  n1=rand
  n2=rand2
  input=createInput("answer");
  button=createButton('submit');
  input.position(300,370);
  button.position(300,400);
  }
}
function draw() {
  if(gameState===0){
  background(255,255,255);
  this.button.mousePressed(()=>{
    if(this.input===n1*n2){
      bhea=-1;
      points=+10;
      rand
      rand2
    } else{
      points=-10
    }
});
  textSize(50);
  text(Math.round(n1),230,355);
  text(Math.round(n2),350,355);
}
if(gameState===1){
  console.log("YOU WIN!");
  text("YOU WIN!",400,200);
}
  drawSprites();
}