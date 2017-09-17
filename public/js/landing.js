$(document).ready(function() {
	
});


var uniNameSelected = "";
$('#autocomplete-input-uniName').change(function() {
	console.log($(this).val());
	uniNameSelected = $(this).val();
});


var yearInSchool = "";
$('#yearInSchoolDropdown').change(function() {
	console.log($(this).val());
	yearInSchool = $(this).val();
});

var languagesKnown = [];
$("#progLangCheckboxesRow input:checkbox:checked").each(function() {
    languagesKnown.push($(this).val());
});

function getTimeCommitment() {

}

function submitUserInfo() {
	var userObj = {
		"userEmail" : "none@gmail.com",
		"userSchool" : uniNameSelected,
		"languagesKnown" : languagesKnown, //REPLACE WITH ARRAY LANGUAGESKNOWN
		"yearInSchool": yearInSchool,
		"timeCommitment" : "PLACEHOLDER" //REPLACE WITH VALUE CHOSEN
	}
	var userJSON = JSON.stringify(userObj);
	console.log(userJSON);
}