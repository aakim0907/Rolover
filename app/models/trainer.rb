class Trainer < ApplicationRecord
  validates :name, :profile_quote, :obedience, :behavior, :advanced, :description, :price, :zip, :city, :state, presence: true

  has_many :images
  has_many :bookings
  has_many :reviews

  def self.search(search_params)
    searched = []
    search_params.each do |key, val|
      searched.concat(self.where(key, "= true")) if val == "true"
    end
    searched.uniq
    # self.where("obedience =", "%#{search_params}%")
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
