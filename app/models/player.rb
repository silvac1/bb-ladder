class Player < ApplicationRecord
  belongs_to :position, required: false
  belongs_to :team, required: false

  validates :name, presence: true
  validates :height, presence: true
end
