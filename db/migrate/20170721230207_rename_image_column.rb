class RenameImageColumn < ActiveRecord::Migration[5.0]
  def change
    rename_column :images, :url, :img_url
    rename_column :images, :type, :img_type
  end
end
