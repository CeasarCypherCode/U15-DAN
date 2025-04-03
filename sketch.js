let done = false;
let king = false;
let b1;


function setup(){
createCanvas(windowWidth, windowHeight);
 setInterval(() => {
    done = true;
    }, 19500);
}


function draw() {
    background(0,0,0);
}

document.addEventListener("mouseup", function(event) {

    MouseClickUp(event);
  
  });
   
  function MouseClickUp(e) {
  
      if (e.button == 0) { 
  
          window.open("./game.html","_self")
  
      }
  
  }
   




