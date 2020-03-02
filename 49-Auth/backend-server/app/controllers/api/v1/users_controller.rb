class Api::V1::UsersController < ApplicationController
  def index
    render json: User.all
  end

  def profile
    token = request.headers["Authentication"]
    user = User.find(decode(token)["id"])
    render json: user
  end
end
