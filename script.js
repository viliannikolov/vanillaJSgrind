console.log("hi");


let i = 0
function count()
{
    i++;
    document.getElementById("two").innerHTML = i;
}

let j = 0;
function changeColor() {
  const palleteArray = [
    "red", "orange", "yellow", "green", "blue", "purple", 
    "pink", "brown", "black", "white", "gray", "silver", 
    "gold", "magenta", "teal", "olive", "navy", "maroon", 
    "lavender", "cyan" ];
  document.getElementById("pallete").style.color = palleteArray[j];
  j = (j + 1) % palleteArray.length; // increment j and wrap around when it exceeds the length of the array
}


adr1 = document.getElementById("adr1");
adr5 = document.getElementById("adr5");
adr2 = document.getElementById("adr2");
adr3 = document.getElementById("adr3");
adr4 = document.getElementById("adr4");



sqAdr = [adr1,adr2,adr3,adr4,adr5];
sqFlag = [0,0,0,0,0];
var counter = 0;
var active = 0;
function runningSquare()
{
  
    sqAdr[counter].style.backgroundColor = "black";
    console.log(counter ,"is pressed");
   
    for(let i = 0; i<sqAdr.length;i++)
    {
      if(i !== active)
      {
        sqAdr[i].style.backgroundColor = "white";
        console.log(i," - white");
      }
      else{
      sqAdr[i].style.backgroundColor = "black";
        console.log(i," - black");
    }

    }
    counter = (counter + 1) % sqAdr.length;
    active = counter;     
}




function moveSquareRight()
{
  let childsquare = document.getElementById("childsquare1");
  let currentLeft = childsquare.offsetLeft;
  let parentWidth = childsquare.parentElement.clientWidth;
  let maxLeft = parentWidth - childsquare.clientWidth;
  let newLeft = Math.min(currentLeft + 100, maxLeft);
  childsquare.style.left = newLeft + "px";
}

function moveSquareLeft() {
  let childsquare = document.getElementById("childsquare1");
  let currentLeft = childsquare.offsetLeft;
  let newLeft = Math.max(currentLeft - 100, 0);
  childsquare.style.left = newLeft + "px";
}

function MovePushRight()
{

  
}






















