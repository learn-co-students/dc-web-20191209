class PokemonsController < ApplicationController

    def create
        trainer = Trainer.find(params[:trainer_id])
        pokemon = trainer.catch_pokemon
        render json: pokemon
    end

    def destroy
        Pokemon.destroy(params[:id])
    end

end
