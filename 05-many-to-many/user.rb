class User

    attr_reader :username

    def initialize(username)
        @username = username
    end

    def tweets
        Tweet.all.select do |tweet|
            tweet.user == self
        end
    end

    def post_tweet(text)
        Tweet.new(text, self)
    end

    def like_tweet(tweet)
        Like.new(tweet, self)
    end

    def liked_tweets
        # return a collection of all the tweets this user has liked

        # go through all the Likes
        # choose the ones that match whoever called this method
        my_likes = Like.all.select do |like|
            like.user == self
        end
        # get the Tweet off each Like
        my_liked_tweets = my_likes.map do |like|
            like.tweet
        end
        return my_liked_tweets
    end

    def authors
        # returns all the authors of all the tweets that this user has liked
        # without duplicates

    end
end

# buffy.like_tweet(tweet2)

# tweet = The tweet passed in the argument
# self = the user