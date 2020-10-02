function setChoice(){
  findNum = document.getElementById("findNum").value || floor(random(1, 100));
  A = int(document.getElementById("arrayInput").value.split(' '));
  if(A.length <= 1)  getRandomArray();
  counter = 1;
  choice = tempChoice;
}

function getRandomArray(){
  for(let i=0; i<10; i++)
    A[i] = floor(random(1, 100));
}

function sorted(){
  for(let i=0; i<A.length-1; i++)
    if(A[i] > A[i+1])
      return false;
  return true;
}

function onLinkClick() {
  document.getElementById("CanvasID").scrollIntoView();
}