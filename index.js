console.log('Javascript is running...');

// ES5
$(document).ready(function(){
	$('button').click(function(){
		console.log('processing...');
		$.ajax({
			url: 'https://swapi.co/api/films/1',
			type: 'GET',
			success: function(data) {
				console.log('Success: Your film data has been gathered!')
				$('#films').html(`<p> ${JSON.stringify(data)} </p>`);
				console.log(JSON.stringify(data));
			},
			error: function() {
				console.log('ERROR');
				$('films').html('Data could not be accessed!')
			}
		})
	})
})

//ES6
const buildHtmlElements = responseData => 'whatever';


// helpful commands

//
// .addClass()
// JSON.stringify() <- turns object to json string
// JSON.parse() <- turns json string to object