class AdminController < ApplicationController
  before_action :authenticate_admin!
  layout "/layouts/admin/application"

  def index
  end

end
