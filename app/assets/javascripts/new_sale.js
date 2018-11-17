document.addEventListener("turbolinks:load", function() {
    
    const hideNewSale = document.querySelector("#sell_products").style.display = "none";
    toggleShowProducts();
    cancelShowProducts();
});

function toggleShowProducts() {
    document.querySelector("#sell_products_button").addEventListener("click", function(event){
        event.preventDefault();
        document.querySelector("#sell_products").style.display = "block";
    });
}

function cancelShowProducts() {
    document.querySelector("#close_products_button").addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector("#sell_products").style.display = "none";
    });
}