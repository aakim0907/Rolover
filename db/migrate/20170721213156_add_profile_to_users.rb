class AddProfileToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :profile_img_url, :string, default: "http://res.cloudinary.com/rolover/image/upload/v1500672475/gray_logo_rnqfnk.png"
  end
end
