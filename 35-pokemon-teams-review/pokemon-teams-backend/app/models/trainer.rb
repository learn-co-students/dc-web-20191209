require 'faker'
class Trainer < ApplicationRecord
    has_many :pokemons

    def catch_pokemon
        if self.pokemons.length > 5
            return {error: "#{self.name} already has enough Pokemon!"}
        end

        name = Faker::Name.first_name
        species = Faker::Games::Pokemon.name
        Pokemon.create(nickname: name, species: species, trainer_id: self.id)
    end
end
