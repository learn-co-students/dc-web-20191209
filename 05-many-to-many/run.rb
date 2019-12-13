require_relative "./tweet.rb"
require_relative "./user.rb"
require_relative "./like.rb"
require 'pry'

buffy = User.new("Buffy Summers")
anya = User.new("Anya Jenkins")
anya_clone = User.new("Anya Jenkins")

tweet1 = Tweet.new("Here to help.  Wanna live.", anya)
tweet2 = Tweet.new("Is it difficult or time-consuming?", anya)
tweet3 = Tweet.new("Can I trade in the children for more cash?", anya)
tweet4 = Tweet.new("I have cloned Anya and am living in her place", anya_clone)

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
puts !anya.tweets.include?(tweet4)

puts "Tweets knows its username"
puts tweet1.username == "Anya Jenkins"

tweet5 = buffy.post_tweet("If the apocalypse comes, beep me.")


like1 = Like.new(tweet5, anya)
like2 = Like.new(tweet3, buffy)
like3 = Like.new(tweet2, buffy)
like4 = buffy.like_tweet(tweet1)


binding.pry
