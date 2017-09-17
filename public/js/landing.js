$(document).ready(function() {
	
});

function getUniName() {
	var uniNameSelected = "";
	$('#autocomplete-input-uniName').change(function() {
		console.log($(this).val());
		uniNameSelected = $(this).val();
	});
	return uniNameSelected;
}

function getYearInSchool() {
	var yearInSchool = "";
	$('#yearInSchoolDropdown').change(function() {
		console.log($(this).val());
		yearInSchool = $(this).val();
	});
	return yearInSchool;
}

function getLanguagesKnown() {
	var languagesKnown = [];
	$("input:checkbox[name=type]:checked").each(function(){
	    languagesKnown.push($(this).val());
	});
	return languagesKnown;
}

function getTimeCommitment() {

}

function submitUserInfo() {
	var userObj = {
		"userEmail" : "none@gmail.com",
		"userSchool" : getUniName(),
		"languagesKnown" : "PLACEHOLDER", //REPLACE WITH ARRAY LANGUAGESKNOWN
		"yearInSchool": getYearInSchool(),
		"timeCommitment" : "PLACEHOLDER" //REPLACE WITH VALUE CHOSEN
	}
	var userJSON = JSON.stringify(userObj);
	console.log(userJSON);
}