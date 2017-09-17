$(document).ready(function() {
	$("#submitButton").click(function() {
		submitUserInfo();

	})

});


var uniNameSelected = "";
$('#autocomplete-input-uniName').change(function() {
	uniNameSelected = $(this).val();
});


var yearInSchool = "";
$('#yearInSchoolDropdown').change(function() {
	yearInSchool = $(this).val();
});



var timeCommitment = "";
function lowCommitment() {
	timeCommitment = "low";
}
function medCommitment() {
	timeCommitment = "med";
}
function highCommitment() {
	timeCommitment = "high";
}

function submitUserInfo() {
	var checkboxes = document.getElementsByName("langCheckBox");
	var checkboxesChecked = [];
	// loop over them all

	for (var i=0; i<checkboxes.length; i++) {
	 // And stick the checked ones onto an array...
	 console.log(checkboxes[i].checked);
	 if (checkboxes[i].checked) {
	 	console.log(checkboxes[i].value);
	    checkboxesChecked.push(checkboxes[i].value);
	 }
	}
	var userObj = {
		"userEmail" : "none@gmail.com",
		"userSchool" : uniNameSelected,
		"languagesKnown" : checkboxesChecked, 
		"yearInSchool": yearInSchool,
		"timeCommitment" : timeCommitment
	}
	var userJSON = JSON.stringify(userObj);
	console.log(userJSON);
	
	$.get( "/registerUser", userObj, function( data ) {
		console.log(data.status);
	});

	$.get( "/projects", {school: uniNameSelected}, function( data ) {
		console.log(data);
		data["projectCardName"] = data["ProjectName"];
		data["projectCardUniversity"] = data["School"];
		data["projectCardAbout"] = "undefined" ;
		data["projectCardLanguages"] = data["Languages"][0];
		data["projectCardDifficulty"] = "Hard";
		populateProjectsArea(data);
		
	});

	
}

/*
projectCardName: 'test',
projectCardUniversity: 'The University of Georgia',
projectCardAbout: 'A test card',
projectCardLanguages: 'Python',
projectCardDifficulty: 'too ez' 
*/
function populateProjectsArea(projectList) {
	for(var i = 0; i < 5; i++) { 
		createCardLI(i);
		populateCard(i);
	}
}