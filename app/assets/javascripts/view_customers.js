document.addEventListener("turbolinks:load", function() {

    const hideNewCustomers = document.querySelector("#show_customers").style.display = "none";
    toggleShowCustomers();
    cancelShowCustomers();
});

function toggleShowCustomers() {
    document.querySelector("#show_customers_button").addEventListener("click", function(event){
        event.preventDefault();
        document.querySelector("#show_customers").style.display = "block";
    });
}

function cancelShowCustomers() {
    document.querySelector("#close_customers_button").addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector("#show_customers").style.display = "none";
    });
}