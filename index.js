function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

function getRandom(){
    document.getElementById("findNum").value = "";
    document.getElementById("arrayInput").value = "";
}

function setChoice(){
  try {
    choice = tempChoice;
    findNum = document.getElementById("findNum").value || floor(random(1, 100));
    A = int(document.getElementById("arrayInput").value.split(' '));
    if(A.length <= 1)  getRandomArray();
    counter = 1;

    openNav();
  } catch(err){
    alert("Select an Algorithm First");
  }
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
