class ChangeRatingType < ActiveRecord::Migration[5.0]
  def change
    change_column :reviews, :rating, :integer
  end
end
