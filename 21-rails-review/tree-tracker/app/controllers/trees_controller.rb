class TreesController < ApplicationController
    def index 
        @all_trees = Tree.all
    end

    def show
        @tree = Tree.find(params[:id])
    end

    def new
        @tree = Tree.new
    end

    def create
        @tree = Tree.create(tree_params)
        if @tree.save
            redirect_to tree_path(@tree)
        else
            render :new
        end
    end

    private

    def tree_params
        params.require(:tree).permit(:common_name, :binomial_name, :category, :user_ids)
    end
end
