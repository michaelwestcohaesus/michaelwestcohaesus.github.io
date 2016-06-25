function setCheckbox(){
var el = document.getElementById("checkboxother");
if(el.checked)
  document.getElementById("exampleTextarea3").disabled = false;
else
  document.getElementById("exampleTextarea3").disabled = true;    
}

function setRadio(){
var el = document.getElementById("radioStacked5");
if(el.checked)
  document.getElementById("exampleTextarea1").disabled = false;
else
  document.getElementById("exampleTextarea1").disabled = true;    
}