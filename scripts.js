// jingle bell time is a swell time

var level = 1; //This is a %
var levInt = 1; //This is level as an integer which is used for tab name
var levSafe = 0.8; //To avoid seeing the background between the joins

function update() {
  level = level + 0.05;//update it first
  if(level > 100) {
    level = 100; // Max out
  }
  levInt = Math.floor(level); // Update the int
  levSafe = level - 0.2; //Update the safevar
  document.getElementById('snowlow').style.height = level + "vh";
  document.getElementById('snowupper').style.bottom = levSafe + "vh";
 
  if (level == 100) {
    document.title = "Looks like you're snowed in!";
  } else {
     document.title = levInt + "% snow";
  }
}

// Tell it to exec every 30 ms. REALLY FAST.
setInterval(update, 30);