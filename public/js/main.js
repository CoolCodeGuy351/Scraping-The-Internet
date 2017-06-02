/**************** JS/JQUERY ***********************/
$(document).ready(function() {

$(".text-button").on("click", function(){

	event.preventDefault();

	$.ajax({
	  url: url,
	  data: data,
	  success: success,
	  dataType: dataType
	});
	
}); // onClick end

}); // End document ready function