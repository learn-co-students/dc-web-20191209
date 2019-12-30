class Dog

    attr_accessor :address, :aggressive
    attr_reader :name, :breed 

    @@all = []

    def initialize(name, address, breed, aggressive)
        @name, @address, @breed, @aggressive = name, address, breed, aggressive
        @@all << self
    end

    def self.all
        @@all 
    end

    def walks 
        Walk.all.select do |walk|
            walk.dog == self
        end
    end

    def walkers
        # returns array of all walkers 
        # who have walked this dog
        walks.collect do |walk|
            walk.walker
        end
    end

    def self.peaceful
        # return all the dogs who are not aggro
        self.all.select do |dog|
            # dog.aggressive == false
            !dog.aggressive
        end
    end

    def average_rating
        # finds the average of the ratings of 
        # all walks for this pupper
        ratings = walks.collect do |walk|
            walk.rating
        end
        # sum = ratings.sum
        # sum / ratings.length.to_f
        ratings.sum / walks.length
    end
end