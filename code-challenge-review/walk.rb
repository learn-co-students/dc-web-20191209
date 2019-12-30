class Walk

    attr_reader :dog, :walker, :rating
    attr_accessor :date

    @@all = []

    def initialize(dog, walker, date, rating=nil)
        @dog, @walker, @date, @rating = dog, walker, date, rating
        @@all << self
    end

    def self.all
        @@all 
    end

    def self.highest_rated
        # returns walk with highest rating
        Walk.all.max_by do |walk|
            walk.rating
        end
    end

    def rating=(new_rating)
        @rating = new_rating.to_f
    end
end