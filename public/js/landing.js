$(document).ready(function() {
	
});


var uniNameSelected = "";
$('#autocomplete-input-uniName').change(function() {
	uniNameSelected = $(this).val();
});


var yearInSchool = "";
$('#yearInSchoolDropdown').change(function() {
	yearInSchool = $(this).val();
});

var languagesKnown = [];
$("input:checked").each(function() {
    languagesKnown.push($(this).val());
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
	var userObj = {
		"userEmail" : "none@gmail.com",
		"userSchool" : uniNameSelected,
		"languagesKnown" : languagesKnown, 
		"yearInSchool": yearInSchool,
		"timeCommitment" : timeCommitment
	}
	var userJSON = JSON.stringify(userObj);
	console.log(userJSON);
	
	$.get( "/registerUser", userObj, function( data ) {
		console.log(data.status);
	});
}