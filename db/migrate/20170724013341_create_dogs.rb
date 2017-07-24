class CreateDogs < ActiveRecord::Migration[5.0]
  def change
    create_table :dogs do |t|
      t.integer :user_id, null: false
      t.string :name, null: false
      t.integer :age_year
      t.integer :age_month
      t.integer :weight, null: false
      t.string :breed, null: false
      t.string :sex, null: false
    end

    add_index :dogs, :user_id
  end
end
