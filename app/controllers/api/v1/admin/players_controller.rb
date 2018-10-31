class Api::V1::Admin::PlayersController < Api::V1::Admin::ApplicationController
  # POST /api/v1/admin/players.json
  def create
    if new_player(player_params).save
      render json: new_player
    else
      render json: {
        errors: new_player.errors.messages
      }
    end
  end

  # PUT /api/v1/admin/players/:id.json
  def update
    if player.update(player_params)
      render json: player
    else
      render json: {
        errors: player.errors.messages
      }
    end
  end

  # DELETE /api/v1/admin/players/:id.json
  def destroy
    player.destroy
    render json: Player.all
  end

  private

  def player_params
    params.require(:player).permit(:name, :height)
  end

  def new_player(attrs={})
    @player ||= Player.new(attrs)
  end

  def player
    @player ||= Player.find(params[:id])
  end
end
