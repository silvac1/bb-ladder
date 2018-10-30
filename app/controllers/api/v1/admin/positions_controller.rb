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

  # PUT /api/v1/admin/positions/:id.json
  def update
    if position.update(position_params)
      render json: position
    else
      render json: {
        errors: position.errors.messages
      }
    end
  end

  # DELETE /api/v1/admin/positions/:id.json
  def destroy
    position.destroy
    render json: Position.all
  end

  private

  def position_params
    params.require(:position).permit(:name)
  end

  def new_position(attrs={})
    @position ||= Position.new(attrs)
  end

  def position
    @position ||= Position.find(params[:id])
  end
end
