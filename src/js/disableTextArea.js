function setCheckbox(){
var el = document.getElementById("checkboxOther");
if(el.checked)
  document.getElementById("otherQuestion4").disabled = false;
else
  document.getElementById("otherQuestion4").disabled = true;    
}

function setRadio(){
var el = document.getElementById("radioOption11");
if(el.checked)
  document.getElementById("otherQuestion5").disabled = false;
else
  document.getElementById("otherQuestion5").disabled = true;    
}