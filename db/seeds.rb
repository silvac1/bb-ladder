Position.create! name: "Center"
Position.create! name: "Point Guard"
Position.create! name: "Forward"

if Rails.env.development?
  Team.create! name: "Team 1", location: "Mattapan"
  Team.create! name: "Team 2", location: "Chelsea"
  Team.create! name: "Team 3", location: "Somerville"
  Team.create! name: "Team 4", location: "Charlestown"

  Player.create!(name: "Player 1", height: "6' 6", position: Position.find_by(name: "Center"), team: Team.all[0])
  Player.create!(name: "Player 2", height: "6' 6",  position: Position.find_by(name: "Point Guard"), team: Team.all[0])
  Player.create!(name: "Player 3", height: "6' 6",  position: Position.find_by(name: "Point Guard"), team: Team.all[0])
  Player.create!(name: "Player 4", height: "6' 6",  position: Position.find_by(name: "Forward"), team: Team.all[0])
  Player.create!(name: "Player 5", height: "6' 6",  position: Position.find_by(name: "Forward"), team: Team.all[0])

  Player.create!(name: "Player 6", height: "6' 6",  position: Position.find_by(name: "Center"), team: Team.all[1])
  Player.create!(name: "Player 7", height: "6' 6",  position: Position.find_by(name: "Point Guard"), team: Team.all[1])
  Player.create!(name: "Player 8", height: "6' 6",  position: Position.find_by(name: "Point Guard"), team: Team.all[1])
  Player.create!(name: "Player 9", height: "6' 6",  position: Position.find_by(name: "Forward"), team: Team.all[1])
  Player.create!(name: "Player 10", height: "6' 6",  position: Position.find_by(name: "Forward"), team: Team.all[1])

  Player.create!(name: "Player 11", height: "6' 6",  position: Position.find_by(name: "Center"), team: Team.all[2])
  Player.create!(name: "Player 12", height: "6' 6",  position: Position.find_by(name: "Point Guard"), team: Team.all[2])
  Player.create!(name: "Player 13", height: "6' 6",  position: Position.find_by(name: "Point Guard"), team: Team.all[2])
  Player.create!(name: "Player 14", height: "6' 6",  position: Position.find_by(name: "Forward"), team: Team.all[2])
  Player.create!(name: "Player 15", height: "6' 6",  position: Position.find_by(name: "Forward"), team: Team.all[2])

  Player.create!(name: "Player 16", height: "6' 6",  position: Position.find_by(name: "Center"), team: Team.all[3])
  Player.create!(name: "Player 17", height: "6' 6",  position: Position.find_by(name: "Point Guard"), team: Team.all[3])
  Player.create!(name: "Player 18", height: "6' 6",  position: Position.find_by(name: "Point Guard"), team: Team.all[3])
  Player.create!(name: "Player 19", height: "6' 6",  position: Position.find_by(name: "Forward"), team: Team.all[3])
  Player.create!(name: "Player 20", height: "6' 6",  position: Position.find_by(name: "Forward"), team: Team.all[3])

  Game.create! home_team: Team.all[0], away_team: Team.all[1], occurs_at: 1.day.from_now
  Game.create! home_team: Team.all[2], away_team: Team.all[3], occurs_at: 2.days.from_now

  Admin.create! email: "admin-1@example.com", password: "admin-1@example.com"

end
