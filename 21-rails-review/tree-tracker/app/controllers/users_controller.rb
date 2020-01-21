class UsersController < ApplicationController
    before_action :set_user, only: [:show, :edit, :update]

    def index 
        @users = User.all
    end

    def show
    end

    def edit
    end

    def update
        @user.update(user_params)
        if @user.save
            redirect_to user_path(@user)
        else
            render :edit
        end
    end

    private

    def set_user
        @user = User.find(params[:id])
    end

    def user_params
        params.require(:user).permit(:name, :username, tree_ids: [])
    end
end
