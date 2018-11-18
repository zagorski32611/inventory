document.addEventListener("turbolinks:load", function() {
    input = document.querySelector("[data-behavior:'autocomplete']")

    var options = {
        getValue: "sku",
        url: function(phrase){
            return "/search.json?q=" + phrase;
        },
        getValue: "first_name",
        url: function(phrase){
            return "/search.json?q=" + phrase;
        },
        categories: [
            {
                listLocation: "Products",
                header: "<strong>Products</strong>"
            },
        ],
        list: {
            onChooseEvent: function() {
                var url = $input.getSelectedItemData().url
                $input.val("")
                Console.log(url)
            }
        }
    }

    $input.easyAutocomplete(options)
});