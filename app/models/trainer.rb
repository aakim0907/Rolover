class Trainer < ApplicationRecord
  validates :name, :profile_quote, :description, :price, :zip, :city, :state, presence: true
  validates :obedience, :behavior, :advanced, inclusion: [true, false]

  has_many :images
  has_many :bookings
  has_many :reviews

  def self.search(search_params)
    searched = []
    search_params.each do |key, val|
      searched.concat(self.where(key, "= true")) if val == "true"
    end
    searched.uniq
  end

  def rating
    reviewTotal = 0
    reviews.each { |review| reviewTotal += review.rating }
    reviewTotal.to_f / reviews.count
  end
end
