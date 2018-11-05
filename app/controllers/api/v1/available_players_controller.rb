class Api::V1::AvailablePlayersController < Api::ApplicationController
    # GET /admins/players.json
    def index
      render json: players
    end
  
    private
  
    def players
      @players ||= Player.available
    end
  end
  