# BB Ladder

BB Ladder is basketball management system. It allows players to sign up, captains to create and manage teams and request games.

There are two types of users:

1. Admin - they can do any action on the site
2. Player - they can create and manage a team, and their own player profile


## Player Actions

Players can:

1. Sign up
2. Manage their profiles
3. Accept team invites from a captain
4. Send team requests to a captain
5. Create and manage a team as the captain

Captains can:

1. Manage their team data
2. Manage players and positions via invites/requests
3. Submit game requests to the Admin


Admins can:

1. Manage app data (like positions)
2. Accept and schedule Game requests

## Features

1. Players have basic profiles
2. Teams consist of players and have specific positions to be filled
3. Games are between two teams, and can be part of a Tournament
4. Games are scheduled by the Admin based on game requests from the captains

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
