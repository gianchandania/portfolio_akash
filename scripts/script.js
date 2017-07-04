/*jslint devel: true */

var staticHeader = document.getElementsByClassName("static-header")[0];
var iconHeader = document.getElementsByClassName("icon")[0];
var headerNav = document.getElementsByClassName("header-nav")[0];
var menuHeader = document.getElementsByClassName('menu')[0];
var topIcon = document.getElementById("topicon");

/*function to add responsiveness to the menu for the mobile devices*/

menuHeader.addEventListener("touchstart", function() {

	if (headerNav.className === "header-nav")	{
	
		headerNav.className += " responsive";
	
		staticHeader.className += " responsive";

	}

	else {
	
		headerNav.classList.remove("responsive");
	
		staticHeader.classList.remove("responsive");

}

});

/*Function to make the header appear as soon as we have scrolled down from the header page*/

function stickyHeader() {

	if (window.pageYOffset >= window.innerHeight) {
		
		staticHeader.style.display = "inline-block";
		iconHeader.style.display = "block";
		headerNav.style.display = "block";
		topIcon.style.display = "block";

}

	else {

		staticHeader.style.display = "none";
		iconHeader.style.display = "none";
		headerNav.style.display = "none";
		topIcon.style.display = "none";

}

};

window.setInterval(stickyHeader, 100);

/*Function to make the hovering effects work in order to change the background of the header page of portfolio*/

function scrollingEvents() {

	var header1 = document.getElementsByTagName("header")[0];

	var aboutMe = document.getElementById("myself");
	
	aboutMe.addEventListener("mouseover", function() {

		header1.style.background = "linear-gradient(rgba(39, 174, 96,0.75), rgba(39, 174, 96,0.75)), url('images/final.jpg') no-repeat fixed center center";
	
		header1.style.backgroundSize = "cover";

});


	aboutMe.addEventListener("mouseout", function() {

		header1.style.background = "linear-gradient(rgba(0, 97, 255,0.5), rgba(0, 97, 255,0.5)), url('images/bgndimg1.jpg') no-repeat fixed center center";
	
		header1.style.backgroundSize = "100% 100%";

});

	var myEducation = document.getElementById("education");
	
	myEducation.addEventListener("mouseover", function() {

		header1.style.background = "linear-gradient(rgba(248, 54, 0,0.63), rgba(248, 54, 0,0.63)), url('images/education.jpg') no-repeat fixed center center";
	
		header1.style.backgroundSize = "cover";

});


	myEducation.addEventListener("mouseout", function() {

		header1.style.background = "linear-gradient(rgba(0, 97, 255,0.5), rgba(0, 97, 255,0.5)), url('images/bgndimg1.jpg') no-repeat fixed center center";
	
		header1.style.backgroundSize = "100% 100%";

});

	var myWork = document.getElementById("working");

	myWork.addEventListener("mouseover", function() {

		header1.style.background = "linear-gradient(rgba(241, 196, 15,0.6), rgba(241, 196, 15,0.6)), url('images/mywork.jpg') no-repeat fixed center center";
	
		header1.style.backgroundSize = "100% 100%";

});


	myWork.addEventListener("mouseout", function() {

		header1.style.background = "linear-gradient(rgba(0, 97, 255,0.5), rgba(0, 97, 255,0.5)), url('images/bgndimg1.jpg') no-repeat fixed center center";
	
		header1.style.backgroundSize = "100% 100%";

});


	var myInterest = document.getElementById("interest");

	myInterest.addEventListener("mouseover", function() {

		header1.style.background = "linear-gradient(rgba(231, 76, 60,0.7), rgba(231, 76, 60,0.7)), url('images/headhobby1.jpg') no-repeat fixed center center";
		
		header1.style.backgroundSize = "100% 100%";      /*186, 139, 2   176, 26, 239*/

});

	myInterest.addEventListener("mouseout", function() {

		header1.style.background = "linear-gradient(rgba(0, 97, 255,0.5), rgba(0, 97, 255,0.5)), url('images/bgndimg1.jpg') no-repeat fixed center center";
	
		header1.style.backgroundSize = "100% 100%";

});

	var twitter = document.getElementById("twitter");

	twitter.addEventListener("mouseover", function() {
	
		header1.style.background = "linear-gradient(rgba(0, 97, 255,0.18), rgba(0, 97, 255,0.18))";

});


	twitter.addEventListener("mouseout", function() {
	
		header1.style.background = "linear-gradient(rgba(0, 97, 255,0.5), rgba(0, 97, 255,0.5)), url('images/bgndimg1.jpg') no-repeat fixed center center";
		
		header1.style.backgroundSize = "100% 100%";
	
});

	var googlePlus = document.getElementById("google");

	googlePlus.addEventListener("mouseover", function() {
	
		header1.style.background = "linear-gradient(rgba(0, 97, 255,0.18), rgba(0, 97, 255,0.18))";
	
});


	googlePlus.addEventListener("mouseout", function() {
	
		header1.style.background = "linear-gradient(rgba(0, 97, 255,0.5), rgba(0, 97, 255,0.5)), url('images/bgndimg1.jpg') no-repeat fixed center center";
	
		header1.style.backgroundSize = "100% 100%";
	
});

	var github = document.getElementById("github");

	github.addEventListener("mouseover", function() {
	
		header1.style.background = "linear-gradient(rgba(0, 97, 255,0.18), rgba(0, 97, 255,0.18))";
	
});


	github.addEventListener("mouseout", function() {
	
		header1.style.background = "linear-gradient(rgba(0, 97, 255,0.5), rgba(0, 97, 255,0.5)), url('images/bgndimg1.jpg') no-repeat fixed center center";
	
		header1.style.backgroundSize = "100% 100%";
	
});

	var linkedIn = document.getElementById("linkedin");
	
	linkedIn.addEventListener("mouseover", function() {
	
		header1.style.background = "linear-gradient(rgba(0, 97, 255,0.18), rgba(0, 97, 255,0.18))";
	
});


	linkedIn.addEventListener("mouseout", function() {
	
		header1.style.background = "linear-gradient(rgba(0, 97, 255,0.5), rgba(0, 97, 255,0.5)), url('images/bgndimg1.jpg') no-repeat fixed center center";
	
		header1.style.backgroundSize = "100% 100%";
	
});


header1.style.transition = "all 0.2s ease";

};

scrollingEvents();


