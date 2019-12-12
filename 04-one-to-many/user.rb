class User

    attr_reader :username

    def initialize(username)
        @username = username
    end

    def tweets
        # returns all the tweets of this user
        Tweet.all.find_all do |tweet|
            tweet.user == self
        end
    end

    def post_tweet(message)
        # anya.post_tweet("I don't think a bar would serve her but we could bring something in.  Do you like schnapps, little girl?")
        Tweet.new(message, self)

    end
end

