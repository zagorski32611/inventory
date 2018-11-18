document.addEventListener("turbolinks:load", function() {
    $input = $("#autocomplete")
    
    var options = {
        getValue: "part_number",
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
        list: {
            onChooseEvent: function() {
                var url = $input.getSelectedItemData().url
                console.log(url)
            }
        }

    }

    $input.easyAutocomplete(options)
});