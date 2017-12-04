$(document).ready(function(){
	$("#no-btn").on('click', function(){
		// choose new photo/recipe again
		event.preventDefault();

		$.ajax("/api/recipe", {
			type: 
		}).then(function(data){
			console.log("NEXT")
			location.reload();
		})
	});

	$("#yes-btn").on('click', function(){
		// flip photo over for recipe
		event.preventDefault();

		$.ajax("/api/recipe", {
			type:
			data:
		}).then(function(data){
			console.log("Show me the secret!")
			location.reload();
		})
	});

	$("#later-btn").on('click', function(){
		// post recipe information into user recipe div
		event.preventDefault();

		$.ajax("/api/recipe", {
			type: 
			data:
		}).then(function(data){
			console.log("save it for later")
			location.reload();
		})
	});


	var modalInfo = function(info, renderArea) {
		var image = 
		var 
	}

	//append shit to modal

	//launch saved modal icons with modal format blah blah and add delete button
});