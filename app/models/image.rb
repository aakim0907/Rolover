class Image < ApplicationRecord
  validates :trainer_id, :img_url, :img_type, presence: true

  belongs_to :trainer
end
