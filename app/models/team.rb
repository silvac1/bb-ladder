class Team < ApplicationRecord
  has_many :players

  validates :name, presence: true
  validates :location, presence: true
end
