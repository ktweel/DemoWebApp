

$(document).ready(function() {
	getWeather();
});

function getWeather(searchQuery) {
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
      $('.description').text(data.weather[0].description);
    }, error: function(error) {
    	$('.error-message').text('An erro occurred!');
    }
  });
}


function searchWeather() {
	var searchQuery = $('.search').val();
	getWeather(searchQuery);
}