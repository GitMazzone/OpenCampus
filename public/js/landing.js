$(document).ready(function() {
	$('#yearInSchoolDropdown').change(function() {
		console.log($(this).val());
	});

	$('#autocomplete-input-uniName').uniInput(function() {
		console.log($(this).val());
	});
});
