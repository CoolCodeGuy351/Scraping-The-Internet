$(document).ready(function(){

renderSavedArticles();

function renderSavedArticles() {

  $.getJSON("/savedArticles", function(data){
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
            

  }

});