class CreateCheckins < ActiveRecord::Migration[5.1]
  def change
    create_table :checkins do |t|
      t.string :typeCheckin
      t.float :latitude
      t.float :longitude
      t.string :created_at

      t.timestamps
    end
  end
end
