console.log('Javascript is running...');

// Original Solution (no ES6)

let filmNum = [1,2,3,4,5,6,7];
let dataType = ['director', 'episode_id', 'producer', 'opening_crawl', 'release_date'];

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
const buildHtmlElements = response => {
	// adds title
	$('#films').append(`<h1 class="title">${'Film Title: ' + response.title}</h1>`);
	// adds rest of the info
	dataType.forEach(type => {
		$('#films').append(`<p class="${type}">${response[type]}</p>`);
	});
};

const getFilmData = (id) => {
	$.ajax({
		url: `https://swapi.co/api/films/${id}`,
		type: 'GET',
		success: (data) => buildHtmlElements(data),
		error: () => console.log('ERROR: Data could not be accessed!')
	})
}

$(document).ready(() => {
	$('button').click(() => {
		console.log('Procesing request...');
		filmNum.forEach(id => getFilmData(id))
	});
})
