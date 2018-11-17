document.addEventListener("turbolinks:load", function() {

    const hideAddNewCustomers = document.querySelector("#new_customer").style.display = "none";
    toggleShowCustomers();
    cancelShowCustomers();
});

function toggleShowCustomers() {
    document.querySelector("#new_customer_button").addEventListener("click", function(event){
        event.preventDefault();
        document.querySelector("#new_customer").style.display = "block";
    });
}

function cancelShowCustomers() {
    document.querySelector("#close_new_customer_button").addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector("#new_customer").style.display = "none";
    });
}