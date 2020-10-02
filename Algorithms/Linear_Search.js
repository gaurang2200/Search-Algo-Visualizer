function LSSetup(){
  index = 0;
  if(A.length < 9)
    sideLS = 50;
  else  sideLS = int(width/(A.length+1));
  offset = Math.abs(width - A.length*sideLS)/2;
}

function LSAnimation(){
  HeadingLS();
  if(index < A.length && A[index] != findNum){
    AnimationLS()
    printMessageLS("Element " + str(A[index]) + " is not equal to " + str(findNum));
    if (counter%50 == 0)
      index++;
  } else if(A[index] == findNum) {
    AnimationLS();
    printMessageLS("Element is at Index " + str(index+1));
  } else if(index == A.length){
    printMessageLS("Element " + str(findNum) + " is not present in this Array")
  }
  DisplayArray();
  NumberToFindLS();
  counter++;
}

function DisplayArray(){
  strokeWeight(3);
  textSize(sideLS/2);
  textAlign(CENTER);
  
  for(let i=0; i<A.length; i++){
    noFill();
    square((i*sideLS)+offset, (height - sideLS)/2, sideLS);
    fill(0, 102, 153);
    text(str(A[i]), (i*sideLS)+offset+sideLS/2, height/2 + 5);
  }
}

function HeadingLS(){
  let head = "Linear Search";
  textFont("Consolas");
  textAlign(CENTER);
  textSize(height/10);
  fill(28, 183, 100);
  text(head, width/2, height/4);
}

function TimeComplexityLS(){
  let t = "Time Complexity: O(n)";
  textSize(25);
  fill(210, 153, 10);
  text(t, width/2, 2*height/3)
}

function NumberToFindLS(){
  TimeComplexityLS()
  textSize(width/23);
  let t = "Number To Find: " + str(findNum);
  fill(210, 13, 10);
  text(t, width/2, 3*height/4)
}

function AnimationLS(){
  square((index*sideLS)+offset, (height - sideLS)/2, sideLS);
}

function printMessageLS(message){
  fill(100, 130, 210);
  textSize(height/25);
  text(message, width/2, 4*height/10)
}