/**************** JS/JQUERY ***********************/
$(document).ready(function() {

$(".text-button").on("click", function(){

	event.preventDefault();

	console.log('article scrap button clicked');

	$.getJSON("/articles", function(data){
		console.log(data);
		for(var i = 0 ; i < data.length ; i++){

			// var containerDiv = $('<div>').addClass('panel panel-default containerDiv').css("width","75%");
			// var headingDiv = $('<div>').addClass('panel-heading headingDiv').text(data);




			// $('#main-section').append();
		}

	});
	
}); // onClick end

}); // End document ready function


/*     					<div id="panel-div" class="panel panel-default">
				  			<div id="div-heading" class="panel-heading">
				  				<h3 id="article-title"></h3>
				  			</div>

				  			<div id="div-body" class="panel-body">
				  				<img id="article-image">
				  				
				  				<div id="article-body">
				  					<p id="date"></p>
				  					<p id="article-content"></p>
				  				</div>				  				
				  			</div>
						</div>                                                                           */