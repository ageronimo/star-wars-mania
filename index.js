console.log('Javascript is running...');

// Original Solution (no ES6)

let filmNum = [1,2,3,4,5,6,7];
let dataType = ['title', 'director', 'episode_id', 'producer', 'opening_crawl', 'release_date'];

/*$(document).ready(function() {
	$('button').click(function() {
		console.log('Processing request...');
		filmNum.forEach(function(x) {
			console.log(x);
			$.ajax({
				url: `https://swapi.co/api/films/${x}`,
				type: 'GET',
				success: function(data) {

					// $('#films').html(`<p> ${data.title} </p>`);
					// let makeObject = JSON.stringify(data);
					console.log(data.title);
					dataType.forEach(function(type) {
						if (type === 'title') {
							$('#films').append(`<h1 class="title"> ${data[type]} </h1>`)
						} else {
							$('#films').append(`<p class="${type}"> ${data[type]} </p>`);
						}
					});
				},
				error: function() {
					console.log('ERROR');
					$('films').html('Data could not be accessed!')
				}
			})
		})
	})
})*/


// call func pass data, render elements



//ES6
const buildHtmlElements = responseData => 'whatever';


// helpful commands

// $("<p></p>").text("Text.");
// .addClass()
// JSON.stringify() <- turns object to json string
// JSON.parse() <- turns json string to object