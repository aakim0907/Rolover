class CreateImages < ActiveRecord::Migration[5.0]
  def change
    create_table :images do |t|
      t.integer :trainer_id, null: false
      t.string :url, null: false
      t.string :type, null: false
    end

    add_index :images, :trainer_id
  end
end
