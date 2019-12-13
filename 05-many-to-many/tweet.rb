class Tweet

    attr_reader :message, :user

    @@all = []

    def initialize(message, user)
        @message, @user = message, user
        # @message = message
        # @user = user
        @@all << self
    end

    # attr_reader :message
    # def message
    #     @message
    # end

    # attr_writer :message
    # def message=(new_message)
    #     @message = new_message
    # end

    # tweet1.message=("something new")
    def username
        self.user.username
    end

    def yell_my_username
        self.username.upcase
    end

    def self.all
        @@all
    end

end