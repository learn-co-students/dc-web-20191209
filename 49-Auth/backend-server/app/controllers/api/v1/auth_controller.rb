class Api::V1::AuthController < ApplicationController

  def fake_create # POST /api/v1/login
    user = User.find_by(username: params["username"])
    render json: user
  end

  def create # POST /api/v1/login
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      render json: {
        message: "YOU LOGGED IN!!!!",
        successful: true,
        data: user,
        token: encode({"id": user.id})
      }
    else
      render json: {
        message: "INCCORECT USERNAME OR PASSWORD, ARE YOU A HACKER????",
        successful: false
      }
    end
  end

end
