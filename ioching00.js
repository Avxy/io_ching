var CountValue1;
var CountValue2;
var CountValue3;

let sides = 3;
let angle, px, py;

//mouse
let bx;
let by;
let boxSize = 155;
let overBox = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;
//mouse

//var a = [];
//a[0] = [  5,  10,  15];
//a[1] = [  2,   4,   6,  8];
//a[2] = [ 11,  12,  13, 14];
//a[3] = [500, 400, 300];

var c = [ 
           [ 222, 223],
           [ 232, 233],
           [ 322, 323],
           [ 332, 333]
         ];

var cc = [ 222, 223, 232, 233, 322, 323, 332, 333];

var ccc;

var cccc;

var ccccc;

var cccccc;

var ccccccc;

var cccccccc=[
[000,001,010],
[011,100,101],
[110,111,1000]  
];

var coin;

var rt=0;

let click = 0;

rDisc=0;

rCoin=0;

var result01=[0,0,0,0,0,0]; 
var result10=[0,0,0,0,0,0];
var result0011=0;
var result1100=0;
var result1010=0;
var text01;
var text10;


//font
let inconsolata;
function preload() {
  inconsolata = loadFont('AGENCYB.TTF');
}
  

var mx = 
    {
    1:[0,0,1],
    2:[0,1,1],
    3:[0,1,1]
    };
   
var images = 001; 

/////////////////////////////////


let pE = 0;
let pM = 34;
let wS = 34;
let hS = 21;

let e1=255;
let e2=255;
let e3=255;
let e4=255;
let e5=255;
let e6=255;

let i1=255;
let i2=255;
let i3=255;
let i4=255;
let i5=255;
let i6=255;

let coinCountValue1=255;
let coinCountValue2=255;
let coinCountValue3=255;

var io01=0,io02=0,io03=0,io04=0,io05=0,io06=0,io07=0,io08=0,io09=0,io10=0,io11=0,io12=0;

let angInt=1;
let angExt=1;

timer = 8;
timerTT=180;


let eFire=360;
let eEarth=315;
let eLake=270;
let eSky=225;
let eWater=180;
let eMount=135;
let eThund=90;
let eWind=45; 

let iSky=360;
let iWind=315;
let iWater=270;
let iMount=225;
let iEarth=180;
let iThund=135;
let iFire=90;
let iLake=45;

mIO = [
  [45, 360,315],
  [90,  0, 270],
  [135,180,225],
]

mOI = [
  [315,90,180],
  [135, 0 ,45],
  [225,270,360],
]

mmIO = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 6],
]

mmSun = [
  [6,1,8],
  [7,5,3],
  [2,9,4],
]

mmMoon = [
  [7,2, 9],
  [8, 6,4],
  [3,10,5],
]

mmm = [
[iWood, iFire, iEarth],
[iWood,iEarth,iMetal],
[iEarth,iWater,iMetal]
]

let ss00=0;     
let ss01=0;   
let ss10=0;     
let ss11=0; 


var ii;
//var i;
//Perceptron p;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    setAttributes('antialias', true);
    
      img1 = loadImage('https://raw.githubusercontent.com/Avxy/ioching_p5/gh-pages/images/ioching1001.png');
    
      img2 = loadImage('https://raw.githubusercontent.com/Avxy/ioching_p5/gh-pages/images/yinYang.png');
  
        img3 = loadImage('https://raw.githubusercontent.com/Avxy/ioching_p5/gh-pages/images/ioching0001.png');
  
        img4 = loadImage('https://raw.githubusercontent.com/Avxy/ioching_p5/gh-pages/images/ioching0011.png');
  
          img5 = loadImage('https://raw.githubusercontent.com/Avxy/ioching_p5/gh-pages/images/ioching0111.png');
      
    //mouse
  bx = width / 2.0;
  by = height / 2.0;
  rectMode(RADIUS);
  strokeWeight(4);
  //mouse
 
  
 //font 
  textFont(inconsolata);
  textSize(width / 3);
  textAlign(CENTER, CENTER);
  
  
/*  
  p=new Perceptron();
  var[] inputs = {-1,0,1};
  let guess=p.guess(inputs);
//  println(guess);
 */ 
  
  
  
//  sPerceptron();
  

  }//setup//////////////

function draw()
{
if(click==6){timeT();} 

  
mouseBox();
  
  
newPage();  

timeTT(); 

  
console.log(timer);
 //ccPerceptron(); 
//dPerceptron();   
}//draw



function mouseBox()
{
//mouse
  push();
  translate(-width*0.5, height*-0.5);
    // Test if the cursor is over the box
  if (
    mouseX > bx - boxSize &&
    mouseX < bx + boxSize &&
    mouseY > by - boxSize &&
    mouseY < by + boxSize
  ) {
    overBox = true;
    if (!locked) {
      stroke(255);
      //fill(244, 122, 158);
      noFill();
    }
  } else {
    stroke(21, 89, 144);
    //fill(244, 122, 158);
    noFill();
    overBox = false;
  }

  // Draw the box
  circle(bx, by, boxSize);
  pop();
  //mouse
}

//click/////////////////////////////////////////////

function mousePressed() {
  if (overBox) {
    locked = true;
    
console.log(click);
//console.log(angExt);
//console.log(hexagrams[0][result0011],0,0);
    
    
    matrix6789();
 //   angIO();
    timerTT=135;
    
    fill(255, 255, 255);
  } else {
    locked = false;
  }
  xOffset = mouseX - bx;
  yOffset = mouseY - by;
}
//click//////////////////////////////////////////


function mouseDragged() {
  if (locked) {
    bx = mouseX - xOffset;
    by = mouseY - yOffset;
  }
}

function mouseReleased() {
  locked = false;
}
//mouseLoad




