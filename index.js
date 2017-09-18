console.log('Javascript is running...');

// ES5

let filmNum = [1,2,3,4,5,6,7];
let dataType = ['title', 'director', 'episode', 'producer', 'openining_crawl', 'release date'];

$(document).ready(function(){
	$('button').click(function(){
		console.log('processing...');
		$.ajax({
			url: 'https://swapi.co/api/films/1',
			type: 'GET',
			success: function(data) {
				console.log('Success: Your film data has been gathered!')
				$('#films').html(`<p> ${JSON.stringify(data)} </p>`);
				console.log('This is your data: ' + JSON.stringify(data));
				console.log('this is the title: ' + data.title);
			},
			error: function() {
				console.log('ERROR');
				$('films').html('Data could not be accessed!')
			}
		})
	})
})


// PSUEDO
/* 
foreach number [1-7]
	ajax url[this]
		success: foreach
 			loop through data targets to inject
 			make <p> for
 			p.class loop ^
	
 	*/

	

// data to inject:
//   title
//   director
//   episode
//   producer
//   opening_crawl
//   release date


//ES6
const buildHtmlElements = responseData => 'whatever';


// helpful commands

//
// .addClass()
// JSON.stringify() <- turns object to json string
// JSON.parse() <- turns json string to object