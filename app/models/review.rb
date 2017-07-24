class Review < ApplicationRecord
  validates :user_id, :trainer_id, :rating, :body, presence: true

  belongs_to :user
  belongs_to :trainer
end
