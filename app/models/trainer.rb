class Trainer < ApplicationRecord
  validates :name, :profile_quote, :obedience, :behavior, :advanced, :description, :price, :zip, :city, :state, presence: true

  has_many :images
  # has_many :reviews

  def self.search(search_params)
    self.where("training_type LIKE", "%#{search_params}%")
  end

  def profile_image
    images.select{ |img| img.img_type == "profile" }.first.img_url
  end

  def main_images
    mains = images.reject { |img| img.img_type == "profile" }
    mains.map { |main| main.img_url }
  end

  # def rating
  #   reviewTotal = 0
  #
  #   reviews.each do |review|
  #     reviewTotal += review.rating
  #   end
  #   reviewTotal.to_f / reviews.count
  # end
end
