
function hideAllScreens() {
  console.log("hideAllScreen");
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#level_complete").classList.add("hide");
  document.querySelector("#start").classList.add("hide");
  document.querySelector("#instructions").classList.add("hide");
  document.querySelector("#game").classList.add("hide");
  document.querySelector("#frontpage").classList.add("active");
}

//Sound effects
const heartEffect = document.querySelector("#heartEffect");
const bombEffect = document.querySelector("#bombEffect");
const bgMusic = document.getElementById('backGroundOne');
const winnerMusic = document.getElementById('winnerSong');
const loserMusic = document.getElementById('loserSound');



// document.querySelector("#heart_container1").addEventListener("click", function() {
//   // Play sound effect
//   heartEffect.play();
// });

// document.querySelector("#bomb_container1").addEventListener("click", function() {
//   // Play sound effect
//   bombEffect.play();
// });


window.onload = hideAllScreens;


let lives, points, timeleft, gameTimer;



function runGame() {

  //play music
 bgMusic.play();

  // declare variables points and lives
lives = 3;
points = 0;

  updatePoints();
  document.querySelector("#lives").textContent = lives;
  // Adding classes to containers (falling to apple & flying to flask)
  document.querySelector("#heart_container1").classList.add("falling1");
  document.querySelector("#bomb_container1").classList.add("falling2");

  // adding eventlisteners (mousedown) to objects (apple_container1 and flask_container1)
  document.querySelector("#heart_container1").addEventListener("mousedown", hitHeart);
  document.querySelector("#bomb_container1").addEventListener("mousedown", hitBomb);
   // Update lives inside the loop

     // Game loop
     gameLoop = setInterval(function() {
      // check if game over
      if (lives <= 0 || points >= 10 || timeleft <= 0) {
        stopGame();
        if (lives > 0 && points >= 10 && timeleft >= 0) {
          youWin();
        } else {
          gameOver();
        }
        return;
      }
  
      // Update lives inside the loop
      updateLives();
      // Check if the user has won
      checkWin();
    }, 1000);
  
    // Timer function
    timerFunction();
  }

function timerFunction(){
  timeleft = 20;
  gameTimer = setInterval(function() {
    document.querySelector(".timer").textContent = timeleft;
    timeleft -= 1;
    if (timeleft <= 0) {
      clearInterval(gameTimer);
      // check if game over
      if (lives > 0 && points < 10) {
        gameOver();
        stopGame();
      }

      else {
        document.querySelector(".timer").textContent = "TIME'S UP!";
      }
    }
  }, 1000);
}



function stopGame(){
  bgMusic.pause();
  clearInterval(gameLoop);
  clearInterval(gameTimer);
}



// function for hitting heart
function hitHeart() {
  console.log("hitHeart");
  heartEffect.play();
  document.querySelector("#heart_container1").classList.add("continue");
  document.querySelector("#heart_sprite1").classList.add("disAppear");
  lives = lives - 1;
  document.querySelector("#lives").textContent = lives;
}

// function for hitting bomb
function hitBomb() {
  console.log("hitBomb");
  bombEffect.play();
  document.querySelector("#bomb_container1").classList.add("continue");
  document.querySelector("#bomb_sprite1").classList.add("disAppear");
  addPoint();
  updatePoints();
}
// function for adding point
function addPoint() {
  points = points + 1;
}
// function for printing point
function updatePoints() {
  document.querySelector("#points").textContent = points;
}
// function for losing lives
function updateLives() {
  document.querySelector("#lives").textContent = lives;
}


// function for printing lives
function enterGame() {
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#level_complete").classList.add("hide");
  document.querySelector("#start").classList.remove("hide");
  document.querySelector("#start").classList.add("active");
  document.querySelector("#instructions").classList.add("hide");
  document.querySelector("#game").classList.add("hide");
  document.querySelector("#frontpage").classList.remove("active");
  document.querySelector("#frontpage").classList.add("hide");
}

function letsPlay(){
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#level_complete").classList.add("hide");
  document.querySelector("#start").classList.remove("active");
  document.querySelector("#start").classList.add("hide");
  document.querySelector("#instructions").classList.add("hide");
  document.querySelector("#game").classList.remove("hide");
  document.querySelector("#game").classList.add("active");
  document.querySelector("#frontpage").classList.remove("active");
  document.querySelector("#frontpage").classList.add("hide");

  runGame();
  //Timer function
  //timerFunction();

}

//Simple how to function
function howTo(){
  document.querySelector("#start").classList.remove("active");
  document.querySelector("#start").classList.add("hide");
  document.querySelector("#instructions").classList.remove("hide");
  document.querySelector("#instructions").classList.add("active");
}

function gameOver(){
  alert(" Game Over ")
  clearInterval(gameLoop);
  clearInterval(gameTimer);
  document.querySelector("#game_over").classList.remove("hide");
  document.querySelector("#game_over").classList.add("active");
  document.querySelector("#game").classList.remove("active");
  document.querySelector("#game").classList.add("hide");
  bgMusic.pause();
  loserMusic.play();
}


function playAgain(){
  document.querySelector("#game_over").classList.remove("active");
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#level_complete").classList.remove("active");
  document.querySelector("#level_complete").classList.add("hide");
  document.querySelector("#game").classList.remove("hide");
  document.querySelector("#game").classList.add("active");

  clearInterval(gameLoop);
  clearInterval(gameTimer);
  runGame();
  //Timer function
  //timerFunction();
}


function youWin(){
  alert(" YOU DID IT!! ")
  clearInterval(gameLoop);
  clearInterval(gameTimer);
  document.querySelector("#level_complete").classList.remove("hide");
  document.querySelector("#level_complete").classList.add("active");
  document.querySelector("#game").classList.remove("active");
  document.querySelector("#game").classList.add("hide");
  bgMusic.pause();
  winnerMusic.play();

}

function checkWin() {
  if (lives > 0 && points >= 10 && timeleft >= 0) {
    youWin();
  }
}