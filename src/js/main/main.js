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
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

$(function() {
    $('form').submit(function() {
        $('#output').text(JSON.stringify($('form').serializeObject(), undefined, 2));
        return false;
    });
});