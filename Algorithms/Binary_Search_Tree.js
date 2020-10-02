let diameter, textS;
let x, y;
let head;
let temp;
let tempLevel = 1;
let t;

function BSTSetup(){
  head = new BST();
  t = "Nodes Visited: ";
  diameter = 30;
  textS = diameter*(0.6);
  for(let i=0; i<A.length; i++)
    head.Insert(A[i]);
  temp = head.root;
}

function BSTAnimation(){
  Heading("Binary Search Tree");
  TimeComplexityBST();
  makeTree(head.root);

  if(temp != null && temp.val == findNum){
    BSTSearchAnimation(temp.x, temp.y, temp.val);
    printMessageBST("Element " + findNum + " Found");
  }
  else if(temp != null && temp.val != findNum){
    printMessageBST("Element " + str(temp.val) + " != " + str(findNum) + " (Number to Find)");
    BSTSearchAnimation(temp.x, temp.y, temp.val);
  } 
  else if(temp == null){
    printMessageBST("Element " + findNum + " Not Found");
  }
  counter++;
}

function makeTree(temp){
  if(temp == null)
    return;
    line(temp.x, temp.y, temp.lineX, temp.lineY);
    createNode(temp.x, temp.y, temp.val);
    makeTree(temp.left);
    makeTree(temp.right);
}

function createNode(x, y, val){
  fill(126, 183, 90);
  strokeWeight(2);
  circle(x, y, diameter);
  fill(0);
  textSize(textS);
  textAlign(CENTER);
  text(str(val), x, y+(diameter/5));
}

function BSTSearchAnimation(x, y){
  if(temp.val != findNum && counter%pause == 0){
    NumberToFindBST();
    tempLevel++;
    if(findNum < temp.val)
      temp = temp.left;
    else if(findNum > temp.val)
      temp = temp.right;
  } 
  if(temp != null){
    strokeWeight(3);
    fill(0);
    textSize(textS);
    textAlign(CENTER);
    circle(x, y, diameter);
    fill(198, 33, 110);
    text(str(temp.val), x, y+(diameter/5));
  }
}

function Heading(heading){
  textFont("Consolas");
  textAlign(CENTER);
  textSize(height/15);
  fill(183, 30, 60);
  text(heading, width/2, height/15);
}

function TimeComplexityBST(){
  let head = "Time Complexity: O(log(n))";
  textFont("Consolas");
  textAlign(CENTER);
  textSize(height/25);
  fill(13, 130, 180);
  text(head, width/2, height/9);
  
  fill(60, 203, 10);
  textSize(20);
  text(t, width/2, height-50)
}
function NumberToFindBST(){
  t += str(temp.val) + " ";
}

function printMessageBST(message){
  fill(230, 180, 10);
  textSize(height/25);
  text(message, width/2, height - 20)
}