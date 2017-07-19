class Trainer < ApplicationRecord
  validates :name, :profile_quote, :description, :price, :zip, :city, :state, presence: true
  validates :training_type, presence: true, inclusion: { in: %w[obedience behavior advanced] }

  # add associations
  # has_many :reviews

  # def rating
  #   reviewTotal = 0
  #
  #   reviews.each do |review|
  #     reviewTotal += review.rating
  #   end
  #   reviewTotal.to_f / reviews.count
  # end
end
