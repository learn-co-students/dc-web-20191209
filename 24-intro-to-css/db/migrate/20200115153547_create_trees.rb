class CreateTrees < ActiveRecord::Migration[6.0]
  def change
    create_table :trees do |t|
      t.string :common_name
      t.string :binomial_name
      t.string :category
      t.string :image

      t.timestamps
    end
  end
end
