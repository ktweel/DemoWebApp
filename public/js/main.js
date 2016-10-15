
function myFunction() {
  document.getElementById("demo").innerHTML = "NEWWW PARAGRAPH #javascript #swag";
}

$(document).ready(function() {
	getWeather();
});

function getWeather(data) {
  var url = 'http://api.openweathermap.org/data/2.5/weather?';
  var params = {
  	APPID: apiKey,
  	units: 'imperial'
  };
  if (searchQuery) {
  	params.q = searchQuery;
  } else {
  	params.id = 4930956;
  }

  $.ajax(url + $.param(params), {
    success: function (data) {
      $('.city').text(data.name);
      $('.temp').text(data.main.temp + ' °F');
    }
  });
}


function searchWeatehr() {
	var searchQuery = $('.search').val();
	getWeather(searchQuery);
}