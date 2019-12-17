require_relative "./bakery.rb"
require_relative "./dessert.rb"
require_relative "./ingredient.rb"
require "pry"

jc = Bakery.new("J.C.'s Snickerdoodles")
shannon = Bakery.new("Shannon's Cakes 'n' Stuff")

puts jc.name == "J.C.'s Snickerdoodles"

snickerdoodles = Dessert.new("Snickerdoodles", jc)
choc_cake = Dessert.new("Chocolate Cake", shannon)
cookies = Dessert.new("Vanilla Cookies", shannon)

puts snickerdoodles.name == "Snickerdoodles"
puts snickerdoodles.bakery == jc

puts Dessert.all_dessert_names.include?("Snickerdoodles")

chocolate = Ingredient.new("Chocolate", 300, choc_cake)
flour = Ingredient.new("Flour", 150, choc_cake)
snickers = Ingredient.new("Snickers", 10, snickerdoodles)
doodles = Ingredient.new("Doodles", 500, snickerdoodles)
flour2 = Ingredient.new("Flour", 100, snickerdoodles)
sprinkles = Ingredient.new("Chocolate sprinkles", 50, cookies)

puts chocolate.name == "Chocolate"
puts flour.calories == 150
puts snickers.dessert == snickerdoodles

puts doodles.bakery == jc

puts "Ingredients match by name"
puts Ingredient.find_all_by_name("Chocolate").include?(chocolate)
puts Ingredient.find_all_by_name("Chocolate").include?(sprinkles)
puts !Ingredient.find_all_by_name("Chocolate").include?(flour)

puts "Bakery knows its desserts?"
puts shannon.desserts.include?(choc_cake)
puts !shannon.desserts.include?(snickerdoodles)

puts "Dessert knows its ingredients?"
puts snickerdoodles.ingredients.include?(doodles)
puts !snickerdoodles.ingredients.include?(chocolate)

puts "Dessert knows its calories"
puts choc_cake.calories == 450
# binding.pry