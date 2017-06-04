/**************** JS/JQUERY ***********************/
$(document).ready(function() {

$(".text-button").on("click", function(){

	event.preventDefault();

	console.log('article scrap button clicked');

	$.getJSON("/articles", function(data){
		// Test Logs
		console.log(data[0].title);
		console.log(data[0].text);

		for(var i = 0 ; i < data.length ; i++){

			var containerDiv = $('<div>').addClass('panel panel-default containerDiv text-center').css({"width": "75%", "margin-left": "auto", "margin-right": "auto"}).attr("data-id", i);
			var headingDiv = $('<div>').addClass('panel-heading headingDiv').text(data[i].title);
			var bodyDiv =$('<div>').addClass('panel-body text-center').text(data[i].text);

			containerDiv.append(headingDiv);
			containerDiv.append(bodyDiv);


			$('#main-section').append(containerDiv);

		}

	}); //getJSON call
	
}); // onClick end

$(document).on("click", ".containerDiv", function() {
	// On click i need to save which ever div is clicked to the data base. 
	console.log("You clicked div id#: " + $(this).attr("data-id"))
});

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