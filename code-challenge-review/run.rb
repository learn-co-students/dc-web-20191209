require_relative "./dog.rb"
require_relative "./walk.rb"
require_relative "./walker.rb"
require "date"
require "pry"

fido = Dog.new("Fido", "123 Fake St", "Collie", false)
cujo = Dog.new("Cujo", "Castle Rock, Maine", "Rottweiller", true)

harry = Walker.new("Harry Potter", Date.new(1980, 7, 31))
hermione = Walker.new("Hermione Granger", Date.new(1980, 10, 21))
ron = Walker.new("Ron Weasley", Date.new(1980, 6, 3))

walk1 = Walk.new(fido, harry, Date.new(2019, 12, 29))
walk2 = Walk.new(fido, hermione, Date.new(2019, 12, 30))
walk3 = Walk.new(cujo, hermione, Date.new(2019, 12, 30))

puts "Dog knows its name?"
puts fido.name == "Fido"

puts "Walker knows its name?"
puts harry.name == "Harry Potter"

puts Walker.begins_with("R")

walk1.rating = 5
walk2.rating = 3
walk3.rating = 1
binding.pry