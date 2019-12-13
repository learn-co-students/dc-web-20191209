class Like

    attr_reader :tweet, :user

    @@all = []

    def initialize(tweet, user)
        @tweet, @user = tweet, user
        @@all << self
    end

    def self.all 
        @@all 
    end

    def author
        # returns the username of the author of the tweet 
        # associated with this like
        self.tweet.username
    end
end


