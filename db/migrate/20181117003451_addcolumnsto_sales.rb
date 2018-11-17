class AddcolumnstoSales < ActiveRecord::Migration[5.2]
  def change
      add_column :sales, :amount, :integer
      add_column :sales, :tax, :integer
      add_column :sales, :quantity, :integer
      add_column :sales, :part_number, :string
      add_column :sales, :sku, :string
  end
end
