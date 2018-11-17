class AddCustomersParts < ActiveRecord::Migration[5.2]
  def change
    create_table :customers_parts, id: false do |t|
      t.belongs_to :customer, index: true
      t.belongs_to :product, index: true
    end
  end
end
