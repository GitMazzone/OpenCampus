$(function() {
  $('input.autocomplete-uniName').autocomplete({
    data: {
      "Georgia Institute of Technology": null,
      "University of Georgia": null,
    },
    limit: 5, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete: function(val) {
      // Callback function when value is autcompleted.

    },
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });

  $('input.autocomplete-progLang').autocomplete({
    data: {
      "Python": null,
      "Java": null,
    },
    limit: 5, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete: function(val) {
      // Callback function when value is autcompleted.

    },
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });
});
