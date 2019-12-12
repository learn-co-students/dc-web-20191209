class Tweet

    attr_reader :message, :user

    @@all = []

    def initialize(message, user)
        @message = message
        @user = user
        @@all << self
    end

    def self.all
        @@all 
    end

    # def message
    #     @message
    # end

    # def user 
    #     @user
    # end

    def username
        # returns the username of the User who wrote this tweet
        # tweet3.username
        self.user.username

    end



end