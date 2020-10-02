class Vertex{
  constructor(val){
    this.val = val;
    this.x = x;
    this.y = y;
  }
}

let B;
let visited = [];
let yGap, yOffSet;
let Graph = [];
let GraphOrder = [];
let radiusDec;
let orderIndex;

function DFSSetup(){
  let n = A.length;
  diameter = 30;
  let maxEdges = n + 4;
  textS = diameter*(0.6);
  yGap = int(0.6*height/(ceil(n/2)-1));
  yOffSet = height/5;
  radiusDec = random(3, 13);
  orderIndex = 0;
  indexOrder = 0;
  index = 0;
  t = "Nodes Visited: ";
  
  B = new Array(A.length);
  for(let i=0; i<A.length; i++){
    B[i] = new Array(A.length);
    visited[i] = false;
  }
  while(maxEdges){
    let i = floor(random(0, n))
    let j = floor(random(0, n));
    if(maxEdges >= 0){
      B[i][j] = 1;
      maxEdges--;
    }
    else  B[i][j] = 0;
    B[j][i] = B[i][j];
  }
  VisitingOrder(0);
}

function DFSAnimation(){
  Heading("Depth First Search");
  TimeComplexityDFS();
  CreatingVertices();
  CreatingLines();
  
  if(indexOrder > orderIndex)
    printMessageBST("Element " + findNum + " Not Found");
  else if(findNum != A[index]){
    VertexAnimation();
    printMessageBST("Element " + str(A[index]) + " != " + str(findNum) + " (Number to Find)");
  } else if(findNum == A[index]) {
    VertexAnimation();
    printMessageBST("Element " + findNum + " Found");
  } 
  
  counter++;
}

let indexOrder;
function VertexAnimation(){
  if(findNum != A[index] && counter%pause == 0){
    index = GraphOrder[indexOrder++];
    AddVisitedNodes();
  }
  if(indexOrder <= GraphOrder.length){
    strokeWeight(3);
    fill(0);
    textSize(textS);
    textAlign(CENTER);
    circle(Graph[index].x, Graph[index].y, diameter);
    fill(198, 33, 110);
    text(A[index], Graph[index].x, Graph[index].y+(diameter/5));
  }
}

function CreatingVertices(){
  let n = A.length;
  let r = width/2 - height/5;
  let theta = -(PI/2);
  let temp;
  
  for(let i=0; i<n; i++){
    temp = i;
    let vert = new Vertex(A[temp]);
    vert.x = width/2 + (r*cos(theta));
    vert.y = 5*height/10 + (r*sin(theta));
    
    theta -= (360/A.length)*(PI/180);
    // r -= radiusDec;
    Graph[i] = vert;
  }
}

function CreatingLines(){
  for(let i=0; i<A.length-1; i++){
    for(let j=i+1; j<A.length; j++){
      if(B[i][j] == 1)
        line(Graph[i].x, Graph[i].y, Graph[j].x, Graph[j].y);
    }
    createNode(Graph[i].x, Graph[i].y, Graph[i].val);
  }
  createNode(Graph[A.length-1].x, Graph[A.length-1].y, Graph[A.length-1].val);
}

function VisitingOrder(start){
  visited[start] = true;
  GraphOrder[orderIndex++] = start;
  for(let i=0; i<A.length; i++){
    if(visited[i] || i == start){
      continue;
    }
    if(B[start][i] == 1){
      VisitingOrder(i);
      GraphOrder[orderIndex++] = start;
    }
  }
}

function TimeComplexityDFS(){
  let head = "Time Complexity: O(n)";
  textFont("Consolas");
  textAlign(CENTER);
  textSize(height/25);
  fill(13, 130, 180);
  text(head, width/2, height/8);
  
  fill(60, 203, 10);
  if(A.length < 9)
    textSize(20);
  else textSize(width/(A.length*2.6))
  text(t, width/2, height-50)
}

function AddVisitedNodes(){
  for(let i=0; i<indexOrder-1; i++)
    if(index == GraphOrder[i])
      return;
  if(A[index] != undefined)
  t += str(A[index]) + " "; 
}