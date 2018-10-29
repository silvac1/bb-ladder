class Api::V1::Admin::PositionsController < Api::V1::Admin::ApplicationController
  # POST /api/v1/admin/positions.json
  def create
    if new_position(position_params).save
      render json: new_position
    else
      render json: {
        errors: new_position.errors.messages
      }
    end
  end

  private

  def position_params
    params.require(:position).permit(:name)
  end

  def new_position(attrs={})
    @position ||= Position.new(attrs)
  end
end
