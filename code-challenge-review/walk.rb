class Walk

    attr_reader :dog, :walker
    attr_accessor :date, :rating

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

end