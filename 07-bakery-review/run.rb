require_relative "./bakery.rb"
require_relative "./dessert.rb"
require_relative "./ingredient.rb"
require "pry"

jc = Bakery.new("J.C.'s Snickerdoodles")
shannon = Bakery.new("Shannon's Cakes 'n' Stuff")

puts jc.name == "J.C.'s Snickerdoodles"

snickerdoodles = Dessert.new("Snickerdoodles", jc)
choc_cake = Dessert.new("Chocolate Cake", shannon)
cookies = Dessert.new("Chocolate Cookies", shannon)

puts snickerdoodles.name == "Snickerdoodles"
puts snickerdoodles.bakery == jc

binding.pry