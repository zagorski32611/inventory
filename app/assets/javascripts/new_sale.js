document.addEventListener("turbolinks:load", function() {
    
    const hideNewSale = document.querySelector("#sell_products").style.display = "none";
    toggleShowSale();
    cancelShowSale();
});

function toggleShowSale() {
    document.querySelector("#sell_products_button").addEventListener("click", function(event){
        event.preventDefault();
        document.querySelector("#sell_products").style.display = "block";
    });
}

function cancelShowSale() {
    document.querySelector("#close_sale_button").addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector("#sell_products").style.display = "none";
    });
}