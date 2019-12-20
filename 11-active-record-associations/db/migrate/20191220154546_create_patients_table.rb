class CreatePatientsTable < ActiveRecord::Migration[6.0]
  def change
    create_table :patients do |t|
        t.string :name 
    end
  end
end
