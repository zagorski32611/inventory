document.addEventListener("turbolinks:load", function() {

    const hideNewProduct = document.querySelector("#add_products").style.display = "none";
    toggleNewProducts();
    cancelNewProducts();
});

function toggleNewProducts() {
    document.querySelector("#add_products_button").addEventListener("click", function(event){
        event.preventDefault();
        document.querySelector("#add_products").style.display = "block";
    });
}

function cancelNewProducts() {
    document.querySelector("#close_new_products_button").addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector("#add_products").style.display = "none";
    });
}