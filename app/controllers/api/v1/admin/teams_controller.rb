class Api::V1::Admin::TeamsController < Api::V1::Admin::ApplicationController
  # POST /api/v1/admin/teams.json
  def create
    if new_team(team_params).save
      render json: new_team
    else
      render json: {
        errors: new_team.errors.messages
      }
    end
  end

  # PUT /api/v1/admin/teams/:id.json
  def update
    if team.update(team_params)
      render json: team
    else
      render json: {
        errors: team.errors.messages
      }
    end
  end

  # DELETE /api/v1/admin/teams/:id.json
  def destroy
    team.destroy
    render json: Team.all
  end

  private

  def team_params
    params.require(:team).permit(:name, :location, player_ids: [])
  end

  def new_team(attrs={})
    @team ||= Team.new(attrs)
  end

  def team
    @team ||= Team.find(params[:id])
  end
end
