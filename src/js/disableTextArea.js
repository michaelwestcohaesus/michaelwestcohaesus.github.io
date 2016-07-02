function toggleCheckbox(){
	var checkbox = document.getElementById("checkboxOther");
	checkbox.checked?document.getElementById("otherQuestion4").disabled = false: document.getElementById("otherQuestion4").disabled = true;
}

function toggleRadio(){
	var radiobutton = document.getElementById("radioOption11");
	radiobutton.checked?document.getElementById("otherQuestion5").disabled = false: document.getElementById("otherQuestion5").disabled = true;
}