require_relative "./tweet.rb"
require_relative "./user.rb"

buffy = User.new("Buffy Summers")
anya = User.new("Anya Jenkins")

tweet1 = Tweet.new("Here to help.  Wanna live.", anya)
tweet2 = Tweet.new("Is it difficult or time-consuming?", anya)
tweet3 = Tweet.new("Can I trade in the children for more cash?", anya)

puts "User knows their username?"
puts buffy.username == "Buffy Summers"

puts "Tweet knows its message?"
puts tweet1.message == "Here to help.  Wanna live."

puts "Tweet knows its user?"
puts tweet1.user == anya

puts "Tweet.all returns all the tweets"
puts Tweet.all.include?(tweet1) && Tweet.all.include?(tweet2)

puts "User knows their tweets?"
puts anya.tweets.include?(tweet1)