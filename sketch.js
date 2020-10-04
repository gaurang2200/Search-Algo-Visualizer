let choice = 0;
let counter = 1;
let pause = 80;

let A = [];
let findNum = 49;

function setup() { 
  var canvas = createCanvas(500, 500);
  canvas.parent("canvasId");
}

function draw() {
  resizeCanvas(7*windowWidth/10, 8*windowHeight/10);
  background(60);
  
  switch(choice){
    case 1: {
      if(counter <= 1)  LSSetup();
      LSAnimation();
      break;
    }
    case 2: {
      if(counter <= 1)  BSSetup();
      BSAnimation();
      break;
    }
    case 3: {
      if(counter <= 1)  BSTSetup();
      BSTAnimation();
      break;
    }
    case 4: {
      if(counter <= 1)  DFSSetup();
      DFSAnimation();
      break;
    }
    case 5: {
      if(counter <= 1)  HMSetup();
      HMAnimation();
      break;
    }
  }
}
