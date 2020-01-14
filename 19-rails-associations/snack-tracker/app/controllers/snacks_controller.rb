class SnacksController < ApplicationController
  
  before_action :find_snack, only: [:edit, :update, :show]

  def index
    @snacks = Snack.all
  end

  def show
  end

  def new
    # get request to load empty form
    @snack = Snack.new
  end

  def create
    # post request to make the snack from the form
    # byebug
    @snack = Snack.create(snack_strong_params)
    redirect_to @snack
  end

  def edit
    # load edit form
  end

  def update
    # update snack based on form
    @snack.update(snack_strong_params)
    redirect_to @snack
  end

  def destroy
    Snack.destroy(params[:id])
    redirect_to snacks_path
  end

  private

  def snack_strong_params
    params.require(:snack).permit(
        :name, :deliciousness, :calories, :retailer_id)
  end

  def find_snack
    @snack = Snack.find(params[:id])
  end
end
