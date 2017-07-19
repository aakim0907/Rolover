class RemoveImageFromTrainer < ActiveRecord::Migration[5.0]
  def change
    remove_column :trainers, :profile_image_url
    remove_column :trainers, :main_image_url
  end
end
