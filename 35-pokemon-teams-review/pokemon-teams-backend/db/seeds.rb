require 'faker'
require 'securerandom'
 
Pokemon.delete_all
Trainer.delete_all
 
trainers_name = [
  'Skyler',
  'Marija',
  'Amia',
  'Jenny',
  'John-Louis',
  'Anna',
  'Dean',
  'Sean',
  'Mansour'
]
 
trainer_collection = []
 
trainers_name.each do |name|
  trainer_collection << Trainer.create(name: name)
end
 
trainer_collection.each do |trainer|
  team_size = (SecureRandom.random_number(6) + 1).floor
 
  (1..team_size).each do |poke|
    trainer.catch_pokemon
  end
end