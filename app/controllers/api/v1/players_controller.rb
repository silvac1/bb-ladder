class Api::V1::PlayersController < Api::ApplicationController
  # GET /admins/players.json
  def index
    render json: players
  end

  # GET /admins/player/:id.json
  def show
    render json: player
  end

  private

  def players
    @players ||= Player.all
  end

  def player
    @player ||= Player.find(params[:id])
  end
end
