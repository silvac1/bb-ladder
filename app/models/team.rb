class Team < ApplicationRecord
  has_many :players

  validates :name, presence: true
  validates :location, presence: true

  def player_ids=(ids)
    ids.each do |id|
      self.players << Player.find(id)
    end
  end
end
