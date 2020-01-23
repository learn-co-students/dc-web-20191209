class UsersController < ApplicationController
    def index 
        @users = User.all
    end

    def show
        @user = User.find(params[:id])
    end

    def edit
        @user = User.find(params[:id])
    end

    def update
        @user = User.find(params[:id])
        @user.update(user_params)
        if @user.errors.any?
            render :edit
        else
            redirect_to @user
        end
    end

    private
    
    def user_params
        params.require(:user).permit(:name, :username, tree_ids: [])
    end
end
