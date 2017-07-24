class Dog < ApplicationRecord
  validates :user_id, :name, :weight, :breed, presence: true
  validates :sex, presence: true, inclusion: %w(F M)

  belongs_to :user
end
