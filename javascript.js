var colorHighSchemes = {
    B: "#0D47A1",
    R: "#B71C1C",
    G: "#1B5E20",
    Y: "FBC02D"
  }

var slices = {
  B: "slice-contents",
  R: "slice-contents1",
  G: "slice-contents2",
  Y: "slice-contents3"
}

var defaultColors = {
  B: "blue",
  R: "red",
  G: "green",
  Y: "yellow"
}

function createPattern(mode) {
  document.getElementById("gameMode").value = mode.id;
  document.getElementById("stepCount").innerHTML = "!!";
  document.getElementById("dashText").innerHTML = "New Game!";
  var text = "";
  var possible = "RGBY";

  for (var i = 0; i < 20; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  document.getElementById("pattern").value = text;
  showSteps();
}

function showSteps(arg) {
  var pattern = document.getElementById("pattern").value; 
  
  var steps = document.getElementById("stepCount").textContent;
  
  steps = steps=="!!"?0:steps;
  steps = parseInt(steps);
  if(arg != "repeat") {
    steps += 1; 
  }
  
  document.getElementById("stepCount").innerHTML = steps;
  
  document.getElementById("dashText").innerHTML = "Remember the pattern alerted!";
  
  document.getElementById("lockStatus").value = "unlocked";
  document.getElementById("userInput").value = "";
  alert("Pattern: "+pattern.slice(0,steps));
}


function appendClicks(divId) {
  if(document.getElementById("lockStatus").value == "unlocked") {
  var oldVal = document.getElementById("userInput").value;
  oldVal = oldVal+divId.id;
  document.getElementById("userInput").value = oldVal;
  
  var steps = document.getElementById("stepCount").textContent;
  var pattern = document.getElementById("pattern").value; 
  var rightPattern = pattern.slice(0,parseInt(oldVal.length));
  
    if(oldVal != rightPattern) {
      alert("Wrong slice clicked!!");
      if(document.getElementById("gameMode").value == "Regular") {
        showSteps("repeat");
        return "Repeat Step!";
      }
      else {
        document.getElementById("stepCount").innerHTML = "!!";
        createPattern({"id":"Strict"});
        return "New Game!";
      }
    }
  
  steps = document.getElementById("stepCount").textContent;
  if(oldVal.length == parseInt(steps)) {
    if(oldVal.length == 20) {
      alert("Congratulations! You Won!!");
      document.getElementById("dashText").innerHTML = "!!Winner!!";
      document.getElementById("lockStatus").value = "locked";
      document.getElementById("stepCount").innerHTML = "!!";
    }
    else {
      showSteps();
    }
  }
  }
}
