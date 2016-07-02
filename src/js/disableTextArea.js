function toggleCheckbox(){
var checkbox = document.getElementById("checkboxOther");
if(checkbox.checked)
  document.getElementById("otherQuestion4").disabled = false;
else
  document.getElementById("otherQuestion4").disabled = true;    
}

function toggleRadio(){
var radiobutton = document.getElementById("radioOption11");
if(radiobutton.checked)
  document.getElementById("otherQuestion5").disabled = false;
else
  document.getElementById("otherQuestion5").disabled = true;    
}