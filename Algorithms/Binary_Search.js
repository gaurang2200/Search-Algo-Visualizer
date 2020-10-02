let side;
let offset;
let left, right;
let index;

function BSSetup() {
  A.sort(function(a, b){return a - b});
  if(A.length < 9)
    side = 50;
  else  side = int(width/(A.length+1));
  
  left = 0; right = A.length-1;
  index = int((left + right)/2);
}

function BSAnimation() {
  HeadingBS();
  if(left > right){
    printMessageBS("Element " + str(findNum) + " is not present in this Array")
  } else if(A[index] != findNum){
    AnimationBS()
    printMessageBS("Element " + str(A[index]) + " is not equal to " + str(findNum));
  } else if(A[index] == findNum) {
    AnimationBS();
    printMessageBS("Element is at Index " + str(index+1));
  } 
  DisplayArrayBS();
  NumberToFindBS();
  counter++;
}

function DisplayArrayBS(){
  offset = Math.abs(width - A.length*side)/2;
  strokeWeight(3);
  textSize(side/2);
  textAlign(CENTER);
  
  for(let i=0; i<A.length; i++){
    noFill();
    square((i*side)+offset, (height - side)/2, side);
    fill(0, 102, 153, 255);
    text(str(A[i]), (i*side)+offset+side/2, height/2 + 5);
  }
}

function HeadingBS(){
  let head = "Binary Search";
  textFont("Consolas");
  textAlign(CENTER);
  textSize(height/10);
  fill(28, 183, 100);
  text(head, width/2, height/4);
}

function TimeComplexityBS(){
  let t = "Time Complexity: O(log(n))";
  fill(210, 153, 10);
  text(t, width/2, 2*height/3)
}

function NumberToFindBS(){
  TimeComplexityBS();
  textSize(width/23);
  let t = "Number To Find: " + str(findNum);
  fill(210, 13, 10);
  text(t, width/2, 3*height/4)
}

function AnimationBS(){
  if(counter%pause == 0){
    index = int((left + right)/2);
    if(A[index] > findNum)
      right = index-1;
    else if(A[index] < findNum)
      left = index+1;
  }
  square((index*side)+offset, (height - side)/2, side);
}

function printMessageBS(message){
  fill(10, 130, 250);
  textSize(height/25);
  text(message, width/2, 4*height/10)
}