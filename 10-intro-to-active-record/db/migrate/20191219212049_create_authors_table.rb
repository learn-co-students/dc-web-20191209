class CreateAuthorsTable < ActiveRecord::Migration[6.0]

  def change
    create_table :authors do |t|
        t.string :name
    end
  end

  def up
    # going forward
    change_column :authors, :name, :integer
  end

  def down
    # going backward
    change_column :authors, :name, :string
  end
end
