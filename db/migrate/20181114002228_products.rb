class Products < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :part_number, :string
    add_column :products, :sku, :string
    add_column :products, :quantity, :integer
    add_column :products, :vendor, :string
  end
end
