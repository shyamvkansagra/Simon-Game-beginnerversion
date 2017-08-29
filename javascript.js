var colorHighSchemes = {
    B: "#0D47A1",
    R: "#B71C1C",
    G: "#1B5E20",
    Y: "FBC02D"
  }

function createPattern() {
  var text = "";
  var possible = "RGBY";

  for (var i = 0; i < 20; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  document.getElementById("pattern").value = text;
  showSteps();
}

function showSteps() {
  var pattern = document.getElementById("pattern").value; 
  
  var steps = document.getElementById("stepCount").textContent;
  
  steps = steps=="!!"?1:steps;
  
  
}

