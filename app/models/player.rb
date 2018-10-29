class Player < ApplicationRecord
  belongs_to :position
  belongs_to :team

  validates :name, presence: true
  validates :height, presence: true
end
