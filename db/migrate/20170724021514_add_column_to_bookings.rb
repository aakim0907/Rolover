class AddColumnToBookings < ActiveRecord::Migration[5.0]
  def change
    add_column :bookings, :training_type, :string
  end
end
