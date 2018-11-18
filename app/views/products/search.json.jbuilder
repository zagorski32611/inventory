json.customers do
    json.array!(@customers) do |customer|
        json.first_name     customer.first_name
        json.last_name      customer.last_name
        json.company        customer.company
        json.phone_number   customer.phone_number
    end
end

json.products do
    json.array!(@products) do |product|
        json.name           product.name
        json.sku            product.sku
        json.quantity       product.quantity
        json.part_number   product.part_number
    end
end