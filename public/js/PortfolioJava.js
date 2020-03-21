$(document).ready(function () {

	//<<<<Variables>>>>\\

	var proyects = [
		{
			title: "Code Quiz",
			description: "Short multi-selection quiz from Star Wars facts, with timer and score.",
			photo: "./images/CodeQuiz.PNG",
			github: "https://github.com/Lmgom875/code_quiz",
			weblink: "https://lmgom875.github.io/code_quiz/",
		}, {
			title: "Password Generator",
			description: "Web app to generate randoms password with the criteria selected.",
			photo: "./images/PasswordGenerator.PNG",
			github: "https://github.com/Lmgom875/password-generator",
			weblink: "https://lmgom875.github.io/password-generator/",
		}, {
			title: "Day Planner",
			description: "Small web app to store events in selected time lap (localy).",
			photo: "./images/DailyPlanner.PNG",
			github: "https://github.com/Lmgom875/dayPlanner",
			weblink: "https://lmgom875.github.io/dayPlanner/",
		}, {
			title: "Weather Dashboard",
			description: "Web app with a external API service that say the now weather and the forecast for the next five days.",
			photo: "./images/WeatherDashboard.PNG",
			github: "https://github.com/Lmgom875/WeatherDashboard",
			weblink: "https://lmgom875.github.io/WeatherDashboard/",
		},{
			title: "DeveloperProfileGenerator",
			description: "Web app to generate a auto profile (Don't finished yet).",
			photo: "./images/WeatherDashboard.PNG",
			github: "https://github.com/Lmgom875/DeveloperProfileGenerator",
			weblink: "https://lmgom875.github.io/DeveloperProfileGenerator/",
		},{
			title: "template-engine",
			description: "Create template from a team work",
			photo: "./images/WeatherDashboard.PNG",
			github: "https://github.com/Lmgom875/template-engine",
			weblink: "https://lmgom875.github.io/template-engine/",
		},{
			title: "Note-Taker",
			description: "Take notes into a data base ans show them into web browser.",
			photo: "./images/WeatherDashboard.PNG",
			github: "https://github.com/Lmgom875/Note-Taker",
			weblink: "https://lmgom875.github.io/Note-Taker/",
		},{
			title: "Employee-Traker",
			description: "Node app to manage employee data base.",
			photo: "./images/WeatherDashboard.PNG",
			github: "https://github.com/Lmgom875/Employee-Traker",
			weblink: "https://lmgom875.github.io/Employee-Traker/",
		},{
			title: "burger",
			description: "Web app that use MySQL, Node, Express, Hadlebars and a handmade ORM using a MVC design.",
			photo: "./images/WeatherDashboard.PNG",
			github: "https://github.com/Lmgom875/burger",
			weblink: "https://lmgom875.github.io/burger/",
		}];

	rendePhoto();
	flipcard();

	//<<<<Function>>>>\\

	function flipcard() {
		$(".card").flip({ axis: 'y', });
	}

	function rendePhoto() {
		$("#photo-line").empty();
		for (i = 0; i < proyects.length; i++) {
			var cardBodyFront = $("<div class= 'card-body' id= 'card-body-front" + i + "'>");
			var cardBodyBack = $("<div class= 'card-body' id= 'card-body-back" + i + "'>");
			var cardTitle = $("<div class= 'card-title text-center' id= 'card-title-front" + i + "'>");
			var cardContent = $("<div class= 'card-content text-center' id= 'card-content-front" + i + "'>");
			var cardRowBack = $("<div class= 'row no-gutters align-items-center justify-content-around' id= 'card-back-row" + i + "'>");
			var cardGithubIcon = $("<a href= '" + proyects[i].github + "' target= '_blank'><img src= './images/icons8-github-120.png' class= 'github-image' id= 'github-image" + i + "' alt= 'Github Icon'>");
			var cardInternetIcon = $("<a href= '" + proyects[i].weblink + "' target= '_blank'><img src= './images/icons8-internet-100.png' id= 'internet-image" + i + "' alt= 'Internet Icon' >");
			var cardFront = $("<div class= 'front' id= 'front" + i + "'>");
			var cardBack = $("<div class= 'back' id= 'back" + i + "'>")
			var card = $("<div class= 'card col-sm-12 col-md-12 col-lg-3 col-xl-3' id= 'card" + i + "'>")
			var cardTitleText = $("<h4 id= 'title-text" + i + "'>").html(proyects[i].title);
			var cardContentText = $("<p id= 'content-text" + i + "'>").html(proyects[i].description);
			var cardContentText2 = $("<p class= 'content-message'>").html("Flip for links.");
			var cardPhotoFront = $("<img src= '" + proyects[i].photo + "' class= 'mix-photo card-img-top' id= 'photo-front" + i + "' alt= 'mix-photo'/>");
			var cardPhotoBack = $("<img src= '" + proyects[i].photo + "' class= 'mix-photo card-img-top' id= 'photo-back" + i + "' alt= 'mix-photo'/>");
			card.append(cardFront);
			cardFront.append(cardPhotoFront);
			cardFront.append(cardBodyFront);
			cardBodyFront.append(cardTitle);
			cardBodyFront.append(cardContent);
			card.append(cardBack);
			cardBack.append(cardPhotoBack);
			cardBack.append(cardBodyBack);
			cardBodyBack.append(cardRowBack);
			cardRowBack.append(cardGithubIcon);
			cardRowBack.append(cardInternetIcon);
			cardTitle.append(cardTitleText);
			cardContent.append(cardContentText);
			cardContent.append(cardContentText2);
			$("#photo-line").append(card);
			resizeCard(i);
		}
	}

	function resizeCard(i) {
		var photoHeight = ($("#photo-front" + i).height());
		var cardTitle = ($("#card-title-front" + i).height());
		var cardContent = ($("#card-content-front" + i).height());
		var bodyHeight = cardTitle + cardContent + 35;
		var cardHeight = photoHeight + bodyHeight + 10;
		$("#card-body-front" + i).attr("style", "height: " + bodyHeight + "px !important");
		$("#card-bodyBack-row" + i).attr("style", "height: " + bodyHeight + "px !important");
		$("#card" + i).attr("style", "height: " + cardHeight + "px !important");

	}



	//<<<<Events>>>>\\

	$(".card").click(function () { flipcard() });

});
