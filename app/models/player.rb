class Player < ApplicationRecord
  belongs_to :position, required: false
  belongs_to :team, required: false

  validates :name, presence: true
  validates :height, presence: true

  scope :available, -> { where(team_id: nil) }
end
