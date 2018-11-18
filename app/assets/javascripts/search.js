document.addEventListener("turbolinks:load", function() {
    
    $input = $("#autocomplete")

    
    var options = {
        url: "/autocompelete.json?q=",

        matchResponseProperty: "inputPhrase"
        
    };

    $input.easyAutocomplete(options)
});

/*
This is the original from the tutorial:
url: function(phrase){
            return "/autocomplete.json?q=" + phrase;
        },
        getValue: "phone_number",
        url: function(phrase) {
            return "/autocomplete.json?q=" + phrase;
        },
        categories: [
            {
                listLocation: "Products",
                header: "Products"
            },
            {
                listLocation: "Customers",
                header: "Customers"
            }
        ],


        Possibly this:
                data: function(phrase){
            return "/autocomplete.json?q=" + phrase;
        },
        list: {
            onChooseEvent: function() {
                var url = $input.getSelectedItemData().url
                console.log(url)
            }
        }
*/