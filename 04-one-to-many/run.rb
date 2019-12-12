require_relative "tweet.rb"
require_relative "user.rb"
puts "hi"
coffee_dad = User.new("Coffee Dad")

puts coffee_dad.is_instance? User 
puts coffee_dad.username == "Coffee Dad"