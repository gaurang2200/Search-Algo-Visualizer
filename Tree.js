class Node{
  constructor(val){
    this.val = val;
    this.left = null
    this.right = null;
    this.x = x;
    this.y = y;
    this.lineX = 0;
    this.lineY = 0;
  }
}

let level = 0;
let gap;
let PLevel = 3;
let MaxLevel = 5;

class BST{
  constructor(){
    this.root = null;
  }
  
  Insert(val){
    let newNode = new Node(val);
    if(this.root == null){
      newNode.x = int(width/2);
      newNode.y = int(height/6);
      newNode.lineX = newNode.x;
      newNode.lineY = newNode.y;
      this.root = newNode;
      createNode(newNode.x, newNode.y, newNode);
    }
    else{
      level = 1;
      this.InsertNode(this.root, newNode);
    }
  }
  
  InsertNode(node, newNode) {
    gap = (width/(Math.pow(2, level)+1));
    if(newNode.val < node.val) { 
        if(node.left === null) {
          if(level >= MaxLevel)  return;
            node.left = newNode;
            if(level == PLevel)  newNode.x = node.x - (gap/3);
            else  
              newNode.x = node.x - (gap/2);
            newNode.y = node.y+80;
            newNode.lineX = node.x;
            newNode.lineY = node.y + (diameter/2);
        } else {
            level++;
            this.InsertNode(node.left, newNode);
        }
    }   
    else { 
        if(node.right === null) {
          if(level >= MaxLevel)  return;
            node.right = newNode;
            if(level == PLevel)  newNode.x = node.x + (gap/3);
            else  
              newNode.x = node.x + (gap/2);
            newNode.y = node.y+80;
            newNode.lineX = node.x;
            newNode.lineY = node.y + (diameter/2);
        } else {
            level++;
            this.InsertNode(node.right, newNode); 
        }
    }
  }
}