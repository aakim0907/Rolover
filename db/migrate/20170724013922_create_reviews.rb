class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :trainer_id, null: false
      t.float :rating, null: false
      t.text :body, null: false
    end

    add_index :reviews, :user_id
    add_index :reviews, :trainer_id
  end
end
