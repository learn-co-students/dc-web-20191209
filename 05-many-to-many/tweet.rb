class Tweet

    attr_reader :message, :user

    @@all = []

    def initialize(message, user)
        @message, @user = message, user
        @@all << self
    end

    def username
        self.user.username
    end

    def self.all
        @@all
    end

end