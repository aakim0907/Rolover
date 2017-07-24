class Booking < ApplicationRecord
  validates :user_id, :dog_id, :trainer_id, :start_date, :end_date, :message, presence: true
  validates :status, presence: true, inclusion: %w(PENDING APPROVED DENIED)

  belongs_to :user
  belongs_to :trainer
end
