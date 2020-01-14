class AddRetailerIdToSnacks < ActiveRecord::Migration[6.0]
  def change
    add_column :snacks, :retailer_id, :integer
  end
end
