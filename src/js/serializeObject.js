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

// $('form').submit(function(event) {
//   console.log($(this).serializeArray());
//   event.preventDefault();
// });

$(function() {
    $('form').submit(function() {
        var data = $(this).serializeObject();
        console.log(data);
        $('#output').text(JSON.stringify(data, undefined, 2));
        return false;
    });
});