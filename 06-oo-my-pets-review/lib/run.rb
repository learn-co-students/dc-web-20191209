require_relative './owner.rb'
require_relative './cat.rb'
require_relative './dog.rb'
require 'pry'

#owner tests
john = Owner.new("John")
puts john.name == "John"
puts Owner.all.length == 1

#cat tests
cat1 = Cat.new("Garfield", john)
cat2 = Cat.new("Cat in the Hat", john)
puts "testing name method"
puts cat1.name == "Garfield"
puts "testing owner method"
puts cat1.owner == john
puts "testing mood is initialized as nervous"
puts cat1.mood == "nervous"
puts "Cat.all keeps track of all cats"
puts Cat.all.length == 2

#associations tests
paul = Owner.new("Paul")
cat3 = Cat.new("Ella", paul)
cat4 = Cat.new("Lexi", paul)
dog1 = Dog.new("Fido", john)
dog2 = Dog.new("Rex", paul)

puts "owner#cats returns just the cats for that owner"
puts john.cats.length == 2
puts "owner#dogs returns just the dogs for that owner"
puts john.dogs.length == 1
puts "owner#buy_cat creates a new cat and associates it with the owner"
john.buy_cat("JC")
puts john.cats.length === 3
puts "owner#buy_dog creates a new dog and associates it with the owner"
john.buy_dog("Shannon")
puts john.dogs.length === 2
puts "owner#walk_dogs changes the owner's dogs' moods to happy"
john.walk_dogs
puts dog1.mood == "happy" && dog2.mood == "nervous"
puts "owner#feed_cats changes the owner's cats' moods to happy"
john.feed_cats
puts cat1.mood == "happy" && cat3.mood == "nervous"
puts "owner#sell_pets changes pets' mood to nervous and owner to nil"
john.sell_pets
puts cat1.mood == "nervous" && cat1.owner == nil && dog1.mood == "nervous"
puts "owner#list_pets returns a description of how many pets they have"
puts john.list_pets
puts paul.list_pets

# binding.pry


Cat.all.delete(cat1)
Cat.all.delete(cat2)
