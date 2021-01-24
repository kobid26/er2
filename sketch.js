var warr
var zombie,monster,stickman,terrorist,madman;
var fightingPotion;
var landStrips;
var healPotion;
var blindEnemiesPotion;

// preload function 
function preload(){
blind_Opp = loadImage("pics/blindEnemiesPotion.png");
stick_Man = loadImage("pics/dandaMan.png");
fight_Potion = loadImage("pics/fightingPotion.png");
health_Potion = loadImage("pics/healthPotion.png");
landing_Strip = loadImage("pics/landingStrip.png");
mad_Man = loadImage("pics/madMan.png");
monster = loadImage("pics/monster.png");
terrorist = loadImage("pics/terrorsit.png");
zombie_Man = loadImage("pics/zombieMan");
bg_img = loadImage("pics/background.png")
}
function setup(){
createCanvas(1200,800);



}
function draw(){
    background("bg_img");
    drawSprites();
}