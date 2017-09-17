$(document).ready(function() {
  $('select').material_select();
  $('.modal').modal();


  $.get( "/isLoggedIn", function( data ) {
    if (data.session != null) {
      $(".continue").show();
    }
  });


});

function getUniversityName() {
  var universityName = document.getElementById("autocomplete-input-uniName").value;
  console.log("Uni name: " + universityName);
  return universityName;
}

function getProgrammingLanguage() {
  var programmingLanguage = document.getElementById("autocomplete-input-progLang").value;
  console.log("Programming language: " + programmingLanguage);
  return programmingLanguage;
}
