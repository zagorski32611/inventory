document.addEventListener("turbolinks:load", function() {
    $input = $("#autocomplete")

    var options = {
        getValue: "sku",
        url: function(phrase){
            return "/autocomplete.json?q=" + phrase;
        },
        getValue: "phone_number",
        url: function(phrase) {
            return "/autocomplete.jsonq=" + phrase;
        },

        list: {
            onChooseEvent: {
                match: {
                    enabled: true
                }
            }
            
        }
    }

    $("#autocomplete").easyAutocomplete(options)
});