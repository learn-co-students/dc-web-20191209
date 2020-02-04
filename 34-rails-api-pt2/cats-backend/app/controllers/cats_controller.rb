class CatsController < ApplicationController
  def index
    all_cats = Cat.all
    render json: all_cats.to_json(
      :include => {:hobbies => 
        {:except => [:created_at, :updated_at]}})
  end

  def create
    cat = Cat.create(cat_params)
    render json: cat

  end

  private

  def cat_params
    params.require(:cat).permit(:name, :image)
  end
end
