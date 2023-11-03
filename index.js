let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

 dodger = document.getElementById("dodger"); 

 let left = dodger.style.left;
 left = parseInt(left);
 moveDodgerRight();

function moveDodgerRight(){
let newPosition = dodger.style.left.replace("px", "");
  let left = parseInt(newPosition, 10);

if (left < 360) {
    dodger.style.left = `${left + 1}px`;
      }    
    }

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });

