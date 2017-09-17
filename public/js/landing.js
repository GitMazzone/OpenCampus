$(document).ready(function() {
	var uniNameSelected = "";
	var yearInSchool = "";

	$('#autocomplete-input-uniName').change(function() {
		console.log($(this).val());
		uniNameSelected = $(this).val();
	});

	$('#yearInSchoolDropdown').change(function() {
		console.log($(this).val());
		yearInSchool = $(this).val();
	});

	var languagesKnown = [];
	$('#autocomplete-input-progLang').change(function() {
		console.log($(this).val());
		//append each value to languagesKnown
	});

	var userObj = {
		"userEmail" : "none@gmail.com",
		"userSchool" : uniNameSelected,
		"languagesKnown" : "PLACEHOLDER", //REPLACE WITH ARRAY LANGUAGESKNOWN
		"yearInSchool": yearInSchool,
		"timeCommitment" : "PLACEHOLDER" //REPLACE WITH VALUE CHOSEN
	}
});
