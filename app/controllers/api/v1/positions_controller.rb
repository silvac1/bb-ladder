class Api::V1::PositionsController < Api::ApplicationController
  # GET /admins/positions.json
  def index
    render json: positions
  end

  # GET /admins/positions/:id.json
  def show
    render json: position
  end

  private

  def positions
    @positions ||= Position.all
  end

  def position
    @position ||= Position.find(params[:id])
  end
end
