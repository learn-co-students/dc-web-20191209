class Walk

    attr_reader :dog, :walker
    attr_accessor :date, :rating

    def initialize(dog, walker, date, rating=nil)
        @dog, @walker, @date, @rating = dog, walker, date, rating
    end

end