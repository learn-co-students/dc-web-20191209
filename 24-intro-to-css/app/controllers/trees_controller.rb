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
        if @tree.errors.any?
            render :new
        else
            redirect_to @tree
        end
    end

    private

    def tree_params
        params.require(:tree).permit(:common_name, :binomial_name, :category, :user_ids)
    end
end
