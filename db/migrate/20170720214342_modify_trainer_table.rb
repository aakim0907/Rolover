class ModifyTrainerTable < ActiveRecord::Migration[5.0]
  def change
    remove_column :trainers, :training_type, :string
    add_column :trainers, :obedience, :boolean, null: false
    add_column :trainers, :behavior, :boolean, null: false
    add_column :trainers, :advanced, :boolean, null: false

    add_index :trainers, :obedience
    add_index :trainers, :behavior
    add_index :trainers, :advanced
  end
end
