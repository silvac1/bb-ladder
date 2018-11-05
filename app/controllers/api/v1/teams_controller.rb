class Api::V1::TeamsController < Api::ApplicationController
  # GET /admins/teams.json
  def index
    render json: teams
  end

  # GET /admins/teams/:id.json
  def show
    render json: team.as_json(include: :players)
  end

  private

  def teams
    @teams ||= Team.all
  end

  def team
    @team ||= Team.find(params[:id])
  end
end
