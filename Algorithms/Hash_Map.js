let H = [];
let xIndex, yIndex;
let sideHM;

function HMSetup(){
  H = new Array(10);
  xIndex = 0; yIndex = 0;
  temp = true;
  sideHM = 32;
  offset = Math.abs(width - 10*sideHM)/2;
  
  for(let i=0; i<10; i++)
    H[i] = new Array(10);
  
  for(let i=0; i<A.length; i++){
    if(A[i] < 100)
      H[floor(A[i]/10)][A[i]%10] = 1;
  }
  //console.log(H);
}

function HMAnimation(){
  Heading("Hash Map");
  TimeComplexityHM();
  display2DArray();
  AnimationHM(xIndex, yIndex);
  
  if(H[xIndex][yIndex] != 1 && counter%pause == 0){
    if(!temp && H[xIndex][yIndex] != 1){
      yIndex = findNum%10;
    }
    if(temp && H[xIndex][yIndex] != 1){
      xIndex = floor((findNum%100)/10);
      temp = false;
    }
  }
  counter++;
}

function display2DArray(){
  for(let i=0; i<H.length; i++){
    fill(233, 30, 60);
    textSize(15);
    text(str(i), (i*sideHM)+offset+sideHM/2, 2.2*height/10 - 18);
    text(str(i), offset+sideHM/2-6*sideHM/5, (i*sideHM)+1.1*height/5 + 12);
    
    for(let j=0; j<H[i].length; j++){
      noFill();
      if(H[i][j] == undefined)
        H[i][j] = 0;
      square((i*sideHM)+offset, (j*sideHM)+(2.2*(height - sideHM)/10), sideHM);
      fill(0, 102, 153);
      textSize(15);
      text(str(H[i][j]), (i*sideHM)+offset+sideHM/2, (j*sideHM)+2.2*height/10 + 12);
      //console.log((i*sideHM)+offset, j*((height - sideHM)/2));
    }
  }
}

function TimeComplexityHM(){
  let head = "Time Complexity: O(1)";
  textFont("Consolas");
  textAlign(CENTER);
  textSize(height/25);
  fill(13, 130, 180);
  text(head, width/2, height/8);
  
  fill(13, 230, 80);
  text("Number to Find: " + str(findNum), width/2, 9.2*height/10);
}

function printMessageHM(message){
  fill(230, 180, 10);
  textSize(height/30);
  text(message, width/2, height - 20)
}

function AnimationHM(x, y){
  if(H[x][y] != 1){
    if(yIndex != findNum%10)
      printMessageHM("Element " + findNum + " != " + (10*x + y));
    else  
      printMessageHM("Element is not present in this Array");
  }
  else printMessageHM("Element " + findNum + " is present in this Array")
  fill(0);
  square((x*sideHM)+offset, (y*sideHM)+(2.2*(height - sideHM)/10), sideHM);
  fill(198, 33, 110);
  text(str(H[x][y]), (x*sideHM)+offset+sideHM/2, (y*sideHM)+2.2*height/10 + 12);
}