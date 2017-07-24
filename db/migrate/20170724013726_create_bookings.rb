class CreateBookings < ActiveRecord::Migration[5.0]
  def change
    create_table :bookings do |t|
      t.integer :user_id, null: false
      t.integer :dog_id, null: false
      t.integer :trainer_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.string :status, null: false, default: 'PENDING'
      t.text :message, null: false
    end

    add_index :bookings, :user_id
    add_index :bookings, :dog_id
    add_index :bookings, :trainer_id
  end
end
