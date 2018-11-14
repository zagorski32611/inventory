document.addEventListener("turbolinks:load", function() {

    const hideNewVeh = document.querySelector("#show_products").style.display = "none";
    toggleShowProducts();
    cancelShowProducts();
});

function toggleShowProducts() {
    document.querySelector("#show_products_button").addEventListener("click", function(event){
        event.preventDefault();
        document.querySelector("#show_products").style.display = "block";
    });
}

function cancelShowProducts() {
    document.querySelector("#close_products_button").addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector("#show_products").style.display = "none";
    });
}