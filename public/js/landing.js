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
	projectList.forEach(function(item) {

		const markup = `
		<li class="collection-item projectPreviewCard" id="${item.ProjectID}">
		<div class=card blue-grey darken-1>
			<div class="card-content">
			  <span class="card-title" id="projectCardName1">
			  ${item.ProjectName}
				<span id="projectCardUniversity1">@ ${item.School}</span>
				<span id="projectCardDifficulty1">Hard</span>
			  </span>
			  <p id="projectCardAbout1">Short Description</p>
			</div>
			<div class="card-action" id="projectCardLanguages1">
			  <div class="chip" id="${item["Languages"][0]}">
			  </div>
			   </div>
		 </div>
		 </li>
		`;
	})
}