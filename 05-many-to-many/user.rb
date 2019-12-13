class User

    attr_reader :username

    def initialize(username)
        @username = username
        my_tweets = []
    end

    def tweets
        Tweet.all.select do |tweet|
            tweet.user == self
        end
    end

    def post_tweet(text)
        Tweet.new(text, self)
    end

end

