$(document).ready(function(){
	console.log("Running...Go!")

	$('#no-btn').on('click', function(){
		$.ajaxSetup({
	    headers: { "X-Mashape-Key": "nFUz42r0U1mshpt0Uq7JBSv0QEGHp1IDmtEjsnh67XCScyf2nJ",
	                "X-Mashape-Host": "spoonacular-recipe-food-nutrition-v1.p.mashape.com"}
	            });
	    $.ajax({ url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=1'})
		    .then(function(){
		    	
		    })
	    
	})
})