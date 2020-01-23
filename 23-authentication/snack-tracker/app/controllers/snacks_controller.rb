class SnacksController < ApplicationController

  before_action :find_snack, only: [:show, :edit, :update, :destroy]
  before_action :authorized
  
  def index
    puts "I am an index page"
    @snacks = Snack.all
  end

  def show
    cookies["my_favorite"] = "chocolate chip"
    session["my_secret_favorite"] = "oatmeal raisin"
    cookies["last_visited"] = @snack.name
  end

  def new
    @snack = Snack.new

  end 

  def create
    @snack = Snack.new(snack_params)
    if @snack.valid?
      @snack.save
      redirect_to snack_path(@snack.id)
    else
      # go back to new, displaying error messages
      render :new
    end
  end

  def edit

  end

  def update
    @snack.update(snack_params)
    if @snack.valid?  
      redirect_to @snack 
    else 
      render :edit 
    end

  end 

  def destroy
    @snack.destroy
    redirect_to snacks_path
  end

  private

  def snack_params
    params.require(:snack).permit(:name, :calories, :deliciousness, :retailer_id)
  end

  def find_snack
    @snack = Snack.find(params[:id])

  end

end
