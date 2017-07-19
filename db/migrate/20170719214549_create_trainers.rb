class CreateTrainers < ActiveRecord::Migration[5.0]
  def change
    create_table :trainers do |t|
      t.string :name, null: false
      t.string :training_type, null: false
      t.text :profile_quote, null: false
      t.text :description, null: false
      t.string :profile_image_url
      t.string :main_image_url
      t.integer :price, null: false
      t.integer :zip, null: false
      t.string :city, null: false
      t.string :state, null: false

      t.timestamps
    end
  end
end
