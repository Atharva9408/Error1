const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var manish, atharva;

function preload(){
  bg=loadImage("Images/bg.jpg")
}

function setup() {
  createCanvas(1600,755);
  //engine = Engine.create();
  //world = engine.world;

}

function draw() {
  background(bg); 

  drawSprites();
}