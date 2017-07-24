class Dog < ApplicationRecord
  validates :user_id, :name, :weight, :breed, :sex, presence: true

  belongs_to :user
end
