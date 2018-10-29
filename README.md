# BB Ladder

BB Ladder is a ladder tournament tracker app for basketball.

Players have basic profiles

Teams consist of players and have specific positions to be filled

Games are between two teams and are part of a Tournament, we will track the winning team

Tournaments are the result of games played in a ladder format

## Resources

* Player
  name, height
* Position
  name
* PlayerPosition (join)
  player_id, position_id
* Team
  name, location
* TeamPlayer (join)
  team_id, player_id
* Game
  home_team_id, away_team_id, tournament_id, occurs_at, winner_id
* GamePlayerPosition (join)
  game_id, player_id, position_id

## Authentication

Using devise to handle auth. Only I as the tournament master will log in to enter data, anyone can view the data.
