class CreateHospitalsTable < ActiveRecord::Migration[6.0]
  def change
    create_table :hospitals do |t|
        t.string :name
    end
  end
end
