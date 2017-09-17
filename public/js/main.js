$(document).ready(function() {
  $('select').material_select();
  $('.modal').modal();


  $.get( "/isLoggedIn", function( data ) {
    if (data.session != null) {
      $(".github").hide()
      $(".welcome").html("<h1> Welcome, " + data.session + "!</h1>");
      $(".continue").fadeIn();
    }
  });


});

function getUniversityName() {
  var universityName = document.getElementById("autocomplete-input-uniName").value;
  return universityName;
}

//TODO: now uses checkboxes
function getProgrammingLanguage() {
  var programmingLanguage = document.getElementById("input-progLang").value;
  return programmingLanguage;
}


function loadMoreCards(){
	var cardCollection = getElementById("projectCardCollection");
	var cardsLoaded = cardCollection.childElementCount;
	var newCardCount = cardsLoaded + 10;
	for(i=cardsLoaded; cardsLoaded <= newCardCount; i++){
		addCard(i);
		generateCrad(i);
	}
	//count numebr of children
	//check total number of projects on site/number
	//of mathces recieved
	//get current number of cards
	//addCard() 10 times
}

//create new card 
function createCardLI(newCardNum){
	var cardName = "project" + newCardNum;
	cardCollection = document.getElementsByClassName("projectCardCollection");
	$(cardCollection).append(
		'<li class=\"collection-item projectPreviewCard\
		\" id=\"project1\"> </li>');
	console.log("Card added "+ newCardNum);
	if(document.getElementById("project1")){
		return true;
	}else{
		return false;
	}

}

function populateCard(cardNum) {
	var cardId = "project" + cardNum;
	console.log("Project name: " + cardNum);
	var card = document.getElementById(cardId);
	
	

	var cardTemplate = {

	projectCardName: 'test',
	projectCardUniversity: 'The University of Georgia',
	projectCardAbout: 'A test card',
	projectCardLanguages: 'Python',
	projectCardDifficulty: 'too ez' 

	}

	const markup = `
	<div class=card blue-grey darken-1>
	    <div class="card-content">
	      <span class="card-title" id="projectCardName1">
	      ${cardTemplate.projectCardName}
	        <span id="projectCardUniversity1">@ ${cardTemplate.projectCardUniversity}</span>
	        <span id="projectCardDifficulty1">${cardTemplate.projectCardDifficulty}</span>
	      </span>
	      <p id="projectCardAbout1">${cardTemplate.projectCardAbout}</p>
	    </div>
	    <div class="card-action" id="projectCardLanguages1">
	      <div class="chip" id="${cardTemplate.projectCardLanguages}">
	      </div>
	   	</div>
	 </div>
	`;

	$(card).append(markup);
}
