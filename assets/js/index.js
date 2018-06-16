$(document).ready(function() {
	var boost = $("#boost");
	var buck = $("#buck");
	var rectifier = $("#rectifier");
	$(".tabs").tabs();
	$(".circuit").click(function(){
		var value = $(".circuit:checked").val();
		if(value == 1) {
			boost.slideUp("slow");
			buck.slideUp("slow");
			$("#copyright").slideUp("slow");
			rectifier.slideDown("slow", function() {
				$("#copyright").slideDown("fast");
			});
		} else if(value == 2) {
			rectifier.slideUp("slow");
			boost.slideUp("slow");
			$("#copyright").slideUp("slow");
			buck.slideDown("slow", function() {
				$("#copyright").slideDown("fast");	
			});
		} else {
			rectifier.slideUp("slow");
			buck.slideUp("slow");
			$("#copyright").slideUp("slow");
			boost.slideDown("slow", function() {
				$("#copyright").slideDown("fast");	
			});
		}
	});
	$("input[type=\"number\"]").keydown(function (event) {
        if (event.shiftKey == true) {
            event.preventDefault();
        }
        if (!((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105) || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46 || event.keyCode == 190)) {
            event.preventDefault();
        }
        if($(this).val().indexOf(',') !== -1 && event.keyCode == 190) {
			event.preventDefault();
		}
    });
});